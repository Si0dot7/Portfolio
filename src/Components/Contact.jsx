import React from 'react'
import { FaEnvelope,FaPhone,FaLine,FaGithub  } from "react-icons/fa"

function Contact() {
  return (
    <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>                
                    <div className='flex-1'>              
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                            <span>felm27010@gmail.com</span>   
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                            <span>0959436839</span>
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaLine className='inline-block text-green-400 mr-2'></FaLine>
                            <span>Line ID: 0959436839</span>
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaGithub className='inline-block text-green-400 mr-2'></FaGithub>
                            <span>Github : </span>
                            <a href='https://github.com/Si0dot7' target='_blank'>https://github.com/Si0dot7</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact