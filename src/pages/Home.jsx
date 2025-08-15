import React from 'react';
import Typed from 'typed.js';
import { useNavigate } from 'react-router-dom';
import '../StylePages/Home.css';
import profilePic from '../assets/Photo.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resume'); 
  };
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i> A Frontend Developer & </i>',
      '<i>A MERN Stack Developer.</i>'],
    typeSpeed: 100,    
    backSpeed: 50,    
    startDelay: 500,  
    backDelay: 2000,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <section className='first'>

      <div className='leftSection'>
        <span className='greeting'> Hey! </span> I am
        <div className='name'> Tanvi Agrawal </div>
        <span className='developer' ref={el} />

        <div className='buttons'>
          <a
            href="https://drive.google.com/file/d/1zZg9aZn518TO_R6N_6CfOfpoaJ6uJAro/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className='download-resume'
          >
            Download Resume
          </a>

          <a
            href="https://github.com/MsTanviAgrawal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tanvi-agrawal-04a325236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
      <div className='rightSection'>
        <div className='imageWrapper'>
          <img src={profilePic} alt="photo" ></img>
        </div>
      </div>
     
    </section>
  
   </>
  );
};

export default Home;
