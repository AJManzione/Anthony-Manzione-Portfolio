import React, { useState } from 'react';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import Navbar from '../Navbar'


const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});


function Project1() {
  const [loaded, setLoaded] = useState(false);

  document.getElementById('three-animation').style.display = 'none';

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div id='aboutMNFF' className='d-flex flex-column justify-content-center'>
      <Navbar/>
      <div className='big-movies-container'>
        <div className="d-flex flex-column justify-content-center align-items-lg-center mt-5">
          {loaded ? (
            <AdvancedImage
              alt='A Placeholder image showing the first project in the portfolio'
              className='big-movies'
              cldImg={cld.image('mickey-n-friends-finder_dfohvs')} 
              plugins={[lazyload()]}
            /> 
          ) : (
            <AdvancedImage
              className='big-movies'
              cldImg={cld.image('mickey-n-friends-finder-lowest_zgfn36')} 
              plugins={[lazyload()]}
              onLoad={handleLoad}
            /> 
          )} 
      </div>
      <div className='learn-more-nav d-flex flex-row justify-content-center w-100 mt-5 mb-5'>
        <ul className="d-flex flex-row justify-content-between mb-5 mt-5 w-75">
          <li>
            <a 
              href="https://wseban.github.io/Mickey-n-Friends-Finder/"
              target="_blank"
              className="redbox">
              VISIT SITE
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/wseban/Mickey-n-Friends-Finder"
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
  </div>
  )
}

export default Project1;