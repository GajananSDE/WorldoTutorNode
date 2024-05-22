// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
function Navbar() {
  const [scroll,setScroll] = useState(false)
  const [click,setClick] = useState(false)
  const handleChange=()=>{
    setClick(!click)
  }
  const changeposition =()=>{

    if(window.scrollY >= 90){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  const closeWindow=()=>{
      setClick(!click)
  }
  window.addEventListener('scroll',changeposition)

 const Sidenav = (
      <div>
      <nav className="fixed top-0 right-0 w-72 overflow-y-scroll h-[100vh] z-[999]  bg-white flex flex-col visible  ">
       <div className="mb-4 pt-6 cursor-pointer text-red-500 text-2xl font-bold w-3 px-5" onClick={handleChange}>&#10140;</div>
      <ul className="flex flex-col rlative w-full border-t-2">
        <NavLink reloadDocument   to="/">
        <li className="text-[1.1rem]  border-b-2 px-6 py-1 font-[400] cursor-pointer"  onClick={closeWindow}>Home</li>
        </NavLink>
        <NavLink reloadDocument   to="https://www.worldotutor.com/pages/about" onClick={closeWindow}>
        <li className="text-[1.1rem]  border-b-2 px-6 py-1 font-[400] cursor-pointer">About Us</li>
        </NavLink>
        <NavLink reloadDocument   to="https://www.worldotutor.com/tutors" onClick={closeWindow}>
        <li className="text-[1.1rem]  border-b-2 px-6 py-1 font-[400] cursor-pointer">Find Tutors</li>
        </NavLink>
        <NavLink reloadDocument   to="/commingsoon" onClick={closeWindow}>
        <li className="text-[1.1rem]  border-b-2 px-6 py-1 font-[400] cursor-pointer">Curriculum</li>
        </NavLink>
        <NavLink reloadDocument   to="https://www.worldotutor.com/musicaljune" onClick={closeWindow}>
        <li className="text-[1.1rem]  border-b-2 px-6 py-1 font-[400] cursor-pointer">Events</li>
        </NavLink>
        <NavLink reloadDocument   to="https://www.worldotutor.com/blog" onClick={closeWindow}>
        <li className="text-[1.18rem] border-b-2 px-6 py-1 font-[400] cursor-pointer">Blog</li>
        </NavLink>

        <li className='flex justify-center border-2 py-2 rounded-md  px-9 text-[1.16rem] font-medium  cursor-pointer
        border-yellow-400 relative transition-colors before:rounded-md before:absolute before:top-0 
        before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
        before:scale-x-0 before:bg-yellow-400  before:transition-transform before:duration-300 
        before:content-[""] before:hover:scale-x-100 '  onClick={closeWindow}>
        <button className=" flex items-center justify-center ">Login</button> </li>
        <li className="  px-9 py-2 flex justify-center font-medium ">
        <button>Book A Free Trail</button>
        </li>
        <li className=" flex justify-center font-medium  px-9 py-2 " onClick={closeWindow}>
        <button>Pay Now</button>
        </li>
        <FontAwesomeIcon icon="fas fa-arrow-circle-right" />
        </ul>
        </nav>
      </div>
 );



  return (
    <div>
      <nav className={scroll? " w-full bg-white flex items-center fixed justify-between px-2  z-50":" w-full justify-between  bg-white  flex items-center relative  px-2 z-50"}>
        <div id="logo" className="flex gap-x-6  pt-7 pb-7 px-3">
          <NavLink reloadDocument  to="/">
            <img
              src="https://www.worldotutor.com/assets/images/logo.png"
              alt=""
            />
          </NavLink>
        
          <div className="lg:flex justify-center items-center hidden">
          <ul className="flex justify-center items-center gap-7 ">
          <NavLink reloadDocument   to="/">
          <li className="text-[1.18vmax] whitespace-nowrap font-[400] cursor-pointer">Home</li>
          </NavLink>
          <NavLink reloadDocument   to="https://www.worldotutor.com/pages/about">
          <li className="text-[1.18vmax] whitespace-nowrap font-[400] cursor-pointer">About Us</li>
          </NavLink>
          <NavLink reloadDocument  to="https://www.worldotutor.com/tutors">
          <li className="text-[1.18vmax] whitespace-nowrap font-[400] cursor-pointer">Find Tutors</li>
          </NavLink>
          <NavLink reloadDocument   to="/commingsoon">
          <li className="text-[1.18vmax] whitespace-nowrap font-[400] cursor-pointer">Curriculum</li>
          </NavLink>
          <NavLink reloadDocument  to="https://www.worldotutor.com/musicaljune">
          <li className="text-[1.18vmax] whitespace-nowrap font-[400] cursor-pointer">Events</li>
          </NavLink>
          <NavLink reloadDocument  to="https://www.worldotutor.com/blog">
          <li className="text-[1.18vmax] whitespace-nowrap font-[400] cursor-pointer">Blog</li>
          </NavLink>
          
          </ul>
          </div>
          </div>
          <div>
          <div className="w-full relative px-3" >
          <ul className="lg:flex w-full gap-8 hidden "  >
        <li className=' border-2 py-2  px-9 text-[1.16rem] font-medium rounded-md cursor-pointer
        border-yellow-400 relative transition-colors before:absolute before:top-0 
        before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
        before:scale-x-0 before:bg-yellow-400 before:rounded-md before:transition-transform before:duration-300 
        before:content-[""] before:hover:scale-x-100'>
        <button className=" flex items-center">Login</button>
        </li>
        <li className=" bg-[#fad902] px-9 py-2 cursor-pointer flex justify-center text-[1.18rem]  font-medium  rounded-md
        relative transition-colors before:absolute before:top-0 
        before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
        before:scale-x-0 before:bg-yellow-300 before:rounded-md before:transition-transform before:duration-300 
        before:content-[''] before:hover:scale-x-100 whitespace-nowrap
        ">
        <button>Book A Free Trail</button>
        </li>
        <li className=" bg-[#fad902] px-9 py-2 cursor-pointer flex items-center text-[1.18rem]  font-medium  rounded-md
        relative transition-colors before:absolute before:top-0 
        before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
        before:scale-x-0 before:bg-yellow-300 before:rounded-xl before:transition-transform before:duration-300 
        before:content-[''] before:hover:scale-x-100 whitespace-nowrap">
        <button>Pay Now</button>
        </li>
        </ul>
        </div>
        </div>
       
        <div className="lg:hidden flex text-xl w-12 font-extrabold text-blue-500 cursor-pointer float-right" onClick={handleChange}>&#9776;</div>
        </nav>
        {click && Sidenav}
            </div>
          );
        }
        
        export default Navbar;
        