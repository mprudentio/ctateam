/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
const Skills = () => {
  return (
    <div  className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div >
              <p name='skills' className='pt-20 text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>
          

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 w-full  text-center py-8' >
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./Html.png" alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./Css.png" alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./Javascript.png" alt="Javascript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./React.png" alt="React icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./Tailwind.png" alt="Tailwind icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./ruby.png" alt="ruby icon" />
                    <p className='my-4'>RUBY</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Skills;