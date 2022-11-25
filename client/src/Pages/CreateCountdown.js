import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CreateCountdown = () => {
    let [state, setState] = useState({
        title:"",
        description:"",
        days:0,
        hours:0,
        minutes:0
    });

    const handleInputChange = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked : target.value;
        const name = target.name;
        setState({
            ...state,
            [name]:value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let {title,description,days,hours,minutes} = state;
        days = +days;
        hours = +hours;
        minutes = +minutes
        const body = {title,description,days,hours,minutes}
        const url = 'http://localhost:8000/api/v1/countdown';
       postData(url,body).then((data) => {
        console.log(data)
       })
    }

    const postData = async(url,body = {}) =>{
        const response = await fetch(url, {
            method:'POST',
            body:JSON.stringify(body)
        })
        return response.json();
    }
  return <div className='flex justify-center items-center relative font-Quicksand text-#222222'>
    <div className='z-10'>
        <div className='mb-10 text-base sm:text-[20px]'>
            <p>
                To create a countdown page, write the title of the page, write the description, write the number of days, hours and minutes left, next you click on the create button. Your countdown page is ready.
            </p>
        </div>
        <div className='flex items-center'>
            <form className='basis-full sm:basis-[55%] text-base flex flex-col gap-5' action="" onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium text-[#1b3d7d]' htmlFor="title">Title</label>
                    <input className='bg-[#fdfdfd] border-[0.4px] border-[#1b3d7d] rounded-[10px] py-1 px-2' type="text" onChange={handleInputChange} name='title' placeholder='The title of your countdown page.' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium text-[#1b3d7d]' htmlFor="title">Description</label>
                    <textarea rows='5' className='bg-[#fdfdfd] border-[0.4px] border-[#1b3d7d] rounded-[10px] py-1 px-2 resize-none' onChange={handleInputChange} type="text" name='description' placeholder='The description of your countdown page.' />
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-1 text-center'>
                        <label className='font-medium text-[#1b3d7d]' htmlFor="title">Days</label>
                        <input className='bg-[#fdfdfd] border-[0.4px] w-[68px] border-[#1b3d7d] rounded-[10px] py-1 px-2' onChange={handleInputChange} type="text" name='days' placeholder='Days' />
                    </div>
                    <div className='flex flex-col gap-1 text-center'>
                        <label className='font-medium text-[#1b3d7d]' htmlFor="title">Hours</label>
                        <input className='bg-[#fdfdfd] border-[0.4px] w-[68px] border-[#1b3d7d] rounded-[10px] py-1 px-2' onChange={handleInputChange} type="text" name='hours' placeholder='Hours' />
                    </div>
                    <div className='flex flex-col gap-1 text-center'>
                        <label className='font-medium text-[#1b3d7d]' htmlFor="title">Minutes</label>
                        <input className='bg-[#fdfdfd] border-[0.4px] w-[68px] border-[#1b3d7d] rounded-[10px] py-1 px-2' type="text" placeholder='Minutes' name='minutes' />
                    </div>
                </div>

                <div className='mt-5' >
                    <Link className='btn' to='/countdown'>
                        <button type='submit'>Create Countdown</button>
                    </Link>
                </div>
            </form>
            <div className='hidden sm:block basis-[45%]'>
                <img className='w-[484px] h-[164px]' src="./Assets/images/Logo2.png" alt="logo" />
            </div>
        </div>
    </div>
    <div className='hidden sm:block'>
        <img className='w-[338.21px] h-[514.77px] absolute top-0 right-0' src="./Assets/images/bg1.png" alt="" />
        <img className='w-[338.21px] h-[514.77px] absolute top-0 left-0' src="./Assets/images/bg2.png" alt="" />
    </div>
    <div className="w-full absolute -bottom-14 flex justify-end sm:hidden">
        <img className='opacity-30' src="./Assets/images/Hourglass.png" alt="" />
    </div>
  </div>
}

export default CreateCountdown
