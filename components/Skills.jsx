'use client';

import React, { useEffect, useRef, useState } from 'react';
import { SkillsContent } from './constants/constants';
import { FaSketch, FaCheckCircle } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (c) => {
        if (c.conditions.reduceMotion) return;

        gsap.fromTo(
          '.skills-title',
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.skill-card',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );
      });
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Skills"
      ref={containerRef}
      className="relative py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-indigo-50 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center skills-title">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-fuchsia-600 font-semibold">Capabilities</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 inline-flex items-center gap-3">
            <FaSketch className="text-fuchsia-600" /> Skills & Abilities
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Modern full-stack toolbox — from React/Next.js front-ends to AWS & Azure cloud and CI/CD automation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14">
          {SkillsContent.map((s, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="skill-card text-left group relative p-6 rounded-3xl bg-white border border-slate-200
                         hover:border-fuchsia-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                         shadow-md cursor-pointer"
            >
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-2xl
                              bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.des}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-fuchsia-600 group-hover:translate-x-1 transition-transform">
                See details {s.arrow}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white
                       rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-2xl text-white/80 hover:text-white"
            >
              <GiCrossMark />
            </button>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-2xl
                              bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400">
                {SkillsContent[open].icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{SkillsContent[open].title}</h3>
            </div>
            <p className="mt-3 text-sm sm:text-base text-white/80">{SkillsContent[open].des}</p>
            <ul className="mt-5 space-y-3">
              {SkillsContent[open].des2.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-white/90">
                  <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
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
