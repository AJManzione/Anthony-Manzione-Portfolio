import { useNavigate } from 'react-router-dom';
import '../stylesheets/navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/portfolio_anthony_manzione/#about");
  }
  const handlePortfolioClick = () => {
    navigate("/portfolio_anthony_manzione/#projects");
  }
  const handleContactClick = () => {
    navigate("/portfolio_anthony_manzione/#contact");
  }

  
  return (
    <nav className="sticky-navbar pt-3">
      <ul className="d-flex flex-row justify-content-around">
        <li>
          <a href="/portfolio_anthony_manzione/">HOME</a>
        </li>
        <li>
          <a href='/portfolio_anthony_manzione/#about' onClick={handleAboutClick}>ABOUT</a>
        </li>
        <li>
          <a href="/portfolio_anthony_manzione/#portfolio" onClick={handlePortfolioClick}>PORTFOLIO</a>
        </li>
        <li>
          <a href="/portfolio_anthony_manzione/#contact" onClick={handleContactClick}>CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
