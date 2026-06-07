import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-heading">
        <h1>ABOUT ME</h1>
      </div>
      <div className="about-section">
        <p className="intro">
          Hello! I'm
          <span className="full-name"> Tanvi Agrawal </span>a passionate
          <span> Mern Stack & Frontend Developer  </span>
          with hands-on experience in building scalable, high-performance web
          and mobile applications using modern technologies like
          React.js,Next.js, React Native, TypeScript, and Tailwind CSS.
        </p>
        <p className="intro">
          I have professional experience building scalable web and mobile
          applications, developing responsive user interfaces, integrating REST
          APIs, and creating seamless user experiences. My work includes
          developing marketplace platforms, AI-powered applications, and
          production-ready business solutions.
        </p>
        <p className="intro">
          Currently, I work as a MERN Stack Developer at Algonyx Technologies,
          where I contribute to modern web applications using Next.js and
          React.js. I am passionate about crafting clean, efficient, and
          user-focused digital products while continuously learning and
          exploring new technologies.
        </p>
        <p className="intro">
          I believe great software is not just about writing code—it's about
          solving real problems and creating experiences users love.
        </p>
      </div>
    </section>
  );
};

export default About;
