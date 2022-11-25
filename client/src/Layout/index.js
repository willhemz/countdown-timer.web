import React, { useState } from 'react'
import { Navbar } from '../Components'
import { Outlet } from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'

const Layout = () => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  return <>
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-9/10 h-[93%]'>
            <header className='flex items-center justify-between w-full mb-2 sm:mb-5 relative'>
                <div className='z-[100] order-last sm:order-first'>
                    <img src="./Assets/images/Logo.png" alt="logo" className='w-[140px] h-[46px]' />
                </div>
                <button onClick={()=>setShow(true)} className={`sm:hidden ${show && 'invisible'}`}>
                    <FiMenu />
                </button>
                <Navbar show={show} setShow={setShow} />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    </div>
  </>
}

export default Layout
