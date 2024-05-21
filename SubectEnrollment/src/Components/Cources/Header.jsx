/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import banner from '../../assets/Web_Banner.png'
import timer from '../../assets/timer.svg'
import certi from '../../assets/certificate.svg'
import "aos/dist/aos.css";
import Aos from "aos";
function Header() {
   useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <div className='w-full '>
       <section className='relative'>
            <div className='w-full '>
              <div className='absolute md:ml-[10vmax] lg:bottom-1/2 top-[4vmax] mx-auto my-auto md:max-w-2xl text-white' >
                 <h1 className=' lg:text-7xl text-[3vmax] font-bold' data-aos="fade-in">Learn New Skills With world'o'tutor</h1>
                 <p className='lg:text-2xl text-[1.2vmax] font-normal max-w-md ' data-aos="fade-in">Workshops Designed To Help You Grow And Master New Skills</p>
                 <div className='flex gap-x-9 py-12'>
                    <div className='md:flex max-w-64  hidden' data-aos="fade-down">
                     <div><img src={certi} alt="" className='w-36 h-16 aspect-[7/8]  ' /></div>
                     <div className='font-medium text-orange-700  px-7 flex items-center bg-gray-100
                     '>Get Certification by World'o'Tutor</div>
                    </div>
                    <div className='md:flex max-w-64 hidden  '  data-aos="fade-down">
                     <div><img src={timer} alt=""  className='max-w-36 max-h-16  aspect-auto-[3/3]'/></div>
                     <div className='font-medium text-orange-700 items-center px-[1.3vmax] flex bg-gray-100 
                     ' >Limited Seats Aviilable</div>
                    </div>
                 </div>
              </div>
            <img  src={banner} alt=""  className=' object-fill z-[-1] w-full max-h-[36em] '/>
        <AnchorLink href='#courses' >
        <div className='lg:absolute right-0 mx-auto left-0  bottom-28 text-black md:w-1 w-full '>
        <div className='flex justify-center '>
        <button className='py-2 px-16 text-2xl  font-medium whitespace-nowrap bg-yellow-400 '>All Workshops</button>
        </div>
        </div>
        </AnchorLink>
      
            </div>
               

            <div className='flex justify-center lg:-mt-12  '>
                 <ul className='flex lg:border-y-2 border-orange-500 flex-wrap'>
                  <li className='md:border-x-2 border-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 py-6 text-center'>
                     <p className=' text-orange-500 font-bold'>Personal Attention</p>
                    
                  </li>
                  <li className='md:border-x-2 border-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 py-6 text-center'>
                     <p className=' text-orange-500 font-bold'>After Class Free Notes</p>
                     
                  </li>
                  <li className='md:border-x-2 border-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 py-6 text-center'>
                     <p className=' text-orange-500 font-bold'>Free Certificate</p>
                     
                  </li>
                  <li className='md:border-x-2 border-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 py-6 text-center'>
                     <p className=' text-orange-500 font-bold'>In-depth Knowledge</p>
                    
                  </li>
                  <li className='md:border-x-2 border-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 py-6 text-center'>
                     <p className=' text-orange-500 font-bold'>Networking Opportunities</p>
                   
                  </li>
                 </ul>
            </div>

            {

               // <div className=' grid lg:grid-cols-6 grid-cols-[auto,auto] bg-orange-600 text-white justify-center items-center w-full px-16  '>
               // <div className=' lg:w-full  text-center flex flex-col justify-center items-center p-10'>
               // <img className='py-5 w-7' src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/GPE7olaptop.png" alt="" />
               // <p className='text-xl font-medium'>On-Demand Courses</p>
               // </div>
               // <div className=' lg:w-full  text-center flex flex-col justify-center items-center p-10'>
               // <img className='py-5 w-7' src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/GPE7olaptop.png" alt="" />
               // <p className='text-xl font-medium'>Community
               // Channel</p>
               // </div>
               // <div className=' lg:w-full  text-center flex flex-col justify-center items-center p-10'>
               // <img className='py-5 w-7' src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/GPE7olaptop.png" alt="" />
               // <p className='text-xl font-medium'>Live Q&A
               // Sessions</p>
               // </div>
               // <div className=' lg:w-full  text-center flex flex-col justify-center items-center p-10'>
               // <img className='py-5 w-7' src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/GPE7olaptop.png" alt="" />
               // <p className='text-xl font-medium'>14-Day Refund
               // Policy </p>
               // </div>
               // <div className=' lg:w-full  text-center flex flex-col justify-center items-center p-10'>
               // <img className='py-5 w-7' src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/GPE7olaptop.png" alt="" />
               // <p className='text-xl font-medium'>Lifetime
               // Access</p>
               // </div>
               // <div className=' lg:w-full  text-center flex flex-col justify-center items-center p-10'>
               // <img className='py-5 w-7' src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/GPE7olaptop.png" alt="" />
               // <p className='text-xl font-medium'>Course
               // Certificate</p>
               // </div>
               // </div>
            }
               </section>
               </div>
  )
}

export default Header
