import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { SlideInFromRight, SlideInFromLeft, SlideUpFadeIn } from '../Animations';

import '../../stylesheets/aboutpage.css';    

const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});

function About() {

  document.getElementById('three-animation').style.display = 'block';

  return (
    <section id="about">
      <div className="flex-column align-items-center p-5">
        <SlideInFromLeft>
          <h1 className="title text-center">ABOUT</h1>
        </SlideInFromLeft>
        <SlideInFromRight>
          <h5 className="underline"></h5>
        </SlideInFromRight>
      </div>
      <SlideUpFadeIn>
        <div className='container'>
          <div className="d-flex flex-row justify-content-around align-items-lg-center flex-wrap">
            <div className="col-lg-4">
              <div className='author-image-container' /* ref={refSlideInLeft2} */>
                <AdvancedImage
                  cldImg={cld.image('profile-pic-1000-high_j3amtu')}
                  plugins={[lazyload()]}
                  alt=""  
                  className='author' 
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="container mt-5">
                <h3 className='pb-1'>Who I Am</h3>
                <p className="bio-shmed">
                  Hi, my name is Anthony and I am a Full-Stack Web Developer. I have a passion for building elegant and unique websites and applications. When I'm not coding, you can find me rock climbing or enjoying the great outdoors.
                </p>
                <Link style={{color: 'black', cursor: 'pointer'}} className='redbox' to="/Anthony-Manzione-Portfolio/about-me">Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SlideUpFadeIn> 
      <br /><br />
    </section> 
  )
}

export default About;