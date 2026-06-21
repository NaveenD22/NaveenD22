'use client';

import React, { useEffect, useRef } from 'react';
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaSyncAlt,
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const steps = [
  {
    n: '01',
    title: 'Discover',
    icon: <FaSearch />,
    headline: 'Understand the product. Question every assumption.',
    body:
      'A 30-minute call. I dig into your users, constraints, business goals and timeline. You get a clear shared brief — no jargon, no fluff.',
    bullets: ['Stakeholder interview', 'Goals & success metrics', 'Risk & scope mapping', 'Lightweight written brief'],
    eta: 'Day 0 – 2',
  },
  {
    n: '02',
    title: 'Architect',
    icon: <FaPencilRuler />,
    headline: 'Pick the right stack. Design for change.',
    body:
      'High-level system design, infra plan and tech selection — biased toward boring, proven tools. You see the blueprint before a single line of code.',
    bullets: ['System & data architecture', 'AWS / Azure infra plan', 'CI/CD strategy', 'Performance & cost budget'],
    eta: 'Day 2 – 5',
  },
  {
    n: '03',
    title: 'Build',
    icon: <FaCode />,
    headline: 'Ship value every sprint. No surprises.',
    body:
      'Two-week sprints. Daily progress. Preview environments per PR. You can click, comment and steer the product from day one — not three months in.',
    bullets: ['React / Next.js / Node', 'Preview URLs on every PR', 'Code reviews & tests', 'Weekly stakeholder demo'],
    eta: 'Week 1 – N',
  },
  {
    n: '04',
    title: 'Ship',
    icon: <FaRocket />,
    headline: 'Zero-downtime launches. Observable by default.',
    body:
      'Blue-green or canary deploys with automated rollbacks, Lighthouse and Sentry gates. Launch day is a non-event — exactly how it should be.',
    bullets: ['GitHub Actions / Azure DevOps', 'Sentry + Datadog wired in', 'Blue-green / canary deploys', 'Runbooks & on-call docs'],
    eta: 'Launch day',
  },
  {
    n: '05',
    title: 'Iterate',
    icon: <FaSyncAlt />,
    headline: 'Stay your engineering partner. Long after launch.',
    body:
      'Monthly reviews of metrics, Core Web Vitals and infra cost. We turn data into the next sprint. I work with most clients for years — not weeks.',
    bullets: ['Monthly performance audit', 'Roadmap & RFC reviews', 'Cost & security health checks', 'Retainer or on-demand'],
    eta: 'Forever (we hope)',
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isDesktop: '(min-width: 1024px) and (hover: hover)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions;
          if (reduceMotion) return;

          // Section header reveal
          gsap.fromTo(
            '.pr-eyebrow, .pr-title, .pr-sub',
            { y: 18, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08,
              scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
            }
          );

          if (!isDesktop) {
            // ── Mobile / tablet: simple stacked reveal, no pin ─────────
            gsap.utils.toArray('.step-panel').forEach((panel) => {
              gsap.fromTo(
                panel,
                { y: 40, opacity: 0 },
                {
                  y: 0, opacity: 1, duration: 0.9, ease: 'expo.out',
                  scrollTrigger: { trigger: panel, start: 'top 80%', toggleActions: 'play none none reverse' },
                }
              );
            });
            return;
          }

          // ── Desktop: pinned horizontal scroll ───────────────────────
          const track = trackRef.current;
          if (!track) return;
          const panels = gsap.utils.toArray('.step-panel', track);

          const totalX = () => track.scrollWidth - window.innerWidth;
          const tween = gsap.to(track, {
            x: () => -totalX(),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: () => `+=${totalX() + window.innerHeight * 0.4}`,
              pin: true,
              anticipatePin: 1,
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          });

          // Progress bar tied to scrub
          if (progressRef.current) {
            gsap.set(progressRef.current, { scaleX: 0, transformOrigin: '0% 50%' });
            gsap.to(progressRef.current, {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: () => `+=${totalX() + window.innerHeight * 0.4}`,
                scrub: 0.5,
              },
            });
          }

          // Per-panel content reveal as it enters viewport
          panels.forEach((panel, i) => {
            const content = panel.querySelectorAll('.step-fade');
            const numeral = panel.querySelector('.step-numeral');
            const ring = panel.querySelector('.step-ring');

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tween,
                start: 'left 70%',
                end: 'right 30%',
                toggleActions: 'play reverse play reverse',
                onEnter: () => updateCounter(i + 1),
                onEnterBack: () => updateCounter(i + 1),
              },
            });

            tl.fromTo(numeral, { yPercent: 30, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: 'expo.out' })
              .fromTo(content, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out', stagger: 0.08 }, '-=0.5');

            if (ring) {
              gsap.to(ring, {
                rotation: 360,
                ease: 'none',
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: tween,
                  start: 'left right',
                  end: 'right left',
                  scrub: true,
                },
              });
            }
          });

          const updateCounter = (n) => {
            if (!counterRef.current) return;
            counterRef.current.textContent = String(n).padStart(2, '0');
          };
        }
      );
      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Process"
      ref={sectionRef}
      className="relative bg-[#050608] text-white border-t border-white/[0.05] overflow-hidden
                 lg:h-screen lg:min-h-[640px]"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-40" />

      {/* Header — pinned visually above the horizontal track on desktop */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 pt-24 lg:pt-20 pb-4 lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-5xl">
          <div>
            <p className="pr-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
              How I work
            </p>
            <h2 className="pr-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-3">
              Five steps. <span className="text-white/40">Zero surprises.</span>
            </h2>
          </div>
          <p className="pr-sub text-sm text-white/55 max-w-sm">
            From the first call to long after launch — the exact playbook I use with every client.
          </p>
        </div>
      </div>

      {/* DESKTOP: pinned horizontal track. MOBILE: vertical stack. */}
      <div className="lg:h-full lg:flex lg:items-center">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row lg:flex-nowrap gap-6 lg:gap-0 px-4 sm:px-10 lg:px-0 pb-16 lg:pb-0
                     will-change-transform"
        >
          {/* Leading spacer on desktop so first panel starts past the heading */}
          <div className="hidden lg:block flex-shrink-0" style={{ width: '8vw' }} />

          {steps.map((s, i) => (
            <article
              key={i}
              className="step-panel relative flex-shrink-0
                         lg:w-[78vw] lg:max-w-[1100px] lg:h-[68vh]
                         w-full
                         rounded-2xl border border-white/[0.06] bg-[#070809]
                         p-8 sm:p-12 lg:p-16 lg:mx-4
                         flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center overflow-hidden"
            >
              {/* Left: huge step numeral + rotating ring */}
              <div className="relative flex-shrink-0 flex items-center justify-center lg:w-[40%]">
                <div className="step-ring absolute h-56 w-56 sm:h-72 sm:w-72 rounded-full border border-dashed border-white/[0.08]" />
                <div className="step-ring absolute h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-white/[0.04]" />
                <div className="relative flex flex-col items-center">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl flex items-center justify-center text-2xl
                                  bg-white/[0.03] border border-white/[0.08] text-cyan-400">
                    {s.icon}
                  </div>
                  <p className="step-numeral text-[7rem] sm:text-[12rem] leading-none font-semibold text-white/[0.08]
                                tracking-[-0.05em] mt-2 select-none">
                    {s.n}
                  </p>
                </div>
              </div>

              {/* Right: content */}
              <div className="flex-1 flex flex-col gap-4 lg:gap-5 max-w-xl">
                <div className="step-fade flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-mono">
                    Step {s.n} · {s.eta}
                  </span>
                  <span className="h-px flex-1 bg-white/[0.08]" />
                </div>
                <h3 className="step-fade text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] leading-tight">
                  {s.title}. <span className="text-white/55">{s.headline}</span>
                </h3>
                <p className="step-fade text-sm sm:text-base text-white/65 leading-relaxed">{s.body}</p>
                <ul className="step-fade grid sm:grid-cols-2 gap-2 mt-2">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-white/70">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {/* Trailing spacer */}
          <div className="hidden lg:block flex-shrink-0" style={{ width: '8vw' }} />
        </div>
      </div>

      {/* Bottom progress bar + live step counter (desktop only) */}
      <div className="hidden lg:flex absolute bottom-6 left-10 right-10 z-10 items-center gap-4">
        <span ref={counterRef} className="text-xs font-mono text-cyan-400 tabular-nums w-8">
          01
        </span>
        <div className="flex-1 h-px bg-white/[0.08] overflow-hidden">
          <div ref={progressRef} className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
        </div>
        <span className="text-xs font-mono text-white/40 w-8 text-right">05</span>
      </div>
    </section>
  );
};

export default Process;
