import { useNavigate } from 'react-router-dom';
import '../stylesheets/navbar.css';

function Navbar() {
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
    <nav className="sticky-navbar pt-3">
      <ul className="d-flex flex-row justify-content-around">
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
    </nav>
  )
}

export default Navbar;
