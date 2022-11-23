import React from 'react'
import ProjectItem from './ProjectItem'
import { projectData } from '../data/projectData'

const Portfolio = () => {
  return (
    <div name='portfolio' className='w-full md:h-screen text-neutral-100'>
        <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='text-center pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-neutral-100 border-pink-600'>Portfolio</p>
          </div>
          {/* Container for projects */}
          <ProjectItem props={projectData}/>
        </div>
    </div>
  )
}

export default Portfolio
