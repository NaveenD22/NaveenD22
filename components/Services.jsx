'use client';

import React, { useEffect, useRef } from 'react';
import { ServicesContent } from './constants/constants';
import { FaCogs, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (ctxInner) => {
        if (ctxInner.conditions.reduceMotion) return;

        gsap.fromTo(
          '.service-title',
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
          '.service-card',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
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
      id="Services"
      ref={containerRef}
      className="relative py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center service-title">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-cyan-300 font-semibold">What I do</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 inline-flex items-center gap-3">
            <FaCogs className="text-cyan-300" />
            Services Built for Outcomes
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Hire me as your engineering partner — from idea and architecture to deployment, observability and growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14">
          {ServicesContent.map((s, i) => (
            <article
              key={i}
              className="service-card group relative p-6 rounded-3xl
                         bg-white/5 border border-white/10 backdrop-blur-md
                         hover:bg-white/10 hover:-translate-y-1 transition-all duration-300
                         shadow-lg shadow-indigo-950/40"
            >
              <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-2xl
                              bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-md">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.des}</p>

              <ul className="mt-4 space-y-2">
                {s.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/80">
                    <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute inset-0 rounded-3xl pointer-events-none
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              ring-1 ring-fuchsia-400/40" />
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#Hire">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-600
                         text-white font-semibold shadow-xl shadow-fuchsia-900/40
                         hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
            >
              Start a Project →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
