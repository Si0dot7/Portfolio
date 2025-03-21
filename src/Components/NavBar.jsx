import React from 'react'

const NavBar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Thitipan</div>
            <div className='space-x-7'>
                <a href='#home' className='hover:text-gray-400'>Home</a>
                <a href='#about' className='hover:text-gray-400'>About Me</a>
                <a href='#service' className='hover:text-gray-400'>Education</a>
                <a href='#project' className='hover:text-gray-400'>Project</a>
                <a href='#contact' className='hover:text-gray-400'>Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar