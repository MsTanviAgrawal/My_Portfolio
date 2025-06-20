import React from 'react'
import '../StylePages/About.css'

const About = () => {
  return (
    <section className='about'>
      <div className='about-heading'>
        <h1>ABOUT ME</h1>
      </div>
      <div className='about-section' >
        <p className='intro'>
          Hello! I'm
          <span className='full-name'> Tanvi Agrawal </span>
          a passionate and detail-oriented
          <span> Frontend Developer </span>
          with a strong foundation in 
          HTML, CSS, JavaScript, React.js
          and core programming principles like 
          OOPs and SOLID Principles.
        </p>
        <p className='intro'>
           I’ve recently completed my Bachelor of Technology in 
           Electrical and Electronics Engineering 
           from UIT RGPV, Shivpuri
           with a CGPA of 7.85, and I’m now focused on building modern, user-friendly web applications.
        </p>
        <p className='intro'>
          Through intensive training programs with ITEXPERTS and Coplur Technologies, I’ve gained hands-on experience in Java development and frontend technologies.
          These sessions sharpened my practical skills and helped me understand real-world software development practices, from writing clean, efficient code to using tools like 
          Git, VS Code, and Node.js.
        </p>
        <p className='intro'>
          My project work includes building a 
          Freelancing Website 
          to connect clients and freelancers through a feature-rich platform, and developing a 
          Human Resources Management System
          using Angular to streamline the recruitment process.
        </p>
        <p className='intro'>
          Outside of tech, I’m a creative thinker with a love for art, painting, and sports, having earned accolades in badminton and district-level art competitions.
          I also take pride in my leadership and organizational abilities, demonstrated by coordinating college events and volunteering in NSS community programs.
        </p>
        <p className='intro'>
          I’m a quick learner, a team player, and someone who thrives in environments that encourage continuous growth. 
          I'm currently seeking opportunities where I can contribute, learn, and evolve as a developer in the ever-changing tech landscape.
        </p>

      </div>
    </section>
  )
}

export default About
