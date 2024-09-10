import React,  { useState } from 'react'
import {
    FaBars,
    FaTimes,} 
from 'react-icons/fa'
import { Link } from 'react-scroll';



function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
    <div>
      <Link to='home' smooth={true} duration={500} className='cursor-pointer'><img src="./Logo.png" alt="Logo" style={{width:'50px'}}/> </Link>
    </div>

    {/* Menu */}
        <ul className='hidden md:flex'>
          <Link to='home' smooth={true} duration={500}>  <li className='hover:border-b-2 hover:border-pink-600'>
            Home
          </li></Link>
          {/* <Link to='about' smooth={true} duration={500}>  <li className='hover:border-b-2 hover:border-pink-600'>
            About
          </li></Link>
          <Link to='skills' smooth={true} duration={500}>  <li className='hover:border-b-2 hover:border-pink-600'>
            Skills
          </li></Link> */}
          <Link to='work' smooth={true} duration={500}> <li className='hover:border-b-2 hover:border-pink-600'>
            Work
          </li> </Link>
          {/* <Link to='contact' smooth={true} duration={500}><li className='hover:border-b-2 hover:border-pink-600'>
            Contact
         </li> </Link> */}
        </ul>


    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
    </div>

    {/* Mobile Menu */}
        <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        } >
           <Link onClick={handleClick} to='home' smooth={true} duration={500}> <li className='py-4 text-3xl'>
            Home
          </li></Link>
          {/* <Link onClick={handleClick} to='about' smooth={true} duration={500}> <li className='py-4 text-3xl'>
            About
          </li></Link>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}> <li className='py-4 text-3xl'>
            Skills
          </li></Link> */}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}><li className='py-4 text-3xl'>
            Work
          </li></Link>
          {/* <Link onClick={handleClick} to='contact' smooth={true} duration={500}><li className='py-4 text-3xl'>
            Contact
          </li></Link> */}
        </ul>

    {/* Social Icons */}
        {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/muhammad-prudentio-jawairul-falah-816279157/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto: muprudentio@gmail.com?subject = Feedback&body = Message'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/18FM3nUawHyZyj1X5agTPSKzN0OVkMSSb/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
        </div> */}

    </div>

  )
}

export default Navbar