import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'
import bootstrap from '../assets/bootstrap.png'
import npm from '../assets/npm.png'
import jquery from '../assets/jquery.png'
import mysql from '../assets/mySQL.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-neutral-50 text-neutral-900'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>SKILLS</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt='HTML icon'/>
                <p className='my-4 font-bold'>HTML</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt='CSS icon'/>
                <p className='my-4 font-bold'>CSS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt='Javascript icon'/>
                <p className='my-4 font-bold'>JavaScript</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mongo} alt='Mongo icon'/>
                <p className='my-4 font-bold'>MongoDB</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt='Node icon'/>
                <p className='my-4 font-bold'>Node.js</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt='React icon'/>
                <p className='my-4 font-bold'>React</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon'/>
                <p className='my-4 font-bold'>tailwindcss</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={git} alt='Git icon'/>
                <p className='my-4 font-bold'>Git</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={bootstrap} alt='bootstrap icon'/>
                <p className='my-4 font-bold'>Boostrap</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={npm} alt='npm icon'/>
                <p className='my-4 font-bold'>NPM</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={jquery} alt='jQuery icon'/>
                <p className='my-4 font-bold'>jQuery</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mysql} alt='mySQL icon'/>
                <p className='my-4 font-bold'>mySQL</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills