import React from 'react';
import './css/navbar.css';

const Navbar = () =>{



    return(
        <div className='w-screen navbar-master-container p-4 flex justify-between items-center'>
            <div className='w-1/4'>
                <h1 id="navbar-logo" className='font-bold text-xl'>TIME<span>table</span></h1>
            </div>
            <div className='lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className='hidden lg:block w-fit'>
                <ul className='inline-flex'>
                    <li className='mr-8 hover:text-gray-900 hover:underline'><a href="#">Documentation</a></li>
                    <li className='mr-8 hover:text-gray-900 hover:underline'><a href="#">Explore</a></li>
                    <li className='mr-8 hover:text-gray-900 hover:underline'><a href="#">Support</a></li>
                    <li className='mr-8 hover:text-gray-900 hover:underline'><a href="#">About US</a></li>
                </ul>
                <input  className='py-2 px-6 rounded-full focus:outline-none'  type='text' placeholder="Search For TimeTable" />
                <button id="navbar-search-button" className='bg-black py-2 px-6 text-white rounded-r-full hover:bg-gray-900'>
                    Search
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 inline-flex items-center ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            
        </div>
    )
}


export default Navbar;
