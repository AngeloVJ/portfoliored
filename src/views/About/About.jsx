import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/fotaso1.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Hello!</h2>
        <p>My name is Angelo, I'm a passionate developer with experience creating innovative technology solutions.  I specialize in the development of web applications, using technologies such as HTML, CSS, JavaScript and framework such as React. I also have experience developing backend applications using Node.js.</p>
        <a href="https://www.linkedin.com/in/angelov-d5da777/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
