'use client';

import React, { useEffect, useRef } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { TestimonialsContent } from './constants/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const initials = (name) =>
  name
    .split(/[\s,]+/)
    .map((w) => w.charAt(0))
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (c) => {
        if (c.conditions.reduceMotion) return;

        gsap.fromTo(
          '.testimonials-title',
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
          '.testimonial-card',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.15,
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
      id="Testimonials"
      ref={containerRef}
      className="relative py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-20 left-1/4 w-80 h-80 rounded-full bg-amber-400/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center testimonials-title">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-300 font-semibold">Kind words</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold mt-2 inline-flex items-center gap-3">
            <FaQuoteLeft className="text-amber-300" /> Testimonials
          </h2>
          <p className="text-white/70 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Real feedback from CTOs, founders and developers I have worked with worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mt-10 sm:mt-14">
          {TestimonialsContent.map((t, i) => (
            <article
              key={i}
              className="testimonial-card relative p-6 sm:p-7 rounded-3xl
                         bg-white/5 border border-white/10 backdrop-blur-md
                         hover:-translate-y-1 hover:border-amber-300/40 transition-all duration-300 shadow-xl"
            >
              <FaQuoteLeft className="text-amber-300/40 text-3xl absolute top-4 right-4" />
              <div className="flex gap-1 text-amber-300">
                {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <p className="mt-4 text-sm sm:text-base italic text-white/90 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full flex items-center justify-center font-bold text-sm
                                bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow">
                  {initials(t.author)}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold">{t.author}</p>
                  {t.role && <p className="text-xs sm:text-sm text-white/60">{t.role}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
