import React, { useRef } from 'react';
import Navbar from './Navbar';
import './DashboardLayout.css'; 
import Home from '../pages/Home';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Education from '../pages/Education';
import Contact from '../pages/Contact';

const DashboardLayout = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (section) => {
    if (section === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'about') aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'skills') skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'projects') projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'education') educationRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (section === 'contact') contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="layout-container">
      <Navbar onScroll={handleScroll} />
      <main className="layout-main">
      
        <div ref={homeRef}><Home /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
    </div>
  );
};

export default DashboardLayout;
