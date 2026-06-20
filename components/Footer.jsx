import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart, FaArrowRight } from 'react-icons/fa';
import { NavLinks, AboutMeContents, HomeContents } from './constants/constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white pt-14 pb-6 px-4 sm:px-10 overflow-hidden">
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[40rem] h-40 rounded-full bg-fuchsia-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Naveen<span className="bg-gradient-to-r from-amber-300 to-pink-500 bg-clip-text text-transparent">.dev</span>
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Senior Full-Stack Engineer building modern, scalable web platforms with React, Next.js, AWS & Azure — for teams worldwide.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {HomeContents.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center
                           hover:bg-white hover:text-indigo-900 transition"
              >
                {p.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold uppercase tracking-widest text-amber-300">Explore</h3>
          {NavLinks.map((link, i) => (
            <a
              key={i}
              href={link.Links}
              className="text-sm text-white/80 hover:text-white inline-flex items-center gap-2 transition"
            >
              <FaArrowRight className="text-amber-300 text-xs" /> {link.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold uppercase tracking-widest text-amber-300">Contact</h3>
          <a
            href={`mailto:${AboutMeContents.email}`}
            className="text-sm text-white/80 hover:text-white inline-flex items-center gap-2 break-all"
          >
            <FaEnvelope className="text-amber-300 flex-shrink-0" /> {AboutMeContents.email}
          </a>
          <a
            href={`tel:${AboutMeContents.phone.replace(/[^+\d]/g, '')}`}
            className="text-sm text-white/80 hover:text-white inline-flex items-center gap-2"
          >
            <FaPhone className="text-amber-300 flex-shrink-0" /> {AboutMeContents.phone}
          </a>
          <p className="text-sm text-white/80 inline-flex items-center gap-2">
            <FaMapMarkerAlt className="text-amber-300 flex-shrink-0" /> {AboutMeContents.place}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold uppercase tracking-widest text-amber-300">Have a project?</h3>
          <p className="text-sm text-white/70">
            Free 30-minute discovery call. Get a clear plan and a quote within 48 hours.
          </p>
          <a href="#Hire">
            <button
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500
                         text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Start a project <FaArrowRight />
            </button>
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs sm:text-sm text-white/60">
        <p>© {year} Naveen Dudhyal. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Designed & built with <FaHeart className="text-pink-500 animate-pulse" /> in Bangalore
        </p>
      </div>
    </footer>
  );
};

export default Footer;
