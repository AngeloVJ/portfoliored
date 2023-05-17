import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Contact Me</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fas fa-envelope" name="Email" link="mailto:angelovaldiviajara@gmail.com"/>
        <ContactBox animation="fade-up" class= "fab fa-github" name="Github" link="https://github.com/AngeloVJ"/>
        <ContactBox animation="fade-left" class= "fab fa-linkedin" name="Linkedin" link="https://www.linkedin.com/in/angelov-d5da777/"/>
      </div>

    </div>
    </>
  )
}

export default Contact
