import React from 'react'

const ProjectItem = ({ props }) => {
    return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 z-20'>
        {props.map((project, id) => {
            return (
                <div>
                    <div key={id} style={{ backgroundImage: `url(${project.img})`,  backgroundPosition: `${project.position}`, }} className="shadow-lg shadow-black group container rounded-md flex justify-center text-center items-center mx-auto content-div">
                        <div className="opacity-0 p-5 group-hover:opacity-100 group-hover:scale-110 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider ">{project.name}</span>
                            <p className='text-sm p-2'>{project.description}</p>
                            <div className='flex inline-block items-center justify-center py-1 gap-2'>
                                {project.stack.map((icon, index) => (
                                    <span>{icon}</span>
                                ))}
                            </div>
                            <div className="text-center ">
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-2 py-1 m-2 bg-neutral-100 text-neutral-700 font-bold text-lg hover:scale-105 duration-100">
                                        Code
                                    </button>
                                </a>
                                <a href={project.url} target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-2 py-1 m-2 bg-neutral-100 text-neutral-700 font-bold text-lg hover:scale-105 duration-100">
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    )
}

export default ProjectItem