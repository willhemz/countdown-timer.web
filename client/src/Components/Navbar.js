import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'

const Navbar = ({show, setShow}) => {
  return <nav className={`basis-2/5 font-semibold absolute sm:static bg-[#e8edf5] sm:bg-transparent -top-[35%] -left-[5.5%] w-screen sm:w-auto h-screen sm:h-auto z-50 overflow-hidden ${show ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}>
        <ul className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between mt-24 sm:mt-0 px-[7%] sm:px-0'>
            <li className=''>
                <Link onClick={()=>setShow(false)} className='' to='/'>Home</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='' to='/about'>About</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='' to='/contact'>Contact Us</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='btn hidden sm:block' to='/getstarted'>Get Started</Link>
            </li>
        </ul>
        <button onClick={()=>setShow(false)} className='sm:hidden absolute z-[100] left-[5%] text-xl text-[#1b3d7d] top-[6%]'>
            <IoMdClose />
        </button>
    </nav>
}

export default Navbar
