import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.css";
import emailjs from '@emailjs/browser';

import { useState,useRef } from "react";

const Contact = () => {
  const[data,setdata]=useState({
    Name:"",
    email:"",
    phone:"",
    message:""
  })
  const handlechange=(e)=>{
    console.log("e",e.target.value)
    let name= e.target.name;
    let value= e.target.value;
    setdata({...data,[name]:value})
      }

      const Form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vksgvuf', 'template_fj6i3gm', Form.current, 'Q-Qy5gzpC49-axkXo')
      .then((result) => {
           alert("Successfully Send msg")
      }, (error) => {
        alert("SomeThing went wrong")

      });
  };


  return (
    <div class="contact_container">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text-gray-300">
              For Any query Pls drop Msg
          </p>

          <div class="info">
            <div class="information text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path fill="#5774cb" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
              <p className="ml-2"> Kapashera New Delhi</p>
            </div>
            <div class="information text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#5774cb" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
              <p className="ml-2">Prashantsrivastava516@gmail.com</p>
            </div>
            <div class="information text-gray-300">

            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#5774cb" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              <p className="ml-2">7827677523</p>
            </div>
          </div>

          
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form  ref={Form} autocomplete="on" onSubmit={sendEmail}>
            <h3 class="title">Contact us</h3>

            <div class="input-container">
              <input type="text" name="Name" value={data.Name}  onChange={handlechange}  class="input" placeholder="Username"/>
           
            </div>

            <div class="input-container">
              <input type="email" name="email" value={data.email} onChange={handlechange} class="input" placeholder="Email" />
              
            </div>
            <div class="input-container">
              <input type="tel" name="phone" value={data.phone} onChange={handlechange} class="input" placeholder="Phone" />
             
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" value={data.message} onChange={handlechange} placeholder="Message"></textarea>
             
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
