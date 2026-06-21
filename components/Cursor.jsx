'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Hardware-accelerated custom cursor with magnetic hover state.
 * - dot: precise pointer (instant)
 * - ring: soft trailing halo with quickTo for buttery 60fps follow
 * - Expands on `a, button, [data-magnetic], input, textarea`
 */
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

    const onMove = (e) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const expand = () => {
      gsap.to(ring, { scale: 1.8, borderColor: 'rgba(34,211,238,0.9)', duration: 0.3, ease: 'power3.out' });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };
    const collapse = () => {
      gsap.to(ring, { scale: 1, borderColor: 'rgba(255,255,255,0.35)', duration: 0.3, ease: 'power3.out' });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };
    const hide = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const show = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mouseenter', show);

    const interactive = 'a, button, [data-magnetic], input, textarea, [role="button"], details summary';
    const delegate = (e) => {
      if (e.target.closest(interactive)) expand();
    };
    const delegateOut = (e) => {
      if (e.target.closest(interactive)) collapse();
    };
    document.addEventListener('mouseover', delegate);
    document.addEventListener('mouseout', delegateOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mouseenter', show);
      document.removeEventListener('mouseover', delegate);
      document.removeEventListener('mouseout', delegateOut);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block
                   h-8 w-8 rounded-full border border-white/35 mix-blend-difference"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block
                   h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
};

export default Cursor;
