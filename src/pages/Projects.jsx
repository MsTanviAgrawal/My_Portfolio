import React from 'react'
import '../StylePages/Projects.css'

const projects = [
  {
    title: ' Appoint-A Freelancing Website ',
    description: ' I developed a freelancing platform called Appoint using the MERN stack, featuring role-based authentication for both service providers and clients. The platform includes real-time encrypted chat and calling, ensuring secure and seamless communication between users. Additionally, I designed and deployed a fully responsive UI/UX, providing an intuitive experience that enables smooth service hiring, collaboration, and deal management. ',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Redux' , 'Node.js', 'Express', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Mini Projects',
    description: 'Task Manager is a practical application designed to help users efficiently manage their daily tasks through an intuitive interface. This project demonstrates my ability to build a structured task tracking system where users can create, view, and organize tasks in a logical and accessible way. It showcases clean component structure, state management, and user interaction handling — all essential skills in front-end development.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.JS'],
    link:'https://github.com/MsTanviAgrawal/Mini_Projects.git'
  },
  {
    title: 'Task Manager',
    description: 'Task Manager is a practical application designed to help users efficiently manage their daily tasks through an intuitive interface. This project demonstrates my ability to build a structured task tracking system where users can create, view, and organize tasks in a logical and accessible way. It showcases clean component structure, state management, and user interaction handling — all essential skills in front-end development. This task manager reflects my focus on usability and real-world functionality, making it a strong example of my capability to build useful, interactive applications using modern development practices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.JS', 'Node.js', 'Express', 'MongoDB'],
    link:'https://github.com/MsTanviAgrawal/Task_Manager.git'
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <div className='project-heading'>
        <h1>MY PROJECTS</h1>
        <p>
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>
      <div className='project-section' >
        {projects.map((project, index) => (
          <div key={index}>
            <div className='project-title'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='project-skills'>
                {project.tech.map((tech, i) => (
                  <span key={i}>
                    {tech}
                  </span>
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
        ))}
      </div>

    </section>
  )
}

export default Projects
