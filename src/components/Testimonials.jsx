import React, { useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { TestimonialsContent } from './constants/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef(null);
  const testimonialRefs = useRef([]);

  const setTestimonialRef = (el, index) => {
    testimonialRefs.current[index] = el;
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
              '.testimonials-title',
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

            // Animate testimonial cards
            testimonialRefs.current.forEach((el, i) => {
              if (el) {
                gsap.fromTo(
                  el,
                  { y: isDesktop ? 80 : 40, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: isDesktop ? 1 : 0.8,
                    ease: 'power2.out',
                    delay: i * 0.2,
                    scrollTrigger: {
                      trigger: el,
                      start: 'top 90%',
                      toggleActions: 'play none none reverse',
                      // markers: true, // Uncomment for debugging
                    },
                  }
                );
              }
            });
          }
        }
      );

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!TestimonialsContent || TestimonialsContent.length === 0) {
    return <div className="text-center text-white text-lg">No testimonials available</div>;
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center gap-6 p-4 sm:p-16 bg-indigo-400/50"
      id="Testimonials"
    >
      <h1 className="text-xl sm:text-4xl font-bold flex gap-2 items-center text-black testimonials-title">
        <FaQuoteLeft />
        Testimonials
      </h1>
      <div className="flex flex-col gap-4 sm:gap-6 w-[90%] sm:w-[40rem]">
        {TestimonialsContent.map((testimonial, i) => (
          <div
            key={i}
            ref={(el) => setTestimonialRef(el, i)}
            className="bg-white/80 p-4 sm:p-6 rounded-xl shadow-black/80 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <p className="text-xs sm:text-lg italic text-gray-800">"{testimonial.quote}"</p>
            <p className="text-xs sm:text-base font-semibold text-indigo-900 mt-2">
              — {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;