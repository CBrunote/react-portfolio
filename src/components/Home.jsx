import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { DocumentPdf } from 'grommet-icons'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-neutral-900'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
            <p className='text-pink-600 font-bold text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-neutral-100'>Christian Bruno</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-neutral-300'>I'm a Full Stack Developer.</h2>
            <p className='text-neutral-400 py-4 max-w-[700px] '>I'm a full-stack web development bootcamp graduate from Georgia Tech specializing in building (and occasionally designing) exceptional digital experiences on the web. Currently I am looking for opportunites to join a team as a software developer.</p>
        
            <div className='flex space-x-8'>
                <button className='text-neutral-100 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 hover:'/>
                    </span>
                </button>
                <button className='text-neutral-100 group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-400 hover:border-sky-400'>Resume 
                    <span className='group-hover:scale-110 duration-300'>
                        <DocumentPdf color='#f5f5f5' size='medium' className='ml-3 hover:'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home