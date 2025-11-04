import React from 'react'
import '../StylePages/Projects.css'

const projects = [
  {
    title: ' Appoint-A Freelancing Website ',
    description: ' I developed a freelancing platform called Appoint using the MERN stack, featuring role-based authentication for both service providers and clients. The platform includes real-time encrypted chat and calling, ensuring secure and seamless communication between users. Additionally, I designed and deployed a fully responsive UI/UX, providing an intuitive experience that enables smooth service hiring, collaboration, and deal management. ',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux' , 'Node.js', 'Express', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Showcase Dashboard for E-commerce Website',
    description: 'I developed a Showcase Dashboard for an e-commerce website using React.js, designed to present key business insights and metrics in an interactive, visually appealing format. The dashboard features dynamic data visualization, animated UI components, and a responsive layout to enhance user engagement and accessibility. By integrating smooth transitions and interactive elements, user-friendly experience that effectively highlights essential e-commerce performance indicators.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
   // link: 'https://github.com/MsTanviAgrawal/Code-Quest.git'
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
