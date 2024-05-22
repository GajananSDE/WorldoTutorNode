/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import banner from "../../assets/banner1.png";
import timer from "../../assets/timer.svg";
import certi from "../../assets/certificate.svg";
import './Style.css'
import "aos/dist/aos.css";

import Aos from "aos";
function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full ">
      <section className="relative  ">
      <div className=" py-10" id="header-form">
      <div id="container" className=" relative md:max-w-full max-w-[540px] w-full px-4 mx-auto " >
      <div className="items-center relative flex -mx-4" id="banner">
      <div id="col-md-6" className=" md:max-w-[50%] md:flex-[0,0,50%] relative w-full md:px-4 md:ml-16">
                <div>
                <div className="px-3">
                <h1 className="font-bold md:text-7xl text-5xl text-white flex items-center"> Learn New Skills With world'o'tutor</h1>
                <div id="Date-Time" className=" my-9">
                <h5 className="font-medium text-3xl text-white  py-5"> Workshops Designed To Help You Grow <br />And Master New Skills</h5>
                </div>
                </div>
                
                  <div id="Photo-video" className="relative lg:hidden md:hidden">
                  <div>
                  <img src={banner} alt="" className="h-auto max-w-full align-middle"/>
                  </div>
                  <AnchorLink href="#courses">
                  <div id="button" className=" text-center my-4">
                  <button className="bg-yellow-400 py-2 px-16 font-medium text-2xl inline-block">All Workshop</button>
                  </div>
                  </AnchorLink>
                  </div>
                  <div id="rows" className="flex flex-wrap px-3 -mx-4">
                    <div className=" w-full md:flex-[0,0,50%] md:max-w-[50%] px-4">
                     <div className="flex items-center relative">
                     <img src={certi} alt="" className="max-w-[90%] h-auto align-middle"/>
                     <p className=" z-[1] left-16 top-3 pl-9 w-52 h-16 flex items-center font-medium bg-gray-300 ">Get Certification by World'o'Tutor</p>
                     </div>
                    </div>
                    <div className="relative w-full flex-[0,0,50%] md:max-w-[50%] px-6 pt-2 md:pt-0">
                     <div className="flex items-center relative">
                     <img src={timer} alt="" className="max-w-full h-auto align-middle"/>
                     <p className=" z-[1] left-16 top-3 pl-9 w-52 h-16 flex items-center font-medium bg-gray-300 ">Limited Seats Aviilable</p>
                     </div>
                     
                    </div>
                  </div>
                </div>
             </div>

             <div className=" justify-center md:flex hidden items-center flex-col relative w-full scroll-pr-4">
             <div className="relative">
                <img src={banner} alt="" className=" h-[26rem]  w-[550px] relative align-middle " />
             </div>
             <AnchorLink href="#courses">
             <div id="button" className=" text-center my-4">
             <button className="bg-yellow-400 py-2 px-16 font-medium text-2xl inline-block">All Workshop</button>
             </div>
             </AnchorLink>
             </div>

 
         </div>

              
         
         </div>
         
         {
      //   <div className="w-full " id="header-form"  >
      //   <div className=" md:mx-[9vmax] flex justify-center top-[4vmax] mx-auto my-auto  text-black max-w-full">
      //   <div id="banner-wrap " className="relative w-1/2 ">
      //   <div className="px-4 py-1">
      //         <h1
      //           className=" md:text-5xl text-[4vmax] font-bold text-white  "
      //           data-aos="fade-in"
      //         >
      //           Learn New Skills With world'o'tutor
      //         </h1>
      //         <p
      //           className=" text-2xl font-normal max-w-xl  text-white pt-11   "
      //           data-aos="fade-in"
      //         >
      //           Workshops Designed To Help You Grow And Master New Skills
      //         </p>
      //         </div>
      //         <div className="grid md:grid-cols-2  md:gap-x-9 gap-y-4 px-4 md:py-16 py-6 w-full">
      //           <div className="flex  max-w-full relative " data-aos="fade-down">
      //             <div>
      //               <img
      //                 src={certi}
      //                 alt=""
      //                 className="max-w-36 md:h-16 md:aspect-[11/11]  "
      //               />
      //             </div>
      //             <div
      //               className="font-medium flex-nowrap text-orange-700 px-2  flex items-center bg-gray-100
      //                "
      //             >
      //              <p> Get Certification by World'o'Tutor</p>
      //             </div>
      //           </div>
      //           <div
      //             className="flex relative max-w-full "
      //             data-aos="fade-down"
      //           >
      //             <div>
      //               <img
      //                 src={timer}
      //                 alt=""
      //                 className="max-w-36 md:max-h-16  md:aspect-auto-[3/3]"
      //               />
      //             </div>
      //             <div
      //               className="font-medium flex-nowrap text-orange-700 md:px-2 px-10 whitespace-nowrap  flex items-center bg-gray-100
      //               "
      //             >
      //              <p> Limited Seats Aviilable </p>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="overflow-hidden">
      //       <img  src={banner} alt=""  className=' object-fill order-2 md:w-[600px] md:h-[25em]  md:mr-20 '/>
      //       <AnchorLink href="#courses">
      //       <div className="right-0 mx-auto  left-0 flex  text-black md:w-1 w-full  ">
      //         <div className="flex justify-center  w-full  py-2">
      //           <button className="py-2 px-16 text-2xl  font-medium whitespace-nowrap bg-yellow-400 ">
      //             All Workshops
      //           </button>
      //         </div>
      //       </div>
      //     </AnchorLink>
      //       </div>
      //     </div>
      
            
            
      //       </div>
          }
          </div>
        <div className="flex justify-center lg:-mt-12 z-50  ">
          <ul className="flex border-2 border-orange-500 flex-wrap">
            <li className="md:border-x-2 md:border-2 border-b-2  w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 md:py-4 py-2 text-center">
              <p className=" text-orange-500 font-bold">Personal Attention</p>
            </li>
            <li className="md:border-x-2 md:border-2 border-b-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 md:py-4 py-2 text-center">
              <p className=" text-orange-500 font-bold">
                After Class Free Notes
              </p>
            </li>
            <li className="md:border-x-2 md:border-2 border-b-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 md:py-4 py-2 text-center">
              <p className=" text-orange-500 font-bold">Free Certificate</p>
            </li>
            <li className="md:border-x-2 md:border-2 border-b-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 md:py-4 py-2 text-center">
              <p className=" text-orange-500 font-bold">In-depth Knowledge</p>
            </li>
            <li className="md:border-x-2 md:border-2 border-b-2 w-full border-orange-500  bg-white lg:w-52 flex flex-col  justify-center items-center px-2 md:py-4 py-2 text-center">
              <p className=" text-orange-500 font-bold">
                Networking Opportunities
              </p>
            </li>
          </ul>
        </div>
        
        </section>

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
        
        </div>
  );
}

export default Header;
