/* eslint-disable no-unused-vars */
import React, { useEffect} from 'react';
import emailjs from '@emailjs/browser';

export const EmailSendtemp = (props) => {
 
//   const form = useRef();
  const sendEmail = (e) => {
   console.log(props)
    e.preventDefault();
    console.log("running")
    emailjs
      .sendForm('service_g9djofd', 'template_hzb7xfd', props, {
        publicKey: '721wEpVCHcrSRtlWU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
    {console.log("mail send")
  

    }

    </div>
  );
};