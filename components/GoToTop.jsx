'use client';

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const listen = () => {
      const y = document.documentElement.scrollTop || document.body.scrollTop;
      setShow(y > 400);
    };
    window.addEventListener('scroll', listen, { passive: true });
    return () => window.removeEventListener('scroll', listen);
  }, []);

  const goToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  return (
    <button
      onClick={goToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full
                  bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-pink-500 text-white
                  shadow-2xl shadow-fuchsia-900/40 flex items-center justify-center
                  transition-all duration-300
                  ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                  hover:scale-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-300`}
    >
      <FaArrowUp className="animate-bounce" />
    </button>
  );
};

export default GoToTop;
