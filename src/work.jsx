/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Work = () => {
  const navigate = useNavigate()
  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full '>
        <div className='pb-8 md:mt-3 lg:mt-1'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='pt-6'>// Check our work!!! </p>
        </div>

{/* Container */}
        <div className='grid md:grid-cols-2 space-between gap-4 mb-10'>
            {/* Grid Item */}
            <div onClick={()=>navigate('/Dashboard-ABSA')}
              style={{ backgroundImage: `url('./sentiment-thumb.jpg')` }}
              className='cursor-pointer shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div text-center'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100' >
                <span className='text-2xl text-center font-bold text-white tracking-wider'>
                  Sentiment Analysis Dashboard
                </span>
                <p>Wholeheartedly Crafted by CTA Team</p>
              </div>
            </div>
          </div>
          </div>
        </div>
  );
};

export default Work;