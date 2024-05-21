/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import AboutCources from './AboutCources'
import { NavLink, useLocation, useParams } from 'react-router-dom'

function Rubic() {
    let params = useParams();
    let object = useLocation()
    const [value,setValue] = useState(object)
  return (
    <div>
      <section className='h-auto w-full mx-auto flex flex-col justify-center items-center bg-orange-400 text-black py-16 relative'> 
        <div className='text-center pb-10 '>
          <h1 className='text-3xl font-bold '> Rubic Classes</h1>
            <h2 className='text-xl font-medium '>By WorldoTutor</h2>
        </div>
        <div className='text-5xl font-bold '>
        Learn How To Own Your Time.
        </div>
      <div className='grid md:grid-cols-4 auto-rows-fr  md:gap-x-9 md:py-9 '>
         <div className='flex flex-col justify-center items-center md:py-12  '>
           <div><img src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/l8Hugusers.png"  alt="" /></div>
           <h1 className='text-xl font-medium'>2,51,231+</h1>
           <h1 className='text-xl font-medium'>STUDENTS ENROLLED</h1>
         </div>
         <div className='flex flex-col justify-center items-center py-12'>
           <div><img src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/l8Hugusers.png"  alt="" /></div>
           <h1 className='text-xl font-medium'>2,51,231+</h1>
           <h1 className='text-xl font-medium'>STUDENTS ENROLLED</h1>
         </div>
         <div className='flex flex-col justify-center items-center py-12'>
           <div><img src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/l8Hugusers.png"  alt="" /></div>
           <h1 className='text-xl font-medium'>2,51,231+</h1>
           <h1 className='text-xl font-medium'>STUDENTS ENROLLED</h1>
         </div>
         <div className='flex flex-col justify-center items-center py-12'>
           <div><img src="https://d502jbuhuh9wk.cloudfront.net/orgData/650a744de4b0e7789c22625f/pages/assets/images/l8Hugusers.png"  alt="" /></div>
           <h1 className='text-xl font-medium'>2,51,231+</h1>
           <h1 className='text-xl font-medium'>STUDENTS ENROLLED</h1>
         </div>
       </div>
        <NavLink reloadDocument to={`/forms/${params}` } state={{obj:object}}>
        <div className='px-8 py-1 text-2xl bg-blue-700 font-medium rounded-xl cursor-pointer hover:bg-blue-500 text-white'>Enroll Now</div>
        </NavLink>
       </section>
       <AboutCources object={value}/>
    </div>
  )
}

export default Rubic
