import React, { useEffect, useRef } from 'react';
import { AboutMeContents } from './constants/constants';
import { FaCode, FaArrowDown } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import pdf from '../assets/Naveen_D_CV.pdf';
import gsap from 'gsap'

const Info = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.info-title', {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 0.5,
      });
      gsap.from('.info-image', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power2.out',
        delay: 1,
      });
      gsap.from('.info-text', {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        delay: 1.5,
      });
      gsap.from('.info-button', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 2.5,
      });
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

  return (
    <div
      ref={containerRef}
      className='flex flex-col justify-center sm:justify-around items-center gap-8 p-5 sm:p-24 bg-black/20 relative'
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold sm:mb-20 flex gap-2 items-center text-black info-title'>
        <GoPerson />
        About Me
      </h1>
      <div className='flex flex-col sm:flex-row justify-center sm:justify-around items-center w-full'>
        <img
          src={AboutMeContents?.icon}
          alt='logo'
          className='sm:h-[25rem] h-[20rem] rounded-3xl mb-10 sm:mb-0 object-cover info-image'
        />
        <div className='flex flex-col gap-6'>
          <h1 className='text-xl sm:text-3xl font-bold text-black info-text'>{AboutMeContents?.name}</h1>
          <div className='flex items-center gap-2 info-text'>
            <h3 className='text-lg sm:text-2xl font-semibold text-gray-800'>{AboutMeContents?.role}</h3>
            <p className='text-xl sm:text-2xl text-black'>
              <FaCode />
            </p>
          </div>
          <p className='text-sm sm:text-lg sm:w-[30rem]  info-text'>
            {AboutMeContents?.des}
          </p>
          <p className='text-lg sm:text-xl text-blue-600 font-medium info-text'>
            Age: <span className='text-black'>{AboutMeContents?.age}</span>
          </p>
          <p className='text-lg sm:text-xl text-blue-600 font-medium info-text'>
            Phone: <span className='text-black'>{AboutMeContents?.phone}</span>
          </p>
          <p className='text-lg sm:text-xl text-blue-600 font-medium info-text'>
            Email: <span className='text-black'>{AboutMeContents?.email}</span>
          </p>
          <p className='text-lg sm:text-xl text-blue-600 font-medium info-text'>
            Place: <span className='text-black'>{AboutMeContents?.place}</span>
          </p>
          <button
            className='bg-indigo-900 font-semibold flex sm:p-4 p-2 gap-2 items-center rounded-3xl w-40 justify-center text-white shadow-black/80 shadow-xl sm:text-xl text-lg info-button'
            onClick={onButtonClick}
          >
            Resume{' '}
            <span className='rounded-full bg-white p-1 text-black'>
              <FaArrowDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;