import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLinkss = ({label,to,section}) => {
	const location = useLocation();
  const [active, setActive] = useState(location.pathname === to);

  useEffect(() => {
    function handleScroll() {
      const element = document.querySelector(section);
      if (element) {
        setActive(element.getBoundingClientRect().top <= 0);  
      }if(element.getBoundingClientRect().bottom <= 0){
        setActive(false);
      } 
      
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [section]);
	return (
		<>						<a href={to}
						className={`${ active && 'text-indigo-600 underline underline-offset-2 '}  `}
						>{label}
						</a>
            {/*
            <a href={to}
						className={`${ active && 'text-indigo-600 underline underline-offset-2 '} `}
						>{label}
						</a>
            <a href={to}
						className={`${ active && 'text-indigo-600 underline underline-offset-2 '} `}
						>{label}
						</a>
            <a href={to}
						className={`${ active && 'text-indigo-600 underline underline-offset-2 '} `}
						>{label}
						</a>
            <a href={to}
						className={`${ active && 'text-indigo-600 underline underline-offset-2 '} `}
						>{label}
						</a>
            <a href={to}
						className={`${ active && 'text-indigo-600 underline underline-offset-2 '} `}
						>{label}
						</a> */}
            </>

		
	)
}

export default NavLinkss