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
                    I am a passionate Full-Stack Developer intern with a good foundation in {' '}
                    <span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-pink-400 to-yellow-500'>JavaScript, Typescript, HTML, CSS</span>
                    . I enjoy building responsive and user-friendly web applications and have experience with 
                    modern frameworks like{' '}
                    <span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-pink-400 to-yellow-500'>React.js, Tailwind.css, Express.js </span>
                    and database like 
                    <span className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-pink-400 to-yellow-500'> MongoDB</span>
                    , Currently studying
                    <span className='font-bold'> IoT engineering at king mongkut's institute of technology ladkrabang</span>
                     , 
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
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 flex-shrink-0'>Express.js : </label>
                            <p>
                            Framework that I use for work in backend site. </p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 flex-shrink-0'>MongoDB : </label>
                            <p>
                            The database I use with mongoose compass. </p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 flex-shrink-0'>Postman : </label>
                            <p>
                            The tool I use to test my API.</p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 flex-shrink-0'>Typescript.ts : </label>
                            <p>
                            I use it to organize my code more neatly and it suitable for writing OOP.</p>
                        </div>
                        <div className='flex items-start flex-col'>
                            <label className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-300 flex-shrink-0'>OOP : </label>
                            <p>
                            I use with typescript to organize my code and make it current standard.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About