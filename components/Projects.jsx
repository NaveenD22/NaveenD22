'use client';

import React, { useEffect, useRef } from 'react';
import { ProjectsContent } from './constants/constants';
import { FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { isDesktop: '(min-width: 768px)', reduceMotion: '(prefers-reduced-motion: reduce)' },
        (c) => {
          const { isDesktop, reduceMotion } = c.conditions;
          if (reduceMotion) return;

          gsap.fromTo(
            '.pr-eyebrow, .pr-title, .pr-sub',
            { y: 16, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08,
              scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
            }
          );

          gsap.fromTo(
            '.project-card',
            { y: 40, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.07,
              scrollTrigger: { trigger: containerRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
            }
          );

          // 3D tilt on project cards (desktop only)
          if (isDesktop) {
            document.querySelectorAll('.project-card').forEach((card) => {
              const inner = card.querySelector('.tilt-inner');
              if (!inner) return;
              gsap.set(inner, { transformPerspective: 900, transformOrigin: 'center' });
              const rxTo = gsap.quickTo(inner, 'rotationX', { duration: 0.4, ease: 'power3' });
              const ryTo = gsap.quickTo(inner, 'rotationY', { duration: 0.4, ease: 'power3' });
              const onMove = (e) => {
                const r = card.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;
                rxTo(-y * 6);
                ryTo(x * 8);
                card.style.setProperty('--mx', `${e.clientX - r.left}px`);
                card.style.setProperty('--my', `${e.clientY - r.top}px`);
              };
              const onLeave = () => { rxTo(0); ryTo(0); };
              card.addEventListener('mousemove', onMove);
              card.addEventListener('mouseleave', onLeave);
            });
          }
        }
      );
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Projects"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#050608] text-white border-t border-white/[0.05] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-4xl">
          <div>
            <p className="pr-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
              04 — Selected work
            </p>
            <h2 className="pr-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-4">
              Real production. <span className="text-white/40">Not toy demos.</span>
            </h2>
          </div>
          <p className="pr-sub text-sm text-white/55 max-w-sm">
            A snapshot of what I have shipped. Some are confidential — the impact is real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-14">
          {ProjectsContent.map((p, i) => (
            <article
              key={i}
              className="project-card group relative rounded-2xl overflow-hidden surface
                         hover:border-white/15 transition-colors duration-500"
              style={{
                backgroundImage:
                  'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(34,211,238,0.05), transparent 60%)',
              }}
            >
              <div className="tilt-inner will-change-transform">
                <div className="relative overflow-hidden h-48 sm:h-56">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.icon}
                    alt={p.title}
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0
                               group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  {p.confidential && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-medium
                                     bg-black/70 backdrop-blur text-white/80 px-2 py-1 rounded-full border border-white/10">
                      <FaLock className="text-[8px]" /> Confidential
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/30 to-transparent" />
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed line-clamp-3">{p.des}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags?.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] mt-2">
                    {p.link && p.link !== '#' ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                      >
                        Live demo <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    ) : (
                      <span className="text-xs text-white/35 italic">Private repo</span>
                    )}
                  </div>
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
