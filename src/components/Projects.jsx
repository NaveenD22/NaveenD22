import React, { useEffect, useRef } from 'react';
import { ProjectsContent } from './constants/constants';
import { FaPenNib } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const projectItemsRef = useRef([]);

  const setProjectItemRef = (el, index) => {
    projectItemsRef.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 640px)",
        isMobile: "(max-width: 639px)",
      }, (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Title animation
        gsap.fromTo(
          '.projects-title',
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

        // Project items animation
        projectItemsRef.current.forEach((el, i) => {
          if (el) {
            gsap.fromTo(
              el,
              { x: i % 2 === 0 ? (isDesktop ? "-20%" : "-10%") : (isDesktop ? "20%" : "10%"), opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
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

  if (!ProjectsContent || ProjectsContent.length === 0) {
    return <div>No projects data available</div>;
  }

  return (
    <div
      ref={containerRef}
      className="h-full pb-10 bg-indigo-400/50 flex flex-col justify-start w-full items-center"
      id="Projects"
    >
      <div className="flex p-6 sm:p-10 gap-2 w-full items-center justify-center font-medium projects-title">
        <p className="text-2xl sm:text-4xl"><FaPenNib /></p>
        <h1 className="text-2xl sm:text-4xl font-bold">My Projects</h1>
      </div>
      <div className="w-[95%] sm:w-[85%] h-full rounded-xl py-6 sm:py-10">
        <div className="flex flex-wrap w-full h-full justify-center items-center gap-4">
          {ProjectsContent.map((project, i) => {
            const isConfidential = project.link === '#';
            return (
              <div
                className="flex w-[18rem] sm:w-[40rem] justify-around items-center rounded-3xl"
                key={i}
                onMouseEnter={() => gsap.to(projectItemsRef.current[i], { rotate: 1, duration: 0.3 })}
                onMouseLeave={() => gsap.to(projectItemsRef.current[i], { rotate: 0, duration: 0.3 })}
                ref={(el) => setProjectItemRef(el, i)}
              >
                <div className="flex flex-col text-center relative w-full">
                  <div className="w-full h-[10rem] sm:h-[20rem] overflow-hidden rounded-t-xl">
                    <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <h1 className="text-base sm:text-3xl font-semibold w-full bg-yellow-500 p-1 rounded-b-xl">
                    {project.title}
                  </h1>
                  <div className="flex flex-col text-black font-medium justify-end items-center h-full w-full absolute bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/70 h-3/5 w-full p-2 flex flex-col justify-between">
                      <p className="text-xs sm:text-xl">{project.des}</p>
                      <div className="flex w-full justify-between p-2 items-center">
                        {isConfidential ? (
                          <p className="text-red-600 text-xs sm:text-base">
                            This is an organizational project. It’s confidential, and I’m unsure of the domain. Image represents a completed project.
                          </p>
                        ) : (
                          <>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <button className="text-sm sm:text-xl p-2 bg-purple-700/70 rounded-2xl shadow-xl shadow-gray-700">
                                Live Demo
                              </button>
                            </a>
                            {project.code && project.code !== '#' ? (
                              <a href={project.code} target="_blank" rel="noopener noreferrer">
                                <button className="text-sm sm:text-xl p-2 bg-purple-700/70 rounded-2xl shadow-xl shadow-gray-700">
                                  Source Code
                                </button>
                              </a>
                            ) : (
                              <></>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;