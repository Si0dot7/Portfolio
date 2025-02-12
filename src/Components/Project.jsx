import React from 'react'
import current from '../assets/current.png'
import form from '../assets/form.png'
import mode from '../assets/mode.png'
import quiz from '../assets/quiz.png'
import dash from '../assets/dash.png'
import web from '../assets/web.png'
import susu from '../assets/susu.png'
import scroll from '../assets/scroll.png'
import search from '../assets/search.png'
import sort from '../assets/sort.png'
import crud from '../assets/crud.png'
const projects=[
      {
        
        name: "Form CRUD Full-Stack",
        technologies: "React.js(vite) moongoose Express.js Javascript.js",
        image: crud,
        github: "https://github.com/Si0dot7/Form-CRUD-Full-Stack.git",
        web:'/crud.pdf',
      },
      {
        
        name: "Sort/Merge Array and Jest test",
        technologies: "Typescript.ts Jest.js and O(nlogn)",
        image: sort,
        github: "https://github.com/Si0dot7/sort-and-merge-array-with-jest-test.git",
        
      },
      {
        
        name: "Search API",
        technologies: "React.js(vite) Tailwind.CSS with API",
        image: search,
        github: "https://github.com/Si0dot7/Search-API.git",
        web:'/search.pdf',
      },
      {
       
        name: "Infinite Scroll",
        technologies: "React.js(vite) Tailwind.CSS with API",
        image: scroll,
        github: "https://github.com/Si0dot7/Infinite-Scroll.git",
        web:'/scroll.pdf',
      },
      {
        
        name: "Portfolio",
        technologies: "React.js(vite) Tailwind.css and Responsive Web Design",
        image: web,
        github: "https://github.com/Si0dot7/Portfolio.git",
        web:'https://portfolio-a51p.onrender.com/',
      },
      {
      
        name: "Form Register",
        technologies: "React.js CSS",
        image: form,
        github: "https://github.com/Si0dot7/FormValidation.git",
        web:'/formlong.pdf',
      },
      {
       
        name: "Dark & Light Mode",
        technologies: "React.js CSS",
        image: mode,
        github: "https://github.com/Si0dot7/SwitcMode.git",
        web:'/modelong.pdf',
      },
      {
        
        name: "Quiz Game",
        technologies: "React.js CSS",
        image: quiz,
        github: "https://github.com/Si0dot7/quiz-test.git",
        web:'/quizlong.pdf',
      },
      {
       
        name: "Currency Inverter",
        technologies: "React.js CSS with API",
        image: current,
        github: "https://github.com/Si0dot7/Currency-Inverter-useAPI-.git",
        web:'/currentlong.pdf',
      },
      {
        
        name: "Website Show API-Dashboard",
        technologies: "React.js CSS with API and Apexcharts",
        image: dash,
        github: "https://github.com/Si0dot7/1344_Front-end.git",
        web:'/weblong.pdf',
      },
      {
       
        name: "UX/UI Sushi Website Design",
        technologies: "Figma",
        image: susu,
        web:"https://www.figma.com/design/mJwuGW9g7w0W5vSCTwPbw3/66011344-thitipan?node-id=11-2&p=f&t=7EKovvqNKKolQsTP-0",
      },
];

const Project = () => {
  return (
    <div className='bg-black text-white py-20' id='project'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,index)=>{
                    return(
                        <div key={index} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        transform transition-transform duration-300 hover:scale-105'>
                            <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a href={project.github} target='_blank' className='inline-block bg-gradient-to-r from-green-400 to-blue-500
                            text-white px-4 py-2 rounded-full'>Github</a>
                            <a href={project.web} target='_blank' className='inline-block ml-3 bg-gradient-to-r from-pink-400 to-yellow-500
                            text-white px-4 py-2 rounded-full'>Example</a>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Project