'use client';

import React, { useEffect, useRef } from 'react';
import { ProjectsContent } from './constants/constants';
import { FaPenNib, FaExternalLinkAlt, FaGithub, FaLock } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (c) => {
        if (c.conditions.reduceMotion) return;

        gsap.fromTo(
          '.projects-title',
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
          '.project-card',
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
      id="Projects"
      ref={containerRef}
      className="relative py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center projects-title">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-300 font-semibold">Selected work</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 inline-flex items-center gap-3">
            <FaPenNib className="text-amber-300" /> Projects That Shipped
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Real production work — not toy demos. Some are confidential, but the impact is real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-14">
          {ProjectsContent.map((p, i) => (
            <article
              key={i}
              className="project-card group relative rounded-3xl overflow-hidden
                         bg-white/5 border border-white/10 backdrop-blur-md
                         hover:-translate-y-1 hover:border-fuchsia-400/40 transition-all duration-300 shadow-xl"
            >
              <div className="relative overflow-hidden h-44 sm:h-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.icon}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {p.confidential && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold
                                   bg-amber-500/90 text-black px-2 py-1 rounded-full">
                    <FaLock /> Confidential
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-base sm:text-lg font-bold text-white">{p.title}</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed line-clamp-3">{p.des}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags?.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full
                                 bg-indigo-500/20 border border-indigo-400/30 text-indigo-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 mt-auto">
                  {p.link && p.link !== '#' ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold
                                 text-amber-300 hover:text-amber-200"
                    >
                      Live Demo <FaExternalLinkAlt />
                    </a>
                  ) : (
                    <span className="text-xs text-white/50 italic">Private repo</span>
                  )}

                  {p.code && p.code !== '#' && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold
                                 text-cyan-300 hover:text-cyan-200"
                    >
                      Source <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
