import React, { useState } from 'react';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import Navbar from '../Navbar';
import Footer from '../Footer';


const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});


function Project2() {
  const [loaded, setLoaded] = useState(false);

  document.getElementById('three-animation').style.display = 'none';

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div id='wish-list' className='d-flex flex-column justify-content-center'>
      <Navbar/>
      <div className='big-movies-container'>
        <div className="d-flex flex-column justify-content-center align-items-lg-center mt-5">
          {loaded ? (
              <AdvancedImage
                alt='A Placeholder image showing the second project in the portfolio'
                className='big-movies'
                cldImg={cld.image('vkudsbctowkp0kgc179x')} 
                plugins={[lazyload()]}
              /> 
            ) : (
              <AdvancedImage
                className='big-movies'
                cldImg={cld.image('wish-list_wh7ayn')} 
                plugins={[lazyload()]}
                onLoad={handleLoad}
              /> 
            )} 
      </div>
      <div className='learn-more-nav d-flex flex-row justify-content-center w-100 mt-5 mb-5'>
        <ul className="d-flex flex-row justify-content-around mb-5 mt-5 w-100 p-0">
          <li>
            <a 
              href="https://wish-list-maker.herokuapp.com/"
              target="_blank"
              className="redbox">
              VISIT SITE
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/AJManzione/wish-list"
              target="_blank"
              className="redbox">
              GITHUB
            </a>
          </li>
          <li>
            <a 
              href=""
              className="redbox">
              LEARN MORE  
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Project2;
