import React from 'react'

const ProjectItem = ({ props }) => {
    return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {props.map((project, index) => {
            return (
                <div>
                    <div key={index} style={{ backgroundImage: `url(${project.img})` }} className="shadow-lg shadow-black group container rounded-md flex justify-center text-center items-center mx-auto content-div ">
                        <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            {project.name}
                        </span>
                        <div className="pt-8 text-center ">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-neutral-100 text-neutral-700 font-bold text-lg">
                                    Code
                                </button>
                            </a>
                            <a href={project.url} target="_blank" rel="noreferrer">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-neutral-100 text-neutral-700 font-bold text-lg">
                                    Live
                                </button>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            )})}
    </div>
    )
}

export default ProjectItem