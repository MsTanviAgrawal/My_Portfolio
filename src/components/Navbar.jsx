// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">Tanvi's Portfolio</div>
//       <ul className="navbar-links">
//         <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
//         <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
//         <li><NavLink to="/skills" end className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
//         <li><NavLink to="/experience" end className={({ isActive }) => isActive ? 'active' : ''}>Training Experience</NavLink></li>
//         <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
//         <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink></li>
//         <li><NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink></li>
//         <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Tanvi's Portfolio</div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
      <label htmlFor="menu-toggle" className="overlay"></label>

      {/* Sidebar for Mobile */}
      <div className="sidebar">
        <ul className="navbar-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
          <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Training Experience</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
          <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink></li>
        </ul>
      </div>

      {/* Desktop Links */}
      <ul className="navbar-links desktop">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
        <li><NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>Training Experience</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
        <li><NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink></li>
    
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact Me</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
