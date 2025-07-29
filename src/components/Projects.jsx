import React from 'react'
import { ProjectsContent } from './constants/constants'
import { FaPenNib } from 'react-icons/fa'

const Projects = () => {

	return (
		<div className='h-full pb-14 bg-indigo-400/50 flex flex-col justify-start w-full items-center  ' id='Projects'>
			<div className="flex p-10 gap-2 w-full items-center justify-center font-medium">
				<p className='text-4xl'><FaPenNib /></p>
				<h1 className='text-4xl font-bold'>My Projects</h1>
			</div>
			<div className=" w-[85%]   h-full rounded-xl sm:py-10 py-4">
				<div className="flex flex-wrap w-full    h-full justify-center items-center  gap-4">
					{ProjectsContent?.map((project, i) => {
						return (
							<div className="flex w-[20rem] sm:w-[40rem] justify-around items-center rounded-3xl hover:rotate-1 " key={i}>
								<div className="flex flex-col  text-center  transition-all ease-in-out relative ">
									<img src={project.icon} alt="logoofProject" className='  object-fit w-[45rem] rounded-t-xl ' />
									<h1 className='text-3xl font-semibold w-[20rem] bg-yellow-500 p-1 sm:w-full rounded-b-xl'>{project.title}</h1>
									
									
									<div className="flex flex-col  text-black font-medium  justify-end items-center h-full w-full absolute bottom-0 opacity-0 hover:opacity-100 transition-all ease-in-out">
										<div className="bg-white/70 h-3/5 w-full p-2 flex flex-col justify-between">
										<p className='text-sm sm:text-xl'>{project?.des}</p>
										<div className="flex w-full justify-between p-2 items-center ">
										<a href={project?.link}>
											<button className="sm:text-xl p-2 bg-purple-700/70 rounded-2xl shadow-xl shadow-gray-700 ">
												Live Demo
											</button>
											</a>
										</div>
										</div>
									
									</div>
							
								</div>

							</div>
						)
					})}
				</div>

			</div>
		</div>
	)
}

export default Projects