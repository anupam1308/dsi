import React from 'react'

const Landing = () => {
  return (
    <div className='h-full w-screen bg-gradient-to-b from-blue-800 to-blue-500'>
      <div className='flex flex-col justify-center items-center py-3'>
      <h1 className='text-white text-4xl py-3'>Bengaluru</h1>
      <p className='text-white text-3xl py-3'>34°</p>
      <p className='text-white py-3'>Mostly cloudy 28°/35°</p>
      <p className='text-white '>Air quality : 65 - 
         Satisfactory</p>
      </div>

      <div className='flex justify-center items-center rounded-2xl px-10 mx-0 sm:mx-80 bg-gray-600 py-5'>
        
        <div className='flex flex-col justify-center items-center px-2'>
          <p>Now</p>
          <img className='h-14' src="/clear.png" alt="" />
          <p>34°</p>
        </div>

        <div className='flex flex-col justify-center items-center px-2'>
          <p>Now</p>
          <img className='h-14' src="/clear.png" alt="" />
          <p>34°</p>
        </div>

        <div className='flex flex-col justify-center items-center px-2'>
          <p>Now</p>
          <img className='h-14' src="/clear.png" alt="" />
          <p>34°</p>
        </div>

        <div className='flex flex-col justify-center items-center px-2'>
          <p>Now</p>
          <img className='h-14' src="/clear.png" alt="" />
          <p>34°</p>
        </div>

        <div className='flex flex-col justify-center items-center px-2'>
          <p>Now</p>
          <img className='h-14' src="/clear.png" alt="" />
          <p>34°</p>
        </div>
      </div>
    </div>
  )
}

export default Landing