import React from "react";
import '../components/Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram,} from "react-icons/fa";

const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer >
      <div className="footer-section">
       
        <h2>Tanvi Agrawal</h2>

        <nav className="footer-details" >
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="social-media">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/tanvi.agrawal.1000" },
            // { icon: <FaGmail />, link: " /" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tanvi-agrawal-04a325236/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_tanvi.agrawal__/" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="copyright">
          © 2025 Frontend Developer/
          <a href="mailto:tanviagrawal9913@gmail.com">tanviagrawal9913@gmail.com</a> /All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
