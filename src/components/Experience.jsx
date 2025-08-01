import React, { useEffect, useRef } from 'react';
import { FaWrench } from 'react-icons/fa';
import { ExperiencContent } from './constants/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const experienceItemsRef = useRef([]);

  const setExperienceItemRef = (el, index) => {
    experienceItemsRef.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 640px)",
        isMobile: "(max-width: 639px)",
      }, (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Animate title
        gsap.fromTo(
          '.experience-title',
          { x: isDesktop ? "-20%" : "-10%", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate "Why Me?" section
        gsap.fromTo(
          '.experience-why',
          { x: isDesktop ? "-20%" : "-10%", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.experience-why',
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate each timeline item
        experienceItemsRef.current.forEach((el, i) => {
          if (el) {
            gsap.fromTo(
              el,
              { y: isDesktop ? 100 : 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                delay: i * 0.2,
                scrollTrigger: {
                  trigger: el,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!ExperiencContent || ExperiencContent.length === 0) {
    return <div>No experience data available</div>;
  }

  return (
    <div
      ref={containerRef}
      className="gap-10 bg-black/20 text-center p-4 sm:p-6 py-10 flex flex-col justify-between items-center"
      id="Experience"
    >
      <div className="flex w-full justify-center items-center gap-2 experience-title">
        <p className="text-2xl sm:text-3xl"><FaWrench /></p>
        <h1 className="text-2xl sm:text-4xl font-bold">Experience</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 w-full justify-between items-center">
        <div className="flex flex-col gap-6 sm:gap-10 w-full sm:w-2/3 items-center p-2 sm:p-10 justify-center experience-why">
          <h2 className="text-xl sm:text-3xl font-medium">Why Me?</h2>
          <ul className="space-y-4 text-xs sm:text-xl font-normal list-decimal p-2 sm:p-4">
            <li className="bg-gray-300 p-2 rounded-md">
              Enforce development with clean, maintainable code standards across projects.
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              Stay updated on the latest features of React.js, Next.js, and AWS, guiding teams to adopt cutting-edge technologies.
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              I lead teams to deliver SEO-friendly applications at scale, optimizing for search engine performance.
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              Oversee responsive, mobile-first designs, ensuring cross-platform compatibility under my leadership.
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              Quickly grasp new challenges and mentor teams to enhance their technical and problem-solving skills.
            </li>
            <li className="bg-gray-300 p-2 rounded-md">
              Align team efforts with company vision, driving product management strategies and agile workflows.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 w-full sm:w-1/2">
          {ExperiencContent.map((exp, i) => (
            <div
              className="flex w-full justify-center sm:justify-start items-center"
              key={i}
              ref={(el) => setExperienceItemRef(el, i)}
            >
              <div className="flex items-center justify-center relative">
                <div className="h-[12rem] sm:h-[14rem] w-2 bg-slate-900 absolute left-5 -z-10" />
                <p className="text-xl sm:text-3xl bg-white/60 p-2 w-12 sm:w-14 rounded-full border-2 border-yellow-700 flex shadow-amber-700 shadow-lg">
                  {exp?.bag}
                </p>
                <p className="text-xl sm:text-2xl text-yellow-700">{exp?.arrow}</p>
              </div>
              <div className="flex flex-col bg-yellow-800 w-2/3 sm:w-3/4 items-start gap-2 p-4 rounded-2xl">
                <h2 className="text-base sm:text-2xl font-semibold">{exp?.title}</h2>
                <h3 className="text-sm sm:text-xl font-medium">{exp?.role}</h3>
                <p className="text-sm sm:text-xl">{exp?.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;