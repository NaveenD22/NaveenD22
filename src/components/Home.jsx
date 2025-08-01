import { FaArrowDown } from 'react-icons/fa';
import { HomeContents } from './constants/constants';
import avatar from '../assets/my-avatar-1.webp';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Home = () => {
  const containerRef = useRef(null);
  const skillRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Use GSAP matchMedia for responsive animations
      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 640px)", // sm breakpoint
        isMobile: "(max-width: 639px)",
      }, (context) => {
        const { isDesktop, isMobile } = context.conditions;

        // Animation for image (from right)
        gsap.from('.main-image', {
          x: isDesktop ? "50%" : "20%", // Smaller offset for mobile
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
        });

        // Animation for text elements and button (from left, staggered)
        gsap.from('.text-line', {
          x: isDesktop ? "-20%" : "-10%", // Smaller offset for mobile
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.5,
          delay: 0.5,
        });

        // Animation for social icons (from bottom)
        gsap.from('.social-icon', {
          y: isDesktop ? 100 : 50, // Reduced distance for mobile
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
          delay: 2.5,
        });

        // Vertical sliding animation for skills using a timeline
        const skills = [
          'React.js powers my dynamic, user-focused web interfaces.',
          'Next.js accelerates my full-stack development with server-side rendering.',
          'Flutter enables me to craft stunning cross-platform mobile apps.',
          'Node.js drives my scalable, high-performance backend solutions.',
          'Prisma ORM simplifies my database management with type-safe queries.',
          'AWS optimizes my cloud deployments for reliability and scalability.',
        ];
        let currentSkillIndex = 0;
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 3 });

        tl.to(skillRef.current, {
          y: isDesktop ? 50 : 30, // Smaller slide for mobile
          duration: 0.5,
          ease: 'power1.out',
        }).call(() => {
          currentSkillIndex = (currentSkillIndex + 1) % skills.length;
          skillRef.current.textContent = skills[currentSkillIndex]; // Update skill text
        }).fromTo(
          skillRef.current,
          { y: isDesktop ? -100 : -50 }, // Smaller slide for mobile
          { y: 0, duration: 0.7, ease: 'bounce.out' }
        );
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='bg-black/20 p-4 sm:p-6 flex flex-col sm:flex-row justify-around min-h-screen items-center'
      id='Home'
    >
      <div className='flex flex-col gap-5 sm:gap-14 mt-10 sm:mt-14'>
        <h3 className='text-black/90 text-lg sm:text-4xl font-bold text-line'>Hi There,</h3>
        <h1 className='text-black/90 text-xl sm:text-5xl font-bold text-line'>
          I'm Naveen <span className='text-orange-900'>Dudhyal</span>
        </h1>
        <p className='text-base sm:text-2xl text-gray-900 font-bold text-line sm:w-[40rem] w-full h-[4rem] sm:h-auto'>
          <span className='text-purple-600' ref={skillRef}>
            React.js powers my dynamic, user-focused web interfaces.
          </span>
        </p>
        <a href='#About'>
          <button className='bg-indigo-900 font-semibold flex p-2 sm:p-4 gap-2 items-center rounded-3xl w-40 justify-center text-white shadow-black/80 shadow-xl text-base sm:text-xl text-line'>
            About Me <span className='rounded-full bg-white p-1 text-black'><FaArrowDown /></span>
          </button>
        </a>
        <div className='flex gap-6'>
          {HomeContents.map((pro, i) => (
            <a
              href={pro.link}
              key={i}
              className='text-2xl sm:text-3xl rounded-full cursor-pointer hover:text-purple-700 social-icon flex items-center justify-center'
              aria-label={pro.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pro?.icon}
            </a>
          ))}
        </div>
      </div>
      <div className='flex justify-center mt-6 sm:mt-0'>
        <img
          src={avatar}
          alt='bitMoji'
          className='h-[20rem] sm:h-[30rem] rounded-3xl main-image'
        />
      </div>
    </div>
  );
};

export default Home;