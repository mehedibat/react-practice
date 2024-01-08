import React from 'react'
import '../index.css';

function Card() {
  return (
    <div className='h-screen bg-red-100 flex justify-center items-center'>
        <div className='relative h-[500px] w-[500px] bg-gray-300 rounded-[50px] px-10 py-20' >

            <div className='h-full flex flex-col justify-between'> 
            <p className='font-medium'>Hello Mehedi</p>
            <h1 className='text-5xl font-bold'>Learn React Type Script </h1>
            <p className='text-sm'>
                By placing the Tailwind directives at the top of the file, you ensure that Tailwind's styles are loaded first, and then your custom styles are applied afterward, allowing you to override Tailwind's base styles if needed.</p>
            </div>

            <div className='bg-white h-[50px] w-[50px] absolute right-8 bottom-8 rounded-full'></div>
        
         </div>
      
    </div>
  )
}

export default Card
