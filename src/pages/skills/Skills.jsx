import React, { useState, useEffect } from 'react'
import './Skills.css'
import htmlLogo from '../../assets/tech_logo/html.png';
import cssLogo from '../../assets/tech_logo/css.png';
import javascriptLogo from '../../assets/tech_logo/javascript.png';
import reactjsLogo from '../../assets/tech_logo/reactjs.png';
import tailwindcssLogo from '../../assets/tech_logo/tailwindcss.png';
import bootstrapLogo from '../../assets/tech_logo/bootstrap.png';
import nodejsLogo from '../../assets/tech_logo/nodejs.png';
import expressjsLogo from '../../assets/tech_logo/express.png';
import mongodbLogo from '../../assets/tech_logo/mongodb.png';
import javaLogo from '../../assets/tech_logo/java.png';
import gitLogo from '../../assets/tech_logo/git.png';
import githubLogo from '../../assets/tech_logo/github.png';
import vscodeLogo from '../../assets/tech_logo/vscode.png';
import netlifyLogo from '../../assets/tech_logo/netlify.png';
import postmanLogo from '../../assets/tech_logo/postman.png';
import typescriptLogo from '../../assets/tech_logo/typescript.png';
import vercelLogo from '../../assets/tech_logo/vercel.png';
import nextjsLogo from '../../assets/tech_logo/nextjs.png';

const Skills = () => {
  const [currentFace, setCurrentFace] = useState(0);

  const SkillsInfo = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'React JS', logo: reactjsLogo },
        { name: 'Tailwind CSS', logo: tailwindcssLogo },
        { name: 'Bootstrap', logo: bootstrapLogo },
        { name: 'Next.js', logo: nextjsLogo },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node JS', logo: nodejsLogo },
        { name: 'Express JS', logo: expressjsLogo },
        { name: 'MongoDB', logo: mongodbLogo },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'TypeScript', logo: typescriptLogo },
        { name: 'Java', logo: javaLogo },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', logo: gitLogo },
        { name: 'GitHub', logo: githubLogo },
        { name: 'VS Code', logo: vscodeLogo },
        { name: 'Netlify', logo: netlifyLogo },
        { name: 'Vercel', logo: vercelLogo },
        { name: 'Postman', logo: postmanLogo },
      ],
    },
  ];

  // Automated 3D carousel rotator loop - changes face every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFace((prevFace) => (prevFace + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="skills">
        <div className="skills-heading">
          <h1>SKILLS</h1>
          <p>
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </div>

        {/* 3D Viewport Stage Stage Container */}
        <div className="skills-3d-stage">
          <div 
            className="skills-cuboid" 
            style={{ transform: `rotateY(${-currentFace * 90}deg)` }}
          >
            {SkillsInfo.map((category, index) => (
              <div 
                className={`skills-title face-${index}`} 
                key={category.title}
              >
                <h3>{category.title}</h3>

                <div className='skills-nameLogo'>
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <img 
                        className='skills-logo'
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                      />
                      <span className='skills-name'>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Indicators */}
        <div className="skills-indicators">
          {SkillsInfo.map((_, index) => (
            <span 
              key={index} 
              className={`indicator-dot ${currentFace === index ? 'active' : ''}`}
              onClick={() => setCurrentFace(index)}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Skills
