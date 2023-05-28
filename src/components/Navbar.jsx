import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);

  const handleAboutClick = () => {
    navigate('/Anthony-Manzione-Portfolio/#about');
    setIsOpen(false);
  };

  const handlePortfolioClick = () => {
    navigate('/Anthony-Manzione-Portfolio/#projects');
    setIsOpen(false);
  };

  const handleContactClick = () => {
    navigate('/Anthony-Manzione-Portfolio/#contact');
    setIsOpen(false); 
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="sticky-navbar pt-3">
      {isMobileSize ? (
        <div
          id="nav-icon-mobile"
          className={`hamburger-icon ${isOpen ? 'open' : ''}`}
          onClick={handleMenuToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <ul className="d-flex flex-row justify-content-around">
          <li>
            <a href="/Anthony-Manzione-Portfolio/">HOME</a>
          </li>
          <li>
            <a href="/Anthony-Manzione-Portfolio/#about" onClick={handleAboutClick}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="/Anthony-Manzione-Portfolio/#portfolio" onClick={handlePortfolioClick}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="/Anthony-Manzione-Portfolio/#contact" onClick={handleContactClick}>
              CONTACT
            </a>
          </li>
        </ul>
      )}

      {isMobileSize && isOpen && (
        <ul className={`mobile-menu p-3`}>
          <li className='pb-2'>
            <a style={{fontSize: '20px'}} href="/Anthony-Manzione-Portfolio/" onClick={handleMenuToggle}>
              HOME
            </a>
          </li>
          <li className='pb-2'>
            <a style={{fontSize: '20px'}} href="/Anthony-Manzione-Portfolio/#about" onClick={handleMenuToggle}>
              ABOUT
            </a>
          </li>
          <li className='pb-2'>
            <a style={{fontSize: '20px'}} href="/Anthony-Manzione-Portfolio/#portfolio" onClick={handleMenuToggle}>
              PORTFOLIO
            </a>
          </li>
          <li className='pb-2'>
            <a style={{fontSize: '20px'}} href="/Anthony-Manzione-Portfolio/#contact" onClick={handleMenuToggle}>
              CONTACT
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
