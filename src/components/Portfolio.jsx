import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { SlideInFromRight, SlideInFromLeft, SlideUpFadeIn } from './Animations';

import '../stylesheets/portfolio.css'

const cld = new Cloudinary({
  cloud: {
    cloudName: 'depgzk2o2'
  },
  url: {
    secure: true
  },
});


export default function Portfolio() {

  document.getElementById('three-animation').style.display = 'block'

  return (
      <section id="portfolio">
        <svg  
          preserveAspectRatio="none" viewBox="0 0 100 102" 
          height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" 
          className="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="rgb(256, 256, 256)" stroke="rgb(256, 256, 256)"></path>
      </svg>
        <div className="flex-column align-items-sm-center p-5">
          <SlideInFromRight>
            <h1 className="text-center title">PROJECTS</h1>
          </SlideInFromRight>
          <SlideInFromLeft>
            <h5 className="underline"></h5>
          </SlideInFromLeft>
        </div>
        <div className="container mt-5">
          <SlideUpFadeIn>
            <div className="row">
              <div className="col-lg-4" >
                <Link to="/Anthony-Manzione-Portfolio/mickey-n-friends-finder" title="Click Here To Learn More">
                  <figure className="effect-portfolio">
                    <div className="movies-container">
                      <div className="movies-overlay"></div>
                          <AdvancedImage
                            alt='A Placeholder image showing the first project in the portfolio'
                            className='movies'
                            cldImg={cld.image('mickey-n-friends-finder_fj7lto')} 
                            plugins={[lazyload()]}
                          />                      
                      </div>
                    <figcaption>
                        <div className="caption">
                          <h1>MICKEY N FRIENDS FINDER</h1>
                        </div>
                        <div className="slide-in">
                          <p>Search Any Disney Character</p>
                          <p>See All Movies and TV Shows They Appear In</p>
                          <p>Learn More About That TV Show or Movie</p>
                        </div>
                    </figcaption>
                  </figure>
                </Link>
              </div>

              <div className="col-lg-4">
                <Link to="/Anthony-Manzione-Portfolio/wish-list" title="Click Here To Learn More">
                  <figure className="effect-portfolio">
                    <div className="movies-container">
                      <div className="movies-overlay"></div>
                        <AdvancedImage
                          alt='A Placeholder image showing the second project in the portfolio'
                          className='movies'
                          cldImg={cld.image('vkudsbctowkp0kgc179x')} 
                          plugins={[lazyload()]}
                        /> 
                    </div>
                    <figcaption>
                      <div className="caption">
                        <h1>WISH LIST</h1>
                      </div>
                      <div className="slide-in">
                        <p>Login and Create an Acount</p>
                        <p>Create Wish Lists and Registry's</p>
                        <p>Add, Edit, Remove Items, Budget, and Share!</p>
                      </div>
                    </figcaption>
                  </figure>
                </Link>
              </div>

              <div className="col-lg-4" >
                <Link to="/Anthony-Manzione-Portfolio/pokedex-tracker" title="Click Here To Learn More">
                  <figure className="effect-portfolio">
                    <div className="movies-container">
                      <div className="movies-overlay"></div> 
                        <AdvancedImage
                          alt='A Placeholder image showing the third project in the portfolio'
                          className='movies'
                          cldImg={cld.image('pokedex-tracker_fltsci')} 
                          plugins={[lazyload()]}
                        /> 
                    </div>
                    <figcaption>
                      <div className="caption">
                        <h1>POKEDEX TRACKER</h1>
                      </div>
                      <div className="slide-in">
                        <p>Login and Create an Acount</p>
                        <p>Keep Track of Your Pokedex</p>
                        <p>Customize Sprites, Earn Badges!</p>
                      </div>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            </div>
          </SlideUpFadeIn>
        </div>
        <br/><br/>
      </section>
  )
}
