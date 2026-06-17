import React, { useState, useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'Algonyx Technologies - Official Website',
    description: 'Developed and designed the official company website for a growing IT services firm using React.js, focusing on building responsive, modern UI components and ensuring a seamless user experience across devices. Contributed to delivering a clean and professional digital presence aligned with the company’s vision of scalable and innovative technology solutions.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS' ,'React.JS', 'Redux' ],
    link:'https://www.algonyxtechnologies.com'
  },
  {
    title: 'PawPilot App',
    description: 'Developed a scalable and feature-rich pet care super app using React Native and TypeScript, integrating tracking, AI-powered health insights, training modules, marketplace, and social features into a seamless user experience. Focused on building responsive UI components and delivering a smooth, production-grade mobile application.',
    tech: [ 'React Native', 'TypeScript', 'JavaScript', 'Redux'  ],
    link:'#'
  },
  {
    title: 'Task Manager',
    description: 'Task Manager is a practical application designed to help users efficiently manage their daily tasks through an intuitive interface. This project demonstrates my ability to build a structured task tracking system where users can create, view, and organize tasks in a logical and accessible way. It showcases clean component structure, state management, and user interaction handling — all essential skills in front-end development.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Node.js', 'Express', 'MongoDB'],
    link:'https://task-manager-omega-one-69.vercel.app/'
  },
  {
    title: ' Appoint-A Freelancing Website ',
    description: ' I developed a freelancing platform called Appoint using the MERN stack, featuring role-based authentication for both service providers and clients. The platform includes real-time encrypted chat and calling, ensuring secure and seamless communication between users. Additionally, I designed and deployed a fully responsive UI/UX, providing an intuitive experience that enables smooth service hiring, collaboration, and deal management. ',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Redux' , 'Node.js', 'Express', 'MongoDB'],
    link: '#'
  },
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      }, 2500) 
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentIndex, isHovered])

  return (
    <section id='projects'>
      <div className='project-heading'>
        <h1>PROJECTS</h1>
        <p>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>
      
      <div className='project-stage-container'>
        <div 
          className='project-carousel-track'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => {
            let positionClass = 'next-card'
            if (index === currentIndex) {
              positionClass = 'active-card'
            } else if (
              index === (currentIndex - 1 + projects.length) % projects.length
            ) {
              positionClass = 'prev-card'
            } else if (
              index === (currentIndex + 1) % projects.length && 
              projects.length > 3
            ) {
              positionClass = 'next-card'
            } else {
              positionClass = 'hidden-card'
            }

            return (
              <div className={`project-card-wrapper ${positionClass}`} key={index}>
                <div className='project-title'>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className='project-skills'>
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='view-project'
                >
                  View Project
                </a>
              </div>
            )
          })}
        </div>

        {/* Pagination indicators to display tracking visually */}
        <div className='project-dots'>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
