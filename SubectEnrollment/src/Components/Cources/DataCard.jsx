/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from 'react'
import CourseData from '../../assets/CourcesData'
import Dataitems from './Dataitems'
import Header from './Header'
import img from '../../assets/sample.png'
function DataCard() {
  const [cources,setCourses] = useState([])
  const [update,fetchUpdate] = useReducer(x=>x+1,0)
  
  useEffect(()=>{
    try{
          fetch("https://worldotutornode.onrender.com/api/course/data").then((data)=>{
               return data.json();
          }).then((data)=>{
            // console.log(data)
            setCourses(data)
            
            fetchUpdate()
          })
    }catch(err){
           console.log(err)
    }
  },[])
  return (
    <div className='bg-white w-full relative '>
    <div className='pb-12' id='courses' style={{backgroundImage:`url()`}}>
    <Header/>
    <div  className='text-center font-bold text-4xl  py-10'>Workshops</div>
    <article  className='grid md:grid-cols-[repeat(3,minmax(200px,1fr))] relative gap-x-10 md:mx-36 mx-3 auto-rows-fr '>
    
    {
      CourseData.map((item)=>{
        return <Dataitems key={item.id} desc={item.heading} content={item.content} img={item.img} price={item.price} Name={item.Name} Time={item.Time}/>
      })
    }
    </article>
    </div>
    </div>
  )
}

export default DataCard
