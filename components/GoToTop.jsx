'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GoToTop = () => {
  const [show, setShow] = useState(false);
  const ringRef = useRef(null);

  useEffect(() => {
    const listen = () => {
      const y = document.documentElement.scrollTop || document.body.scrollTop;
      setShow(y > 400);
    };
    window.addEventListener('scroll', listen, { passive: true });
    return () => window.removeEventListener('scroll', listen);
  }, []);

  // Circular progress ring tied to scroll position
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!ringRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(ringRef.current, { strokeDasharray: 113, strokeDashoffset: 113 });
      gsap.to(ringRef.current, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      });
    });
    return () => ctx.revert();
  }, []);

  const goToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <button
      onClick={goToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full
                  bg-[#0a0c10] border border-white/10 text-white
                  flex items-center justify-center
                  transition-all duration-500
                  ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                  hover:border-cyan-400/50 hover:text-cyan-400`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 40 40" aria-hidden>
        <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
        <circle
          ref={ringRef}
          cx="20"
          cy="20"
          r="18"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <FaArrowUp className="relative text-sm" />
    </button>
  );
};

export default GoToTop;
