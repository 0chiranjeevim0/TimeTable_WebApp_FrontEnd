import React from 'react';
import './css/banner.css';


const Banner = () =>{



    return(
        <div className='w-full banner-background p-4 flex justify-between pt-6'>
           <div className='w-full lg:w-1/2 flex items-center lg:py-2 px-8'>
                <div className='w-full mt-4 flex flex-col'>
                    <h1 className='text-center lg:text-start text-md font-extrabold leading-8 underline'>CREATE A TIME TABLE ACCORDING TO YOU SPECIFICATIONS IN SECONDS</h1>
                    <p className='leading-7 mt-4 text-center lg:text-start '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <button className='bg-black text-white px-20 py-4 mx-auto lg:ml-0 rounded-xl mt-4 lg:mt-12'>Get Started</button>
                </div>
           </div>
           <div className='hidden lg:block w-1/2 justify-end py-2 pr-16'>
                <img className='w-2/3 ml-auto' alt='banner-img' src='./timetable.svg'/>
           </div>
        </div>
    )
}



export default Banner;
