'use client';

import { FaArrowDown, FaDownload, FaCheckCircle } from 'react-icons/fa';
import {
  HomeContents,
  RotatingRoles,
  HeroStats,
  TrustBadges,
  TechStack,
  RESUME_URL,
  HERO_AVATAR,
} from './constants/constants';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Home = () => {
  const containerRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
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

          gsap.from('.main-image', {
            x: isDesktop ? '40%' : '15%',
            opacity: 0,
            duration: isDesktop ? 1.4 : 1.1,
            ease: 'power3.out',
          });

          gsap.from('.text-line', {
            x: isDesktop ? '-20%' : '-10%',
            opacity: 0,
            duration: isDesktop ? 1 : 0.8,
            ease: 'power3.out',
            stagger: 0.18,
            delay: 0.3,
          });

          gsap.from('.hero-stat', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.4)',
            stagger: 0.12,
            delay: 1.2,
          });

          gsap.from('.trust-badge', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            delay: 1.6,
          });

          gsap.from('.social-icon', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.12,
            delay: 1.4,
          });

          gsap.from('.tech-chip', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.04,
            delay: 1.8,
          });

          let i = 0;
          const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 2 });
          tl.to(roleRef.current, { y: 20, opacity: 0, duration: 0.4, ease: 'power1.in' })
            .call(() => {
              i = (i + 1) % RotatingRoles.length;
              if (roleRef.current) roleRef.current.textContent = RotatingRoles[i];
            })
            .fromTo(
              roleRef.current,
              { y: -20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
            );
        }
      );
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="Home"
      className="relative overflow-hidden min-h-screen pt-28 sm:pt-32 pb-12 px-4 sm:px-10
                 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col gap-5 sm:gap-7 max-w-2xl">
          <span className="text-line inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full
                           bg-emerald-500/10 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for freelance & full-time roles — worldwide
          </span>

          <h3 className="text-line text-base sm:text-lg font-semibold tracking-widest uppercase text-indigo-300">
            Hi there, I am
          </h3>

          <h1 className="text-line text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Naveen{' '}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Dudhyal
            </span>
          </h1>

          <h2 className="text-line text-xl sm:text-3xl font-bold text-white/90">
            Senior <span className="text-cyan-300">Full-Stack Engineer</span> ·{' '}
            <span className="text-fuchsia-300">Cloud & DevOps</span>
          </h2>

          <p className="text-line text-base sm:text-xl text-white/80 leading-relaxed">
            I architect and ship <span className="font-semibold text-white">production-grade web platforms</span>{' '}
            with <span className="text-cyan-300 font-semibold">React, Next.js, Node.js & TypeScript</span> — deployed
            on <span className="text-amber-300 font-semibold">AWS</span> &{' '}
            <span className="text-blue-300 font-semibold">Azure</span> with{' '}
            <span className="text-emerald-300 font-semibold">battle-tested CI/CD</span>. Trusted by global teams to deliver fast.
          </p>

          <div className="text-line h-8 sm:h-10 overflow-hidden">
            <p
              ref={roleRef}
              className="text-sm sm:text-lg font-medium bg-white/10 border border-white/20 backdrop-blur-md
                         inline-block px-4 py-1.5 rounded-full"
            >
              {RotatingRoles[0]}
            </p>
          </div>

          <div className="text-line flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <a href="#Hire">
              <button
                className="group relative inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full
                           bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 text-white
                           font-semibold text-base sm:text-lg shadow-lg shadow-fuchsia-900/40
                           hover:scale-[1.03] hover:shadow-fuchsia-700/50 transition-all
                           focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              >
                Hire Me
                <span className="rounded-full bg-white p-1 text-black group-hover:translate-x-0.5 transition">
                  <FaArrowDown />
                </span>
              </button>
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full
                         border border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10
                         text-white font-semibold text-base sm:text-lg transition-all
                         focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Download resume"
            >
              <FaDownload /> Download CV
            </a>
            <a href="#Projects">
              <button className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-white/90 font-semibold text-base sm:text-lg hover:text-white underline-offset-4 hover:underline">
                See My Work →
              </button>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            {HomeContents.map((pro, i) => (
              <a
                href={pro.link}
                key={i}
                aria-label={pro.name}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 border border-white/20
                           backdrop-blur-md flex items-center justify-center text-lg sm:text-xl
                           hover:bg-white hover:text-indigo-900 hover:scale-110 transition-all"
              >
                {pro?.icon}
              </a>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2 sm:gap-3 pt-3">
            {TrustBadges.map((b, i) => (
              <li
                key={i}
                className="trust-badge flex items-center gap-1.5 text-xs sm:text-sm
                           bg-white/5 border border-white/15 backdrop-blur-md px-3 py-1.5 rounded-full text-white/80"
              >
                <FaCheckCircle className="text-emerald-400" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col items-center gap-6 max-w-md">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 blur opacity-60" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_AVATAR}
              alt="Naveen Dudhyal — Senior Full-Stack Engineer"
              className="relative h-[18rem] sm:h-[28rem] w-auto rounded-3xl main-image object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {HeroStats.map((s, i) => (
              <div
                key={i}
                className="hero-stat text-center px-2 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <p className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="text-[10px] sm:text-xs text-white/70 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-12 sm:mt-16 max-w-7xl mx-auto">
        <p className="text-center text-xs sm:text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
          Stack I work with daily
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {TechStack.map((t, i) => (
            <span
              key={i}
              className="tech-chip inline-flex items-center gap-2 text-xs sm:text-sm
                         bg-white/5 border border-white/15 backdrop-blur-md px-3 py-1.5 rounded-full
                         hover:bg-white/10 hover:scale-105 transition-all"
            >
              <span className="text-base sm:text-lg text-cyan-300">{t.icon}</span>
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
