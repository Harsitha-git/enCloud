import React, { useState } from 'react';
import {Link} from 'react-scroll';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
    
  return (
    <nav className="flex justify-between fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl bg-white shadow-lg rounded-full px-6 py-2 z-50">

        {/*This is the logo*/} 
      <div className="text-2xl font-bold text-blue-600">
       
        
        <img src="Images/Logo.png" className='w-32 px-2 py-2' /> 

      </div>


      <div className="hidden md:flex space-x-4 py-3">

            <Link
              to="features"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-blue-600 cursor-pointer"
            >
              Solutions
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-blue-600 cursor-pointer"
            >
              FAQ
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-blue-600 cursor-pointer"
            >
              Pricing
            </Link>
       
      
      
      
  
          
      </div>

        {/*These are the buttons*/} 
      <div className='hidden md:flex'>

        


        <a
          
          href="https://encloud.app/wsdev/public/signup" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white px-6 font-light py-3 rounded-full hover:bg-blue-500">
          Sign In
          
        </a>
       
        <a
          
          href="https://encloud.app/wsdev/public/signup" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white mx-4 px-4 py-3 font-light rounded-full hover:bg-blue-500">
          Sign Up
          
        </a>
      
      
      </div>

     
      {/*For responsiveness*/}  
      
      
      <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              
              <svg className="w-6 h-6 my-2 mx-2" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
       
      

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-3 px-6 py-4 absolute left-3/4 transform -translate-x-1/2 w-auto max-w-md">
          <div className="space-y-4 text-center">
          <Link
              to="features"
              smooth={true}
              duration={500}
              className="block text-gray-700 hover:text-blue-600 cursor-pointer"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="benefits"
              smooth={true}
              duration={500}
              className="block text-gray-700 hover:text-blue-600 cursor-pointer"
              onClick={toggleMenu}
            >
              Benefits
            </Link>
            <Link
              to="faq"
              smooth={true}
              duration={500}
              className="block text-gray-700 hover:text-blue-600 cursor-pointer"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <a
              href="https://example.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-black px-4 py-2 rounded-full text-center hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Sign In
            </a>
            <a
              href="https://example.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-black px-4 py-2 rounded-full text-center hover:bg-blue-700"
              onClick={toggleMenu}
            >
              Sign Up
            </a> 
        
        </div>
     
      </div>
      )}
      
      
     


    </nav>
  );
};

export default Navbar;
