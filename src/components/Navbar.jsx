import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
  return (
    <>
    <div className='min-h-[100px] grid sm:grid-cols-12 sm:w-auto w-full'>
        {/* titleSection */}
        <div className='flex sm:justify-start items-center sm:p-4 justify-between p-4 sm:col-span-4'>
          <a href="https://los-ninos.cmsmasters.net/los-ninos" className="elementor-widget-cmsmasters-site-logo__link" rel="nofollow">
            <img
              src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/logo-main.svg"
              alt="Los Niños Main"
              title="Los Niños Main"
              className="cmsmasters-lazyload-disabled elementor-widget-cmsmasters-site-logo__img elementor-widget-cmsmasters-site-logo-main"
            />
          </a>
          <div className='sm:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>

        {/* navlinkssection */}
        <div className={`flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-5 md:justify-center justify-start items-center sm:flex ${isOpen ? 'flex' : 'hidden'} sm:block sm:p-4 sm:col-span-8`}>
         
        <Link to="/">
          <h3 className='text-lg font-bold font-mono'>Home</h3>
        </Link>
          <Link to='/about'>
          <h3 className='text-lg font-bold font-mono'>About</h3>
          </Link>
          <Link to='/events'>
          <h3 className='text-lg font-bold font-mono'>Events</h3>
          </Link>
         <Link to='/gallery'>
         <h3 className='text-lg font-bold font-mono'>Gallery</h3>
         </Link>
           
           <Link to='/contact'>
           <h3 className='text-lg font-bold font-mono'>Contact</h3>
           </Link>
          
          
          <button className='bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg'>
            Enroll Now
          </button>
        </div>
      </div>

      

    </>
  )
}

export default Navbar