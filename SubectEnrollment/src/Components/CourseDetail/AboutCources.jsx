/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
function AboutCources(props) {
   return (
    <div>
       <section className='bg-white flex flex-col justify-center items-center py-10 px-10 relative'>
          <div className='text-2xl font-bold pb-6'>ABOUT THE COURSE</div>
          <ul className='text-[1.1rem] font-medium space-y-5'>
            <li>The answer is: effective time management.</li>
            <li>The phrase “Time management” is thrown around frequently and seems simple in theory. But implementing it into your life?</li>
            <li>That’s where most people get stuck.</li>
            <li>This course will help you move past those obstacles and become a time management ninja!</li>
            <li>Through pre-recorded videos, live sessions, notes, and exercises filled with frameworks, hacks, and mental models, this course will CHANGE the way you look at time.</li>
          </ul>
          <NavLink  to={`/forms/${props.object.state.obj.price}` } state={{obj:props.object}}>
          <div className='bg-orange-600 rounded-xl px-8 py-2 text-xl font-bold text-white mt-10 cursor-pointer hover:bg-orange-400'>Enroll Now</div>
          </NavLink>
       </section>
    </div>
  )
}

export default AboutCources
