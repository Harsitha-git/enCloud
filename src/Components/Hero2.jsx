import React from 'react';
import {Link} from 'react-scroll';


const Hero2 = () => {
  return (
    <section
      className="bg-white relative w-full h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-8"
     
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r z-1 from-blue-300"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-blue-500 max-w-md sm:max-w-2xl px-6 py-4">
        <h1 className="text-6xl md:text-7xl lg:text-7xl font-sans mb-2 md:mb-4 leading-tight ">
          Digital Solutions
        </h1>
        <p className="font-sans text-4xl text-black italic md:text-5xl lg:text-5xl mb-4 md:mb-6 leading-relaxed max-w-sm">
          Without the Wait
        </p>
        <Link to="features" smooth={true} duration={500} className="md:w-auto flex justify-center shadow-xl">
          
          
            <img src="Images/heroimage.png" className='w-full'/>
          
          
        </Link> 
        <a
          href="#signup"
          className="bg-blue-500 text-white font-semibold text-sm md:text-base mt-8 px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 
           hover:scale-110 duration-200"
        >
          Start Your Trial
        </a>
      </div>
    </section>
  );
};

export default Hero2;