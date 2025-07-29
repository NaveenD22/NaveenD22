import React from 'react'

import { FaWrench } from 'react-icons/fa'
import { ExperiencContent } from './constants/constants'

const Experience = () => {
	return (
		<div className='gap-14 bg-black/20 text-center p-6 py-14  flex flex-col justify-between items-end' id="Experience">
			
			<div className="flex w-full justify-center items-center gap-2 ">
				<p className='text-3xl'><FaWrench /></p>
				<h1 className='text-4xl font-bold'>Experience</h1>
			</div>
			<div className="flex-col-reverse gap-20 flex sm:flex-row  w-full justify-between items-center">
	<div className="flex flex-col gap-10 sm:w-2/3 items-center p-10 justify-center ">
  <h2 className='text-3xl font-medium '>Why Hire Me as a Lead?</h2>
  <ul className='space-y-6 text-lg sm:text-2xl font-normal list-decimal  p-4 '>
    <li className='bg-gray-400 p-2 '>I lead teams to deliver SEO-friendly applications at scale, optimizing for search engine performance.</li>
    <li className='bg-gray-400 p-2 '>Enforce development with clean, maintainable code standards across projects.</li>
    <li className='bg-gray-400 p-2 '>Stay updated on the latest features of React.js, Next.js, and AWS, guiding teams to adopt cutting-edge technologies.</li>
    <li className='bg-gray-400 p-2 '>Oversee responsive, mobile-first designs, ensuring cross-platform compatibility under my leadership.</li>
    <li className='bg-gray-400 p-2 '>Quickly grasp new challenges and mentor teams to enhance their technical and problem-solving skills.</li>
    <li className='bg-gray-400 p-2 '>Align team efforts with company vision, driving product management strategies and agile workflows.</li>
  </ul>
</div>
			<div className="flex flex-col gap-6    w-[22rem] sm:w-1/2 ">

				{ExperiencContent.map((exp, i) => {
					return (<div className="flex w-full sm:justify-start justify-center items-center" key={i}>
						<div className="flex items-center justify-center relative ">
						<div className='h-[14rem] w-2 bg-slate-900 absolute left-5 -z-10' />
						<p className='text-3xl bg-white/60 p-2 w-14  rounded-full border-2 border-yellow-700 flex  shadow-amber-700 shadow-lg '>{exp?.bag}</p>
						<p className='text-2xl text-yellow-700'>{exp?.arrow}</p>
						</div>
						<div className="flex flex-col bg-yellow-800 w-3/4 items-start gap-2 p-4 rounded-2xl">
							<h2 className='text-2xl font-semibold'>{exp?.title}</h2>
							<h3 className='text-xl font-medium'>{exp?.role}</h3>
							<p className='text-xl'>{exp?.period}</p>
						</div>
					</div>
					)
				})}

			</div>
			</div>
		</div>
	)
}

export default Experience

