'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Magnetic wrapper — applies subtle pointer-following translate to its children.
 * Wraps an element (e.g. a button or link) without changing layout.
 */
const Magnetic = ({ children, strength = 0.35, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'elastic.out(1, 0.5)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'elastic.out(1, 0.5)' });

    const onMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
      xTo(x * strength);
      yTo(y * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} data-magnetic className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  );
};

export default Magnetic;
