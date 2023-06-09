import React from 'react'
import './Home.css'
import img8 from '../../../src/images/fotaso1.png'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 2000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <h1>Hi, I'm Angelo</h1>
          <h2>And I'm a  <span className="typing"></span></h2>
          <a href="CVAV.pdf" download target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

