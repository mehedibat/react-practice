import React from 'react'

const From = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='max-w-5xl w-full mx-auto flex gap-6 bg-white p-10 rounded-xl shadow-2xl'>
            <div className='w-1/2 bg-[#E2ECFF] flex justify-center items-center rounded-xl'>
                <div className='flex flex-col gap-4 p-5 justify-center items-center text-center'>
                    <img src="../mehedi.jpeg" alt="Mehedi" className='w-[150px] h-[150px] rounded-full'/>
                <h1 className='text-2xl font-bold '>Let us help you run your own platform</h1>
                <p className='text-gray-500'>Our registration process is quicker than other edtech platform</p>
                </div>
            </div>
            <div className='w-1/2'>
                <h1 className='text-2xl font-bold'>Get Started</h1>
                <p className='text-gray-500 pb-10'>Create your account now!</p>
                <form action="#" className='flex flex-col gap-4'>
                    <div className=''>
                        <label htmlFor="fName" className='text-gray-500 inline-block py-2'>Full Name:</label>
                        <input type="text" name="fName" id="fName" placeholder='Mehedi Hasan' 
                        className='w-full border border-gray-200 focus:outline-none rounded-md px-4 py-2'/>
                    </div>
                    <div className=''>
                        <label htmlFor="fName" className='text-gray-500 inline-block py-2'>Email:</label>
                        <input type="text" name="fName" id="fName" placeholder='mehedi@gmail.com' 
                        className='w-full border border-gray-200 focus:outline-none rounded-md px-4 py-2'/>
                    </div>
                    <div className=''>
                        <label htmlFor="fName" className='text-gray-500 inline-block py-2'>Password:</label>
                        <input type="text" name="fName" id="fName" placeholder='' 
                        className='w-full border border-gray-200 focus:outline-none rounded-md px-4 py-2'/>
                    </div>

                    <div className=''>
                        <button className='w-full rounded-md bg-[#0082DF] py-3'>Sign In</button>
                    </div>

                </form>
                <p className='text-center pt-10'>Already a member? <span className='text-[#0082DF] font-bold'>Sign  In</span></p>
            </div>
        </div>
    </div>
  )
}

export default From
