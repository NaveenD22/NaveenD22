'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineSupport } from 'react-icons/hi';
import { NavLinks } from './constants/constants';
import { gsap } from 'gsap';

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.2,
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (mobile && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [mobile]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl shadow-xl shadow-indigo-950/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-6 lg:px-10 flex justify-between items-center text-white">
        <a href="#Home" aria-label="Home" className="nav-item flex items-center gap-2">
          <HiOutlineSupport className="text-2xl sm:text-3xl text-amber-300" />
          <span className="text-lg sm:text-2xl font-extrabold">
            Naveen<span className="bg-gradient-to-r from-amber-300 to-pink-500 bg-clip-text text-transparent">.dev</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NavLinks.map((link, i) => (
            <a
              key={i}
              href={link.Links}
              title={link.description}
              className={`nav-item relative px-3 py-2 text-sm xl:text-base font-medium rounded-full transition
                ${
                  i === activeIdx
                    ? 'text-amber-300'
                    : 'text-white/80 hover:text-white'
                }`}
            >
              {link.title}
              {i === activeIdx && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-amber-300 to-pink-500" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block nav-item">
          <a href="#Hire">
            <button
              className="px-5 py-2 rounded-full text-sm font-semibold
                         bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500
                         shadow-lg shadow-fuchsia-900/30 hover:scale-105 transition-transform"
            >
              Hire Me →
            </button>
          </a>
        </div>

        <button
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-2xl nav-item"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobile && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl
                     border-t border-white/10 shadow-2xl"
        >
          <nav className="flex flex-col py-4">
            {NavLinks.map((link, i) => (
              <a
                key={i}
                href={link.Links}
                onClick={() => setMobile(false)}
                className={`flex items-center gap-3 px-6 py-3 text-base font-medium border-l-4 transition
                  ${
                    i === activeIdx
                      ? 'text-amber-300 border-amber-300 bg-white/5'
                      : 'text-white/85 border-transparent hover:bg-white/5 hover:text-white'
                  }`}
              >
                <span className="text-lg">{link.icons}</span>
                {link.title}
              </a>
            ))}
            <a href="#Hire" onClick={() => setMobile(false)} className="px-6 mt-3">
              <button
                className="w-full py-3 rounded-full text-base font-semibold
                           bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500"
              >
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
