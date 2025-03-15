import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='py-5 text-center bg-neutral-100 z-50'>
      <ul className='flex justify-center align-center gap-4'>
        <li>
          <a href="https://github.com/CBrunote" target="_blank" rel="noopener noreferrer"><FaGithub size='2rem' className='hover:scale-110 duration-200 hover:opacity-75'/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/christian-bruno-dev/" target="_blank" rel="noopener noreferrer"><FaLinkedin size='2rem' className='hover:scale-110 duration-200 hover:opacity-75'/></a>
        </li>
        <li>
          <a href="mailto:christian.bruno1995@gmail.com" target="_blank"rel="noopener noreferrer"><MdEmail size='2rem' className='hover:scale-110 duration-200 hover:opacity-75'/></a>
        </li>
      </ul>
        <p className='text-md mt-2 text-neutral-600'>
        © {currentYear} Christian Bruno. All rights reserved.
        </p>
    </footer>
  )
}

export default Footer