import '../pages/Resume.css'
import profilePic from '../assets/Photo.jpg'
const Resume = () => {
  return (
     <div class="Complete-resume">
    
          <div class="Heading-side">
            <h1>Tanvi Agrawal</h1>
           <h3> <a href="#"> tanviagrawal9913@gmail.com </a>| +9193016-96982 | Shivpuri Madhya Pradesh |<a href="https://www.linkedin.com/in/tanvi-agrawal-04a325236 ">Linkedln</a></h3> 
          </div>
           <div class="photo-side">
             <img src={profilePic} alt="photo" ></img>   
            </div>
     <div class="summary">
            <h3>SUMMARY</h3>
            <hr/>
            <p>
              Motivated Electrical and Electronics Engineering student with hands-on vocational training experience in Electrical maintenance, 
    Power Transmission and Power Generation at Madhikheda Hydel Power Station, MPPTCL, and NPTI. Skilled in Java, Project 
    Management, and MS Office. Strong leadership and teamwork skills, demonstrated through event coordination and volunteering. 
    Open to opportunities across technical, management, and customer-focused roles where I can contribute value, grow continuously, and 
    reliability to diverse professional environments. 
            </p>
          </div>
     <div class="skills">
            <h3>SKILLS AND HOBBIES</h3>
            <hr/>
            <h4><b>Technical Skills</b></h4>
            <p>Power System | Power Generation Technology | Power Transmission | HTML | CSS | JAVA | OOPs | Solid Principles | MS-Office Suite 
    (Word, Excel, Power Point)</p>
            <h4><b>Soft Skills & Hobbies</b></h4>
            <p>Project Management | Leadership | Teamwork & Collaboration | Time Management | Dedicated | Effective Communication | Continuous 
    Learning | Adaptability | Creative | Art & Craft | Sports
    </p> 
          </div>
    
    <div class="education">
      <h3>EDUCATION</h3>
      <hr />
      <div class="edu-entry">
        <h4 id='name'><b>University Institute of Technology RGPV, Shivpuri</b></h4>
        <h4 id='date'><b>Nov 2021 – June 2025</b></h4>
        </div>
        <p>Bachelor of Technology in Electrical and Electronics Engineering</p>
        <p><b>CGPA: 7.84</b></p>
    
      <div class="edu-entry">
        <h4><b>Rangarh’s Rainbow H.S. School, Shivpuri</b></h4>
        <h4 id='date'><b>July 2020 – June 2021</b></h4>
        </div>
        <p>Higher Secondary, Madhya Pradesh Board of Secondary Education</p>
        <p><b>Percentage: 88.6%</b></p>
      
      <div class="edu-entry">
        <h4><b>Rangarh’s Rainbow H.S. School, Shivpuri</b></h4>
        <h4 id='date'><b>July 2018 – June 2019</b></h4>
        </div>
        <p>High School, Madhya Pradesh Board of Secondary Education</p>
        <p><b>Percentage: 89.6%</b></p>
    
    </div>
    
    <div class="trainings">
      <h3>TRAINING EXPERIENCE</h3>
      <hr />
    
      <div class="training-entry">
        <h4><b>Madhikheda Hydel Power Station</b></h4>
        <h4 id='date'><b>June 23 - June 2023</b></h4>
        </div>
        <p><li>Completed two-week vocational training in the Electrical Maintenance section at Madhikheda Hydel Power Station, Shivpuri (M.P.).</li></p>
        
      <div class="training-entry">
        <h4><b>National Power Training Institute (Ministry of Power, Govt. of India)</b></h4>
        <h4 id='date'><b>Feb 24 - Feb 2024</b></h4>
        </div>
        <p><li>Attended a one-week training program on “Power Generation Technology” at NPTI, Shivpuri and was awarded an appreciation certificate.</li></p>
      
      <div class="training-entry">
        <h4><b>M.P. Power Transmission Company Ltd.</b></h4>
        <h4 id='date'><b>July 24 - July 2024</b></h4>
        </div>
        <p><li>Completed two-week vocational training at 220 KV Substation, MPPTCL Shivpuri, under Testing Division of M.P. Transmission Company Ltd.</li></p>
    
      <div class="training-entry">
        <h4><b>ITEXPERTS</b></h4>
        <h4 id='date'><b>June – August 2023</b></h4>
        </div>
        <p><li>Completed 45-day training in Java at ITEXPERTS, scoring 90% in the certification exam.</li></p>
      
    </div>
    
    <div class="projects">
      <h3>PROJECT</h3>
      <hr />
      <h4><b>Minor Project – SMART DUSTBIN</b></h4>
      
        <p><li>Utilizes Arduino for microcontroller functionality.</li></p>
        <p><li>Employs an ultrasonic sensor to detect proximity.</li></p>
        <p><li>Uses a servo motor to automatically open and close the lid.</li></p>
        <p><li>Powered by a battery for portable operation.</li></p>
        <p><li>Provides a hands-free and hygienic waste disposal solution.</li></p>
      
    </div>
    
           <div class="certification">
              <h3>CERTIFICATIONS AND ACHIEVEMENTS</h3>
              <hr/>
        <p><li>Certified in JAVA - Itexperts </li></p>
        <p><li>Certified in Young Professional course - TCS iON Career Edge </li></p>
        <p><li>Certified in Digital Marketing - Itronix Solutions </li></p>
        <p><li><b>Badminton:</b> 1st place (Doubles category) & 2-time runner up (Singles category) in college tournaments. </li></p>
        <p><li><b>Painting:</b> 2nd place in District level competition & 2-time winner in college-level competition. </li></p>
            </div>
    
            <div class="responsibility">
              <h3>POSITION OF RESPONSIBILITY </h3>
              <hr/>
              <h4><b>Student Coordinator, Annual Sports Event, UIT RGPV Shivpuri</b></h4>
              <p><li>Successfully coordinated the event, managing teams and logistics to ensure smooth execution.</li></p>
              <p><li>Oversaw event scheduling, resource allocation, and communication between participants and organizing committees.</li></p>
              <h4><b>Volunteer, National Service Scheme (NSS) Camp, UIT RGPV Shivpuri </b></h4>
              <p><li>Actively contributed to community development initiatives, including [ AIDS Awareness Drive, Women’s Hygiene & Seasonal 
    Diseases, etc.].</li></p>
    <p><li>Assisted in planning and organizing camp activities, ensuring active engagement of participants. </li></p>
            </div>
    
    </div>
  )
}

export default Resume

