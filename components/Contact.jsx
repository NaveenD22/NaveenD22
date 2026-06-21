'use client';

import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaTelegramPlane,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaGlobeAmericas,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FAQContent, AboutMeContents } from './constants/constants';
import Magnetic from './Magnetic';

const Contact = () => {
  const form = useRef();
  const containerRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting(true);
    emailjs
      .sendForm('service_b0ynq31', 'template_1zkwylw', form.current, 'QXeWmpYvWOMOVOgPg')
      .then(
        () => {
          form.current.reset();
          toast.success('Message sent — I will reply within 6 hours.');
        },
        (error) => {
          console.error(error);
          toast.error('Failed to send. Please email me directly.');
        }
      )
      .finally(() => setSubmitting(false));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add({ reduceMotion: '(prefers-reduced-motion: reduce)' }, (c) => {
        if (c.conditions.reduceMotion) return;

        gsap.fromTo(
          '.ct-eyebrow, .ct-title, .ct-sub',
          { y: 16, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.contact-card',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: containerRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
          }
        );
      });
      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const trustItems = [
    { icon: <FaClock />, title: 'Avg. response < 6 hrs', des: 'Mon–Sat, IST / EST overlap' },
    { icon: <FaShieldAlt />, title: 'NDA & IP protected', des: 'Source code & docs on delivery' },
    { icon: <FaGlobeAmericas />, title: 'Worldwide remote', des: 'US, EU, UK, APAC, ME' },
  ];

  const inputCls =
    'bg-white/[0.02] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 ' +
    'focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.04] transition-colors';

  return (
    <section
      id="Hire"
      ref={containerRef}
      className="relative py-24 sm:py-32 px-4 sm:px-10 bg-[#050608] text-white border-t border-white/[0.05] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-faint pointer-events-none opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="ct-eyebrow text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/40 font-medium">
            07 — Let&rsquo;s build
          </p>
          <h2 className="ct-title text-3xl sm:text-5xl font-semibold tracking-[-0.025em] mt-4">
            Start a project. <span className="text-white/40">Get a real reply.</span>
          </h2>
          <p className="ct-sub text-sm sm:text-base text-white/55 mt-4 leading-relaxed">
            New build, rescue mission, migration to AWS/Azure, CI/CD overhaul — tell me what you need. I respond within hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px mt-12 surface rounded-2xl overflow-hidden">
          {trustItems.map((t, i) => (
            <div key={i} className="contact-card flex items-center gap-3 p-5 bg-[#070809]">
              <div className="h-9 w-9 rounded-lg flex items-center justify-center text-sm
                              bg-white/[0.03] border border-white/[0.08] text-cyan-400">
                {t.icon}
              </div>
              <div>
                <p className="text-sm font-medium tracking-tight">{t.title}</p>
                <p className="text-xs text-white/45 mt-0.5">{t.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-5 mt-6">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:col-span-3 contact-card surface rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold tracking-tight">Tell me about your product</h3>

            <div className="grid sm:grid-cols-2 gap-3">
              <input type="text" required name="from_name" placeholder="Your name *" aria-label="Your name" className={inputCls} />
              <input type="email" required name="user_email" placeholder="Your email *" aria-label="Your email" className={inputCls} />
            </div>
            <input type="tel" name="user_phone" placeholder="Phone / WhatsApp (optional)" aria-label="Phone" className={inputCls} />
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Project, timeline, budget…"
              aria-label="Your message"
              className={`${inputCls} resize-y`}
            />

            <Magnetic strength={0.25}>
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium
                           bg-white text-slate-950 hover:bg-cyan-400 transition-colors duration-300
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending…' : 'Send message'} <FaTelegramPlane />
              </button>
            </Magnetic>

            <p className="text-xs text-white/40 inline-flex items-center gap-1.5">
              <FaCheckCircle className="text-cyan-400" /> Your message is private. No spam, ever.
            </p>
          </form>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="contact-card surface rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">Prefer direct?</p>
              <a
                href={`mailto:${AboutMeContents.email}?subject=Project%20Inquiry`}
                className="mt-4 flex items-center gap-2.5 text-sm text-white/75 hover:text-cyan-400 break-all transition-colors"
              >
                <FaEnvelope className="text-cyan-400 flex-shrink-0 text-xs" /> {AboutMeContents.email}
              </a>
              <a
                href={`tel:${AboutMeContents.phone.replace(/[^+\d]/g, '')}`}
                className="mt-2 flex items-center gap-2.5 text-sm text-white/75 hover:text-cyan-400 transition-colors"
              >
                <FaPhone className="text-cyan-400 flex-shrink-0 text-xs" /> {AboutMeContents.phone}
              </a>
              <p className="mt-4 text-xs text-white/40">
                Based in Bangalore — happy to work in your timezone.
              </p>
            </div>

            <div className="contact-card surface rounded-2xl p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">FAQ</p>
              <div className="mt-4 space-y-2">
                {FAQContent.map((f, i) => (
                  <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-3.5 open:bg-white/[0.03]">
                    <summary className="cursor-pointer text-sm font-medium text-white/85 list-none flex justify-between items-center gap-3">
                      <span>{f.q}</span>
                      <span className="text-cyan-400 group-open:rotate-45 transition-transform text-lg leading-none flex-shrink-0">+</span>
                    </summary>
                    <p className="text-xs text-white/55 mt-3 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Toaster position="top-center" toastOptions={{
          style: { background: '#0a0c10', color: '#fff', border: '1px solid rgba(255,255,255,0.08)' },
        }} />
      </div>
    </section>
  );
};

export default Contact;
