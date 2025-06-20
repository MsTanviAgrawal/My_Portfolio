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
    desc: "I completed my Bachelor's degree in Electrical & Electronics Engineering (B. Tech.) from UIT RGPV, Shivpuri. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
    degree: "Bachelor of Technology - B. Tech (Electrical & Electronics Engineering)",
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="education-section">
        <h2 className="edu-heading">EDUCATION</h2>
        <p>
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      <div className="college">

        {education.map((edu, index) => (

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
