import React from 'react';

import Navbar from './Navbar';
import AboutPage from './AboutPage';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Navbar/>
      <AboutPage/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage;