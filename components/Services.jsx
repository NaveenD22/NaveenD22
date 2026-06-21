'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ServicesContent } from './constants/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Services — a single hero 3D cube driven by a numbered service list.
 *
 * - The cube has 6 faces. Each face = one service (icon + title).
 * - Clicking a list item rotates the cube to that face (GSAP).
 * - Auto-advance every 5s. Hover the cube to pause. A cyan ring around
 *   the cube fills as the auto-timer ticks; click to take over.
 * - The right-hand detail card cross-fades between services in sync.
 * - Mobile (<lg): cube hidden, services become a clean stacked accordion list.
 *   No 3D, no overflow, perfectly readable on small screens.
 */

const FACE_TRANSFORMS = [
  { axis: 'Y', deg: 0 },      // 0 front
  { axis: 'Y', deg: 90 },     // 1 right
  { axis: 'Y', deg: 180 },    // 2 back
  { axis: 'Y', deg: -90 },    // 3 left
  { axis: 'X', deg: 90 },     // 4 bottom (rotated so it appears upright)
  { axis: 'X', deg: -90 },    // 5 top
];

// CSS transform string placing each face on its side of the cube
const facePlacement = (i, half) => {
  const f = FACE_TRANSFORMS[i];
  return `rotate${f.axis}(${f.deg}deg) translateZ(${half}px)`;
};

// Rotation needed to BRING a given face to the viewer (inverse of placement)
const cubeRotationFor = (i) => {
  const f = FACE_TRANSFORMS[i];
  if (f.axis === 'Y') return { rx: 0, ry: -f.deg };
  // X-axis face: invert pitch
  return { rx: -f.deg, ry: 0 };
};

const CUBE_PX = 340;        // cube edge length
const AUTO_MS = 3200;

const Services = () => {
  const sectionRef = useRef(null);
  const cubeRef = useRef(null);
  const detailRef = useRef(null);
  const ringRef = useRef(null);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const indicatorRef = useRef(null);
  const autoRef = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const services = ServicesContent.slice(0, 6); // cube has 6 faces
  const half = CUBE_PX / 2;

  // ── Section reveal ──────────────────────────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      gsap.fromTo(
        '.svc-eyebrow, .svc-title, .svc-sub',
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.svc-stage',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );

      gsap.fromTo(
        '.svc-list-item',
        { x: -12, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, ease: 'expo.out', stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Cube rotation when active face changes ─────────────────────────────
  useEffect(() => {
    if (!cubeRef.current) return;
    const { rx, ry } = cubeRotationFor(active);
    gsap.to(cubeRef.current, {
      rotationX: rx,
      rotationY: ry,
      duration: 1.1,
      ease: 'expo.inOut',
      overwrite: 'auto',
    });
  }, [active]);

  // ── Detail crossfade ────────────────────────────────────────────────────
  useEffect(() => {
    if (!detailRef.current) return;
    gsap.fromTo(
      detailRef.current.querySelectorAll('.detail-fade'),
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: 'expo.out', stagger: 0.05 }
    );
  }, [active]);

  // ── Active list indicator slides between items ──────────────────────────
  useEffect(() => {
    const list = listRef.current;
    const item = itemRefs.current[active];
    const ind = indicatorRef.current;
    if (!list || !item || !ind) return;
    const lr = list.getBoundingClientRect();
    const ir = item.getBoundingClientRect();
    gsap.to(ind, {
      y: ir.top - lr.top,
      height: ir.height,
      duration: 0.6,
      ease: 'expo.out',
      opacity: 1,
    });
  }, [active]);

  // ── Auto-advance with progress ring ─────────────────────────────────────
  useEffect(() => {
    const ring = ringRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const clear = () => {
      if (autoRef.current) {
        autoRef.current.kill();
        autoRef.current = null;
      }
    };

    if (paused) {
      clear();
      if (ring) gsap.to(ring, { strokeDashoffset: 282, duration: 0.4, ease: 'power2.out' });
      return;
    }

    // Reset ring then animate to 0 offset over AUTO_MS
    if (ring) gsap.set(ring, { strokeDasharray: 282, strokeDashoffset: 282 });

    autoRef.current = gsap.timeline({
      onComplete: () => setActive((i) => (i + 1) % services.length),
    });
    if (ring) {
      autoRef.current.to(ring, { strokeDashoffset: 0, duration: AUTO_MS / 1000, ease: 'none' }, 0);
    } else {
      autoRef.current.to({}, { duration: AUTO_MS / 1000 });
    }

    return clear;
  }, [active, paused, services.length]);

  return (
    <section
      id="Services"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#050608] text-white border-t border-white/[0.05]
                 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-50" />
      {/* Soft cyan spotlight, follows active by shifting position via key */}
      <div
        key={active}
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                   h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.06] blur-[120px] transition-all duration-700"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="svc-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
            02 — Services
          </p>
          <h2 className="svc-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-4">
            Built for outcomes. <span className="text-white/40">Not deliverables.</span>
          </h2>
          <p className="svc-sub text-sm sm:text-base text-white/55 mt-4 leading-relaxed">
            Six services, one engineering partner. Click any item — the cube rotates to reveal what you get.
          </p>
        </div>

        {/* ── Desktop / tablet: cube stage with side list ─────────────── */}
        <div className="svc-stage hidden lg:grid mt-16 grid-cols-12 gap-10 items-center">
          {/* LEFT — numbered list with sliding active indicator */}
          <div className="col-span-4">
            <div ref={listRef} className="relative">
              <span
                ref={indicatorRef}
                aria-hidden
                className="absolute left-0 w-px bg-cyan-400 opacity-0
                           shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                style={{ top: 0, height: 0 }}
              />
              <ul className="flex flex-col">
                {services.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <li
                      key={i}
                      ref={(el) => (itemRefs.current[i] = el)}
                      className="svc-list-item"
                    >
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className={`group w-full text-left flex items-center gap-4 py-4 pl-5 pr-3
                                    border-t border-white/[0.06] transition-colors
                                    ${isActive ? 'text-white' : 'text-white/45 hover:text-white/80'}`}
                      >
                        <span className={`text-xs font-mono tabular-nums tracking-wider transition-colors
                          ${isActive ? 'text-cyan-400' : 'text-white/30'}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm sm:text-base font-medium tracking-tight flex-1">
                          {s.title}
                        </span>
                        <span className={`text-xs transition-all ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                          →
                        </span>
                      </button>
                    </li>
                  );
                })}
                <li className="border-t border-white/[0.06]" />
              </ul>
            </div>
          </div>

          {/* CENTER — the cube */}
          <div className="col-span-4 flex items-center justify-center">
            <div
              className="relative"
              style={{ width: CUBE_PX, height: CUBE_PX }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Progress ring around cube */}
              <svg
                className="absolute inset-0 -rotate-90 pointer-events-none"
                viewBox="0 0 100 100"
                aria-hidden
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                <circle
                  ref={ringRef}
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="0.6"
                  strokeLinecap="round"
                  style={{ strokeDasharray: 282, strokeDashoffset: 282 }}
                />
              </svg>

              {/* Cube */}
              <div className="perspective-1200 absolute inset-4">
                <div
                  ref={cubeRef}
                  className="relative w-full h-full preserve-3d will-change-transform"
                >
                  {services.map((s, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 backface-hidden rounded-2xl border border-white/[0.1]
                                 bg-gradient-to-br from-[#0c0f15] to-[#06080b]
                                 flex flex-col items-center justify-center p-6 text-center
                                 shadow-[0_0_60px_-20px_rgba(34,211,238,0.25)_inset]"
                      style={{ transform: facePlacement(i, half - 16) }}
                    >
                      <div className="h-14 w-14 rounded-xl flex items-center justify-center text-2xl
                                      bg-white/[0.04] border border-white/[0.08] text-cyan-400 mb-5">
                        {s.icon}
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70 font-mono">
                        Service {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-tight leading-tight">
                        {s.title}
                      </h3>
                      <span className="absolute bottom-4 left-0 right-0 text-[10px] text-white/25 uppercase tracking-[0.25em]">
                        {paused ? 'paused' : 'auto-rotating'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — detail card for active service */}
          <div ref={detailRef} className="col-span-4 surface rounded-2xl p-6 min-h-[340px] flex flex-col">
            <p className="detail-fade text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-mono">
              {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
            </p>
            <h3 className="detail-fade mt-3 text-2xl font-semibold tracking-tight leading-tight">
              {services[active].title}
            </h3>
            <p className="detail-fade mt-3 text-sm text-white/65 leading-relaxed">
              {services[active].des}
            </p>
            <ul className="detail-fade mt-5 space-y-2.5">
              {services[active].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/75">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#Hire"
              className="detail-fade mt-auto pt-6 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300"
            >
              Discuss this service <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* ── Mobile / tablet: clean stacked accordion ─────────────────── */}
        <div className="lg:hidden mt-12 grid gap-px surface rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const isActive = i === active;
            return (
              <details
                key={i}
                open={isActive}
                onToggle={(e) => e.currentTarget.open && setActive(i)}
                className="svc-list-item group bg-[#070809]"
              >
                <summary className="cursor-pointer list-none p-5 flex items-center gap-4">
                  <span className={`text-xs font-mono tabular-nums ${isActive ? 'text-cyan-400' : 'text-white/30'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-9 w-9 rounded-lg flex items-center justify-center text-sm
                                  bg-white/[0.03] border border-white/[0.08] text-cyan-400">
                    {s.icon}
                  </div>
                  <h3 className="flex-1 text-base font-semibold tracking-tight">{s.title}</h3>
                  <span className="text-cyan-400 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 pl-[4.25rem]">
                  <p className="text-sm text-white/65 leading-relaxed">{s.des}</p>
                  <ul className="mt-3 space-y-2">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/70">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
