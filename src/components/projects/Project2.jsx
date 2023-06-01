import React, { useState, useEffect } from 'react';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/base';
import { SlideInFromLeft, SlideInFromRight, SlideUpFadeIn } from '../Animations';
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

  document.getElementById('three-animation').style.display = 'none';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id='project-two' style={{backgroundColor:"rgb(236, 224, 224)"}}>
      <div className='project-container d-flex flex-column justify-content-center'>
        <Navbar/>
        <div className='big-movies-container'>
          <div className="d-flex flex-column justify-content-center align-items-lg-center mt-5">
            <AdvancedImage
              alt='A Placeholder image showing the first project in the portfolio'
              className='big-movies'
              cldImg={cld.image('v1685249118/vkudsbctowkp0kgc179x')} 
              plugins={[lazyload()]}
            /> 
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
                  href="#project-two-details"
                  className="redbox">
                  LEARN MORE  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    <div className='p-3' id='project-two-details'>
      <SlideUpFadeIn>
      <div className="col-lg-12 d-flex flex-row justify-content-around flex-wrap">
        <div className='col-lg-5 pt-5'>
          <h3 className='title'>SUMMARY</h3>  
          <p>
            Wish List is a collaborative project and full stack application built to allow a user to create an account, log in to that account, and create as many wish lists or registries as they want. When the user creates a wish list they can name it, describe it, and give it a date that they want it to be fulfilled by. Within each registry the user can add items or products, share a link to that item, add a price and assign it a category. The user has the option to edit and delete all of these fields!
          </p>
        </div>
        <div className="col-lg-5 pt-5">
          <h3 className="title">MY ROLE</h3>
          <p>
            My role in this project was to build out the front end and create a connection between the front end and the back end with GET routes. The front end was built out using the templating engine, Handlebars.js and everything as far as styling was done using Bootstrap, a CSS framework. I connected these pages with Javascript and using fetch requests to send information and get information from the server. We deployed the application using heroku as linked above. 
          </p>
        </div>
      </div>
      </SlideUpFadeIn>
    </div>


    <div className='project-technologies m-5'>
      <div className='col-lg-12 p-5 d-flex flex-column align-items-center'>
        <SlideInFromLeft>
          <h1 className="title text-center">TECHNOLOGY USED</h1>
        </SlideInFromLeft>
        <SlideInFromRight>
          <h5 className='underline'></h5>
        </SlideInFromRight>
      </div>
      <div className='col-lg-12 d-flex flex-column align-items-center p-3'>  
        <p className='text-center p-1'>Below are some of the key technologies used in the Wish List project.</p>
      </div>
      <SlideInFromRight>
      <div className='col-lg-12 d-flex flex-row align-items-center justify-content-around flex-wrap p-3'>
        <a target='__blank' href="https://html.com/html5/">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="60" width="60" viewBox="0,0,256,256"
            style={{fill:"#000000"}}>
            <g style={{mixBlendMode:"normal"}} ><g transform="scale(5.33333,5.33333)"><path d="M41,5h-34l3,34l14,4l14,-4l3,-34z" fill="#00ffe1"></path><path d="M24,8v31.9l11.2,-3.2l2.5,-28.7z" fill="#00b39e"></path><path d="M24,25v-4h8.6l-0.7,11.5l-7.9,2.6v-4.2l4.1,-1.4l0.3,-4.5zM32.9,17l0.3,-4h-9.2v4z" fill="#000000"></path><path d="M24,30.9v4.2l-7.9,-2.6l-0.4,-5.5h4l0.2,2.5zM19.1,17h4.9v-4h-9.1l0.7,12h8.4v-4h-4.6z" fill="#616362"></path></g></g>
          </svg>
        </a>
        <a target='__blank' href="https://www.w3.org/Style/CSS/Overview.en.html">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="60" width="60"  viewBox="0,0,256,256"
            style={{fill:"#000000"}}>
            <defs><linearGradient x1="16.33" y1="-2.748" x2="32.293" y2="41.109" gradientUnits="userSpaceOnUse" id="color-1_7gdY5qNXaKC0_gr1"><stop offset="0" stop-color="#00ffe1"></stop><stop offset="1" stop-color="#00ffe1"></stop></linearGradient></defs><g style={{mixBlendMode: "normal"}}><g transform="scale(5.33333,5.33333)"><path d="M7.192,7.176l2.627,29.77c0.109,1.237 0.97,2.28 2.164,2.621l10.643,3.041c0.898,0.257 1.849,0.257 2.747,0l10.643,-3.041c1.194,-0.341 2.055,-1.383 2.164,-2.621l2.627,-29.77c0.104,-1.17 -0.817,-2.176 -1.991,-2.176h-29.632c-1.174,0 -2.095,1.006 -1.992,2.176z" fill="url(#color-1_7gdY5qNXaKC0_gr1)"></path><path d="M24,8v31.9l9.876,-2.822c0.797,-0.228 1.371,-0.924 1.443,-1.749l2.286,-26.242c0.051,-0.585 -0.409,-1.087 -0.996,-1.087z" fill="#00b39e"></path><path d="M33.1,13h-9.1v4h4.9l-0.3,4h-4.6v4h4.4l-0.3,4.5l-4.1,1.4v4.2l7.9,-2.6l0.7,-11.5v0z" fill="#000000"></path><path d="M24,13v4h-8.9l-0.3,-4zM19.4,21l0.2,4h4.4v-4zM19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1,-1.4z" fill="#747474"></path><path d="M33.1,13l-0.5,8l-0.7,11.5l-7.9,2.6l-7.9,-2.6l-0.3,-5.5h4l0.1,2.5l4.1,1.4l4.1,-1.4l0.3,-4.5h-4.4h-4.4l-0.2,-4h4.6h4.6l0.3,-4h-4.9h-8.9l-0.3,-4h9.2h9.1M34.164,12h-1.064h-9.1h-9.2h-1.078l0.081,1.075l0.3,4l0.069,0.925h0.928h8.9h3.822l-0.15,2h-3.672h-4.6h-1.051l0.052,1.05l0.2,4l0.048,0.95h-2.849h-1.056l0.058,1.054l0.3,5.5l0.037,0.682l0.649,0.214l7.9,2.6l0.312,0.103l0.313,-0.103l7.9,-2.6l0.644,-0.212l0.041,-0.677l0.7,-11.5l0.5,-7.998l0.066,-1.063zM20.761,26h3.239h3.331l-0.185,2.769l-3.146,1.074l-3.128,-1.068l-0.073,-1.815l-0.038,-0.96z" fill-opacity="0.01176" fill="#000000" opacity="0.05"></path><path d="M33.1,13l-0.5,8l-0.7,11.5l-7.9,2.6l-7.9,-2.6l-0.3,-5.5h4l0.1,2.5l4.1,1.4l4.1,-1.4l0.3,-4.5h-4.4h-4.4l-0.2,-4h4.6h4.6l0.3,-4h-4.9h-8.9l-0.3,-4h9.2h9.1M33.632,12.5h-0.532h-9.1h-9.2h-0.539l0.04,0.537l0.3,4l0.035,0.463h0.464h8.9h4.361l-0.225,3h-4.136h-4.6h-0.526l0.026,0.525l0.2,4l0.024,0.475h0.476h4.4h3.866l-0.242,3.634l-3.624,1.238l-3.614,-1.234l-0.086,-2.158l-0.02,-0.48h-0.48h-4h-0.528l0.029,0.527l0.3,5.5l0.019,0.341l0.324,0.107l7.9,2.6l0.156,0.051l0.156,-0.051l7.9,-2.6l0.322,-0.106l0.021,-0.339l0.7,-11.5l0.5,-7.999l0.033,-0.531z" fill-opacity="0.01176" fill="#000000" opacity="0.07"></path></g></g>
          </svg>
        </a>
        <a target='__blank' href="https://www.javascript.com/">
          <svg xmlns="http://www.w3.org/2000/svg"x="0px" y="0px" height="45" width="55" viewBox="0 0 296.25319 335.67029">
            <path d="M648.1266,333.9551v2.68536c-.82516,4.51661-.62708,9.10346-.85329,13.65564-.38461,7.74-1.21569,15.43792-1.87068,23.15185q-.75579,8.9013-1.582,17.79762c-.70315,7.71065-1.4335,15.41921-2.07751,23.13473-.62554,7.49413-1.36359,14.97781-1.98753,22.4722-.61147,7.34481-1.35193,14.67961-1.99228,22.0223-.64037,7.34305-1.33,14.68144-1.97709,22.02365q-1.0392,11.79168-2.10933,23.58025c-.6613,7.41582-1.26829,14.83731-1.962,22.25021-.71448,7.63517-1.34169,15.27793-2.05592,22.91324-.68646,7.33851-1.27546,14.687-1.95159,22.02723-.86044,9.34135-1.64274,18.68952-2.51966,28.02961-.682,7.26439-1.27537,14.53766-1.92847,21.8053-.33326,3.70832-.76728,7.40873-.99426,11.12519-.12526,2.05077-1.53417,2.76084-3.16337,3.26-3.9912,1.22271-8.02919,2.28517-12.05241,3.39391q-40.84831,11.25725-81.66728,22.62c-8.09362,2.23487-16.08851,4.9334-24.487,5.93184h-1.79c-14.64877-2.17866-28.56626-7.222-42.80571-10.99381-18.88262-5.00164-37.6594-10.39777-56.48334-15.61834q-9.59114-2.66-19.17988-5.32917c-2.08562-.57718-2.79592-1.75137-2.98875-3.812-1.19362-12.756-2.2937-25.52075-3.43806-38.2807-.98465-10.97908-1.89822-21.96668-2.89167-32.945q-1.68145-18.58154-3.35084-37.165-1.252-14.02029-2.47092-28.04671-1.4201-16.13583-2.90767-32.26816c-.85488-9.12077-1.57981-18.25532-2.41832-27.37817q-1.26794-13.795-2.48279-27.59482-1.004-11.2389-1.9882-22.48151-1.198-13.8012-2.496-27.59434c-.53715-5.74288-.62812-11.51984-.87015-17.28363a25.58836,25.58836,0,0,0-.45923-4.85086v-2.2378c.31072-.2952.19567-.68231.22415-1.03847.0101-.26974-.036-.55616.22337-.75178H647.67908c.2593.19569.21333.48209.22335.75181C647.931,333.27275,647.81582,333.65991,648.1266,333.9551Z" transform="translate(-351.8734 -332.16485)" style={{fill:"#2cfee1"}}/><path d="M500,499.41524q0-69.58725.00049-139.17451c.00006-3.44087.00333-3.44447,3.42727-3.44454q57.05094-.00131,114.1019.00026c3.39185.00011,3.5586.30438,3.21991,3.78078-.77922,7.998-1.44573,16.007-2.17974,24.00948-.836,9.11412-1.71789,18.22407-2.538,27.3396-.67353,7.48606-1.26439,14.97955-1.93126,22.46624-.67335,7.55986-1.411,15.114-2.09116,22.67324-.66026,7.33789-1.27215,14.68009-1.92583,22.01857-.68662,7.7079-1.40945,15.41256-2.09479,23.12057-.65909,7.41273-1.2739,14.82939-1.93869,22.24161-.67138,7.48526-1.3896,14.96631-2.06958,22.4508-.51173,5.63268-.98923,11.26845-1.49326,16.90184-.70287,7.85583-1.42631,15.70977-2.12227,23.56623-.65007,7.33871-1.39222,14.672-1.87439,22.02205-.36825,5.61357-.23572,5.55134-5.54914,7.01922q-40.5261,11.19582-81.03391,22.45781c-3.23257.89627-6.47912,1.74418-9.69746,2.68864-1.55194.45545-2.298.06433-2.21133-1.62118.03444-.6694.00141-1.34221.00141-2.01347Q499.99987,568.66685,500,499.41524Z" transform="translate(-351.8734 -332.16485)" style={{fill:"#1bb39e"}}/><path d="M452.55818,554.13644c.61426-.71623.30346-1.573.30382-2.35546q.02706-60.4142.0581-120.82835c.00279-1.99482-.43641-2.63019-2.54727-2.61215-12.5281.10712-25.05775.02148-37.58637.09109-1.632.00907-2.149-.43931-2.29-2.07877q-1.40869-16.38085-3.04808-32.74124c-.19506-1.92966.32232-2.35292,2.19654-2.34862q39.0411.08955,78.08234-.01291c2.10414-.0066,2.386.70536,2.38478,2.54843q-.06537,101.13784.00515,202.27569c.00143,1.92967-.38155,2.35086-2.32266,1.96193q-44.17471-8.85073-88.37736-17.56178c-1.19142-.2358-1.894-.55683-2.0224-2.05584q-2.31995-27.08028-4.83829-54.14332c-.16692-1.80192.15455-2.42973,2.13479-2.41174q16.33111.14831,32.66411.00213c1.87039-.01582,2.32491.57673,2.46128,2.35962.654,8.54959,1.48111,17.08587,2.2177,25.62937.08546.99116.27354,1.63873,1.46733,1.79505,6.20415.81245,12.398,1.70327,18.59551,2.5668A3.72678,3.72678,0,0,1,452.55818,554.13644Z" transform="translate(-351.8734 -332.16485)" style={{fill:"#747474"}}/><path d="M510.29283,447.18639c0-17.825.03541-35.65015-.04868-53.47474-.00957-2.02649.59322-2.45535,2.51734-2.45167q46.31021.08864,92.62055.00133c1.962-.00365,2.51875.38679,2.3092,2.47465q-1.60843,16.02432-2.85841,32.08313c-.16787,2.19931-.91,2.62082-2.9466,2.6109-16.77874-.08162-33.55815-.01537-50.33694-.08817-1.91311-.00829-2.55528.41159-2.53659,2.4461.102,11.11176.08426,22.22518.01222,33.3374-.01146,1.769.52227,2.266,2.27651,2.25915,15.73485-.06163,31.47025.003,47.20486-.08173,2.11511-.01139,2.79747.3865,2.58587,2.68093q-5.02268,54.4612-9.8574,108.93964a2.50306,2.50306,0,0,1-2.27578,2.66032q-38.17191,8.60764-76.30974,17.36593c-1.78711.41006-2.42383.24807-2.40509-1.84173.10233-11.41009.07786-22.82178.01507-34.23244-.00864-1.5687.41332-2.16981,2.02624-2.45478,13.87257-2.45105,27.72138-5.03653,41.59268-7.495,1.80937-.32069,2.56723-.93011,2.73743-2.90037q1.89634-21.95114,4.075-43.87741c.20026-2.03915-.96892-1.75515-2.15063-1.75529q-22.59587-.00259-45.19175-.00175c-3.0531-.00019-3.055-.0025-3.05506-2.953Q510.29216,473.81209,510.29283,447.18639Z" transform="translate(-351.8734 -332.16485)"/></svg>
        </a>
        <a target='__blank' href="https://handlebarsjs.com/">
          <img style={{width:'80px'}} src="https://res.cloudinary.com/depgzk2o2/image/upload/v1685574414/handlebars-icon_zrx2mx.png" alt="Handlebars.js logo" />
        </a>
        <a target='__blank' href="https://www.mysql.com/">
          <img style={{width:'50px'}} src="https://res.cloudinary.com/depgzk2o2/image/upload/v1685574497/mySQL-icon_fdxfy9.png" alt="MySQL logoo" />
        </a>
        <a target='__blank' href="https://expressjs.com/">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
            <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
          </svg>
        </a>
        <a target='__blank' href="https://www/getbootstrap.com">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0,0,256,256"
            style={{fill:"#000000"}}>
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><g transform="scale(5.33333,5.33333)"><path d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z" fill="#00B39E"></path><path d="M33.03,25.6c-0.65,-0.9 -1.59,-1.52 -2.8,-1.85c0,0 1.02,-0.37 1.94,-1.75c0.55,-0.88 0.83,-1.94 0.83,-3.18c0,-2.15 -0.78,-3.8 -2.34,-4.93c-1.56,-1.13 -3.32,-1.89 -6.31,-1.89h-9.35v24h10.43c2.83,-0.02 4.96,-0.63 6.41,-1.8c1.44,-1.19 2.16,-2.95 2.16,-5.3c0,-1.3 -0.32,-2.4 -0.97,-3.3zM21,16c0,0 4.17,0 4.25,0c1.52,0 2.75,1.23 2.75,2.75c0,1.52 -1.23,2.75 -2.75,2.75c-0.08,0 -4.25,0 -4.25,0zM26,32h-5v-6h5c1.66,0 3,1.34 3,3c0,1.66 -1.34,3 -3,3z" fill="#ffffff"></path></g></g>
          </svg>
        </a>
        <a target='__blank' href="https://sequelize.org/">
          <img style={{width:'45px'}} src="https://res.cloudinary.com/depgzk2o2/image/upload/v1685575577/sequelize-icon_epvkwn.png" alt="" />
        </a>
      </div>
      </SlideInFromRight>
    </div>

    <svg  
      style={{backgroundColor:'rgb(46, 46, 58)'}}
      preserveAspectRatio="none" viewBox="0 0 100 102" 
      height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" 
      class="mt-3">
      <path d="M0 0 L50 100 L100 0 Z" fill="rgb(236, 224, 224)" stroke="rgb(236, 224, 224"></path>
    </svg>
    
    <div class="project-presentation d-flex flex-column justify-content-center align-items-center p-5">
      <div className='col-lg-12 p-5 d-flex flex-column align-items-center'>
        <SlideInFromRight>
          <h1 className="title-light">PRESENTATION</h1>
        </SlideInFromRight>
        <SlideInFromLeft>
          <h5 className='underline-light'></h5>
        </SlideInFromLeft>
      </div>
      <iframe className='big-movies-borderless' src="https://www.youtube.com/embed/d6KHQrnmvbA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <Footer/>
  </div>
  )
}

export default Project2;

