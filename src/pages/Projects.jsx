import React from 'react'
import '../StylePages/Projects.css'

const projects = [
  {
    title: 'FREELANCING WEBSITE',
    description: 'A comprehensive platform that connects freelancers with clients across various domains. It includes features such as skill assessments, project management tools, portfolio showcases, a matching algorithm for better client-freelancer pairing, dispute resolution mechanisms, and a mobile application for enhanced user experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux' , 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Stack Overflow-Inspired Web Application',
    description: 'Built a responsive Q&A web app using React, enabling users to post questions, submit answers, and interact through upvotes and comments. Implemented dynamic routing with React Router and managed global state using Redux. Designed reusable UI components for a seamless, interactive user experience across devices.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React.js' , 'Redux' , 'Node.js' ,'Express.js', 'MongoDB'],
   // link: 'https://github.com/MsTanviAgrawal/Code-Quest.git'
    link: 'https://codequest93.netlify.app/'
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
