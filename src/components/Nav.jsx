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
  const mobileMenuRef = useRef(null);

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
            // Animate nav items
            gsap.from('.nav-item', {
              x: isDesktop ? -200 : -100,
              opacity: 0,
              duration: isDesktop ? 1 : 0.8,
              ease: 'power2.out',
              stagger: 0.2,
              delay: 0.5,
            });

            // Animate mobile toggle
            gsap.from('.nav-mobile-toggle', {
              y: isDesktop ? 100 : 50,
              opacity: 0,
              duration: isDesktop ? 1 : 0.8,
              ease: 'power2.out',
              delay: 1,
            });

            // Animate mobile menu
            if (mobile && mobileMenuRef.current) {
              gsap.fromTo(
                mobileMenuRef.current,
                { x: isMobile ? '100%' : '50%', opacity: 0 },
                {
                  x: 0,
                  opacity: 1,
                  duration: isMobile ? 0.6 : 0.8,
                  ease: 'power2.out',
                }
              );
            }
          }
        }
      );

      return () => mm.revert();
    }, navRef);

    return () => ctx.revert();
  }, [mobile]);

  return (
    <div
      ref={navRef}
      id="header"
      className="Nav flex justify-between items-center sm:h-24 h-20 fixed top-0 w-[100vw] p-4 lg:px-32 bg-white/70 z-50 shadow-lg"
    >
      <a href="#Home" aria-label="Navigate to Home">
        <div className="flex items-center gap-1 relative justify-center nav-item">
          <HiOutlineSupport className="sm:h-8 h-8 object-contain text-orange-500" />
          <h2 className="sm:text-3xl font-bold text-2xl">Naveen D</h2>
        </div>
      </a>

      <div className="sm:flex hidden gap-6">
        {NavLinks.map((link, i) => (
          <div className="text-xl font-semibold sections nav-item" key={i} title={link.description}>
            <NavLinkss label={link.title} to={link.Links} section={link.Links} />
          </div>
        ))}
      </div>
      <div className="text-3xl cursor-pointer sm:hidden nav-mobile-toggle">
        {mobile ? (
          <FaTimes onClick={() => setMobile(false)} aria-label="Close mobile menu" />
        ) : (
          <FaBars onClick={() => setMobile(true)} aria-label="Open mobile menu" />
        )}
      </div>
      {mobile && (
        <div
          ref={mobileMenuRef}
          className="h-screen w-3/4 absolute sm:top-24 top-20 right-0 bg-slate-900 z-40"
        >
          {NavLinks.map((link, i) => (
            <div className="flex text-white sm:text-3xl text-xl w-full p-4 gap-4 mb-6 items-center" key={i}>
              <p>{link.icons}</p>
              <a
                href={link?.Links}
                onClick={() => {
                  setActive(i);
                  setTimeout(() => {
                    setMobile(false);
                  }, 700);
                }}
                className={`${
                  i === active ? 'text-indigo-600' : 'text-white'
                } hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600`}
                aria-label={`Navigate to ${link.title}`}
              >
                {link?.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;