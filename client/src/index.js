import './css/style.css';
import './js/three.js';
import './js/home.js';

import Author from '../src/images/anthony-portrait.jpg';
document.getElementById("author").src= Author;

import PortOne from '../src/images/gifs/port-one.gif';
import PortTwo from '../src/images/gifs/port-two.gif';
import PortThree from '../src/images/gifs/port-three.gif';
document.getElementById("portOne").src = PortOne;
document.getElementById("portTwo").src = PortTwo;
document.getElementById("portThree").src = PortThree;

import CliOne from '../src/images/gifs/readme-generator.gif';
import CliTwo from '../src/images/gifs/team-profile-generator.gif';
document.getElementById("cliOne").src = CliOne;
document.getElementById("cliTwo").src = CliTwo;

import BlogOne from '../src/images/blogs/blog-one.png';
import BlogTwo from '../src/images/blogs/blog-two.png';
document.getElementById("blogOne").src = BlogOne;
document.getElementById("blogTwo").src = BlogTwo;

import Linkedin from '../src/images/Icons/linkedin-logo.png';
import Github from '../src/images/Icons/Github-Logos/GitHub-Mark-Light-120px-plus.png';
document.getElementById("linkedin").src = Linkedin;
document.getElementById("github").src = Github;

// Register service worker
// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
