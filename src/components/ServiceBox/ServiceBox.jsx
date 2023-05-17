import React from 'react'
import './ServiceBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ServiceBox(props) {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div data-aos = {props.animation}>
    <div className="card">
        <div className="box">
          <img src={props.image} alt="Service" className="image" />
          <h2 className="heading">{props.heading}</h2>
        </div>
      </div> 
    </div>
    </>
  )
}

export default ServiceBox
