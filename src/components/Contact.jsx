import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaPlus, FaTelegramPlane } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef();
  const containerRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b0ynq31', 'template_1zkwylw', form.current, 'QXeWmpYvWOMOVOgPg')
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success('Email has been successfully sent');
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send email. Please try again.');
        }
      );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 640px)',
          isMobile: '(max-width: 639px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (context) => {
          const { isDesktop, isMobile, reduceMotion } = context.conditions;

          if (!reduceMotion) {
            // Animate title
            gsap.fromTo(
              '.contact-title',
              { x: isDesktop ? '-20%' : '-10%', opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: isDesktop ? 1 : 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Uncomment for debugging
                },
              }
            );

            // Animate form inputs and button with stagger
            gsap.fromTo(
              '.contact-field',
              { y: isDesktop ? 80 : 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: isDesktop ? 1 : 0.8,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Uncomment for debugging
                },
              }
            );
          }
        }
      );

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-10 sm:py-16 bg-indigo-400/50 flex flex-col justify-start items-center gap-4 sm:gap-6"
      id="Hire"
    >
      <div className="flex p-4 sm:p-8 gap-2 w-full items-center justify-center font-medium contact-title">
        <p className="text-lg sm:text-4xl"><FaPlus /></p>
        <h1 className="text-lg sm:text-4xl">
          Hire<span className="text-orange-700"> Me</span>
        </h1>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[90%] sm:w-[40%] rounded-xl flex flex-col gap-3 sm:gap-4 items-end"
      >
        <div className="flex w-full bg-white/30 flex-col gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl">
          <input
            type="text"
            required
            className="w-full bg-black/50 h-12 sm:h-14 rounded-xl px-2 font-bold contact-field"
            placeholder="Name"
            name="from_name"
            aria-label="Your name"
          />
          <input
            type="tel"
            required
            className="w-full bg-black/50 h-12 sm:h-14 rounded-xl px-2 font-bold contact-field"
            placeholder="Phone"
            name="user_phone"
            aria-label="Your phone number"
          />
          <input
            type="email"
            required
            className="w-full bg-black/50 h-12 sm:h-14 rounded-xl px-2 font-bold contact-field"
            placeholder="Email"
            name="user_email"
            aria-label="Your email address"
          />
          <textarea
            className="w-full bg-black/40 h-24 sm:h-32 rounded-xl p-2 text-base sm:text-xl contact-field"
            placeholder="Message"
            name="message"
            aria-label="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-900 font-semibold flex p-2 sm:p-3 gap-2 items-center rounded-3xl w-28 sm:w-32 justify-center text-white shadow-black/80 shadow-xl text-base sm:text-xl contact-field focus:outline-none focus:ring-2 focus:ring-indigo-700"
          aria-label="Submit contact form"
        >
          Submit <span className="rounded-full bg-white p-1 text-black"><FaTelegramPlane /></span>
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default Contact;