import React,{useState} from 'react'
import { SkillsContent } from './constants/constants'
import { FaSketch } from 'react-icons/fa'
import {GiCrossMark}from 'react-icons/gi'


const Skills = () => {
	const [showInfo, setShowInfo] = useState(false)
	const [info, setInfo] = useState({})
	return (
		<div id='Skills' className='bg-black/30 flex flex-col justify-between w-full items-center  gap-8 py-14'>
			<div className="flex  gap-2 w-full items-center justify-center font-medium">
				<p className='text-4xl'><FaSketch /></p>
				<h1 className='text-4xl'>Skills & Abilities</h1>
			</div>
			<div className=" w-[90%] bg-black/40  h-full  rounded-xl sm:py-14 relative transition-all ease-in-out">
				<div className="flex flex-wrap w-full sm:p-2 p-1   h-full justify-center items-center sm:gap-6 gap-4">
					{SkillsContent?.map((skill, i) => {
						return (
							<div className="flex w-[38rem] justify-between items-center bg-white/80 p-2 rounded-3xl sm:p-4 sm:h-32 h-22" key={i}>
								<p className='sm:text-5xl text-2xl'>{skill?.icon}</p>
								<div className="flex flex-col w-3/4 sm:gap-2">
									<h1 className='sm:text-xl text-sm font-bold'>{skill?.title}</h1>
									<p className='sm:text-lg text-xs'>{skill?.des}</p>
								</div>
								<p className='text-xl cursor-pointer
								shadow-red-700 shadow-2xl'
									onClick={() => {setInfo(skill)
									setShowInfo(true)}}

								>{skill?.arrow}</p>
							</div>
						)
					})}

				</div>
				{showInfo ? <div className="flex flex-col sm:h-3/5 h-1/3 overflow-y-auto sm:1/2 w-3/4  p-4 bg-black text-white font-medium absolute inset-0 m-auto sm:gap-10 gap-2">
					<div className="flex justify-between p-2">
						<p className='sm:text-5xl text-xl'>{info?.icon}</p>
						<h1 className='sm:text-3xl text-lg'>{info?.title}</h1>
						<p className='sm:text-2xl text-lg cursor-pointer'
						onClick={()=>setShowInfo(false)}
						
						><GiCrossMark /></p>
					</div>
					<p className='sm:text-xl text-sm'>
						<div className='flex flex-col gap-4'>
							{info?.des2?.map((des,i)=>{
								return(
									<div className="flex gap-4">
										<p>{i+1}.</p>
									<h3>{des}</h3>
									</div>
								)
							})}
						</div>
					</p>
				</div>:null}

			</div>

		</div>
	)
}

export default Skills

