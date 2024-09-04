/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
const Skills = () => {
  return (
    <div  className='w-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div >
              <p name='skills' className='pt-20 text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>
          
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 w-full  text-center py-8' >
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./python.png" alt="python icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./sql.png" alt="sql icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src="./excel.png" alt="Excel icon" />
                    <p className='my-4'>Excel</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src="./tableau.png" alt="Tableau icon" />
                    <p className='my-4'>Tableau</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src="./powerbi.png" alt="Powerbi icon" />
                    <p className='my-4'>Power BI</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src="./looker.png" alt="Powerbi icon" />
                    <p className='my-4'>Looker Studio</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Skills;