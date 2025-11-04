import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    onScroll(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Tanvi's Portfolio</div>
      
      <div className="hamburger" onClick={handleMenuToggle}>
        ☰
      </div>

      {isMenuOpen && (
        <div className="overlay" onClick={handleMenuToggle}></div>
      )}

      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><button onClick={() => handleNavClick('home')}>Home</button></li>
          <li><button onClick={() => handleNavClick('about')}>About</button></li>
          <li><button onClick={() => handleNavClick('skills')}>Skills</button></li>
          <li><button onClick={() => handleNavClick('projects')}>Projects</button></li>
          <li><button onClick={() => handleNavClick('education')}>Education</button></li>
          <li><button onClick={() => handleNavClick('contact')}>Contact Me</button></li>
        </ul>
      </div>

      <ul className="navbar-links desktop">
        <li><button onClick={() => onScroll('home')}>Home</button></li>
        <li><button onClick={() => onScroll('about')}>About</button></li>
        <li><button onClick={() => onScroll('skills')}>Skills</button></li>
        <li><button onClick={() => onScroll('projects')}>Projects</button></li>
        <li><button onClick={() => onScroll('education')}>Education</button></li>
        <li><button onClick={() => onScroll('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
