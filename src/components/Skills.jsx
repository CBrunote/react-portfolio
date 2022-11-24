import React from 'react'

const Skills = ({ props }) => {
  return (
    <div name='skills' className='bg-neutral-50 text-neutral-900 py-10 z-50'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {props.map((skill, index) => {
              return (
                <div key={index} className='grayscale hover:filter-none hover:scale-110 duration-300'>
                  <img className='w-20 mx-auto' src={skill.icon} alt={skill.alt}/>
                  <p className='my-4 font-bold'>{skill.text}</p>
                </div>
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Skills