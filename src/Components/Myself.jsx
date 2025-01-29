import React from 'react'
import mehome from '../assets/mehome.webp'
const Myself = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={mehome} alt='my picture' className='mx-auto mb-8 w-44 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Thitipan Sornkhot</span>
            ,Fontend Developer
        </h1>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform
            transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact</button>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform
            transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>About Me</button>
        </div>
    </div>
  )
}

export default Myself