import React from 'react'
import sun from '../assets/sun.webp'
const Myself = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={sun} alt='my picture' className='mx-auto mb-8 w-52 h-60 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Thitipan Sornkhot</span>
            ,Full-Stack Developer
        </h1>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform
            transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                <a href='#contact'>Contact</a>
            </button>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform
            transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                <a href='#service'>Education</a>
            </button>
        </div>
    </div>
  )
}

export default Myself