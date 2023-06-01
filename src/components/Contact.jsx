import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { SlideInFromRight, SlideInFromLeft } from './Animations';

import '../stylesheets/contact.css'

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [ thankYouMessage, setThankYouMessage] = useState("Have a question or want to work together?");

  const onSubmit = data => {
    console.log('Name: ', data.name);
    console.log('Email: ', data.email);

    emailjs.send('service_jekhd9g', 'template_iyxcyaa', data, '4gmOgFtI0HQ-RswC7')
      .then((result) => {
        console.log(result)
          reset();
          setThankYouMessage("Thank you! I will get back to you as soon as I can.");
      }, (error) => {
          console.log(error.text);
      });
  }

  
  return (
    <section id="contact">
      <svg  
        preserveAspectRatio="none" viewBox="0 0 100 102" 
        height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" 
        className="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="rgb(236, 224, 224)" stroke="rgb(236, 224, 224)"></path>
      </svg>
      <br/><br/><br/><br/>
      <div className="animation-element slide-right">
        <div className="flex-column align-items-sm-center">
          <SlideInFromLeft>
            <h1 className="title-light text-center">CONTACT</h1>
          </SlideInFromLeft>
          <SlideInFromRight>
            <h5 className="underline-light"></h5>
          </SlideInFromRight>
        </div>
      </div>
    <div className="d-flex flex-column align-items-sm-center container">
    {thankYouMessage && <p className=" mt-5 text-center submit-msg">{thankYouMessage}</p>}
      <div className="col-lg-5 mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            name='name'
            {...register('name', { required: true })}
            className="w-100 p-2 mb-3"
            placeholder="Name"
            type="name"
          />
          {errors.name && <p>*<span> This field is required, What is your Name?</span></p>}
          <input 
            name='email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            className="w-100 p-2 mb-3"
            placeholder="Email"
            type="email"
          />
          {errors.email && <p>* <span>This field is required, What is your Email?</span></p>}
          <textarea 
            name='message'
            {...register('message', { required: true })}
            className="w-100 p-2 mb-3 text-start"
            placeholder="Message"
            type="text"
          />
            {errors.message && <p>* <span> This field is required, Write me a Message.</span></p>}
          <button type='submit' className="float-end mt-2">SUBMIT</button>
        </form>
      </div>
    </div>

    <br/><br/>

  </section>
  )
}

export default Contact;