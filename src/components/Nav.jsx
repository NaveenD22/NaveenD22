import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { NavLinks } from './constants/constants'
import {HiOutlineSupport} from 'react-icons/hi'
import NavLinkss from './NavLinkss'


const Nav = () => {
	const [mobile, setMobile] = useState(false)
	const [active, setActive] = useState(0)

	//Onscroll Function For changing active status for nav links 

	// let Header=document.getElementById('header');
	// let links=document.querySelectorAll('.links');
	// let sections=document.querySelectorAll(".sections")

	// window.onscroll=function(){
	// 	if(window.pageYOffset > Header.offsetHeight){
	// 		Header.style.background='rgba(0,0,0,0.5)';
	// 	}
	// 	else{
	// 		Header.style.background='black';
	// 	}
	// 	let current="Home"
	// 	sections.forEach((section)=>{
	// 		const sectionTop=section.offsetTop;
	// 		if(window.pageYOffset >= sectionTop-60){
	// 			current=section.getAttribute('id');
	// 		}
	// 	})
	// 	links.forEach((item)=>{
	// 		item.classList.remove('active');
	// 		if(item.href.includes(current)){
	// 			item.classList.add('active');
	// 		}
	// 		else{
	// 			item.classList.remove('active');
	// 		}
	// 	})
	// }
	return (
		<div id='header' className='Nav flex justify-between items-center h-24 fixed top-0 w-full p-4 lg:px-32 bg-white/70 z-10'>
		<a href="#Home">
			<div className="flex items-center gap-1 relative justify-center">
			<HiOutlineSupport className='sm:h-8 h-8 object-contain' />
			<h2 className='text-gray-900 sm:text-3xl font-bold text-2xl'>Naveen D</h2>
			</div>
			</a>
			
			<div className="sm:flex hidden gap-6 ">
			{NavLinks.map((link,i)=>{
				return(
					<div className="text-xl font-semibold sections" key={i}>
								<NavLinkss label={link.title} to={link.Links} section={link.Links}/>
					</div>
				)
			})}
			</div>
			<div className="text-3xl cursor-pointer sm:hidden">
			{mobile?<FaTimes onClick={()=>setMobile(false)} />:<FaBars onClick={()=>setMobile(true)}/>}
			</div>
		{mobile ?	<div className='h-screen w-3/4 absolute top-24 right-0  bg-slate-900 animate-slowfade1 ease-in-out'>
			{NavLinks.map((link,i)=>{
				return(
					<div className="flex text-white text-3xl w-full p-4 gap-4 mb-6 items-center" key={i}>
						<p>{link.icons}</p>
						<a href={link?.Links}
						onClick={()=> {setActive(i)
						setTimeout(() => {
							setMobile(false)
						}, 700);
						
						}}
						className={`${i === active && 'text-indigo-600'}`}
						>{link?.title}
						</a>
					</div>
				)
			})}
		</div>:''}
		</div>
	)
}

export default Nav