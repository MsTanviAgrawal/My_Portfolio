import React, { useRef } from 'react';
import Navbar from './Navbar';
import './DashboardLayout.css'; 
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Education from '../pages/Education';
import Contact from '../pages/Contact';
import Footer from './Footer';

const DashboardLayout = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  

  const smoothScroll = (section) => {
    if (section === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'about') aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'skills') skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'projects') projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'education') educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="layout-container">

      <Navbar onScroll={smoothScroll} />
      
      <main className="layout-main">
      
        <div ref={homeRef} id="home" ><Home /></div>
        <div ref={aboutRef} id= "about"><About /></div>
        <div ref={skillsRef} id="skills"><Skills /></div>
        <div ref={projectsRef} id="projects"><Projects /></div>
        <div ref={educationRef} id="education"><Education /></div>
        <div ref={contactRef} id="contact"><Contact /></div>
        <div ref={footerRef}> <Footer/></div>
      </main>
    </div>
  );
};

export default DashboardLayout;
