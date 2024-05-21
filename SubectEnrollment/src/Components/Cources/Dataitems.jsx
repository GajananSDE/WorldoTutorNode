/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CourseForms from '../CourcesForm/CourseForms';
import { NavLink} from 'react-router-dom';
function Dataitems(props) {

  return (
    <div>
        <section className='relative w-full  border-2 p-0 m-0 mx-auto my-5  shadow-2xl shadow-gray-700 rounded-xl  overflow-hidden'>
             <div><img className=' object-fill  aspect-[16/11] w-full ' src={props.img} alt="" /></div>
             <div className='flex flex-col justify-center items-center  text-black lg:h-40'>
                <div className='text-2xl  font-bold text-center py-2 underline'>{props.desc}</div>
                <div className='px-4 mx-auto text-md font-medium  py-2 text-center '>{props.content}</div>
               { <div className='text-md font-bold pb-2 underline'>{props.Time}</div>
              }
             </div>
             <NavLink  to={`/${props.Name}/${props.Name}` }>
            <div className='w-full py-2 text-black bg-[#fad902] text-center text-xl font-bold cursor-pointer  text-[1.25rem]  
             relative transition-colors before:absolute before:top-0 
             before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
              before:scale-x-0 before:bg-yellow-400  before:transition-transform before:duration-300 
              before:content-[""] before:hover:scale-x-100'>Enroll At &#8377; {props.price}</div>
             </NavLink>
             </section>
    </div>
  )
}

export default Dataitems
