import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLinks } from './constants/constants';
import { HiOutlineSupport } from 'react-icons/hi';
import NavLinkss from './NavLinkss';
import { gsap } from 'gsap';

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        delay: 0.5,
      });
      gsap.from('.nav-mobile-toggle', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        delay: 1,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={navRef}
      id='header'
      className='Nav flex justify-between items-center h-24 fixed top-0 w-full p-4 lg:px-32 bg-white/70 z-50 shadow-lg'
    >
      <a href='#Home'>
        <div className='flex items-center gap-1 relative justify-center nav-item'>
          <HiOutlineSupport className='sm:h-8 h-8 object-contain text-orange-500' />
          <h2 className='sm:text-3xl font-bold text-2xl'>Naveen D</h2>
        </div>
      </a>

      <div className='sm:flex hidden gap-6'>
        {NavLinks.map((link, i) => (
          <div className='text-xl font-semibold sections nav-item' key={i}>
            <NavLinkss label={link.title} to={link.Links} section={link.Links} />
          </div>
        ))}
      </div>
      <div className='text-3xl cursor-pointer sm:hidden nav-mobile-toggle'>
        {mobile ? <FaTimes onClick={() => setMobile(false)} /> : <FaBars onClick={() => setMobile(true)} />}
      </div>
      {mobile ? (
        <div className='h-screen w-3/4 absolute top-24 right-0 bg-slate-900 animate-slowfade1 ease-in-out z-40'>
          {NavLinks.map((link, i) => (
            <div className='flex text-white text-3xl w-full p-4 gap-4 mb-6 items-center' key={i}>
              <p>{link.icons}</p>
              <a
                href={link?.Links}
                onClick={() => {
                  setActive(i);
                  setTimeout(() => {
                    setMobile(false);
                  }, 700);
                }}
                className={`${i === active && 'text-indigo-600'}`}
              >
                {link?.title}
              </a>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Nav;