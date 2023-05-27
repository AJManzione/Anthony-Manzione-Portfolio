import React from 'react';
import { useAnimationOnScroll } from './Animations';
import '../stylesheets/contact.css'

function Contact() {
  const refSlideInRight = useAnimationOnScroll('slideInRight');
  const refSlideInLeft = useAnimationOnScroll('slideInLeft');

  document.getElementById('three-animation').style.display = 'block'
  
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
      <p className="mt-5 text-center">Have a question or want to work together?</p>
      <div className="col-lg-5 mt-2">
        <form action="">
          <input 
            class="w-100 p-2 mb-3"
            placeholder="Name"
            type="name"></input>
          <input 
            class="w-100 p-2 mb-3"
            placeholder="Email"
            type="email"></input>
          <input 
            class="w-100 p-2 mb-3 text-start"
            placeholder="Message"
            type="text"></input>
          <button class="float-end mt-2">SUBMIT</button>
        </form>
      </div>
    </div>

    <br/><br/>

  </section>
  )
}

export default Contact;