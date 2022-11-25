import React from 'react'
import { Link } from 'react-router-dom'
import {IoClose} from 'react-icons/io5'

const Navbar = ({setShow}) => {
  return <>
    <nav className='basis-2/5 font-semibold'>
        <ul className='w-full flex justify-between'>
            <li className=''>
                <Link onClick={()=>setShow(false)} className='' to='/'>Home</Link>
                {/* <button onClick={()=>setShow(false)} className='text-3xl text-black avg:hidden'><IoClose /></button> */}
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='' to='/about'>About</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='' to='/contact'>Contact Us</Link>
            </li>
            <li>
                <Link onClick={()=>setShow(false)} className='btn' to='/getstarted'>Get Started</Link>
            </li>
        </ul>
    </nav>
  </>
}

export default Navbar
