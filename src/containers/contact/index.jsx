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
          <p class="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p>Kapashera New Delhi</p>
            </div>
            <div class="information">
              <img src="img/email.png" class="icon" alt="" />
              <p>Prashantsrivastava516@gmail.com</p>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              <p>7827677523</p>
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
