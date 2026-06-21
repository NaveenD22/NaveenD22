'use client';

import { FaArrowDown, FaDownload } from 'react-icons/fa';
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
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Magnetic from './Magnetic';

// Wraps a string in per-char spans for stagger reveal animation
const splitChars = (text) =>
  text.split('').map((c, i) => (
    <span key={i} className="char" aria-hidden>
      {c === ' ' ? '\u00A0' : c}
    </span>
  ));

const Home = () => {
  const containerRef = useRef(null);
  const roleRef = useRef(null);
  const orbRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { isDesktop: '(min-width: 768px)', reduceMotion: '(prefers-reduced-motion: reduce)' },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions;
          if (reduceMotion) return;

          // ── Intro timeline ────────────────────────────────────────────────
          const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

          tl.from('.hero-eyebrow', { y: 16, opacity: 0, duration: 0.7 })
            .to('.hero-headline .char', {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: 'expo.out',
              stagger: { each: 0.022, from: 'start' },
            }, '-=0.3')
            .from('.hero-sub', { y: 24, opacity: 0, duration: 0.8, stagger: 0.08 }, '-=0.6')
            .from('.hero-cta', { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.5')
            .from('.social-icon', { y: 16, opacity: 0, duration: 0.5, stagger: 0.06 }, '-=0.4')
            .from('.trust-badge', { y: 12, opacity: 0, duration: 0.4, stagger: 0.05 }, '-=0.3')
            .from(imageWrapRef.current, { y: 30, opacity: 0, scale: 0.96, duration: 1 }, '-=1.1')
            .from('.hero-stat', { y: 16, opacity: 0, duration: 0.5, stagger: 0.07 }, '-=0.5');

          // ── Animated counters ─────────────────────────────────────────────
          document.querySelectorAll('.hero-stat-num').forEach((el) => {
            const raw = el.dataset.value || '';
            const num = parseFloat(raw.replace(/[^\d.]/g, '')) || 0;
            const suffix = raw.replace(/[\d.]/g, '');
            const obj = { n: 0 };
            gsap.to(obj, {
              n: num,
              duration: 2,
              ease: 'power2.out',
              delay: 1.2,
              onUpdate: () => {
                const display = num >= 100 ? Math.round(obj.n) : obj.n.toFixed(num % 1 ? 1 : 0);
                el.textContent = `${display}${suffix}`;
              },
            });
          });

          // ── Rotating role chip ───────────────────────────────────────────
          let i = 0;
          const rotate = gsap.timeline({ repeat: -1, repeatDelay: 2.2, delay: 2.4 });
          rotate
            .to(roleRef.current, { y: 16, opacity: 0, duration: 0.35, ease: 'power2.in' })
            .call(() => {
              i = (i + 1) % RotatingRoles.length;
              if (roleRef.current) roleRef.current.textContent = RotatingRoles[i];
            })
            .fromTo(
              roleRef.current,
              { y: -16, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
            );

          // ── Parallax orbs + image on scroll ───────────────────────────────
          if (isDesktop) {
            gsap.to('.orb-a', {
              yPercent: -25,
              ease: 'none',
              scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: true },
            });
            gsap.to('.orb-b', {
              yPercent: 30,
              ease: 'none',
              scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: true },
            });
            gsap.to(imageWrapRef.current, {
              yPercent: -8,
              ease: 'none',
              scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: 0.5 },
            });
          }

          // ── 3D pointer tilt on avatar (desktop only) ──────────────────────
          if (isDesktop && imageWrapRef.current) {
            const el = imageWrapRef.current;
            const rxTo = gsap.quickTo(el, 'rotationX', { duration: 0.4, ease: 'power3' });
            const ryTo = gsap.quickTo(el, 'rotationY', { duration: 0.4, ease: 'power3' });
            gsap.set(el, { transformPerspective: 800, transformOrigin: 'center' });

            const onMove = (e) => {
              const r = el.getBoundingClientRect();
              const x = (e.clientX - r.left) / r.width - 0.5;
              const y = (e.clientY - r.top) / r.height - 0.5;
              rxTo(-y * 10);
              ryTo(x * 14);
            };
            const onLeave = () => { rxTo(0); ryTo(0); };
            el.addEventListener('mousemove', onMove);
            el.addEventListener('mouseleave', onLeave);
          }
        }
      );
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Duplicate stack for seamless marquee
  const marqueeStack = [...TechStack, ...TechStack];

  return (
    <section
      ref={containerRef}
      id="Home"
      className="relative overflow-hidden min-h-screen pt-28 sm:pt-32 pb-16 px-4 sm:px-10
                 bg-[#050608] text-white noise"
    >
      {/* Faint grid + parallax orbs (single accent — no rainbow) */}
      <div className="absolute inset-0 bg-grid-faint pointer-events-none" />
      <div ref={orbRef} className="orb-a pointer-events-none absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-cyan-500/[0.08] blur-[120px]" />
      <div className="orb-b pointer-events-none absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full bg-sky-500/[0.07] blur-[140px]" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-10">
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          <span className="hero-eyebrow inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full
                           bg-white/[0.04] border border-white/[0.08] text-xs font-medium tracking-tight text-white/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Available for senior full-stack engagements — worldwide
          </span>

          <h1 className="hero-headline text-[2.5rem] sm:text-6xl lg:text-[5rem] font-semibold leading-[1.02] tracking-[-0.03em] overflow-hidden">
            <span className="block">{splitChars('Naveen Dudhyal.')}</span>
            <span className="block text-white/35">{splitChars('Technical Lead.')}</span>
            <span className="block text-cyan-400">{splitChars('Ships at scale.')}</span>
          </h1>

          <p className="hero-sub text-base sm:text-lg text-white/55 leading-relaxed max-w-xl">
            I design, build and ship production-grade web platforms with
            <span className="text-white"> React, Next.js, Node.js and TypeScript</span> — deployed on
            <span className="text-white"> AWS &amp; Azure</span> with battle-tested CI/CD. Trusted by global teams to deliver fast.
          </p>

          <div className="hero-sub h-7 sm:h-8 overflow-hidden">
            <p
              ref={roleRef}
              className="text-xs sm:text-sm font-medium text-white/60 bg-white/[0.03] border border-white/[0.08]
                         inline-block px-3 py-1 rounded-full backdrop-blur-md"
            >
              {RotatingRoles[0]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a href="#Hire" className="hero-cta">
              <Magnetic strength={0.35}>
                <button
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium
                             bg-white text-slate-950 hover:bg-cyan-400 transition-colors duration-300"
                >
                  Start a project
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-slate-950 text-white
                                   group-hover:translate-x-0.5 transition-transform">
                    <FaArrowDown className="text-[10px]" />
                  </span>
                </button>
              </Magnetic>
            </a>
            <a href={RESUME_URL} download className="hero-cta">
              <Magnetic strength={0.25}>
                <button
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium
                             border border-white/12 bg-white/[0.03] text-white hover:bg-white/[0.06] transition-colors"
                  aria-label="Download resume"
                >
                  <FaDownload className="text-white/60" /> Download CV
                </button>
              </Magnetic>
            </a>
            <a href="#Projects" className="hero-cta">
              <button className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-white/55 hover:text-white">
                See selected work <span aria-hidden>↗</span>
              </button>
            </a>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1">
            {HomeContents.map((pro, i) => (
              <a
                href={pro.link}
                key={i}
                aria-label={pro.name}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon h-10 w-10 rounded-full bg-white/[0.03] border border-white/10
                           backdrop-blur-md flex items-center justify-center text-sm text-white/70
                           hover:text-cyan-400 hover:border-cyan-400/40 transition-colors duration-300"
              >
                {pro?.icon}
              </a>
            ))}
          </div>

          <ul className="flex flex-wrap gap-2 pt-1">
            {TrustBadges.map((b, i) => (
              <li
                key={i}
                className="trust-badge flex items-center gap-1.5 text-[11px] sm:text-xs
                           bg-white/[0.025] border border-white/[0.06] px-2.5 py-1 rounded-full text-white/55"
              >
                <span className="h-1 w-1 rounded-full bg-emerald-400" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex flex-col items-center gap-8 max-w-md">
          <div ref={imageWrapRef} className="relative will-change-transform">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/[0.18] via-white/[0.04] to-cyan-400/30" />
            <div className="absolute -inset-6 rounded-[2rem] border border-white/[0.05]" />
            <div className="absolute -inset-12 rounded-[2.5rem] border border-white/[0.03]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_AVATAR}
              alt="Naveen Dudhyal — Senior Full-Stack Engineer"
              className="relative h-[20rem] sm:h-[28rem] w-auto rounded-3xl object-cover grayscale-[0.15]"
              loading="eager"
            />
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/50 bg-[#050608] px-3 py-1 rounded-full border border-white/[0.08]">
              <span className="h-1 w-1 rounded-full bg-cyan-400" /> Engineering portfolio
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
            {HeroStats.map((s, i) => (
              <div
                key={i}
                className="hero-stat text-center px-2 py-3 rounded-xl bg-white/[0.025] border border-white/[0.06]"
              >
                <p
                  className="hero-stat-num text-xl sm:text-2xl font-semibold text-white tabular-nums tracking-tight"
                  data-value={s.value}
                >
                  0
                </p>
                <p className="text-[10px] text-white/45 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite tech marquee — pure CSS keyframes, GSAP-augmented hover pause */}
      <div className="relative mt-20 sm:mt-28 max-w-[100rem] mx-auto">
        <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/35 mb-6">
          Stack I work with daily
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="marquee-track flex gap-3 w-max">
            {marqueeStack.map((t, i) => (
              <span
                key={i}
                className="shrink-0 inline-flex items-center gap-2 text-xs sm:text-sm text-white/60
                           bg-white/[0.025] border border-white/[0.06] px-4 py-2 rounded-full whitespace-nowrap"
              >
                <span className="text-base text-cyan-400/80">{t.icon}</span>
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
