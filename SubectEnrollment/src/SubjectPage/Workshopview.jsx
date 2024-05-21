/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import bgimg from "../assets/sample.png"
function Workshopview(props) {
  console.log("work", props);
  return (
    <div className="relative w-full  object-fill bg-opacity-10" style={{backgroundImage:`url(${bgimg})`}}>
      <div className="flex justify-center text-6xl text-center  font-bold py-6 relative h-auto">
        <p>Program Overview</p>
      </div>
      <div className="text-center ">
        <ul className="flex md:max-w-[992px] w-full  flex-wrap mx-auto text-black  justify-center items-center relative">
          <li className=" px-4 text-2xl font-bold curs2or-pointer list-item py-2  relative">
            <span className="md:top-0  h-48 w-48 px-5 flex items-center bg-white hover:bg-opacity-40   rounded-full  text-center">
              Hands on Learning
            </span>
          </li>
          <li className=" md:top-9 px-4 text-2xl font-bold cursor-pointer list-item py-2 relative  ">
            <span className=" h-48 w-48 px-5 flex items-center bg-white hover:bg-opacity-40   rounded-full text-center">
              Skill Enhancement
            </span>
          </li>
          <li className="md:top-0 px-4 text-2xl font-bold cursor-pointer list-item py-2   realtive   ">
            <span className=" h-48 w-48 px-5 flex items-center bg-white hover:bg-opacity-40   rounded-full text-center">
              Networking Opportunities
            </span>
          </li>
          <li className="md:top-9 px-4 text-2xl font-bold cursor-pointer list-item py-2   relative  ">
            <span className=" h-48 w-48 px-5 flex items-center bg-white hover:bg-opacity-40   rounded-full text-center">
              Personal Growth
            </span>
          </li>
          <li className="md:top-9 px-4 text-2xl font-bold cursor-pointer list-item py-2  relative  ">
            <span className=" h-48 w-48 px-5 flex items-center bg-white hover:bg-opacity-40   rounded-full text-center">
              Expert Guidance
            </span>
          </li>
          <li className=" md:top-12 px-4 text-2xl font-bold cursor-pointer list-item py-2 relative  ">
            <span className=" h-48 w-48 px-5 flex items-center bg-white hover:bg-opacity-40   rounded-full text-center">
              Problem-Solving
            </span>
          </li>
          <li className=" md:top-16 px-4 text-2xl font-bold cursor-pointer list-item py-2 relative">
            <span className=" h-48 w-48 px-5 flex items-center bg-white hover:bg-opacity-40   rounded-full  text-center">
              Boosted Confidence
            </span>
          </li>
        </ul>
        <div className="md:pt-16 py-4 pb-8 text-black">
          <NavLink to={`/forms/${props.object.Name}`}>
            <button className="py-4 px-16 bg-yellow-400 text-xl font-bold rounded  relative transition-colors before:absolute before:top-0 
            before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
             before:scale-x-0 before:bg-yellow-300 before:rounded-xl before:transition-transform before:duration-300 
             before:content-[''] before:hover:scale-x-100">
             Book Spot Now
             (Only &#x20B9; {props.object.price})
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Workshopview;
