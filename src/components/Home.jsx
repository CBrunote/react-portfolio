import React from 'react'
import resume from '../assets/Resume_2021.pdf'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { DocumentPdf } from 'grommet-icons'
import { Link } from 'react-scroll'
import ParticleBackground from './ParticleBackground'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
        <ParticleBackground/>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300'>
            <p className='text-pink-600 font-bold text-xl z-50'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-neutral-100 z-50'>Christian Bruno</h1>
            <h2 className='text-3xl sm:text-6xl font-bold text-neutral-300 z-50'>I'm a Full Stack Developer.</h2>
            <p className='text-neutral-400 text-lg py-4 max-w-[700px] z-50'>I'm a full-stack web development bootcamp graduate from Georgia Tech specializing in building (and occasionally designing) exceptional digital experiences on the web. Currently I am looking for opportunites to join a team as a software developer.</p>
            <div className='flex space-x-4 z-50'>
                <Link to='portfolio' spy={true} smooth={true} duration={500} className='group-hover:rotate-90 duration-300'>
                    <button className='text-neutral-100 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                        <HiArrowNarrowRight className='group-hover:rotate-90 duration-300 ml-3 hover:'/>
                        </button>
                    </Link>
                
                <button className='text-neutral-100 group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-400 hover:border-sky-400'>
                    <a href={resume} target="_blank" rel="noreferrer">Resume 
                    <span className='group-hover:scale-110 duration-300'>
                        <DocumentPdf color='#f5f5f5' size='20.5rem' className='ml-3 hover:'/>
                    </span>
                    </a>
                </button>
            </div>
            <div>
            <ul className='flex py-4'>
                    <li className='z-50'>
                        <a href="https://github.com/CBrunote" target="_blank" rel="noopener noreferrer"><FaGithub size='2rem' className='hover:scale-110 duration-200 hover:opacity-75'/></a>
                    </li>
                    <li className='z-50'>
                        <a href="https://www.linkedin.com/in/christian-bruno-dev/" target="_blank" rel="noopener noreferrer"><FaLinkedin size='2rem' className='hover:scale-110 duration-200 hover:opacity-75'/></a>
                    </li>
                    <li className='z-50'>
                        <a href="mailto:christian.bruno1995@gmail.com" target="_blank"rel="noopener noreferrer"><MdEmail size='2rem' className='hover:scale-110 duration-200 hover:opacity-75'/></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home