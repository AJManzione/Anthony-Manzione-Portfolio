import React from 'react';
import { useNavigate } from 'react-router-dom';


function Footer() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/Anthony-Manzione-Portfolio/#about");
  }
  const handlePortfolioClick = () => {
    navigate("/Anthony-Manzione-Portfolio/#projects");
  }
  const handleContactClick = () => {
    navigate("/Anthony-Manzione-Portfolio/#contact");
  }

  return (
    <div id="footer" className='d-flex justify-content-around align-items-center '>
      <div>
        <a target='__blank' href="https://github.com/AJManzione">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="5vw" height="50" viewBox="0,0,256,256"
            style={{fill:"#000000"}}>
            <g fill-opacity="0.66667" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><g transform="scale(5.33333,5.33333)"><path d="M44,24c0,8.96 -5.88,16.54 -14,19.08v-5.08c0,-1.71 -0.72,-3.24 -1.86,-4.34c5.24,-0.95 7.86,-4 7.86,-9.66c0,-2.45 -0.5,-4.39 -1.48,-5.9c0.44,-1.71 0.7,-4.14 -0.52,-6.1c-2.36,0 -4.01,1.39 -4.98,2.53c-1.45,-0.35 -3.12,-0.53 -5.02,-0.53c-1.8,0 -3.46,0.2 -4.94,0.61c-0.96,-1.15 -2.64,-2.61 -5.06,-2.61c-1.42,2.28 -0.84,4.74 -0.3,6.12c-1.08,1.51 -1.7,3.45 -1.7,5.88c0,5.66 2.62,8.71 7.86,9.66c-0.67,0.65 -1.19,1.44 -1.51,2.34h-2.35c-1.44,0 -2,-0.64 -2.77,-1.68c-0.77,-1.04 -1.6,-1.74 -2.59,-2.03c-0.53,-0.06 -0.89,0.37 -0.42,0.75c1.57,1.13 1.68,2.98 2.31,4.19c0.57,1.09 1.75,1.77 3.08,1.77h2.39v4.08c-8.12,-2.54 -14,-10.12 -14,-19.08c0,-11.05 8.95,-20 20,-20c11.05,0 20,8.95 20,20z"></path></g></g>
          </svg>
        </a>
        <a target='__blank' href="https://www.youtube.com/@anthonymanzione3137">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="6vw" height="60" viewBox="0,0,256,256"
            style={{fill:"#000000"}}>
            <g fill-opacity="0.66667" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}><g transform="scale(10.66667,10.66667)"><path d="M21.582,6.186c-0.23,-0.86 -0.908,-1.538 -1.768,-1.768c-1.56,-0.418 -7.814,-0.418 -7.814,-0.418c0,0 -6.254,0 -7.814,0.418c-0.86,0.23 -1.538,0.908 -1.768,1.768c-0.418,1.56 -0.418,5.814 -0.418,5.814c0,0 0,4.254 0.418,5.814c0.23,0.86 0.908,1.538 1.768,1.768c1.56,0.418 7.814,0.418 7.814,0.418c0,0 6.254,0 7.814,-0.418c0.861,-0.23 1.538,-0.908 1.768,-1.768c0.418,-1.56 0.418,-5.814 0.418,-5.814c0,0 0,-4.254 -0.418,-5.814zM10,14.598v-5.196c0,-0.385 0.417,-0.625 0.75,-0.433l4.5,2.598c0.333,0.192 0.333,0.674 0,0.866l-4.5,2.598c-0.333,0.193 -0.75,-0.048 -0.75,-0.433z"></path></g></g>
          </svg>
        </a>
        <a target='__blank' href="https://www.linkedin.com/in/dev-anthony-manzione/">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="5vw" height="50" viewBox="0,0,256,256"
            style={{fill: "#000000"}}>
            <g fill-opacity="0.66667" fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
          </svg>
        </a>
      </div>
          <h6>Anthony Manzione <span>© 2023</span></h6>
          <ul className='m-3'>
            <li>
              <a href="/Anthony-Manzione-Portfolio/">HOME</a>
            </li>
            <li>
              <a href='/Anthony-Manzione-Portfolio/#about' onClick={handleAboutClick}>ABOUT</a>
            </li>
            <li>
              <a href="/Anthony-Manzione-Portfolio/#portfolio" onClick={handlePortfolioClick}>PORTFOLIO</a>
            </li>
            <li>
              <a href="/Anthony-Manzione-Portfolio/#contact" onClick={handleContactClick}>CONTACT</a>
            </li>
          </ul>
          </div>
  )
}

export default Footer;