/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {loadStripe} from '@stripe/stripe-js';
import Payimage from '../../assets/paymentForm.png'
function CourseForms() {
  const navigate = useNavigate();
  const form = useRef();

  let param = useParams();
  const [cources, setCourses] = useState([]);
  React.useEffect(() => {
     try {
      fetch(
        `https://worldotutornode.onrender.com/api/course/detail/${param.Name}`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          // console.log(data)
          setCourses(data);
        });
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("cccc", cources.Name);

  console.log(form.current);
  console.log(param);
  const [data, setValue] = React.useState({
    ParentName: "",
    ParentEmail: "",
    Phone: "",
    ChildName: "",
    CourseName: param.Name,
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [amount, setAmount] = React.useState(cources.price);
  const Formsdata = async () => {
    try {
      console.log("data is->", data);
      const res = await fetch(
        "https://worldotutornode.onrender.com/api/formsdetail/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Access: "application/json",
          },
          body: JSON.stringify({
            data,
          }),
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const sendEmail = () => {
    console.log("running");
    emailjs
      .sendForm("service_g9djofd", "template_hzb7xfd", form.current, {
        publicKey: "721wEpVCHcrSRtlWU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Sent on you Email ");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Sending Failed Connect to Admin  ");
        }
      );
  };

  const handlepayment = async () => {
    console.log(amount);

    const price = cources.price;
    try {
      const res = await fetch(
        "https://worldotutornode.onrender.com/api/payment/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode:"cors",
          body: JSON.stringify({
             amount:cources.price,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      handlepaymentVerify(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handlepaymentVerify = async (items) => {
    const options = {
      key: "rzp_live_MY1tpNgK6hKGzj",x  
      // "rzp_test_uagAw643g9theS",
      // rzp_live_MY1tpNgK6hKGzj",
      amount: items.amount,
      currency: items.currency,
      name: "WorldoTutor",
      image: "https://www.worldotutor.com/assets/images/logo.png",
      description: "fee payment",
      order_id: items.id,
      handler:async  (response) => {
           try {
          const res = await fetch(
            "https://worldotutornode.onrender.com/api/payment/verify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                ParentName: data.ParentName,
                ChildName: data.ChildName,
                Phone: data.Phone,
                ParentEmail: data.ParentEmail,
                CourseName: cources.Name,
                Amount: cources.price,
              }),
            }
          );
          if (res.status === 200) {
            alert("Payment Sucessfull");
            Formsdata();
            sendEmail();
            navigate("/");
          } else {
            alert("Payment Failed");
            console.log(response);
          }
        } catch (err) {
          console.log(err);
        }
      },
      prefill: {
        name: data.ParentName,
        email: data.ParentEmail,
        contact: data.Phone,
      },
      notes: {
        address: "WorldoTuor sco-49 Omexe Royal Residency",
      },

      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };


  const Onsubmit = (e) => {
    e.preventDefault();
     handlepayment();
    // makePayment()
    setAmount(cources.price);
  };
  return (
    <div className="relative" >
      <section className="relative h-auto py-3   w-full  " style={{backgroundImage:`url(${Payimage})`}}>
    
        <div className="relative flex justify-center  w-full py-0">
          <div className="flex justify-evenly md:w-1/2 w-11/12 mx-auto">
          {
            // <div>
            //   <span className="text-2xl font-bold">Course Name: </span>{" "}
            //   <span className="text-xl font-medium">{cources.Name}</span>
            // </div>
         
            // <div>
            //   <span className="text-2xl font-bold">Amount: </span>{" "}
            //   <span className="text-xl font-medium">{cources.price}</span>
            // </div> 
          }
            <div></div>
          </div>
        </div>
        <div className=" h-auto  flex flex-col justify-center items-center">
          {
            //  <form
            //   action=""
            //   onSubmit={Onsubmit}
            //   className="relative flex flex-col justify-center items-center border-2 px-12 py-7 md:w-[36rem] md:h-[28rem] "
            //   ref={form}
            // >
            //   <div className="relative w-full border-2 my-2 flex">
            //     <input
            //       required
            //       type="text"
            //       name="ParentName"
            //       className="py-3 px-2 w-full"
            //       placeholder="Parent` Name"
            //       value={data.ParentName}
            //       onChange={handleForm}
            //     />
            //   </div>
            //   <div className="relative w-full border-2 my-2 flex">
            //     <label htmlFor=""></label>
            //     <input
            //       required
            //       type="Email"
            //       name="ParentEmail"
            //       className="py-3 px-2  w-full"
            //       placeholder="Parent`s Email"
            //       value={data.ParentEmail}
            //       onChange={handleForm}
            //     />
            //   </div>
            //   <div className="relative w-full border-2 my-2 flex">
            //     <label htmlFor=""></label>
            //     <input
            //       required
            //       type="text"
            //       name="Phone"
            //       className="py-3 px-2  w-full"
            //       placeholder="Phone"
            //       value={data.Phone}
            //       onChange={handleForm}
            //     />
            //   </div>
            //   <div className="relative w-full border-2 my-2 flex">
            //     <label htmlFor=""></label>
            //     <input
            //       required
            //       type="text"
            //       name="ChildName"
            //       className="py-3 px-2  w-full"
            //       placeholder="ChildName"
            //       value={data.ChildName}
            //       onChange={handleForm}
            //     />
            //   </div>
            //   <div className="w-full">
            //     <button
            //       className="bg-orange-900 w-full text-center text-xl py-2 font-medium text-white relative cursor-pointer"
            //       type="Submit"
            //     >
            //       Enroll Now
            //     </button>
            //   </div>
            //  </form>
          }
        </div>
        <div className="md:w-1/2">
                
        </div>
        
        <div className="flex justify-center    py-5 ">
        <form action="" ref={form} onSubmit={Onsubmit} className=" flex flex-col  flex-wrap justify-center  md:w-1/2 lg:w-1/2 bg-white  shadow-xl w-11/12 pt-6 rounded-xl overflow-hidden">
        <h1 className=" text-3xl font-medium px-4 py-6"> Payment Details <p className="content-['']  w-16 border-[3px] rounded border-yellow-400 my-2"></p></h1>
          <div className="flex flex-wrap md:mb-7 mb-3 justify-center  items-center ">
          <div className="text-xl font-medium  w-48 flex items-start ">Amount</div>
          <div className="border-2 border-black ">
          <input required
                className="text-xl h-10 px-4 bg-transparent " type="text" value={cources.price} disabled />
              </div>
              </div>
              <div className="flex flex-wrap md:mb-7 mb-3 justify-center items-center ">
              <div  className="text-xl font-medium  w-48 flex items-start   ">Parent`s Name</div>
              <div className="border-2 border-black ">
              <input required
                className="text-xl h-10 px-4 bg-transparent "
                  type="text"
                  name="ParentName"
                  placeholder="ParentName"
                  value={data.ParentName}
                  onChange={handleForm}
                  />
              </div>
              </div>
              <div className="flex flex-wrap md:mb-7 mb-3 justify-center items-center ">
              <div className="text-xl font-medium  w-48 flex items-start  ">Email</div>
              <div className="border-2 border-black ">
                <input required
                  name="ParentEmail"
                  className="text-xl h-10 px-4 bg-transparent "
                  type="Email"
                  placeholder="Email"
                  value={data.ParentEmail}
                  onChange={handleForm}
                  />
                  </div>
                  </div>
                  <div className="flex flex-wrap md:mb-7 mb-3 justify-center items-center ">
                  <div className="text-xl font-medium  w-48 flex items-start  ">Mobile Number</div>
                  <div className="border-2 border-black ">
                  <input required
                  name="Phone"
                  className="text-xl h-10 px-4 bg-transparent "
                  type="tel"
                  placeholder="Mobile Number"
                  value={data.Phone}
                  onChange={handleForm}
                  />
              </div>
            </div>
            <div className="flex flex-wrap md:mb-7 mb-3 justify-center items-center ">
              <div className="text-xl font-medium  w-48 flex items-start  ">Child Name</div>
              <div className="border-2 border-black ">
              <input required
              name="ChildName"
              className="text-xl h-10 px-4 bg-transparent "
              type="text"
              placeholder="ChildName"
              value={data.ChildName}
              onChange={handleForm}
              />
              </div>
              </div>
              <div className="flex flex-wrap  mb-3 justify-center items-center ">
              <div className="text-xl font-medium  w-48 flex items-start  "> Cource Name</div>
              <div className="border-2 border-black ">
              <input required
              className="text-xl h-10 px-4 bg-transparent " type="text" value={param.Name}  disabled/>
              </div>
              </div>
              <div className="flex flex-wrap md:mb py-2 justify-evenly items-center bg-gray-100 ">
              <div className="text-xl font-medium  w-64 flex items-start ">
                <img src="https://cdn.razorpay.com/static/assets/pay_methods_branding.png" alt="" />
              </div>
              <button
              className="py-2 px-12 bg-yellow-400 text-xl font-bold rounded  relative transition-colors before:absolute before:top-0 
              before:left-0 z-10 before:z-[-1] before:h-full before:w-full before:origin-bottom-left
               before:scale-x-0 before:bg-yellow-300 before:rounded-xl before:transition-transform before:duration-300 
               before:content-[''] before:hover:scale-x-100"
              type="Submit"
              >
               Pay &#x20B9; {cources.price}
              </button>
              </div>           
              </form>
               </div>
              </section>
              </div>
  );
}

export default CourseForms;
