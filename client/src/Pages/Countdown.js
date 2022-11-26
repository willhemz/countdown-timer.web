import React,{useState} from 'react'

const Countdown = () => {
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
        let {title} = state;
        const url = `https://countdown-gen.brandonarmand.repl.co/${title}`;
       getData(url,title).then((data) => {
        console.log(data)
       })
    }

    const getData = async(url) =>{
        const response = await fetch(url, {
            method:'GET'
        })
        return response.json();
    }
 
  return <div className='h-96 flex justify-center items-center relative'>
     <form className='basis-full sm:basis-[55%] text-base flex flex-col gap-5' action="" onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1'>
                    <label className='font-medium text-[#1b3d7d]' htmlFor="title">Title</label>
                    <input className='bg-[#fdfdfd] border-[0.4px] border-[#1b3d7d] rounded-[10px] py-1 px-2' type="text" onChange={handleInputChange} name='title' placeholder='The title of your countdown page.' />
                </div>
                <div className='mt-5' >
                    <span className='btn'>
                        <button type='submit'>View Countdown</button>
                    </span>
                </div>
                </form>
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
