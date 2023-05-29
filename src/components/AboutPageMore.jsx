import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom'
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { useAnimationOnScroll } from './Animations';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});

export default function AboutPageMore() {
  const refSlideInRight = useAnimationOnScroll('slideInRight');
  const refSlideInLeft = useAnimationOnScroll('slideInLeft');
  const refSlideInRight2 = useAnimationOnScroll('slideInRight');
  const refSlideInLeft2 = useAnimationOnScroll('slideInLeft');
  const refSlideInRight3 = useAnimationOnScroll('slideInRight');
  const refSlideInLeft3 = useAnimationOnScroll('slideInLeft');
  const refSlideInRight4 = useAnimationOnScroll('slideInRight');
  const refSlideInLeft4 = useAnimationOnScroll('slideInLeft');

  document.getElementById('three-animation').style.display = 'none';
  const [loaded, setLoaded] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skills = [
  ["HTML", "CSS", "Javascript", "Python", "Node", "C#", ".NET"],
  ["Bootstrap", "Figma", "Photoshop", "Illustrator", "Premiere", "Tailwind.css"],
  ["SQL", "NoSQL", "MongoDB", "DynamoDB", "GraphQL", "Sequelize", "ORM"],
  ["Heroku", "EmailJS", "Express", "BcryptJS", "Animations", "Caching"],
  ["Linux", "OOP", "Git", "Github", "REST", "JSON", "Excel"],
];

  return (
    <div id='about-me-more'>
      <Navbar/>
      <div className="flex-column align-items-center p-5">
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
                  cldImg={cld.image("profile-pic-1000-low_kuahkt")}
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
            <div className="container mt-5">
              <h3 className='pb-1'>A Little About Me</h3>
              <p className="bio-shmed">
                Hey there! I'm Anthony Manzione, a Full-Stack Web Developer with a passion for creating websites. It all started in 2020 when I built a website for my construction company. I realized this was my true calling and completed a Full-Stack Web Development certificate program at UC Berkeley in 2021. Since then, I've been continuously honing my skills and staying up-to-date with the latest industry tools. Let's bring your ideas to life through web development! 
              </p>
            </div>
          </div>
        </div>
        <br/><br/>
      </div> 
      <div id='about-me-more-two'>
        <svg  
          preserveAspectRatio="none" viewBox="0 0 100 102" 
          height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" 
          class="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="rgb(256, 256, 256)" stroke="rgb(256, 256, 256)"></path>
        </svg>
        <div className='col-lg-12 p-5'>
            <h1 className='text-center' ref={refSlideInLeft3}>SKILLS</h1>
            <h5 className='underline-two' ref={refSlideInRight3}></h5>
        </div>
        <div className='col-lg-12 d-flex justify-content-around align-items-center flex-wrap mt-5' 
          ref={refSlideInRight4}>
          { isMobileSize ? (
            <ul id='skills-box' className='d-flex flex-row justify-content-between w-75 flex-wrap p-3'>
              {skills.flat().map(skill => (
                <li className='p-2' key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <div className='col-lg-10 d-flex justify-content-around' id='skills-box'>
              {skills.map((skillColumn, i) => (
                <ul key={i} className=' p-3 m-0'>
                  {skillColumn.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              ))}
            </div>
          )}  
        </div>
        <div className='col-lg-12 text-center p-5'>
          <Link className='redbox' to="/Anthony-Manzione-Portfolio/#portfolio">View My Projects</Link>
        </div>
        <br /><br />
      </div>
      <div id="about-me-more-three">
        <svg  
          preserveAspectRatio="none" viewBox="0 0 100 102" 
          height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" 
          class="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="rgb(46, 46, 58)" stroke="rgb(46, 46, 58)"></path>
        </svg>
        <div className="flex-column align-items-center p-5">
          <h1 className="title text-center" ref={refSlideInRight2}>RESUME</h1>
          <h5 className="underline" ref={refSlideInLeft4}></h5>
        </div>
        <div>
        <Document
          file={'https://ajmanzione.github.io/Anthony-Manzione-Portfolio/Manzione_Anthony_Resume_2023.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
          onError={console.error}>
          <Page pageNumber={pageNumber} />
        </Document>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
