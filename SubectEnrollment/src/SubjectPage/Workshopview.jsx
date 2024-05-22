/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import bgimg from "../assets/sample.png";
function Workshopview(props) {
  console.log("work", props);
  {
    // flex-wrap: nowrap;
    // margin: 0 auto;
    // overflow: auto;
    // padding-bottom: 20px;
    // justify-content: flex-start;
    // padding-top: 20px
  }
  return (
    <section className="bg-orange-400">
      <div className=" w-full ">
        <div className="flex justify-center text-6xl text-center  font-bold py-6 relative h-auto underline">
          <p>Program Overview</p>
        </div>
        <div className="text-center ">
          <ul className="flex md:max-w-[1000px]  h-auto overflow-x-auto md:overflow-x-visible py-16 flex-nowrap w-auto md:flex-wrap mx-auto pb-4  text-black  md:justify-center justify-start items-center relative">
            <li className=" px-4 text-2xl font-medium cursor-pointer list-item py-2  relative">
              <span className="md:top-0  h-52 w-52 px-5 flex items-center bg-white   rounded-full  text-center">
                Hands on Learning
              </span>
            </li>
            <li className=" md:top-9 px-4 text-2xl font-medium cursor-pointer list-item py-2 relative  ">
              <span className=" h-52 w-52 px-5 flex items-center bg-white   rounded-full text-center">
                Skill Enhancement
              </span>
            </li>
            <li className="md:top-0 px-4 text-2xl font-medium cursor-pointer list-item py-2   realtive   ">
              <span className=" h-52 w-52 px-5 flex items-center bg-white   rounded-full text-center">
                Networking Opportunities
              </span>
            </li>
            <li className="md:top-9 px-4 text-2xl font-medium cursor-pointer list-item py-2   relative  ">
              <span className=" h-52 w-52 px-5 flex items-center bg-white   rounded-full text-center">
                Personal Growth
              </span>
            </li>
            <li className="md:top-9 px-4 text-2xl font-medium cursor-pointer list-item py-2  relative  ">
              <span className=" h-52 w-52 px-5 flex items-center bg-white   rounded-full text-center">
                Expert Guidance
              </span>
            </li>
            <li className=" md:top-12 px-4 text-2xl font-medium cursor-pointer list-item py-2 relative  ">
              <span className=" h-52 w-52 px-5 flex items-center bg-white   rounded-full text-center">
                Problem-Solving
              </span>
            </li>
            <li className=" md:top-16 px-4 text-2xl font-medium cursor-pointer list-item py-2 relative">
              <span className=" h-52 w-52 px-5 flex items-center bg-white   rounded-full  text-center">
                Boosted Confidence
              </span>
            </li>
          </ul>
          <div className="md:pt-16 px-4 py-4 pb-8 text-black">
            <NavLink reloadDocument to={`/forms/${props.object.Name}`}>
              <button
                className="py-5 px-12 bg-yellow-400 text-2xl font-bold rounded hover:bg-orange-49 text-black
    relative transition-colors before:absolute before:top-0 
   before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
    before:scale-x-0 before:bg-yellow-300 before:rounded-xl before:transition-transform before:duration-300 
    before:content-[''] before:hover:scale-x-100"
              >
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
  );
}

export default Workshopview;
