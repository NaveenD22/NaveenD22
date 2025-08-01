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
          '.info-title',
          { x: isDesktop ? "-20%" : "-10%", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate image
        gsap.fromTo(
          '.info-image',
          { y: isDesktop ? 100 : 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Animate text elements with stagger
        gsap.fromTo(
          '.info-text',
          { x: isDesktop ? "-20%" : "-10%", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.3,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
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
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Naveen-Dudhyal-CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!AboutMeContents) {
    return <div>No about me data available</div>;
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
      <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-6">
        <img
          src={AboutMeContents?.icon}
          alt="logo"
          className="h-[15rem] sm:h-[25rem] rounded-3xl mb-6 sm:mb-0 object-cover info-image"
        />
        <div className="flex flex-col gap-4 sm:gap-6 w-full sm:w-[30rem]">
          <h1 className="text-base sm:text-3xl font-bold text-black info-text">{AboutMeContents?.name}</h1>
          <div className="flex items-center gap-2 info-text">
            <h3 className="text-base sm:text-2xl font-semibold text-gray-800">{AboutMeContents?.role}</h3>
            <p className="text-base sm:text-2xl text-black"><FaCode /></p>
          </div>
          <p className="text-xs sm:text-lg info-text">{AboutMeContents?.des}</p>
          <p className="text-base sm:text-xl text-blue-600 font-medium info-text">
            Age: <span className="text-black">{AboutMeContents?.age}</span>
          </p>
          <p className="text-base sm:text-xl text-blue-600 font-medium info-text">
            Phone: <span className="text-black">{AboutMeContents?.phone}</span>
          </p>
          <p className="text-base sm:text-xl text-blue-600 font-medium info-text">
            Email: <span className="text-black">{AboutMeContents?.email}</span>
          </p>
          <p className="text-base sm:text-xl text-blue-600 font-medium info-text">
            Place: <span className="text-black">{AboutMeContents?.place}</span>
          </p>
          <button
            className="bg-indigo-900 font-semibold flex p-2 sm:p-4 gap-2 items-center rounded-3xl w-40 justify-center text-white shadow-black/80 shadow-xl text-base sm:text-xl info-button"
            onClick={onButtonClick}
          >
            Resume <span className="rounded-full bg-white p-1 text-black"><FaArrowDown /></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;