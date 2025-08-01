import React, { useEffect, useRef, useState } from 'react';
import { SkillsContent } from './constants/constants';
import { FaSketch } from 'react-icons/fa';
import { GiCrossMark } from 'react-icons/gi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const skillItemsRef = useRef([]);
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState({});

  const setSkillItemRef = (el, index) => {
    skillItemsRef.current[index] = el;
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
          '.skills-title',
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
              onEnter: () => console.log('Title entered viewport'),
              onLeaveBack: () => console.log('Title left viewport'),
            },
          }
        );

        // Animate skill cards
        skillItemsRef.current.forEach((el, i) => {
          if (el) {
            gsap.fromTo(
              el,
              { x: i % 2 === 0 ? (isDesktop ? "-20%" : "-10%") : (isDesktop ? "20%" : "10%"), opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                  onEnter: () => console.log(`Skill card ${i} entered viewport`),
                  onLeaveBack: () => console.log(`Skill card ${i} left viewport`),
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

  if (!SkillsContent || SkillsContent.length === 0) {
    return <div>No skills data available</div>;
  }

  return (
    <div
      ref={containerRef}
      id="Skills"
      className="bg-black/30 flex flex-col justify-between w-full items-center gap-6 py-10"
    >
      <div className="flex gap-2 w-full items-center justify-center font-medium skills-title">
        <p className="text-2xl sm:text-4xl"><FaSketch /></p>
        <h1 className="text-2xl sm:text-4xl">Skills & Abilities</h1>
      </div>
      <div className="w-[95%] sm:w-[90%] bg-black/40 rounded-xl py-8 sm:py-14 relative">
        <div className="flex flex-wrap w-full p-2 sm:p-4 justify-center items-center gap-4 sm:gap-6">
          {SkillsContent.map((skill, i) => (
            <div
              className="flex w-full max-w-[20rem] sm:max-w-[38rem] justify-between items-center bg-white/80 p-2 sm:p-4 rounded-3xl h-20 sm:h-32"
              key={i}
              ref={(el) => setSkillItemRef(el, i)}
            >
              <p className="text-2xl sm:text-5xl">{skill?.icon}</p>
              <div className="flex flex-col w-3/4 gap-1 sm:gap-2">
                <h1 className="text-sm sm:text-xl font-bold">{skill?.title}</h1>
                <p className="text-xs sm:text-lg">{skill?.des}</p>
              </div>
              <p
                className="text-lg sm:text-xl cursor-pointer shadow-red-700 shadow-2xl"
                onClick={() => {
                  setInfo(skill);
                  setShowInfo(true);
                }}
              >
                {skill?.arrow}
              </p>
            </div>
          ))}
        </div>
        {showInfo && (
          <div className="flex flex-col h-[40%] sm:h-3/5 overflow-y-auto w-[90%] sm:w-3/4 p-4 bg-black text-white font-medium absolute inset-0 m-auto gap-2 sm:gap-10 z-10">
            <div className="flex justify-between p-2">
              <p className="text-xl sm:text-5xl">{info?.icon}</p>
              <h1 className="text-lg sm:text-3xl">{info?.title}</h1>
              <p
                className="text-lg sm:text-2xl cursor-pointer"
                onClick={() => setShowInfo(false)}
              >
                <GiCrossMark />
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm sm:text-xl">
              {info?.des2?.map((des, i) => (
                <div className="flex gap-4" key={i}>
                  <p>{i + 1}.</p>
                  <h3>{des}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;