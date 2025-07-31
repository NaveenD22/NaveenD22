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
      // Animation for image (from right)
      gsap.from('.main-image', {
        x: 500,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for text elements and button (from left, staggered)
      gsap.from('.text-line', {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.5,
        delay: 0.5,
      });

      // Animation for social icons (from bottom)
      gsap.from('.social-icon', {
        y: 100,
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
        y: 50, // Slide down to 50px and disappear
        duration: 0.5,
        ease: 'power1.out',
      }).call(() => {
        currentSkillIndex = (currentSkillIndex + 1) % skills.length;
        skillRef.current.textContent = skills[currentSkillIndex]; // Update skill text
      }).fromTo(
        skillRef.current,
        { y: -100 }, // Slide up from top (100px above)
        { y: 0, duration: 0.7, ease: 'bounce.out' } // Bounce effect on entry
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className='bg-black/20  p-6 flex flex-col sm:flex-row sm:justify-around min-h-screen justify-evenly items-center'
      id='Home'
    >
      <div className='flex flex-col gap-7 sm:gap-14 mt-14'>
        <h3 className='text-black/90 sm:text-4xl text-xl font-bold text-line'>Hi There,</h3>
        <h1 className='text-black/90 sm:text-5xl text-2xl font-bold text-line'>
          I'm Naveen <span className='text-orange-900'>Dudhyal</span>
        </h1>
        <p className='sm:text-2xl text-lg text-gray-900 font-bold text-line sm:w-[40rem] sm:h-[4rem] w-full h-[5rem]'>
          <span className='text-purple-600' ref={skillRef}>
            React.js powers my dynamic, user-focused web interfaces.
          </span>
        </p>
        <a href='#About'>
          <button className='bg-indigo-900 font-semibold flex sm:p-4 p-2 gap-2 items-center rounded-3xl w-40 justify-center text-white shadow-black/80 shadow-xl sm:text-xl text-lg text-line'>
            About Me <span className='rounded-full bg-white p-1 text-black'><FaArrowDown /></span>
          </button>
        </a>
        <div className='flex sm:gap-6 gap-4 '>
          {HomeContents.map((pro, i) => (
            <a href={pro.link} key={i}>
              <button className='text-3xl rounded-full cursor-pointer hover:text-purple-700 social-icon'>
                {pro?.icon}
              </button>
            </a>
          ))}
        </div>
      </div>
      <div className='right flex sm:justify-center'>
        <img
          src={avatar}
          alt='bitMoji'
          className='sm:h-[30rem] h-[20rem] rounded-3xl mb-10 sm:mb-0 main-image'
        />
      </div>
    </div>
  );
};

export default Home;