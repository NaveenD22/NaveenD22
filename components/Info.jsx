'use client';

import React, { useEffect, useRef } from 'react';
import { AboutMeContents, RESUME_URL } from './constants/constants';
import { FaArrowDown, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './Magnetic';

const Info = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (context) => {
        if (context.conditions.reduceMotion) return;

        gsap.fromTo(
          '.info-eyebrow, .info-title, .info-sub',
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.08,
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.info-image-wrap',
          { x: -30, opacity: 0, scale: 0.97 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.info-text',
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'expo.out',
            stagger: 0.07,
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.info-achievement',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.06,
            scrollTrigger: { trigger: '.achievements-wrap', start: 'top 88%', toggleActions: 'play none none reverse' },
          }
        );
      });
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="About"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#050608] text-white border-t border-white/[0.05]"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-50" />
      <div className="relative max-w-6xl mx-auto flex flex-col gap-14">
        <div className="text-center max-w-2xl mx-auto">
          <p className="info-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
            01 — About
          </p>
          <h2 className="info-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-4">
            Engineering, end&nbsp;to&nbsp;end. <span className="text-white/40">No drama.</span>
          </h2>
          <p className="info-sub text-sm sm:text-base text-white/55 mt-4 leading-relaxed">
            A senior full-stack engineer who treats your product like equity — design, build, ship, monitor, improve.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 items-start">
          <div className="lg:col-span-2 flex flex-col items-start gap-5 info-image-wrap">
            <div className="relative w-full">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/[0.18] via-white/[0.04] to-cyan-400/20" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={AboutMeContents.icon}
                alt="Naveen Dudhyal"
                className="relative w-full h-[22rem] sm:h-[28rem] rounded-2xl object-cover grayscale-[0.2]"
                loading="lazy"
              />
            </div>
            <div className="w-full surface rounded-xl p-4">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium flex items-center gap-2">
                <FaBriefcase className="text-cyan-400" /> Availability
              </p>
              <p className="text-sm font-medium text-white mt-2">{AboutMeContents.availability}</p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="info-text text-2xl sm:text-3xl font-semibold tracking-tight">{AboutMeContents.name}</h3>
            <p className="info-text text-sm sm:text-base font-medium text-cyan-400">{AboutMeContents.role}</p>
            <p className="info-text text-sm sm:text-base text-white/55 italic">{AboutMeContents.tagline}</p>
            <p className="info-text text-sm sm:text-base text-white/70 leading-relaxed">{AboutMeContents.des}</p>

            <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
              <p className="info-text flex items-center gap-2.5 text-sm surface px-3.5 py-3 rounded-xl">
                <FaPhone className="text-cyan-400 text-xs" />
                <span className="text-white/75">{AboutMeContents.phone}</span>
              </p>
              <p className="info-text flex items-center gap-2.5 text-sm surface px-3.5 py-3 rounded-xl">
                <FaEnvelope className="text-cyan-400 text-xs" />
                <span className="text-white/75 break-all">{AboutMeContents.email}</span>
              </p>
              <p className="info-text sm:col-span-2 flex items-center gap-2.5 text-sm surface px-3.5 py-3 rounded-xl">
                <FaMapMarkerAlt className="text-cyan-400 text-xs" />
                <span className="text-white/75">{AboutMeContents.place}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-3 info-text">
              <a href={RESUME_URL} download>
                <Magnetic strength={0.3}>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-slate-950 hover:bg-cyan-400 transition-colors">
                    Download Resume <FaArrowDown />
                  </button>
                </Magnetic>
              </a>
              <a href="#Hire">
                <Magnetic strength={0.25}>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/12 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
                    Work With Me <span aria-hidden>↗</span>
                  </button>
                </Magnetic>
              </a>
            </div>
          </div>
        </div>

        <div className="achievements-wrap mt-4 surface rounded-2xl p-6 sm:p-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">What I deliver</p>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mt-2">
            Outcomes — <span className="text-white/40">not just code.</span>
          </h3>
          <ul className="grid sm:grid-cols-2 gap-2.5 mt-6">
            {AboutMeContents.achievements.map((a, i) => (
              <li
                key={i}
                className="info-achievement flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/70 leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;
