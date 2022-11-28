import React,{useCallback, useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { useGenContext } from './CreateCountdown';

const Countdown = () => {
   const {title} = useParams() ;
   let url = `https://countdown-api.onrender.com/${title}`;
    
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
            console.log(data)
            console.log(state)
        }
        catch(error) {
            console.log(`${error.name}: ${error.message}`)
        }
    },[url])

    useEffect(()=>{
        const timer = setTimeout(() => {
            fetchData()
          }, 1000);
          return () => clearTimeout(timer);
       
    },[url,fetchData])

   const handleInputChange = (e) => {
    setState({
        ...state,
        title:e.target.value
    })
console.log(e)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        url = `${url}${state.title}`
console.log('form',e);
try {
    const response = await fetch(url)
    const data = await response.json()

    setState(data)
    setLoading(false)
    console.log(data)
    console.log(state)
}
catch(error) {
    console.log(`${error.name}: ${error.message}`)
}
    }
 
  return <div>
        <div className='block'>
         <form onSubmit={handleSubmit} className='basis-full sm:basis-[55%] text-base flex flex-col gap-5'>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium text-[#1b3d7d]' htmlFor="title">Title</label>
                    <input className='bg-[#fdfdfd] border-[0.4px] border-[#1b3d7d] rounded-[10px] py-1 px-2' type="text" onChange={handleInputChange} name='title' placeholder='The title of your countdown page.' />
                </div>
                <div className='mt-5' >
                        <button className='btn countdown_btn' type='submit'>View Countdown</button>
                </div>
                </form>  
    </div>
    <div className='h-96 flex justify-center items-center relative'>

    <div className='flex flex-col justify-center items-center h-1/2 gap-5'>
        <p className='font-Quicksand text-center sm:text-left text-[32px] sm:text-5xl font-bold'>{ state.title || 'New Countdown'}</p>

        <p className='font-Quicksand font-medium text-[20px] sm:text-2xl text-center sm:text-left'>{'submit your task before the deadline elapse' ||state.description}</p>

        <div className='text-[#1b3d7d] flex gap-5'>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">{state.days || '0'}</p>
                <p className='text-base sm:text-2xl'>Days</p>
            </div>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">{state.hours || '0' }</p>
                <p className='text-base sm:text-2xl'>Hours</p>
            </div>
            <div className='text-center'>
                <p className="font-digital text-[50px] sm:text-[72px]">{state.minutes || '0'}</p>
                <p className='text-base sm:text-2xl'>Minutes</p>
            </div>
        </div>
    </div>
    </div>


    <div className='hidden sm:block'>
        <img className='w-[338.21px] h-[485px] absolute -top-10 right-0 z_index_1' src="./Assets/images/bg1.png" alt="" />
        <img className='w-[338px] h-[485px] absolute -top-10 left-0 z_index_1' src="./Assets/images/bg2.png" alt="" />
    </div>
    <div className="w-full absolute -bottom-40 flex justify-end sm:hidden">
        <img className='opacity-30' src="./Assets/images/Hourglass.png" alt="" />
    </div> 
  </div>
}

export default Countdown
