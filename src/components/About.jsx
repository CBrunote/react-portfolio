import React from 'react'
// import headshot from '../assets/family2021-7694.png'
import headshot from '../assets/headshot2.jpeg'

const About = () => {

  return (
    <div name='about' className=' bg-neutral-900 text-neutral-100'>
      <div className='pb-40 flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className='text-center pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 z-50'>
          <div className='sm:text-right text-4xl font-bold'>
            <img className='w-80 mx-auto my-auto rounded-xl' src={headshot} alt='headshot of Christian'/>
          </div>
          <div className='text-center sm:text-left my-auto'>
            {/* <p className='text-lg text-neutral-400'>I am a recent graduate of the Georgia Tech Full-Stack Web Development Bootcamp and I have a passion for building applications that solve people's problems. After being on the client support side of the tech industry for the last 5 years, I decided that I wanted to learn how to solve the problems with applications at their root or build my own.</p> */}
            <p className='text-lg text-neutral-400'>I am a Full Stack Web developer with 2+ years of experience working in .NET/C# as well as Typescript/React.js front-ends, I also have 5 years of experience with customer-facing technical application support in the software industry. In my 7 years in tech, I have demonstrated the ability to resolve complex technical support requests and work collaboratively with my teams to provide exceptional customer service as well as improve the functionality of the applications I have worked on. I am a quick learner and extremely motivated to be great at everything I do, so I welcome new challenges with open arms.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About