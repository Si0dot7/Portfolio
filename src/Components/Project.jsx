import React from 'react'
import current from '../assets/current.png'
import form from '../assets/form.png'
import mode from '../assets/mode.png'
import quiz from '../assets/quiz.png'
import dash from '../assets/dash.png'
import web from '../assets/web.png'
const projects=[
    {
        id: 1,
        name: "Currency Inverter",
        technologies: "React.js CSS with API",
        image: current,
        github: "https://github.com/Si0dot7/Currency-Inverter-useAPI-.git",
      },
      {
        id: 2,
        name: "Form Register",
        technologies: "React.js CSS",
        image: form,
        github: "https://github.com/Si0dot7/FormValidation.git",
      },
      {
        id: 3,
        name: "Dark & Light Mode",
        technologies: "React.js CSS",
        image: mode,
        github: "https://github.com/Si0dot7/SwitcMode.git",
      },
      {
        id: 4,
        name: "Quiz Game",
        technologies: "React.js CSS",
        image: quiz,
        github: "https://github.com/Si0dot7/quiz-test.git",
      },
      {
        id: 5,
        name: "Website Show API-Dashboard",
        technologies: "React.js CSS with API and Apexcharts",
        image: dash,
        github: "https://github.com/Si0dot7/1344_Front-end.git",
      },
      {
        id: 6,
        name: "Portfolio",
        technologies: "React.js(vite) Tailwind.css and Responsive Web Design",
        image: web,
        github: "https://github.com/Si0dot7/Portfolio.git",
      },
];

const Project = () => {
  return (
    <div className='bg-black text-white py-20' id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project)=>{
                    return(
                        <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        transform transition-transform duration-300 hover:scale-105'>
                            <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a href={project.github} target='_blank' className='inline-block bg-gradient-to-r from-green-400 to-blue-500
                            text-white px-4 py-2 rounded-full'>Github</a>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Project