'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLinks } from './constants/constants';
import { gsap } from 'gsap';
import Magnetic from './Magnetic';

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const pillRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const offsets = NavLinks.map((link) => {
        const el = document.querySelector(link.Links);
        if (!el) return Infinity;
        const rect = el.getBoundingClientRect();
        return Math.abs(rect.top - 120);
      });
      const minIdx = offsets.indexOf(Math.min(...offsets));
      if (minIdx >= 0) setActiveIdx(minIdx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated active-link pill that slides between items
  useEffect(() => {
    const target = linkRefs.current[activeIdx];
    const pill = pillRef.current;
    if (!target || !pill) return;
    const parent = target.parentElement.getBoundingClientRect();
    const rect = target.getBoundingClientRect();
    gsap.to(pill, {
      x: rect.left - parent.left,
      width: rect.width,
      duration: 0.55,
      ease: 'expo.out',
      opacity: 1,
    });
  }, [activeIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        y: -12,
        opacity: 0,
        duration: 0.7,
        ease: 'expo.out',
        stagger: 0.06,
        delay: 0.1,
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (mobile && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [mobile]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050608]/70 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-6 lg:px-10 flex justify-between items-center text-white">
        <a href="#Home" aria-label="Home" className="nav-item flex items-center gap-2.5 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/[0.03]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          </span>
          <span className="text-base sm:text-lg font-semibold tracking-tight">
            Naveen <span className="text-white/40">/</span> <span className="text-cyan-400">dev</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center relative">
          <span
            ref={pillRef}
            aria-hidden
            className="absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-white/[0.06] border border-white/10 opacity-0 pointer-events-none"
            style={{ left: 0, width: 0 }}
          />
          {NavLinks.map((link, i) => (
            <a
              key={i}
              ref={(el) => (linkRefs.current[i] = el)}
              href={link.Links}
              title={link.description}
              className={`nav-item relative px-3.5 py-2 text-sm font-medium tracking-tight rounded-full transition-colors z-10
                ${i === activeIdx ? 'text-white' : 'text-white/55 hover:text-white/90'}`}
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 nav-item">
          <a href="#Hire">
            <Magnetic strength={0.4}>
              <button
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                           bg-white text-slate-950 hover:bg-cyan-400 transition-colors duration-300"
              >
                Hire Me
                <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </Magnetic>
          </a>
        </div>

        <button
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-xl nav-item h-9 w-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobile && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-[#050608]/95 backdrop-blur-xl
                     border-t border-white/[0.06]"
        >
          <nav className="flex flex-col py-3">
            {NavLinks.map((link, i) => (
              <a
                key={i}
                href={link.Links}
                onClick={() => setMobile(false)}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium border-l-2 transition
                  ${
                    i === activeIdx
                      ? 'text-cyan-400 border-cyan-400 bg-white/[0.03]'
                      : 'text-white/70 border-transparent hover:bg-white/[0.03] hover:text-white'
                  }`}
              >
                <span className="text-base text-white/40">{link.icons}</span>
                {link.title}
              </a>
            ))}
            <a href="#Hire" onClick={() => setMobile(false)} className="px-6 mt-2 mb-2">
              <button className="w-full py-2.5 rounded-full text-sm font-medium bg-white text-slate-950">
                Hire Me →
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
