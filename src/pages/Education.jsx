import React from 'react'
// import { education } from '../Constants'
import rgpvLogo from '../assets/education_logo/rgpv_logo.png';
import '../StylePages/Education.css'

const education = [
  {
    id: 0,
    img: rgpvLogo,
    school: "UIT RGPV, Shivpuri",
    date: " Nov 21 - June 2025",
    grade: "7.85 CGPA",
    desc: "I completed my Bachelor's degree in Electrical & Electronics Engineering (B. Tech.) from UIT RGPV, Shivpuri. Throughout my academic journey, I cultivated a strong interest in software development and honed my skills in Java, HTML, CSS, JavaScript, and React.js, along with core programming concepts like OOP and SOLID principles. Beyond academics, I’ve earned accolades in sports and art, and actively contributed to college events and NSS community programs.",
    degree: "Bachelor of Technology - B. Tech (Electrical & Electronics Engineering)",
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="education-section">
        <h1 className="edu-heading">EDUCATION</h1>
        <p>
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="college">

        {education.map((edu) => (

          <div key={edu.id}>
            <div>
              <img
                src={edu.img}
                alt={edu.school}
              />
            </div>

            <div className='college-name'>
              <div>
                <h3 >
                  {edu.degree}
                </h3>
                <h4>
                  {edu.school}
                </h4>
              </div>
              <p >{edu.date}</p>
            </div>

            <p >Grade: {edu.grade}</p>
            <p >{edu.desc}</p>
          </div>

        ))}
      </div>
    </section >

  )
}

export default Education
