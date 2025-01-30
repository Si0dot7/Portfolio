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
                    <span className='ml-5'>{' '}</span>
                    I am a passionate Frontend Developer intern with a good foundation in {' '}
                    <span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-yellow-400 to-yellow-200'>HTML, CSS, and JavaScript</span>
                    . I enjoy building responsive and user-friendly web applications and have experience with 
                    modern frameworks like{' '}
                    <span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-green-400 to-blue-500'>React.js, Tailwind.css</span>
                    , Currently studying IoT engineering at king mongkut's institute of technology ladkrabang, 
                    I am eager to apply my skills in real-world projects and collaborate with a real-world development team.
                    </p>
                    <div className='space-y-4 text-lg ml-7 '>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300'>C / C++ : </label>
                            <p>I use for control microcontroller such as ESP8266 , 
                                ESP32 for get data from IoT devices.</p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300'>Python : </label>
                            <p>I use for control Rasberry pi 4 for create project smart home</p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300'>React.js with Javascript : </label>
                            <p>main tool I use for create user interface. </p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 flex-shrink-0'>CSS : </label>
                            <p>
                            I tried to coding it myself without copying the template because I wanted to understand 
                            each command and have a good foundation about it
                            </p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 flex-shrink-0'>Tailwind.css : </label>
                            <p>
                            Framework that I use to be more professional and beautiful 
                            I understand the functionality better after having a good foundation in css.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About