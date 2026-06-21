'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !barRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: '0% 50%' });
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-white/[0.04] pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
      />
    </div>
  );
};

export default ScrollProgress;
