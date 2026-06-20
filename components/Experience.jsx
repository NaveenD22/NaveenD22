'use client';

import React, { useEffect, useRef } from 'react';
import { FaWrench, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import { ExperienceContent } from './constants/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (c) => {
        if (c.conditions.reduceMotion) return;

        gsap.fromTo(
          '.experience-title',
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.utils.toArray('.exp-item').forEach((el, i) => {
          gsap.fromTo(
            el,
            { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
            }
          );
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
      className="relative py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-slate-50 to-indigo-50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center experience-title">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">Journey</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 inline-flex items-center gap-3">
            <FaWrench className="text-indigo-600" /> Professional Experience
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            5+ years across product teams, agencies and worldwide freelance clients.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-fuchsia-300 to-amber-300 sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10">
            {ExperienceContent.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`exp-item relative flex flex-col sm:flex-row ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start gap-4 sm:gap-8`}
                >
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10
                                  h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500
                                  flex items-center justify-center text-white shadow-lg ring-4 ring-white">
                    <FaBriefcase />
                  </div>

                  <div className={`ml-14 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] ${isLeft ? 'sm:pr-8' : 'sm:pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 sm:p-6
                                    hover:shadow-2xl hover:border-indigo-300 transition-all">
                      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{exp.period}</p>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">{exp.title}</h3>
                      <p className="text-sm sm:text-base font-medium text-fuchsia-700">{exp.role}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((a, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0" />
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
