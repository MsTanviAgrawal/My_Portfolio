import React from 'react'
import '../StylePages/Projects.css'

const projects = [
  {
    title: 'FREELANCING WEBSITE',
    description: 'A comprehensive platform that connects freelancers with clients across various domains. It includes features such as skill assessments, project management tools, portfolio showcases, a matching algorithm for better client-freelancer pairing, dispute resolution mechanisms, and a mobile application for enhanced user experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Human Resources Management System (HRMS)',
    description: 'A responsive web application designed to manage the recruitment process efficiently. It includes functionalities for handling applicants, interview scheduling, feedback submission, and real-time tracking of recruitment stages, thereby enhancing productivity and transparency.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Express.js', 'MongoDB'],
    link: '#'
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
