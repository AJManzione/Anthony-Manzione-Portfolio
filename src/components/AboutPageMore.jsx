import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { SlideInFromRight, SlideInFromLeft, SlideUpFadeIn } from './Animations';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Resume from '../assets/Manzione_Anthony_Resume_2023.pdf';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});

export default function AboutPageMore() {
  document.getElementById('three-animation').style.display = 'none';

  const [isMobileSize, setIsMobileSize] = useState(false);


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
      <div id='about-me-more-one'>
        <div className="flex-column align-items-center p-5">
          <SlideInFromRight>
          <h1 className="title text-center">ABOUT</h1>
          </SlideInFromRight>
          <SlideInFromLeft>
          <h5 className="underline"></h5>
          </SlideInFromLeft>
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
              <div className="col-lg-6 mt-5">
                <div className="container">
                  <h3 className='pb-1'>A Little About Me</h3>
                  <p className="bio-shmed">
                    Hey there! I'm Anthony Manzione, a Full-Stack Web Developer with a passion for creating websites. It all started in 2020 when I built a website for my construction company. I realized this was my true calling and completed a Full-Stack Web Development certificate program at UC Berkeley in 2021. Since then, I've been continuously honing my skills and staying up-to-date with the latest industry tools. Let's bring your ideas to life through web development! 
                  </p>
                </div>
              </div>
            </div>
            <br/><br/>
          </div> 
        </SlideUpFadeIn>
      </div>
      <div id='about-me-more-two'>
        <div className='col-lg-12 p-5'>
          <SlideInFromLeft>
            <h1 className='text-center'>SKILLS</h1>
          </SlideInFromLeft>
          <SlideInFromRight>
            <h5 className='underline-two'></h5>
          </SlideInFromRight>
        </div>
          { isMobileSize ? (
            <div className='col-lg-12 d-flex justify-content-around align-items-center flex-wrap mt-5'>
            <SlideUpFadeIn>
              <ul id='skills-box' className='d-flex flex-row justify-content-between w-75 flex-wrap p-3'>
                {skills.flat().map(skill => (
                  <li className='p-2' key={skill}>{skill}</li>
                ))}
              </ul>
            </SlideUpFadeIn>
            </div>
          ) : (
            <div className='col-lg-10 d-flex justify-content-around' id='skills-box'>
              {skills.map((skillColumn, i) => (
                <SlideUpFadeIn>
                  <ul key={i} className=' p-3 m-0'>
                    {skillColumn.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </SlideUpFadeIn>
              ))}
            </div>
          )}  
        <div className='col-lg-12 text-center p-5'>
          <Link className='redbox' style={{color:'white'}} to="/Anthony-Manzione-Portfolio/#portfolio">View My Projects</Link>
        </div>
        <br /><br />
      </div>
      <div id="about-me-more-three">
        <div className="flex-column align-items-center p-5">
          <SlideInFromRight>
            <h1 className="title text-center">RESUME</h1>
          </SlideInFromRight>
          <SlideInFromLeft>
            <h5 className="underline"></h5>
          </SlideInFromLeft>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <a href={Resume} target='__blank' >View My Resume</a>
          <br />
          <a href={Resume} target='__blank' download={Resume}>Download My Resume</a>        
        </div>
        <br /><br />
      </div>
      <Footer/>
    </div>
  )
}
