import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { useAnimationOnScroll } from './Animations';

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
  const refSlideInRight = useAnimationOnScroll('slideInRight');
  const refSlideInLeft = useAnimationOnScroll('slideInLeft');
  const refRedBox = useAnimationOnScroll('redbox');
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);

  document.getElementById('three-animation').style.display = 'block'

  const handleLoad1 = () => {
    setLoaded1(true);
  };
  const handleLoad2 = () => {
    setLoaded2(true);
  };
  const handleLoad3 = () => {
    setLoaded3(true);
  };

  return (
      <section id="portfolio">
      <br/><br/><br/><br/>
        <div className="flex-column align-items-sm-center">
          <h1 className="text-center title" ref={refSlideInLeft} >PROJECTS</h1>
          <h5 className="underline" ref={refSlideInRight} ></h5>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="d-flex justify-content-center mb-4"> 
              <h4 ref={refRedBox}>Full-Stack</h4>
            </div>

            <div className="col-lg-4" >
              <Link to="/Anthony-Manzione_Portfolio/mickey-n-friends-finder" title="Click Here To Learn More">
                <figure className="effect-portfolio">
                  <div className="movies-container">
                    <div className="movies-overlay"></div>
                      {loaded1 ? (
                        <AdvancedImage
                          alt='A Placeholder image showing the first project in the portfolio'
                          className='movies'
                          cldImg={cld.image('mickey-n-friends-finder_dfohvs')} 
                          plugins={[lazyload()]}
                        /> 
                      ) : (
                        <AdvancedImage
                          className='movies'
                          cldImg={cld.image('mickey-n-friends-finder-lowest_zgfn36')} 
                          plugins={[lazyload()]}
                          onLoad={handleLoad1}
                        /> 
                      )} 
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
              <Link to="/Anthony-Manzione_Portfolio/wish-list" title="Click Here To Learn More">
                <figure className="effect-portfolio">
                  <div className="movies-container">
                    <div className="movies-overlay"></div>
                      {loaded2 ? (
                        <AdvancedImage
                          alt='A Placeholder image showing the second project in the portfolio'
                          className='movies'
                          cldImg={cld.image('wish-list_wh7ayn')} 
                          plugins={[lazyload()]}
                        /> 
                      ) : (
                        <AdvancedImage
                          className='movies'
                          cldImg={cld.image('wish-list-lowest_vkla1z')} 
                          plugins={[lazyload()]}
                          onLoad={handleLoad2}
                        /> 
                      )} 
                  </div>
                  <figcaption>
                    <div className="caption">
                      <h1>WISH LIST</h1>
                    </div>
                    <div class="slide-in">
                      <p>Login and Create an Acount</p>
                      <p>Create Wish Lists and Registry's</p>
                      <p>Add, Edit, Remove Items, Budget, and Share!</p>
                    </div>
                  </figcaption>
                </figure>
              </Link>
            </div>

            <div className="col-lg-4" >
              <Link to="/Anthony-Manzione_Portfolio/pokedex-tracker" title="Click Here To Learn More">
                <figure className="effect-portfolio">
                  <div className="movies-container">
                    <div className="movies-overlay"></div>
                      {loaded3 ? (
                        <AdvancedImage
                          alt='A Placeholder image showing the third project in the portfolio'
                          className='movies'
                          cldImg={cld.image('pokedex-tracker_ml9e8l')} 
                          plugins={[lazyload()]}
                        /> 
                      ) : (
                        <AdvancedImage
                          className='movies'
                          cldImg={cld.image('pokedex-tracker-lowest_z1vlgz')} 
                          plugins={[lazyload()]}
                          onLoad={handleLoad3}
                        /> 
                      )}  
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
            <br/><br/><br/><br/><br/><br/>

          {/*             <div class="reveal mt-5">
              <div class="d-flex justify-content-center mb-4 "> 
                <h4 class="redbox">Command-Line-Apps</h4>
              </div>
              <div class="d-flex flex-row justify-content-center flex-wrap">
                <div class="col-lg-4 m-3">
                  <img class="movies" id="cliOne" src="-----X" alt="A command line application gif."></img>
                </div>
                <div class="col-lg-4 m-3">
                  <img id="cliTwo" class="movies" src="-----X" alt="a command line application gif."></img>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
  )
}