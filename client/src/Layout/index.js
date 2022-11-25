import React, { useState } from 'react'
import { Navbar } from '../Components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)
  return <>
    <div className='w-full h-full flex justify-center items-center'>
        <div className='w-9/10 h-[93%]'>
            <header className='flex items-center justify-between mb-5'>
                <div className='col-span-3'>
                    <img src="./Assets/images/Logo.png" alt="logo" className='w-[140px] h-[46px]' />
                </div>
                <Navbar setShow={setShow} />
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
