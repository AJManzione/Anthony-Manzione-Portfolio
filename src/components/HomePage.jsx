import React from 'react';

import Navbar from './Navbar';
import AboutPage from './AboutPage';
import Portfolio from './Portfolio';
import Contact from './Contact';

function HomePage() {
  return (
    <div>
      <Navbar/>
      <AboutPage/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default HomePage;