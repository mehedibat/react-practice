import React from 'react'
import From from './From'

const SignUpFrom = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-red-300'>

        <div className='max-w-5xl w-full bg-white flex gap-6 p-10 rounded-lg'>
            <div className='w-1/2 bg-[#E2ECFF] flex justify-center items-center p-8 rounded-lg text-center'>

                <div className='flex flex-col gap-6 justify-center items-center'>
                    <img   src="../mehedi.jpeg" alt="Mehedi" className='w-[150px] h-[150px] rounded-full' />
                    <h1 className='text-2xl font-bold'>Let us help you run your own platform</h1>
                    <p className='text-gray-500 '>Our registration process is quicker than other edtech platform</p>
                </div>

            </div>


            <div className='w-1/2'>
            <h1 className='text-2xl font-bold'>Get Started</h1>
            <p className='pb-10'>Create your account now!</p>
            <form action="#" className='flex flex-col gap-4'> 

            <div>
                <label htmlFor="fName" className='inline-block py-2'>Full Name:</label>
                <input type="text" name='fName' id='fName' placeholder='Mehedi Hasan' 
                className='w-full border border-gray-300 focus:outline-none rounded-md py-2 px-4' />
            </div>

            <div>
                <label htmlFor="fEmail" className='inline-block py-2'>Email:</label>
                <input type="text" name='fEmail' id='fEmail' placeholder='me@gmail.com' 
                className='w-full border border-gray-300 focus:outline-none rounded-md py-2 px-4' />
            </div>

            <div>
                <label htmlFor="fPassword" className='inline-block py-2'>Password:</label>
                <input type="text" name='fPassword' id='fPassword' placeholder='' 
                className='w-full border border-gray-300 focus:outline-none rounded-md py-2 px-4' />
            </div>

            <div>
                <button className='w-full bg-[#0082DF] font-bold py-3 rounded-lg'>Sign In</button>
            </div>
            
            </form>   

            <p className='text-center pt-10'>Already have an account? <span className='text-[#0082DF] font-bold'>Sign In</span></p>    
            </div>
        </div>
      
    </div>
  )
}

export default SignUpFrom
