import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { HomeContents } from './constants/constants'

const Home = () => {
	return (
		<div className='bg-black/20  mt-24 p-6 flex flex-col sm:flex-row sm:justify-around sm:py-52 
		' id='Home'>
			<div className="flex flex-col  gap-10 sm:gap-14 mt-6">
				<h3 className='text-black/90 text-4xl font-bold'>Hi There,</h3>
				<h1 className='text-black/90 text-5xl font-bold'>I'm Naveen <span className='text-orange-900'> Dudhyal</span></h1>
				<p className="text-2xl text-gray-900 font-bold">I Am Into <span className='text-purple-600'>Software Development. </span></p>
				<a href="#About">
				<button className="bg-indigo-900 font-semibold flex p-4 gap-2 items-center rounded-3xl w-40 justify-center text-white shadow-black/80 shadow-xl text-xl">About Me <span className='rounded-full bg-white p-1 text-black'><FaArrowDown /></span></button>
				</a>
				<div className="flex gap-6 ">
					{HomeContents.map((pro, i) => {
						return (
							<a href={pro.link} >
							<button className="text-3xl rounded-full cursor-pointer hover:text-purple-700" key={i}>
								{pro?.icon}
							</button>
							</a>
						)
					})}
				</div>
			</div>
			<div className="right">
				<img src="https://i.pinimg.com/originals/19/26/57/192657e7a2f9253672d24f9990093d7e.png" alt="bitMoji" className='h-96' />
			</div>
		</div>
	)
}

export default Home