import React from 'react'
import '../StylePages/About.css'

const About = () => {
  return (
    <section id='about'>
      <div className='about-heading'>
        <h1>ABOUT ME</h1>
      </div>
      <div className='about-section' >
        <p className='intro'>
          Hello! I'm
          <span className='full-name'> Tanvi Agrawal </span>
          a passionate and results-driven
          <span> Mern Stack Developer </span>
          with hands-on experience in building scalable, high-performance web and mobile applications using modern technologies like React.js, React Native, TypeScript, and Tailwind CSS.
        </p>
        <p className='intro'>
           Currently working as a Frontend Developer Intern at Codesutra AI, I have contributed to developing production-ready applications and real-world client projects, focusing on creating intuitive, responsive, and user-centric interfaces.
        </p>
        <p className='intro'>
          From developing a feature-rich AI-powered pet care super app to building a complete freelancing platform with authentication, bookings, and dynamic user interactions, I enjoy transforming complex ideas into seamless digital experiences.
        </p>
        <p className='intro'>
         With a strong foundation in UI development, problem-solving, and collaboration, I am committed to continuous learning and delivering impactful solutions that combine functionality, performance, and design excellence.
        </p>
        {/* <p className='intro'>
          Outside of tech, I’m a creative thinker with a love for art, painting, and sports, having earned accolades in badminton and district-level art competitions.
          I also take pride in my leadership and organizational abilities, demonstrated by coordinating college events and volunteering in NSS community programs.
        </p>
        <p className='intro'>
          I’m a quick learner, a team player, and someone who thrives in environments that encourage continuous growth. 
          I'm currently seeking opportunities where I can contribute, learn, and evolve as a developer in the ever-changing tech landscape.
        </p> */}

      </div>
    </section>
  )
}

export default About
