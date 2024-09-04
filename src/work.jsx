/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Work = () => {
  const navigate = useNavigate()
  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-4 pt-[70px] flex flex-col justify-center w-full h-full'>
        <div className='pb-8 md:mt-3 lg:mt-1'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='pt-6'>// Check out some of my recent works </p>
        </div>

{/* Container */}
        <div className='grid md:grid-cols-2 space-between gap-4'>
            {/* Grid Item */}
            <div onClick={()=>navigate('/mental-health')}
              style={{ backgroundImage: `url('./mental-thumb.png')` }}
              className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100' >
                <span className='text-2xl text-center font-bold text-white tracking-wider'>
                  Mental Health Dashboard
                </span>
                <p>Excel</p>
              </div>
            </div>
             {/* Grid Item */}
             <div onClick={()=>navigate('/Inventory')}
              style={{ backgroundImage: `url('./inventory-hero.png')` }}
              className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100' >
                <span className='text-2xl text-center font-bold text-white tracking-wider'>
                  Supply Chain Inventory Management Dashboard
                </span>
                <p>Looker Studio</p>
              </div>
            </div>
            {/* Grid Item */}
            <div onClick={() => navigate('/pizza')}
              style={{ backgroundImage: `url('./dpizza1.png')` }}
              className='shadow-lg shadow-[#040c16] cursor-pointer group container rounded-md flex justify-center items-center mx-auto content-div text-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl  text-center font-bold text-white tracking-wider'>
                  Pizza Sales Dashboard
                </span>
                <p>Power BI</p>
              </div>
            </div>
            {/* Grid Item */}
            <div onClick={()=>navigate('/electric-vehicle')}
              style={{ backgroundImage: `url('./ev.png')` }}
              className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100' >
                <span className='text-2xl text-center font-bold text-white tracking-wider'>
                  Electric Vehicle Dashboard
                </span>
                <p>Tableau</p>
              </div>
            </div>
            {/* Grid Item */}
            <div onClick={() => navigate('/HR')}
              style={{ backgroundImage: `url('./hr2.png')` }}
              className='shadow-lg cursor-pointer shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl  text-center font-bold text-white tracking-wider'>
                  HR Analytics Dashboard
                </span>
                <p>Power BI</p>
              </div>
            </div>
            {/* Grid Item */}
            <div onClick={() => navigate('/AB-Testing')}
              style={{ backgroundImage: `url('./abthumb.png')` }}
              className='shadow-lg cursor-pointer shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl  text-center font-bold text-white tracking-wider'>
                  A/B Testing
                </span>
                <p>Python</p>
              </div>
            </div>
          </div>
          </div>
        </div>
  );
};

export default Work;