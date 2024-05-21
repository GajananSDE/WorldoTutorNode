/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Subjectheaders from './Subjectheaders'
import Workshopview from './Workshopview'
import { useParams } from 'react-router-dom'
import Faqs from '../Components/FAQs/Faqs';
import Faqsdata from '../Components/FAQs/FaqsData';

function SubjectHome() {
  let param = useParams();
  const [cources,setCourses] = useState([])
  useEffect(()=>{
    try{
          fetch(`http://localhost:3000/api/course/detail/${param.Name}`).then((data)=>{
               return data.json();
          }).then((data)=>{
            // console.log(data)
            setCourses(data)
          })
    }catch(err){
           console.log(err)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
   return (
    <div className=' bg-gray-50'>
         <Subjectheaders object={cources}/>
         <Workshopview object = {cources}/>
         <ul className="md:px-2 px-10  py-12 relative">
         <div className='text-5xl underline text-center font-bold py-5'>FAQs</div>
          {
            Faqsdata.map((item)=>{
              return <Faqs key={item.id} Ques={item.Ques} Ans={item.Ans}/>
            })
          }
          
          </ul>
    </div>
  )
}

export default SubjectHome
