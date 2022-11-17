import React, {useState }from 'react'
import logo from '../assets/CBrunote_White.png'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return(
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-neutral-900 text-gray-300 z-10'>
            <div>
                <img src={logo} alt="CBrunote Logo" style={{width: '60px'}} />
            </div>
            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='font-bold'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='font-bold'>
                    <Link to='skills' smooth={true} duration={500} offset={-70}>
                        Skills
                    </Link>
                </li>
                <li className='font-bold'>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='font-bold'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
                <button className='bg-pink-600 border-2 font-bold px-3 ml-1 rounded-md border-pink-600'>Resume</button>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-neutral-800 flex flex-col justify-center items-center text-center'}>
                <ul>
                    <li className='border-b-2 border-pink-600 hover:font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500} offset={-70}>
                            Skills
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:font-bold py-6 text-3xl'>
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                    <li className='border-b-2 border-pink-600 hover:font-bold py-6 text-3xl'>Resume</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar