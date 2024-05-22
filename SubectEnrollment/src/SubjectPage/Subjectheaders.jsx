/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee"
import './Style.css'
import CourseData from "../assets/CourcesData";

function Subjectheaders(props) {
  const [item,setitem] = useState()
 console.log("sub ",props)
  return (
    <div>
    <section className="w-full bg-gray-50 text-black relative ">
    <div className="  py-5 relative">
        <header className="text-center  text-5xl font-bold pb-7 bg-white ">
         <span id="text" > {props.object.heading} Workshop </span>
        </header>
        <Marquee className="text-xl font-bold w-full relative py-2 bg-yellow-300 " speed={60}  >
          <p className="px-12"><span className="px-1" >{props.object.heading}</span> Webinar only At &#x20B9; <span className="px-1">{props.object.price}</span></p>
          <p className="px-12"><span className="px-1" >{props.object.heading}</span> Webinar only At &#x20B9; <span className="px-1">{props.object.price}</span></p>
          <p className="px-12"><span className="px-1" >{props.object.heading}</span> Webinar only At &#x20B9; <span className="px-1">{props.object.price}</span></p>
          <p className="px-12"><span className="px-1" >{props.object.heading}</span> Webinar only At &#x20B9; <span className="px-1">{props.object.price}</span></p>
       
        </Marquee>
        <div className="  my-1 bg-orange-400 py-4 text-center text-xl font-bold underline">
          {props.object.Time}
        </div>
        </div>
        <div className="grid md:grid-cols-2 grid-rows-1 gap-x-8 px-4 py-5">
          <div className="md:pl-16 mb-3 md:m-0">
            <img
              className="md:h-96 md:w-11/12 max-w-full  rounded-2xl"
              src={props.object.img}
              alt=""
            />
          </div>
          <div className="text-black font-medium text-[1.2vamx] md:pr-12 ">
            <div>
               <h1 className="font-bold underline text-2xl pb-7">{props.object.webinarheading}</h1>
               <ul>
                <li className="flex px-3 py-1">
                   <div className="font-bold">&#10003;</div>
                  <div className="font-medium px-3 ">{props.object.webinartime}</div>
                </li>
                <li className="flex px-3 py-1">
                   <div className="font-bold">&#10003;</div>
                  <div className="font-medium px-3 ">{props.object.webinarh1}</div>
                </li>
                <li className="flex px-3 py-1">
                   <div className="font-bold">&#10003;</div>
                  <div className="font-medium px-3 ">{props.object.webinarh2}</div>
                </li>
                <li className="flex px-3 py-1">
                   <div className="font-bold">&#10003;</div>
                  <div className="font-medium px-3 ">{props.object.webinarh3}</div>
                </li>
               </ul>
            </div>
            <div className="md:pt-5 pt-4 text-center">
            <NavLink reloadDocument  to={`/forms/${props.object.Name}` } >
              <button className=" py-5 px-12 bg-yellow-400 text-2xl font-bold rounded hover:bg-orange-49 text-black
              relative transition-colors before:absolute before:top-0 
             before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
              before:scale-x-0 before:bg-yellow-300 before:rounded-xl before:transition-transform before:duration-300 
              before:content-[''] before:hover:scale-x-100">
              <div className="flex flex-wrap items-center justify-center">
              <p> Book Spot Now</p>
              <p>(Only &#x20B9; {props.object.price})</p>
              </div>
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subjectheaders;
