import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onScroll }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Tanvi's Portfolio</div>
      {/* <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger"></label>
      <label htmlFor="menu-toggle" className="overlay"></label> */}

      <div className="sidebar">
        <ul className="navbar-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink></li>
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
