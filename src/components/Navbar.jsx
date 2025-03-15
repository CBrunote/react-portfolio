import React, {useState }from 'react'
import resume from '../assets/Christian_Bruno_Resume_MAR_2025.pdf'
import logo from '../assets/CBrunote_White.png'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-neutral-900 text-neutral-400 z-[100]'>
            <Link to='home' spy={true} smooth={true} duration={200}>
                <img src={logo} alt="CBrunote Logo" style={{width: '60px'}} />
            </Link>
            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-neutral-50 font-bold'>
                    <Link activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='home' spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-neutral-50 font-bold'>
                    <Link activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='about' spy={true} smooth={true} duration={500} offset={-120}>
                        About
                    </Link>
                </li>
                <li className='hover:text-neutral-50 font-bold'>
                    <Link activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='skills' spy={true} smooth={true} duration={500} offset={-70}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-neutral-50 font-bold'>
                    <Link activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='portfolio' spy={true} smooth={true} duration={500} offset={-69}>
                        Portfolio
                    </Link>
                </li>
                <li className='hover:text-neutral-50 font-bold'>
                    <Link activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='contact' spy={true} smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <button className='bg-pink-600 border-2 hover:text-neutral-50 font-bold px-3 ml-1 rounded-md border-pink-600'>
                    <a href={resume} target="_blank" rel="noreferrer">    
                        Resume
                    </a>
                </button>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars size='1.75rem' className='hover:scale-150 duration-300'/> : <FaTimes size='1.75rem' className='hover:scale-150 duration-300'/>}
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-neutral-400 bg-neutral-800 flex flex-col justify-center items-center text-center'}>
                <ul>
                    <li className='border-b-2 border-pink-600 hover:text-neutral-50 font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='home' spy={true} smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:text-neutral-50 font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='about' spy={true} smooth={true} duration={500} offset={-120}>
                            About
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:text-neutral-50 font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='skills' spy={true} smooth={true} duration={500} offset={-70}>
                            Skills
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:text-neutral-50 font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='portfolio' spy={true} smooth={true} duration={500}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:text-neutral-50 font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} activeClass="text-neutral-50 font-bold border-b-4 border-pink-600" to='contact' spy={true} smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 text-neutral-50 font-bold py-6 text-3xl'>
                        <a href={resume} target="_blank" rel="noreferrer">    
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar