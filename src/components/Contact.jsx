import React, { useState } from 'react';
import { useAnimationOnScroll } from './Animations';
import '../stylesheets/contact.css'
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

function Contact() {
  const refSlideInRight = useAnimationOnScroll('slideInRight');
  const refSlideInLeft = useAnimationOnScroll('slideInLeft');
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
        class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="rgb(236, 224, 224)" stroke="rgb(236, 224, 224)"></path>
      </svg>
      <br/><br/><br/><br/>
      <div className="animation-element slide-right">
        <div className="flex-column align-items-sm-center">
          <h1 className="text-center" ref={refSlideInRight}>CONTACT</h1>
          <h5 className="underline" ref={refSlideInLeft}></h5>
        </div>
      </div>
    <div className="d-flex flex-column align-items-sm-center container">
    {thankYouMessage && <p className=" mt-5 text-center submit-msg">{thankYouMessage}</p>}
      <div className="col-lg-5 mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            name='name'
            {...register('name', { required: true })}
            class="w-100 p-2 mb-3"
            placeholder="Name"
            type="name"
          />
          {errors.name && <p>*<span> This field is required, What is your Name?</span></p>}
          <input 
            name='email'
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            class="w-100 p-2 mb-3"
            placeholder="Email"
            type="email"
          />
          {errors.email && <p>* <span>This field is required, What is your Email?</span></p>}
          <textarea 
            name='message'
            {...register('message', { required: true })}
            class="w-100 p-2 mb-3 text-start"
            placeholder="Message"
            type="text"
          />
            {errors.message && <p>* <span> This field is required, Write me a Message.</span></p>}
          <button type='submit' class="float-end mt-2">SUBMIT</button>
        </form>
      </div>
    </div>

    <br/><br/>

  </section>
  )
}

export default Contact;