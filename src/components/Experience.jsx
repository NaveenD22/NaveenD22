import React, { useEffect, useRef } from 'react';
import { FaWrench } from 'react-icons/fa';
import { ExperienceContent, AboutMeContents } from './constants/constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const experienceItemsRef = useRef([]);
  const defaultContentRefs = useRef([]);
  const achievementRefs = useRef([]);

  const setExperienceItemRef = (el, index) => {
    experienceItemsRef.current[index] = el;
  };

  const setDefaultContentRef = (el, index) => {
    defaultContentRefs.current[index] = el;
  };

  const setAchievementRef = (el, index) => {
    achievementRefs.current[index] = el;
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
              '.experience-title',
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

            // Animate "Why Me?" section
            gsap.fromTo(
              '.experience-why',
              { x: isDesktop ? '-20%' : '-10%', opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: isDesktop ? 1 : 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: '.experience-why',
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Uncomment for debugging
                },
              }
            );

            // Animate each timeline item
            experienceItemsRef.current.forEach((el, i) => {
              if (el) {
                gsap.fromTo(
                  el,
                  { y: isDesktop ? 80 : 40, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: isDesktop ? 1 : 0.8,
                    ease: 'power2.out',
                    delay: i * 0.15,
                    scrollTrigger: {
                      trigger: el,
                      start: 'top 90%',
                      toggleActions: 'play none none reverse',
                      // markers: true, // Uncomment for debugging
                    },
                  }
                );

                // Hover animation for content toggle
                const defaultEl = defaultContentRefs.current[i];
                const achievementEl = achievementRefs.current[i];
                if (defaultEl && achievementEl) {
                  gsap.set(achievementEl, { x: isDesktop ? '-20%' : '-10%', opacity: 0 });
                  gsap.set(defaultEl, { x: 0, opacity: 1 });

                  el.addEventListener('mouseenter', () => {
                    gsap.to(defaultEl, {
                      x: isDesktop ? '20%' : '10%',
                      opacity: 0,
                      duration: isDesktop ? 0.5 : 0.4,
                      ease: 'power2.in',
                    });
                    gsap.to(achievementEl, {
                      x: 0,
                      opacity: 1,
                      duration: isDesktop ? 0.5 : 0.4,
                      ease: 'power2.out',
                    });
                  });
                  el.addEventListener('mouseleave', () => {
                    gsap.to(defaultEl, {
                      x: 0,
                      opacity: 1,
                      duration: isDesktop ? 0.5 : 0.4,
                      ease: 'power2.out',
                    });
                    gsap.to(achievementEl, {
                      x: isDesktop ? '-20%' : '-10%',
                      opacity: 0,
                      duration: isDesktop ? 0.5 : 0.4,
                      ease: 'power2.in',
                    });
                  });
                }
              }
            });
          }
        }
      );

      return () => {
        mm.revert();
        // Clean up event listeners
        experienceItemsRef.current.forEach((el, i) => {
          if (el) {
            el.removeEventListener('mouseenter', () => {});
            el.removeEventListener('mouseleave', () => {});
          }
        });
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!ExperienceContent || ExperienceContent.length === 0) {
    return <div className="text-center text-white text-lg">No experience data available</div>;
  }

  return (
    <div
      ref={containerRef}
      className="gap-8 bg-black/20 text-center p-3 sm:p-6 py-8 sm:py-10 flex flex-col justify-between items-center"
      id="Experience"
    >
      <div className="flex w-full justify-center items-center gap-2 experience-title">
        <p className="text-xl sm:text-3xl"><FaWrench /></p>
        <h1 className="text-xl sm:text-4xl font-bold">Experience</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 w-[90%] sm:w-full justify-between items-center">
        <div className="flex flex-col gap-4 sm:gap-8 w-full sm:w-2/3 items-center p-2 sm:p-8 justify-center experience-why">
          <h2 className="text-lg sm:text-3xl font-medium">Why Me?</h2>
          <ul className="space-y-3 text-xs sm:text-lg font-normal list-none p-2 sm:p-4">
            {AboutMeContents.achievements.map((achievement, index) => (
              <li key={index} className="bg-gray-300 p-2 rounded-md" aria-label={`Achievement ${index + 1}`}>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-1/2">
          {ExperienceContent.map((exp, i) => (
            <div
              className="flex w-full justify-center sm:justify-start items-center group"
              key={i}
              ref={(el) => setExperienceItemRef(el, i)}
            >
              <div className="flex items-center justify-center relative">
                <div className="h-[10rem] sm:h-[12rem] w-2 bg-slate-900 absolute left-5 -z-10" />
                <p className="text-lg sm:text-2xl bg-white/60 p-2 w-10 sm:w-12 rounded-full border-2 border-yellow-700 flex shadow-amber-700 shadow-lg">
                  {exp?.bag}
                </p>
                <p className="text-lg sm:text-xl text-yellow-700">{exp?.arrow}</p>
              </div>
              <div className="flex flex-col bg-yellow-800 w-[90%] sm:w-3/5 items-start gap-2 p-3 sm:p-4 rounded-2xl min-h-[8rem] sm:min-h-[10rem] relative">
                <div
                  ref={(el) => setDefaultContentRef(el, i)}
                  className="absolute inset-0 flex flex-col gap-2 p-3 sm:p-4 group-hover:opacity-0"
                  aria-hidden={false}
                >
                  <h2 className="text-sm sm:text-xl font-semibold">{exp?.title}</h2>
                  <h3 className="text-xs sm:text-lg font-medium">{exp?.role}</h3>
                  <p className="text-xs sm:text-lg">{exp?.period}</p>
                </div>
                <ul
                  ref={(el) => setAchievementRef(el, i)}
                  className="absolute inset-0 text-xs sm:text-base list-none pl-4 p-3 sm:p-4 opacity-0 group-hover:opacity-100"
                  aria-hidden={true}
                >
                  {exp?.achievements?.map((achievement, index) => (
                    <li key={index} aria-label={`Achievement ${index + 1}`}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;