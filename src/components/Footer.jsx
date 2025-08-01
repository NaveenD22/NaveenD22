import React from 'react'
import { FaEnvelope, FaPhone, FaHome, FaHeart } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa'
import { NavLinks, AboutMeContents, HomeContents } from './constants/constants'

const Footer = () => {
	return (
		<footer className=' bg-sky-800/60 flex-col justify-start items-start p-10 flex gap-8'>
			<div className="flex sm:flex-row flex-col gap-10 justify-around w-full ">
				<div className="flex flex-col gap-8">
					<h1 className="text-4xl font-bold">
						Naveen's Portfolio
					</h1>
					<p className="text-xl">Thank you for visiting my personal portfolio website.Connect with me over socials</p>
					<p className="text-xl">Keep Rising. Connect with me over <span className='text-black/80 font-bold hover:underline cursor-pointer text-2xl'>Live chat!</span></p>
					<div className="flex flex-col gap-4 sm:gap-8 ">
						<h2 className='text-3xl font-semibold'>Contact Info</h2>
						<p className="text-xl text-amber-600 font-medium flex items-center gap-2 "><FaPhone /><span className='text-black cursor-pointer hover:text-white transition-all'>{AboutMeContents?.phone}</span></p>
						<p className="text-xl text-amber-600 font-medium flex items-center gap-2 "><FaEnvelope /><span className='text-black cursor-pointer hover:text-white transition-all'>{AboutMeContents?.email}</span></p>
						<p className="text-xl text-amber-600 font-medium flex items-center gap-2 "><FaHome /> <span className='text-black cursor-pointer hover:text-white transition-all'>{AboutMeContents?.place}</span></p>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-1">
						<h2 className='text-3xl font-semibold'>Quick Link's</h2>
						{NavLinks.map((link, i) => {
							return (
								<div className="flex  text-2xl w-full p-2 gap-2  items-center" key={link.title}>
									<p className='text-amber-600'><FaArrowRight /></p>
									<a href={link?.Links} className='hover:text-white transition-all ease-in-out'>
										<h2>{link.title}</h2>
									</a>
								</div>
							)
						})}
					</div>
					<div className="flex gap-6 ">
						{HomeContents.map((pro, i) => {
							return (
								<a href={pro?.link}>
									<button className="text-3xl rounded-full cursor-pointer hover:text-purple-700 " key={i}>
										{pro?.icon}
									</button>
								</a>
							)
						})}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2 font-semibold p-4 w-full justify-center items-center border-t-2 border-emerald-400">

				<p className='flex gap-2 items-center' >Designed With <span><FaHeart /></span> By
					<span className='text-amber-700 font-bold'>Naveen Dudhyal</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer