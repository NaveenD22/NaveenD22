import React, { useEffect, useRef } from 'react';
import { AboutMeContents } from './constants/constants';
import { FaCode, FaArrowDown } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import pdf from '../assets/Naveen_D_CV.pdf';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const containerRef = useRef(null);
  const achievementsRef = useRef(null);

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
              '.info-title',
              { x: isDesktop ? '-20%' : '-10%', opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: isDesktop ? 1 : 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Uncomment for debugging
                },
              }
            );

            // Animate image
            gsap.fromTo(
              '.info-image',
              { y: isDesktop ? 80 : 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: isDesktop ? 1.5 : 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Uncomment for debugging
                },
              }
            );

            // Animate text elements with stagger
            gsap.fromTo(
              '.info-text',
              { x: isDesktop ? '-20%' : '-10%', opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: isDesktop ? 1 : 0.8,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Uncomment for debugging
                },
              }
            );

            // Animate achievements
            gsap.fromTo(
              '.info-achievement',
              { y: isDesktop ? 80 : 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: isDesktop ? 1 : 0.8,
                ease: 'power2.out',
                stagger: 0.2,
                scrollTrigger: {
                  trigger: achievementsRef.current,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                  // markers: true, // Uncomment for debugging
                },
              }
            );

            // Animate button
            gsap.fromTo(
              '.info-button',
              { y: isDesktop ? 50 : 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: isDesktop ? 1 : 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: 'top 80%',
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

  const onButtonClick = () => {
    try {
      const pdfUrl = pdf;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Naveen-Dudhyal-CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download resume. Please try again later.');
    }
  };

  if (!AboutMeContents) {
    return <div className="text-center text-white text-lg">No about me data available</div>;
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center gap-6 p-4 sm:p-16 bg-black/20 relative"
      id="About"
    >
      <h1 className="text-xl sm:text-4xl font-bold flex gap-2 items-center text-black info-title">
        <GoPerson />
        About Me
      </h1>
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-6">
        <div className="flex flex-col items-center gap-4">
          <img
            src={AboutMeContents?.icon}
            alt="Profile avatar"
            className="h-[15rem] sm:h-[25rem] rounded-3xl mb-6 sm:mb-0 object-cover info-image"
            loading="lazy"
          />
          <div ref={achievementsRef} className="flex flex-col gap-2 w-[90%] sm:w-[30rem]">
            <h3 className="text-base sm:text-xl font-semibold text-gray-800 info-text">Key Achievements</h3>
            <ul className="text-xs sm:text-base list-disc pl-4 info-achievement">
              {AboutMeContents?.achievements?.map((achievement, index) => (
                <li key={index} aria-label={`Achievement ${index + 1}`}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 w-[90%] sm:w-[30rem]">
          <h1 className="text-base sm:text-3xl font-bold text-black info-text">{AboutMeContents?.name}</h1>
          <div className="flex items-center gap-2 info-text">
            <h3 className="text-base sm:text-2xl font-semibold text-gray-800">{AboutMeContents?.role}</h3>
            <p className="text-base sm:text-2xl text-black"><FaCode /></p>
          </div>
          <p className="text-xs sm:text-lg info-text">{AboutMeContents?.des}</p>
          <p className="text-xs sm:text-lg text-blue-600 font-medium info-text">
            Age: <span className="text-black">{AboutMeContents?.age}</span>
          </p>
          <p className="text-xs sm:text-lg text-blue-600 font-medium info-text">
            Phone: <span className="text-black">{AboutMeContents?.phone}</span>
          </p>
          <p className="text-xs sm:text-lg text-blue-600 font-medium info-text">
            Email: <span className="text-black">{AboutMeContents?.email}</span>
          </p>
          <p className="text-xs sm:text-lg text-blue-600 font-medium info-text">
            Place: <span className="text-black">{AboutMeContents?.place}</span>
          </p>
          <button
            className="bg-indigo-900 font-semibold flex p-2 sm:p-4 gap-2 items-center rounded-3xl w-40 justify-center text-white shadow-black/80 shadow-xl text-base sm:text-xl info-button focus:outline-none focus:ring-2 focus:ring-indigo-700"
            onClick={onButtonClick}
            aria-label="Download resume"
          >
            Resume <span className="rounded-full bg-white p-1 text-black"><FaArrowDown /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;