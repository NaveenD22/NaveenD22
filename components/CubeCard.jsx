'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

/**
 * Interactive 4-face 3D cube card.
 * - face 0 (front, 0°)   : icon + title + index
 * - face 1 (right, 90°)  : description
 * - face 2 (back, 180°)  : bullet list
 * - face 3 (left, 270°)  : CTA
 *
 * Behaviour:
 * - slow auto-rotation through faces (paused on hover / out of view)
 * - pointer tilt on hover (subtle X / Y rotation amplitude)
 * - click → snap to next face
 * - keyboard ← / → cycles faces when focused
 * - respects prefers-reduced-motion (static front face only)
 */
const SIZE = 280; // px — face dimension; cube depth = SIZE / 2

const CubeCard = ({ icon, title, description, bullets = [], index = 0 }) => {
  const cubeRef = useRef(null);
  const wrapRef = useRef(null);
  const [face, setFace] = useState(0);
  const tiltRef = useRef({ x: 0, y: 0 });
  const autoRef = useRef(null);

  // Pointer tilt + hover speed-up
  useEffect(() => {
    const cube = cubeRef.current;
    const wrap = wrapRef.current;
    if (!cube || !wrap) return;

    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const xTo = gsap.quickTo(cube, 'rotationX', { duration: 0.6, ease: 'power3' });

    // Auto-rotate through faces every 5s
    const startAuto = () => {
      stopAuto();
      autoRef.current = setInterval(() => {
        setFace((f) => (f + 1) % 4);
      }, 5000);
    };
    const stopAuto = () => {
      if (autoRef.current) clearInterval(autoRef.current);
      autoRef.current = null;
    };

    // Only auto-rotate when card is visible
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startAuto() : stopAuto()),
      { threshold: 0.4 }
    );
    io.observe(wrap);

    if (!fine) return () => { io.disconnect(); stopAuto(); };

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tiltRef.current = { x: -y * 12, y: x * 18 };
      xTo(tiltRef.current.x);
    };
    const onEnter = () => stopAuto();
    const onLeave = () => {
      tiltRef.current = { x: 0, y: 0 };
      xTo(0);
      startAuto();
    };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);

    return () => {
      io.disconnect();
      stopAuto();
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Rotate cube to current face — additive over pointer tilt on X
  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    gsap.to(cube, {
      rotationY: -face * 90,
      duration: 0.9,
      ease: 'power3.inOut',
    });
  }, [face]);

  const advance = () => setFace((f) => (f + 1) % 4);
  const onKey = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); setFace((f) => (f + 1) % 4); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); setFace((f) => (f + 3) % 4); }
  };

  const half = SIZE / 2;

  const faceCls =
    'absolute inset-0 backface-hidden rounded-2xl border border-white/[0.08] bg-[#0a0c10] ' +
    'p-6 flex flex-col overflow-hidden';

  return (
    <div
      ref={wrapRef}
      className="perspective-1200 select-none"
      style={{ width: SIZE, height: SIZE, margin: '0 auto' }}
    >
      <button
        type="button"
        onClick={advance}
        onKeyDown={onKey}
        aria-label={`${title} — interactive cube, ${face + 1} of 4 faces`}
        className="block w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050608] rounded-2xl"
      >
        <div
          ref={cubeRef}
          className="relative w-full h-full preserve-3d will-change-transform"
          style={{ transformOrigin: `50% 50% -${half}px` }}
        >
          {/* FRONT — icon + title + index */}
          <div className={faceCls} style={{ transform: `translateZ(${half}px)` }}>
            <div className="flex items-start justify-between">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center text-lg
                              bg-white/[0.03] border border-white/[0.08] text-cyan-400">
                {icon}
              </div>
              <span className="text-[10px] text-white/30 font-mono">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg font-semibold tracking-tight text-white leading-tight">{title}</h3>
              <p className="text-[10px] text-white/35 mt-3 uppercase tracking-[0.25em]">Tap / hover to explore →</p>
            </div>
          </div>

          {/* RIGHT — description */}
          <div
            className={faceCls}
            style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}
          >
            <span className="text-[10px] text-cyan-400/70 font-mono uppercase tracking-[0.25em]">Overview</span>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">{description}</p>
            <span className="mt-auto text-[10px] text-white/30 uppercase tracking-[0.25em]">02 / 04</span>
          </div>

          {/* BACK — bullets */}
          <div
            className={faceCls}
            style={{ transform: `rotateY(180deg) translateZ(${half}px)` }}
          >
            <span className="text-[10px] text-cyan-400/70 font-mono uppercase tracking-[0.25em]">What you get</span>
            <ul className="mt-4 space-y-2">
              {bullets.slice(0, 4).map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/75 leading-snug">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <span className="mt-auto text-[10px] text-white/30 uppercase tracking-[0.25em]">03 / 04</span>
          </div>

          {/* LEFT — CTA */}
          <div
            className={faceCls}
            style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }}
          >
            <span className="text-[10px] text-cyan-400/70 font-mono uppercase tracking-[0.25em]">Let&apos;s build</span>
            <h4 className="mt-4 text-base font-semibold text-white leading-snug">
              Need this for your team?
            </h4>
            <p className="mt-2 text-xs text-white/55 leading-relaxed">
              Free 30-min discovery call. Clear plan and quote in 48 hours.
            </p>
            <a
              href="#Hire"
              onClick={(e) => e.stopPropagation()}
              className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-white text-slate-950 hover:bg-cyan-400 transition-colors w-fit"
            >
              Start a project →
            </a>
            <span className="mt-auto text-[10px] text-white/30 uppercase tracking-[0.25em]">04 / 04</span>
          </div>
        </div>
      </button>

      {/* Face indicator dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === face ? 'w-6 bg-cyan-400' : 'w-1 bg-white/15'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CubeCard;
