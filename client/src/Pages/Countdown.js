import React,{useCallback, useEffect, useState} from 'react'
import { useGenContext } from './CreateCountdown';

const Countdown = () => {
    let url = `https://countdown-api.onrender.com/`
    const [loading, setLoading] = useState(false)
    let [state, setState] = useState({
        title:"",
        description:"",
        days:0,
        hours:0,
        minutes:0
    });

    const fetchData = useCallback(async() => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setState(data)
            setLoading(false)
            console.log(state)
        }
        catch(error) {
            console.log(`${error.name}: ${error.message}`)
        }
    },[url])

    useEffect(()=>{
        fetchData()
    },[url,fetchData])
 
  return <div className='h-96 flex justify-center items-center relative'>
    <div className='flex flex-col justify-center items-center h-1/2 gap-5'>
        <p className='font-Quicksand text-center sm:text-left text-[32px] sm:text-5xl font-bold'>{'New Countdown' || state.title}</p>

        <p className='font-Quicksand font-medium text-[20px] sm:text-2xl text-center sm:text-left'>{'submit your task before the deadline elapse' ||state.description}</p>

        <div className='text-[#1b3d7d] flex gap-5'>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">{'0' || state.days}</p>
                <p className='text-base sm:text-2xl'>Days</p>
            </div>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">{'0' || state.hours}</p>
                <p className='text-base sm:text-2xl'>Hours</p>
            </div>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">{'0' || state.minutes}</p>
                <p className='text-base sm:text-2xl'>Minutes</p>
            </div>
        </div>
    </div>
    <div className='hidden sm:block'>
        <img className='w-[338.21px] h-[485px] absolute -top-10 right-0' src="./Assets/images/bg1.png" alt="" />
        <img className='w-[338px] h-[485px] absolute -top-10 left-0' src="./Assets/images/bg2.png" alt="" />
    </div>
    <div className="w-full absolute -bottom-40 flex justify-end sm:hidden">
        <img className='opacity-30' src="./Assets/images/Hourglass.png" alt="" />
    </div>
  </div>
}

export default Countdown
