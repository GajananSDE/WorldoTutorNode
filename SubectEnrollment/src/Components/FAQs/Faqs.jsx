/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
import React, { useState } from "react";

function Faqs(props) {
  const [show,setShow] = useState(false)
  return (
    <div>
      <section>
      
          <li className="py-4 md:px-28">
            <div className="text-xl font-bold py-4 gap-x-7 bg-gray-200 flex justify-between  items-center rounded-xl px-10 cursor-pointer shadow-xl" onClick={()=>setShow(!show)}> 
            <h1>{props.Ques}</h1>
            {
              
              show ? <h1>&#11165;</h1>: <h1>&#11167;</h1>
            }
            </div>
            {
              show &&
              <div className="text-xl font-medium px-10 py-5 bg-white rounded-xl text-black ">
              {props.Ans}
              </div>
            }
          </li>
             
      </section>
    </div>
  );
}

export default Faqs;
