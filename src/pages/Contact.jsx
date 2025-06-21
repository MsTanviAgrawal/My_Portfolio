import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import '../StylePages/Contact.css'

const Contact = () => {
  const [sent, setSent] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setSent((upd) => ({
      ...upd, [e.target.name]: e.target.value
    }));
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zvx803e',
      'template_xq1z2ba',
      e.target,
      'LBzGpZ95Lw0M08ei_'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setSent({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.log(error.text);
        alert('Failed to sent message!');
      }
    );

    e.target.reset();
  };


  return (
    <section
      id='contact'
    >
      <div className='contact-heading'>
        <h2>CONTACT </h2>
        <p>
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className='contact-details'>        
        <form onSubmit={sendEmail}>
          <div className='contact-section'>
            <h3>
              Connect With Me
            </h3>
          </div>
          
          <div className='email'>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={sent.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='userName'>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={sent.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='subject'>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={sent.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className='message'>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={sent.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className='submit' type="submit"> Send </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
