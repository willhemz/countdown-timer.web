import React from 'react'

const Countdown = () => {
  return <div className='h-96 flex justify-center items-center relative'>
    <div className='flex flex-col justify-center items-center h-1/2 gap-5'>
        <p className='font-Quicksand text-center sm:text-left text-[32px] sm:text-5xl font-bold'>Freelance task deadline</p>

        <p className='font-Quicksand font-medium text-[20px] sm:text-2xl text-center sm:text-left'>Please submit your freelance task before the countdown ends.</p>

        <div className='text-[#1b3d7d] flex gap-5'>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">03</p>
                <p className='text-base sm:text-2xl'>Days</p>
            </div>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">02</p>
                <p className='text-base sm:text-2xl'>Hours</p>
            </div>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">03</p>
                <p className='text-base sm:text-2xl'>Minutes</p>
            </div>
        </div>
    </div>
    <div className='hidden sm:block'>
        <img className='w-[338.21px] h-[514.77px] absolute top-0 right-0' src="./Assets/images/bg1.png" alt="" />
        <img className='w-[338.21px] h-[514.77px] absolute top-0 left-0' src="./Assets/images/bg2.png" alt="" />
    </div>
    <div className="w-full absolute -bottom-40 flex justify-end sm:hidden">
        <img className='opacity-30' src="./Assets/images/Hourglass.png" alt="" />
    </div>
  </div>
}

export default Countdown
