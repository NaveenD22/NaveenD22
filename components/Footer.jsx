import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLinks, AboutMeContents, HomeContents } from './constants/constants';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050608] text-white pt-20 pb-8 px-4 sm:px-10 border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/15 bg-white/[0.03]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            </span>
            <span className="text-base font-semibold tracking-tight">
              Naveen <span className="text-white/40">/</span> <span className="text-cyan-400">dev</span>
            </span>
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            Senior full-stack engineer building modern, scalable web platforms with React, Next.js, AWS &amp; Azure — for teams worldwide.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {HomeContents.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={p.name}
                className="h-9 w-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center
                           text-white/70 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
              >
                {p.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Explore</h3>
          {NavLinks.map((link, i) => (
            <a
              key={i}
              href={link.Links}
              className="text-sm text-white/65 hover:text-white inline-flex items-center gap-2 transition-colors"
            >
              <span className="h-px w-3 bg-white/20" /> {link.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Contact</h3>
          <a
            href={`mailto:${AboutMeContents.email}`}
            className="text-sm text-white/65 hover:text-white inline-flex items-center gap-2 break-all transition-colors"
          >
            <FaEnvelope className="text-cyan-400 flex-shrink-0 text-xs" /> {AboutMeContents.email}
          </a>
          <a
            href={`tel:${AboutMeContents.phone.replace(/[^+\d]/g, '')}`}
            className="text-sm text-white/65 hover:text-white inline-flex items-center gap-2 transition-colors"
          >
            <FaPhone className="text-cyan-400 flex-shrink-0 text-xs" /> {AboutMeContents.phone}
          </a>
          <p className="text-sm text-white/65 inline-flex items-center gap-2">
            <FaMapMarkerAlt className="text-cyan-400 flex-shrink-0 text-xs" /> {AboutMeContents.place}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">Have a project?</h3>
          <p className="text-sm text-white/55 leading-relaxed">
            Free 30-minute discovery call. Clear plan and quote within 48 hours.
          </p>
          <a href="#Hire">
            <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                               bg-white text-slate-950 hover:bg-cyan-400 transition-colors">
              Start a project <span aria-hidden>→</span>
            </button>
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-16 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row gap-2 justify-between items-center text-xs text-white/40">
        <p>© {year} Naveen Dudhyal. All rights reserved.</p>
        <p className="font-mono tracking-tight">
          designed &amp; built with care · bangalore <span className="text-cyan-400">●</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
