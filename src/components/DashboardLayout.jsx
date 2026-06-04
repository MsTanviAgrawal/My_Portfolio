import React, { useRef } from 'react';
import Navbar from './Navbar';
import './DashboardLayout.css'; 
import Home from '../pages/home/Home';
import Experience from '../pages/experience/Experience';
import About from '../pages/about/About';
import Skills from '../pages/skills/Skills';
import Projects from '../pages/project/Projects';
import Education from '../pages/education/Education';
import Contact from '../pages/contact/Contact';
import Footer from './Footer';

const DashboardLayout = () => {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  

  const smoothScroll = (section) => {
    if (section === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'experience') experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        <div ref={experienceRef} id="experience"><Experience /></div>
        
        <div ref={skillsRef} id="skills"><Skills /></div>
        <div ref={projectsRef} id="projects"><Projects /></div>
        <div ref={educationRef} id="education"><Education /></div>
        <div ref={aboutRef} id= "about"><About /></div>
        <div ref={contactRef} id="contact"><Contact /></div>
        <div ref={footerRef}> <Footer/></div>
      </main>
    </div>
  );
};

export default DashboardLayout;
