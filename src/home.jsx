import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, We are</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          CTA Team
        </h1>
        <p className='font-bold text-[#8892b0]'>
          {/* I'm an aspiring Data Analyst, driven by the pursuit of excellence in data analysis */}
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Our Work a.k.a Dashboard
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;