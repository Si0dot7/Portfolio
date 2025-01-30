import React from 'react'

const services=[
    {
        id: 1,
        title: "Transcript",
        description: "transcript from year 1 to year 2",
        href:'/transcrip-1.jpg',

      },
      {
        id: 2,
        title: "Resume",
        description: "Resume for a comprehensive overview of myself.",
        href:'/Resume.pdf',
      },
      // {
      //   id: 3,
      //   title: "Backend Development",
      //   description: "Developing robust server-side logic and databases.",
      //   href:'/transcrip-1.jpg',
      // },
    
];

const Service = () => {
  return (
    <div className='bg-black text-white py-20' id='service'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Education</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {services.map((e)=>{
                    return(
                        <div key={e.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                        transition-transform duration-300 hover:scale-105'>
                            <div className='text-right text-2xl font-bold bg-clip-text text-blue-400'>
                                {e.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-green-400 to-blue-500'>
                                {e.title}
                            </h3>
                            <p className='mt-2 mb-3 text-gray-300'>{e.description}</p>
                            <a href={e.href} target='_blank' className='mt-7 iinline-block text-green-400 hover:text-blue-500'>See Picture</a>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Service