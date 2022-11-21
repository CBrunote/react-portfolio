import React from 'react'

const ProjectItem = ({ props }) => {
    return (
    <div>
    {props.map((project, index) => {
        return (
        <div key={index} style={{ backgroundImage: `url(${project.img})` }}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-netural-100 tracking-wider'>
                    {project.name}
                </span>
                <div className='pt-8 text-center'>
                    <a href={project.url}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg0-white text-neutral-700 font-bold'>
                            Demo
                        </button>
                    </a>
                    <a href={project.github}>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg0-white text-neutral-700 font-bold'>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
        )})}
        </div>
    )
}

export default ProjectItem