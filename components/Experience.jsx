'use client';

import React, { useEffect, useRef } from 'react';
import { ExperienceContent } from './constants/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Experience = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (c) => {
        if (c.conditions.reduceMotion) return;

        gsap.fromTo(
          '.ex-eyebrow, .ex-title, .ex-sub',
          { y: 16, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        // Animated timeline draw — scrubbed to scroll
        if (lineRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0, transformOrigin: 'top center' },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: '.timeline-wrap',
                start: 'top 70%',
                end: 'bottom 80%',
                scrub: 0.5,
              },
            }
          );
        }

        gsap.utils.toArray('.exp-item').forEach((el, i) => {
          const dot = el.querySelector('.exp-dot');
          gsap.fromTo(
            el,
            { x: i % 2 === 0 ? -24 : 24, opacity: 0 },
            {
              x: 0, opacity: 1, duration: 0.9, ease: 'expo.out',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
            }
          );
          if (dot) {
            gsap.fromTo(
              dot,
              { scale: 0 },
              {
                scale: 1, duration: 0.5, ease: 'back.out(2)',
                scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
              }
            );
          }
        });
      });
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Experience"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#050608] text-white border-t border-white/[0.05]"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-40" />
      <div className="relative max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="ex-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
            06 — Experience
          </p>
          <h2 className="ex-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-4">
            Five years. <span className="text-white/40">Three continents. One craft.</span>
          </h2>
          <p className="ex-sub text-sm sm:text-base text-white/55 mt-4 leading-relaxed">
            Product teams, agencies, and worldwide freelance clients. Every line below shipped to real users.
          </p>
        </div>

        <div className="timeline-wrap relative mt-16">
          {/* Static rail */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] sm:-translate-x-1/2" />
          {/* Animated draw line on top */}
          <div
            ref={lineRef}
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-cyan-400/60 to-transparent sm:-translate-x-1/2 shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          />

          <div className="space-y-10 sm:space-y-12">
            {ExperienceContent.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`exp-item relative flex flex-col sm:flex-row ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start gap-4 sm:gap-8`}
                >
                  <div className="exp-dot absolute left-4 sm:left-1/2 -translate-x-1/2 z-10
                                  h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-[#050608]
                                  shadow-[0_0_12px_rgba(34,211,238,0.7)]" />

                  <div className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="surface rounded-2xl p-5 sm:p-6 hover:border-white/15 transition-colors duration-500">
                      <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-400 font-mono">{exp.period}</p>
                      <h3 className="text-base sm:text-lg font-semibold tracking-tight mt-2">{exp.title}</h3>
                      <p className="text-sm font-medium text-white/55 mt-0.5">{exp.role}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((a, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-white/65">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden sm:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
