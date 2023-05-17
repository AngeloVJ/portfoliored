import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'
import img1 from '../../images/js.png'
import img2 from '../../images/html.png'
import img3 from '../../images/css.png'
import img4 from '../../images/react.png'
import img5 from '../../images/postgres.png'
import img6 from '../../images/node.png'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Skills</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" heading = "Javascript" image={img1}/>
        <ServiceBox animation = "fade-up" heading = "HTML" image={img2}/>
        <ServiceBox animation = "fade-up" heading = "CSS" image={img3}/>
        <ServiceBox animation = "fade-up" heading = "React" image={img4}/>
        <ServiceBox animation = "fade-up" heading = "PostgresSQL" image={img5}/>
        <ServiceBox animation = "fade-up" heading = "Node Js" image={img6}/>
      </div>
    </div>
    </>
  )
}

export default Service
