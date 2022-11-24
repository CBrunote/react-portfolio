import React from 'react'

const ProjectItem = ({ props }) => {
    return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 z-20'>
        {props.map((project, id) => {
            return (
                <div>
                    <div key={id} style={{ backgroundImage: `url(${project.img})` }} className="shadow-lg shadow-black group container rounded-md flex justify-center text-center items-center mx-auto content-div">
                        <div className="opacity-0 p-5 group-hover:opacity-100 group-hover:scale-110 duration-300">
                            <span className="text-2xl font-bold text-white tracking-wider ">{project.name}</span>
                            <p>This is where the description of the project needs to go.</p>
                            <div className='flex inline-block items-center justify-center py-3 gap-2'>
                                {project.stack.map((icon, index) => (
                                    <span>{icon}</span>
                                )
                                )}
                            </div>
                            <div className="pt-8 text-center ">
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-2 py-2 m-2 bg-neutral-100 text-neutral-700 font-bold text-lg hover:scale-105 duration-100">
                                        Code
                                    </button>
                                </a>
                                <a href={project.url} target="_blank" rel="noreferrer">
                                    <button className="text-center rounded-lg px-2 py-2 m-2 bg-neutral-100 text-neutral-700 font-bold text-lg hover:scale-105 duration-100">
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