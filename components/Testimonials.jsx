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
          '.tm-eyebrow, .tm-title, .tm-sub',
          { y: 16, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.testimonial-card',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.12,
            scrollTrigger: { trigger: containerRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
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
      className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#050608] text-white border-t border-white/[0.05]"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-40" />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="tm-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
            05 — Validation
          </p>
          <h2 className="tm-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-4">
            What clients say. <span className="text-white/40">In their words.</span>
          </h2>
          <p className="tm-sub text-sm sm:text-base text-white/55 mt-4 leading-relaxed">
            Real feedback from CTOs, founders and engineers I have built with — across four continents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mt-14">
          {TestimonialsContent.map((t, i) => (
            <article
              key={i}
              className="testimonial-card relative p-6 sm:p-7 rounded-2xl surface
                         hover:border-white/15 transition-colors duration-500"
            >
              <FaQuoteLeft className="text-white/10 text-3xl absolute top-5 right-5" />
              <div className="flex gap-0.5 text-cyan-400">
                {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                  <FaStar key={idx} className="text-xs" />
                ))}
              </div>
              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                <div className="h-10 w-10 rounded-full flex items-center justify-center font-medium text-xs
                                bg-white/[0.04] border border-white/[0.08] text-cyan-400">
                  {initials(t.author)}
                </div>
                <div>
                  <p className="text-sm font-medium tracking-tight">{t.author}</p>
                  {t.role && <p className="text-xs text-white/45 mt-0.5">{t.role}</p>}
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
