import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return <div className='h-[30rem] flex justify-center items-center relative font-Quicksand text-#222222'>
    <div className='basis-[55%] flex flex-col gap-6'>
        <p className='text-5xl font-bold'>Let the countdown <span className='text-[#1b3d7d]'>begin.</span></p>
        <p className='text-5xl font-bold'><span className='text-[#1b3d7d]'>3, 2, 1</span> now.</p>
        <p className='text-2xl font-medium'>
            With 3, 2, 1, you can easily create a countdown page. It is so easy that you can click the button below to begin.
        </p>
        <div>
            <Link className='btn cursor-pointer' to='/countdown'>Get Started</Link>
        </div>
    </div>
    <div className='basis-[45%]'>
        <img className='w-[612px] h-[456ox]' src="./Assets/images/rafiki.png" alt="" />
    </div>
    <div>
        <img className='w-[338.21px] h-[514.77px] absolute top-0 right-0' src="./Assets/images/bg1.png" alt="" />
        <img className='w-[338.21px] h-[514.77px] absolute top-0 left-0' src="./Assets/images/bg2.png" alt="" />
    </div>
  </div>
}

export default Home
