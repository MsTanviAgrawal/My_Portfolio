import React from 'react'
import './Experience.css'

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Algonyx Technologies Pvt. Ltd.',
    period: 'Apr 2026 - Present',
    points: [
      'Designed and implemented scalable Next.js features with optimized React.js components and REST API integrations, ensuring high performance in client-facing applications.',
      'Built polished, responsive interfaces that improve usability and product quality across live projects.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Codesutra AI',
    period: 'Dec 2025 - Mar 2026',
    points: [
      'Developed responsive UI components using React Native and collaborated with backend teams to integrate REST APIs and improve application performance.',
      'Focused on creating clean, functional interfaces for real-world client applications.',
    ],
  },
  {
    role: 'Full Stack Intern',
    company: 'Kangaroo Software Pvt. Ltd.',
    period: 'Jun 2025 - Nov 2025',
    points: [
      'Gained practical experience in full-stack development through self-made projects involving frontend, backend, and API integration.',
      'Strengthened my understanding of end-to-end product development and team collaboration.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience-page" 
  >
      <div className="experience-heading">
        {/* <p className="experience-tag">Training & Experience</p> */}
        <h1>TRAINING & EXPERIENCE</h1>
        <p className="experience-intro">
          A timeline of the professional roles and training that shaped my development journey.
        </p>
      </div>

      <div className="experience-ladder">
        {experiences.map((item, index) => (
          <article 
            className="experience-card" 
            key={index}
            style={{ '--card-index': index }}
          >
            <div className="card-header">
              <h3>{item.role}</h3>
              <span className="experience-badge">{item.period}</span>
            </div>
            <p className="experience-company">{item.company}</p>
            <ul className="experience-points">
              {item.points.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience