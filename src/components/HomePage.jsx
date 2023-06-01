import React from 'react';

import Navbar from './Navbar';
import About from './about/About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage;