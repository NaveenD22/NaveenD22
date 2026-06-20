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
          '.contact-title',
          { y: -20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
          }
        );

        gsap.fromTo(
          '.contact-card',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
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

  return (
    <section
      id="Hire"
      ref={containerRef}
      className="relative py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-b from-slate-50 to-indigo-100 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-72 h-72 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center contact-title">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-fuchsia-600 font-semibold">
            Let us build together
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
            Hire <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Tell me about your product — a new build, a rescue mission, a migration to AWS/Azure, a CI/CD overhaul. I respond within hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mt-10">
          {trustItems.map((t, i) => (
            <div
              key={i}
              className="contact-card flex items-center gap-3 p-4 rounded-2xl bg-white shadow-md border border-indigo-100"
            >
              <div className="h-10 w-10 rounded-xl flex items-center justify-center text-lg
                              bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white">
                {t.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{t.title}</p>
                <p className="text-xs text-slate-600">{t.des}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 mt-8">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:col-span-3 contact-card bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-100 flex flex-col gap-4"
          >
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900">Start a conversation</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                name="from_name"
                placeholder="Your name *"
                aria-label="Your name"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                required
                name="user_email"
                placeholder="Your email *"
                aria-label="Your email"
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone / WhatsApp (optional)"
              aria-label="Phone"
              className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-base
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Tell me about your project, timeline and budget…"
              aria-label="Your message"
              className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-base
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-y"
            />

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                         bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-pink-500 text-white
                         font-semibold shadow-lg shadow-indigo-300 hover:scale-[1.02] transition-transform
                         disabled:opacity-60 disabled:cursor-not-allowed
                         focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            >
              {submitting ? 'Sending…' : 'Send Message'} <FaTelegramPlane />
            </button>

            <p className="text-xs text-slate-500 inline-flex items-center gap-1.5">
              <FaCheckCircle className="text-emerald-500" /> Your message is private. No spam, ever.
            </p>
          </form>

          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="contact-card bg-gradient-to-br from-indigo-900 via-fuchsia-900 to-slate-900 text-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-bold">Prefer direct contact?</h3>
              <a
                href={`mailto:${AboutMeContents.email}?subject=Project%20Inquiry`}
                className="mt-4 flex items-center gap-3 text-sm sm:text-base hover:text-amber-300 break-all"
              >
                <FaEnvelope className="text-amber-300 flex-shrink-0" /> {AboutMeContents.email}
              </a>
              <a
                href={`tel:${AboutMeContents.phone.replace(/[^+\d]/g, '')}`}
                className="mt-3 flex items-center gap-3 text-sm sm:text-base hover:text-amber-300"
              >
                <FaPhone className="text-amber-300 flex-shrink-0" /> {AboutMeContents.phone}
              </a>
              <p className="mt-4 text-xs text-white/70">
                Based in Bangalore, India — happy to work in your timezone.
              </p>
            </div>

            <div className="contact-card bg-white rounded-3xl p-6 shadow-xl border border-indigo-100">
              <h3 className="text-lg font-bold text-slate-900">FAQ</h3>
              <div className="mt-3 space-y-3">
                {FAQContent.map((f, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-slate-200 p-3 open:bg-indigo-50"
                  >
                    <summary className="cursor-pointer text-sm font-semibold text-slate-800 list-none flex justify-between items-center">
                      {f.q}
                      <span className="text-indigo-600 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Toaster position="top-center" />
      </div>
    </section>
  );
};

export default Contact;
