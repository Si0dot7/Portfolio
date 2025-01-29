import React from 'react'
import side1 from '../assets/side1.jpg'
const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={side1} alt='my picture' className='w-72 h-96 rounded object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquid nostrum? Non animi consectetur fugit quos. Recusandae reiciendis numquam iusto corporis laudantium, cupiditate tempore voluptas architecto aut quae beatae quos.
                    </p>
                    <div className='space-y-4 text-lg ml-7'>
                        <div className='flex items-center'>
                            <label className='font-bold text-blue-400'>C / C++ : </label>
                            <p className='ml-2'>I use for control microcontroller such as ESP8266 , ESP32 for get data from IoT devices.</p>
                        </div>
                        <div className='flex items-center'>
                            <label className='font-bold text-blue-400'>Python : </label>
                            <p className='ml-2'>I use for control Rasberry pi 4 for create project smart home</p>
                        </div>
                        <div className='flex items-center'>
                            <label className='font-bold text-blue-400'>React.js with Javascript : </label>
                            <p className='ml-2'>main tool I use for create user interface. </p>
                        </div>
                        <div className='flex items-start '>
                            <label className='font-bold text-blue-400 flex-shrink-0'>CSS : </label>
                            <p className='ml-2'>
                            I tried to coding it myself without copying the template because I wanted to understand each command and have a good foundation about it
                            </p>
                        </div>
                        <div className='flex items-center'>
                            <label className='font-bold text-blue-400'>Tailwind Css : </label>
                            <p className='ml-2'>Framework I use for</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About