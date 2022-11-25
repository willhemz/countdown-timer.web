import React from 'react'
import { Link } from 'react-router-dom'
import {IoClose} from 'react-icons/io5'

const Navbar = ({setShow}) => {
const toggleMenu =()=>{
    const menu = document.querySelector('#menu');
    console.log('here',menu)
    return menu ? menu.classList.toggle('hidden'): null;
}

  return <>
    <nav className='basis-2/5 font-semibold'>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 hamburger cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div className='hidden w-full md:flex md:items-center md:w-auto
           md:relative md:bg-transparent md:p-0 sm:absolute sm:bg-[#ffffff] sm:p-1 sm:z-50 sm:flex sm:rounded' id="menu">
             <ul className=' w-full md:flex justify-between'>
            <li className=''>
                <Link onClick={()=>setShow(false)} className='link' to='/'>Home</Link>
                {/* <button onClick={()=>setShow(false)} className='text-3xl text-black avg:hidden'><IoClose /></button> */}
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='link' to='/about'>About</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='link' to='/contact'>Contact Us</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='btn' to='/countdown'>Get Started</Link>
            </li>
        </ul> 
          </div>
    </nav>
  </>
}

export default Navbar
