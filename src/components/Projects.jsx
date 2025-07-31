import { ProjectsContent } from './constants/constants'
import { FaPenNib } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='h-full pb-14 bg-indigo-400/50 flex flex-col justify-start w-full items-center' id='Projects'>
      <div className="flex p-10 gap-2 w-full items-center justify-center font-medium">
        <p className='text-4xl'><FaPenNib /></p>
        <h1 className='text-4xl font-bold'>My Projects</h1>
      </div>
      <div className="w-[85%] h-full rounded-xl sm:py-10 py-4">
        <div className="flex flex-wrap w-full h-full justify-center items-center gap-4">
          {ProjectsContent?.map((project, i) => {
            const isConfidential = project.link === '#';
            return (
              <div className="flex w-[20rem] sm:w-[40rem] justify-around items-center rounded-3xl hover:rotate-1 transition-all duration-300" key={i}>
                <div className="flex flex-col text-center relative w-full">
                  
                    <div className="w-full sm:h-[20rem] h-[15rem] overflow-hidden rounded-t-xl">
                      <img src={project.icon} alt={project.title} className='w-full h-full object-cover' />
                    </div>
                  
                  <h1 className='sm:text-3xl text-xl font-semibold w-[20rem] bg-yellow-500 p-1 sm:w-full rounded-b-xl'>{project.title}</h1>
                  
                  <div className="flex flex-col text-black font-medium justify-end items-center h-full w-full absolute bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/70 h-3/5 w-full p-2 flex flex-col justify-between">
                      <p className='text-sm sm:text-xl'>{project.des}</p>
                      <div className="flex w-full justify-between p-2 items-center">
                        {isConfidential ? (
                          <p className="text-red-600 text-sm sm:text-base">
                            This is an organizational project. It’s confidential, and I’m unsure of the domain. Image represents a completed project.
                          </p>
                        ) : (
							<>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="sm:text-xl p-2 bg-purple-700/70 rounded-2xl shadow-xl shadow-gray-700">
                              Live Demo
                            </button>
                          </a>
						  {
							project.code && project.code !== "#" ?<a href={project.code} target="_blank" rel="noopener noreferrer">
                            <button className="sm:text-xl p-2 bg-purple-700/70 rounded-2xl shadow-xl shadow-gray-700">
                              Source Code
                            </button>
                          </a> :<></>
						  }
						       
						  </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;