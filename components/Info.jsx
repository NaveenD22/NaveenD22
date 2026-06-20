'use client';

import React, { useEffect, useRef } from 'react';
import { AboutMeContents, RESUME_URL } from './constants/constants';
import { FaArrowDown, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Info = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(min-width: 640px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions;
          if (reduceMotion) return;

          gsap.fromTo(
            '.info-title',
            { y: -30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: isDesktop ? 0.9 : 0.7,
              ease: 'power3.out',
              scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
            }
          );

          gsap.fromTo(
            '.info-image',
            { x: -40, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
            }
          );

          gsap.fromTo(
            '.info-text',
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
              stagger: 0.12,
              scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
            }
          );

          gsap.fromTo(
            '.info-achievement',
            { x: -20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.1,
              scrollTrigger: { trigger: '.achievements-wrap', start: 'top 85%', toggleActions: 'play none none reverse' },
            }
          );
        }
      );
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="About"
      ref={containerRef}
      className="relative py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-slate-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="text-center info-title">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-indigo-600 font-semibold">Who I am</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2 inline-flex items-center gap-3">
            <GoPerson className="text-indigo-600" /> About Me
          </h1>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            A senior full-stack engineer who treats your product like equity — design, build, ship, monitor, improve.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-2 flex flex-col items-center gap-4 info-image">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 blur opacity-50" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={AboutMeContents.icon}
                alt="Naveen Dudhyal"
                className="relative h-[18rem] sm:h-[26rem] w-auto rounded-3xl object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="w-full bg-white shadow-lg rounded-2xl p-4 border border-indigo-100">
              <p className="text-xs uppercase tracking-widest text-indigo-500 font-bold flex items-center gap-2">
                <FaBriefcase /> Availability
              </p>
              <p className="text-sm sm:text-base font-semibold text-slate-800 mt-1">{AboutMeContents.availability}</p>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 info-text">{AboutMeContents.name}</h2>
            <p className="text-base sm:text-xl font-semibold text-indigo-700 info-text">{AboutMeContents.role}</p>
            <p className="text-sm sm:text-lg italic text-slate-600 info-text">{AboutMeContents.tagline}</p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed info-text">{AboutMeContents.des}</p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <p className="info-text flex items-center gap-2 text-sm sm:text-base bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                <FaPhone className="text-indigo-600" />
                <span className="text-slate-700">{AboutMeContents.phone}</span>
              </p>
              <p className="info-text flex items-center gap-2 text-sm sm:text-base bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                <FaEnvelope className="text-indigo-600" />
                <span className="text-slate-700 break-all">{AboutMeContents.email}</span>
              </p>
              <p className="info-text sm:col-span-2 flex items-center gap-2 text-sm sm:text-base bg-white p-3 rounded-xl shadow-sm border border-slate-200">
                <FaMapMarkerAlt className="text-indigo-600" />
                <span className="text-slate-700">{AboutMeContents.place}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-3 info-text">
              <a
                href={RESUME_URL}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                           bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white
                           font-semibold shadow-lg shadow-indigo-300 hover:scale-105 transition-transform
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Download Resume <FaArrowDown />
              </a>
              <a
                href="#Hire"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full
                           border border-indigo-300 text-indigo-700 font-semibold hover:bg-indigo-100 transition"
              >
                Work With Me →
              </a>
            </div>
          </div>
        </div>

        <div className="achievements-wrap mt-6 sm:mt-10 bg-white rounded-3xl shadow-xl border border-indigo-100 p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
              What I deliver
            </span>
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-5">
            {AboutMeContents.achievements.map((a, i) => (
              <li
                key={i}
                className="info-achievement flex items-start gap-3 p-3 sm:p-4 rounded-2xl
                           bg-gradient-to-br from-slate-50 to-indigo-50 border border-indigo-100"
              >
                <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base text-slate-700 leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;
