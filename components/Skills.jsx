'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SkillsContent } from './constants/constants';
import { GiCrossMark } from 'react-icons/gi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const containerRef = useRef(null);
  const modalRef = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (c) => {
        if (c.conditions.reduceMotion) return;

        gsap.fromTo(
          '.sk-eyebrow, .sk-title, .sk-sub',
          { y: 16, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.skill-card',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.06,
            scrollTrigger: { trigger: containerRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      });
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Modal entrance animation
  useEffect(() => {
    if (open === null || !modalRef.current) return;
    gsap.fromTo(
      modalRef.current,
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'expo.out' }
    );
    gsap.fromTo(
      modalRef.current.querySelectorAll('.modal-item'),
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'expo.out', stagger: 0.06, delay: 0.15 }
    );
  }, [open]);

  return (
    <section
      id="Skills"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#050608] text-white border-t border-white/[0.05]"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="sk-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
            03 — Capabilities
          </p>
          <h2 className="sk-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-4">
            A full-stack toolbox. <span className="text-white/40">Sharpened in production.</span>
          </h2>
          <p className="sk-sub text-sm sm:text-base text-white/55 mt-4 leading-relaxed">
            From React/Next.js frontends to AWS &amp; Azure cloud and CI/CD automation — battle-tested across 30+ shipped apps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px mt-14 surface rounded-2xl overflow-hidden">
          {SkillsContent.map((s, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="skill-card text-left group relative p-7 bg-[#070809]
                         hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center text-lg
                                bg-white/[0.03] border border-white/[0.08] text-cyan-400
                                group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-colors">
                  {s.icon}
                </div>
                <span className="text-[10px] text-white/30 font-mono">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{s.des}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400/90 group-hover:text-cyan-300 group-hover:gap-2.5 transition-all">
                Explore details <span aria-hidden>→</span>
              </span>

              {/* Accent line that draws on hover */}
              <span className="absolute left-0 bottom-0 h-px w-0 bg-cyan-400 group-hover:w-full transition-[width] duration-700 ease-out" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpen(null)}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-2xl bg-[#0a0c10] text-white
                       rounded-2xl border border-white/10 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-xl text-white/50 hover:text-white"
            >
              <GiCrossMark />
            </button>
            <div className="flex items-center gap-3 modal-item">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center text-lg
                              bg-white/[0.04] border border-white/[0.08] text-cyan-400">
                {SkillsContent[open].icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{SkillsContent[open].title}</h3>
            </div>
            <p className="mt-4 text-sm text-white/65 leading-relaxed modal-item">{SkillsContent[open].des}</p>
            <ul className="mt-6 space-y-3">
              {SkillsContent[open].des2.map((d, i) => (
                <li key={i} className="modal-item flex items-start gap-2.5 text-sm text-white/80">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
