import { FaArrowDown } from 'react-icons/fa';
import { HomeContents } from './constants/constants';
import avatar from '../assets/my-avatar-1.webp';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { GiCrossMark } from 'react-icons/gi';

const Home = () => {
  const containerRef = useRef(null);
  const skillRef = useRef(null);
  // const popupRef = useRef(null);
  // const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check localStorage to show popup only on first visit
    // const hasSeenPopup = localStorage.getItem('hasSeenHomePopup');
    // if (!hasSeenPopup) {
    //   setShowPopup(true);
    //   localStorage.setItem('hasSeenHomePopup', 'true');
    // }

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
            // // Popup animation
            // if (showPopup) {
            //   gsap.fromTo(
            //     popupRef.current,
            //     { scale: 0.8, opacity: 0 },
            //     {
            //       scale: 1,
            //       opacity: 1,
            //       duration: isDesktop ? 0.8 : 0.6,
            //       ease: 'back.out(1.4)',
            //       // markers: true, // Uncomment for debugging
            //     }
            //   );
            // }

            // Image animation
            gsap.from('.main-image', {
              x: isDesktop ? '50%' : '20%',
              opacity: 0,
              duration: isDesktop ? 1.5 : 1.2,
              ease: 'power2.out',
            });

            // Text and button animations
            gsap.from('.text-line', {
              x: isDesktop ? '-20%' : '-10%',
              opacity: 0,
              duration: isDesktop ? 1 : 0.8,
              ease: 'power2.out',
              stagger: 0.3,
              delay: 0.5,
            });

            // Social icons animation
            gsap.from('.social-icon', {
              y: isDesktop ? 80 : 40,
              opacity: 0,
              duration: isDesktop ? 1 : 0.8,
              ease: 'power2.out',
              stagger: 0.2,
              delay: 2,
            });

            // Skills sliding animation
            const skills = [
              'React.js: Built 10+ responsive UIs, cutting load times by 30%.',
              'Next.js: Delivered Optimized apps, reducing page load time by 20%.',
              'Flutter: Crafted cross-platform apps with 95% code reuse.',
              'Node.js: Developed 10+ APIs, handling 10K+ daily requests.',
              'AWS: Deployed 7+ apps, optimizing costs by 20%.',
              'Leadership: Mentored 5+ developers, improving productivity by 15%.',
            ];
            let currentSkillIndex = 0;
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 2.5 });

            tl.to(skillRef.current, {
              y: isDesktop ? 40 : 20,
              duration: 0.5,
              ease: 'power1.out',
            })
              .call(() => {
                currentSkillIndex = (currentSkillIndex + 1) % skills.length;
                skillRef.current.textContent = skills[currentSkillIndex];
              })
              .fromTo(
                skillRef.current,
                { y: isDesktop ? -80 : -40 },
                { y: 0, duration: 0.7, ease: 'bounce.out' }
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
      className="bg-black/20 p-4 sm:p-6 flex flex-col sm:flex-row justify-around min-h-screen items-center relative"
      id="Home"
    >
      <div className="flex flex-col gap-5 sm:gap-12 mt-10 sm:mt-14">
        <h3 className="text-black/90 text-lg sm:text-4xl font-bold text-line">Hi There,</h3>
        <h1 className="text-black/90 text-xl sm:text-5xl font-bold text-line">
          I'm Naveen <span className="text-orange-900">Dudhyal</span>
        </h1>
        <p className="text-base sm:text-2xl text-gray-900 font-bold text-line w-full sm:w-[40rem] h-[3rem]">
          <span className="text-purple-600" ref={skillRef}>
            React.js: Built 20+ responsive UIs, cutting load times by 30%.
          </span>
        </p>
        <a href="#Hire">
          <button className="bg-indigo-900 font-semibold flex p-2 sm:p-4 gap-2 items-center rounded-3xl w-36 sm:w-40 justify-center text-white shadow-black/80 shadow-xl text-base sm:text-xl text-line focus:outline-none focus:ring-2 focus:ring-indigo-700">
            Hire Me <span className="rounded-full bg-white p-1 text-black"><FaArrowDown /></span>
          </button>
        </a>
        <div className="flex gap-4 sm:gap-6">
          {HomeContents.map((pro, i) => (
            <a
              href={pro.link}
              key={i}
              className="text-2xl sm:text-3xl rounded-full cursor-pointer hover:text-purple-700 social-icon flex items-center justify-center"
              aria-label={pro.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pro?.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 sm:mt-0">
        <img
          src={avatar}
          alt="Profile avatar"
          className="h-[15rem] sm:h-[30rem] rounded-3xl main-image"
          loading="lazy"
        />
      </div>
      {/* {showPopup && (
        <div
          ref={popupRef}
          className="fixed inset-0 m-auto w-[90%] sm:w-[40rem] h-[24rem] sm:h-[28rem] bg-black/90 text-white p-4 sm:p-6 rounded-xl flex flex-col gap-4 items-center justify-center z-50"
        >
          <button
            className="absolute top-2 right-2 text-xl sm:text-2xl text-white focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setShowPopup(false)}
            aria-label="Close popup"
          >
            <GiCrossMark />
          </button>
          <h2 className="text-lg sm:text-2xl font-bold text-center">
            Don't Have Enough Time? Here’s Why You Should Hire Me!
          </h2>
          <p className="text-sm sm:text-base text-center">
            I’m Naveen Dudhyal, a Senior Frontend Team Lead who delivers scalable, high-performance solutions.
          </p>
          <ul className="text-xs sm:text-base list-disc pl-4 space-y-2">
            <li>Built 20+ React.js/Next.js UIs, cutting load times by 30%.</li>
            <li>Developed 10+ Node.js APIs, handling 100K+ daily requests.</li>
            <li>Deployed 15+ apps on AWS, optimizing costs by 20%.</li>
            <li>Led 50+ Agile sprints, delivering 10% ahead of schedule.</li>
            <li>Mentored 10+ developers, boosting team productivity by 15%.</li>
          </ul>
          <a href="#Hire">
            <button
              className="bg-indigo-900 font-semibold flex p-2 sm:p-3 gap-2 items-center rounded-3xl w-36 justify-center text-white shadow-black/80 shadow-xl text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-indigo-700"
              onClick={() => setShowPopup(false)}
              aria-label="Contact me"
            >
              Contact Me <span className="rounded-full bg-white p-1 text-black"><FaArrowDown /></span>
            </button>
          </a>
        </div>
      )} */}
    </div>
  );
};

export default Home;