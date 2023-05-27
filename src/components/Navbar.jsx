import { useNavigate } from 'react-router-dom';
import '../stylesheets/navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/Anthony-Manzione_Portfolio/#about");
  }
  const handlePortfolioClick = () => {
    navigate("/Anthony-Manzione_Portfolio/#projects");
  }
  const handleContactClick = () => {
    navigate("/Anthony-Manzione_Portfolio/#contact");
  }

  
  return (
    <nav className="sticky-navbar pt-3">
      <ul className="d-flex flex-row justify-content-around">
        <li>
          <a href="/Anthony-Manzione_Portfolio/">HOME</a>
        </li>
        <li>
          <a href='/Anthony-Manzione_Portfolio/#about' onClick={handleAboutClick}>ABOUT</a>
        </li>
        <li>
          <a href="/Anthony-Manzione_Portfolio/#portfolio" onClick={handlePortfolioClick}>PORTFOLIO</a>
        </li>
        <li>
          <a href="/Anthony-Manzione_Portfolio/#contact" onClick={handleContactClick}>CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
