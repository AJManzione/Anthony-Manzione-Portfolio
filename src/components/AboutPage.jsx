import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { useAnimationOnScroll } from './Animations';

import '../stylesheets/aboutpage.css';    

const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});

export default function AboutPage() {
  const refSlideInRight = useAnimationOnScroll('slideInRight');
  const refSlideInLeft = useAnimationOnScroll('slideInLeft');
  const refSlideInLeft2 = useAnimationOnScroll('slideInLeft');
  const [loaded, setLoaded] = useState(false);

  document.getElementById('three-animation').style.display = 'block';

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <section id="about">
    <br/><br/><br/><br/>
      <div className="flex-column align-items-sm-center">
        <h1 className="title text-center" ref={refSlideInRight}>ABOUT</h1>
        <h5 className="underline" ref={refSlideInLeft}></h5>
      </div>
      <div className='container'>
        <div className="d-flex flex-row justify-content-around align-items-lg-center flex-wrap">
          <div className="col-lg-4">
            <div className='author-image-container' ref={refSlideInLeft2}>
              {loaded ? (
                <AdvancedImage
                  cldImg={cld.image('profile-pic-1000-high_j3amtu')}
                  plugins={[lazyload()]}
                  alt=""
                  className='author' 
                />
              ) : (
                <AdvancedImage
                  cldImg={cld.image("profile-pic-lowest_mb1z29")}
                  alt=""
                  className="author"
                  onLoad={handleLoad}
                  plugins={[lazyload({ 
                  })]}
                />
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="container mt-3">
              <h3 className='pb-1'>Who I Am</h3>
              <p className="bio-shmed">
                Hi, my name is Anthony and I am a Full-Stack Web Developer. I have a passion for building elegant and unique websites and applications. When I'm not coding, you can find me rock climbing or enjoying the great outdoors.
              </p>
              <Link style={{color: 'black', cursor: 'pointer'}} className='redbox' to="/Anthony-Manzione-Portfolio/about-me">Learn More
              </Link>
              <br/>
            </div>
          </div>
        </div>
      </div> 
      <br/>
    </section> 
  )
}
