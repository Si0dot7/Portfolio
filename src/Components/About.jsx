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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis blanditiis earum ex quasi sit suscipit! Soluta illum minima ipsam. Atque, dolor corrupti voluptatem dicta quos neque commodi. Exercitationem consequuntur iure consectetur optio recusandae facere ut fuga, eum debitis ipsum eaque ullam eligendi minus numquam aliquid beatae est cumque nisi neque ratione! Aliquid maxime rerum odio necessitatibus consectetur quaerat ea impedit dolorem earum? Vel, laborum harum nam ratione cumque eligendi repudiandae, eius eaque possimus totam, dolor dolore excepturi placeat repellendus a recusandae nihil nemo dicta natus ut accusamus obcaecati quidem ipsam. Earum temporibus fuga deleniti ab nostrum. Saepe, ratione. Explicabo dolorem adipisci consequatur nemo eius culpa, deleniti nam tenetur! Non architecto quis optio odio! Iusto in minus quidem accusamus vitae itaque numquam nobis, voluptates eligendi, nostrum adipisci quod tempore amet sed natus vel, modi id? Nam doloribus blanditiis labore est libero at distinctio inventore laboriosam, esse quidem ut itaque amet recusandae, facilis, velit incidunt sed quia delectus laborum! Porro, consequatur reprehenderit nostrum consequuntur reiciendis dolore, sed voluptatem ea animi quos, possimus distinctio voluptas similique laudantium dolores aspernatur id dignissimos consectetur quas sit amet. Pariatur vitae nostrum, ut hic molestias accusamus doloribus quaerat expedita numquam voluptate, eos, modi est saepe corrupti.
                    </p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About