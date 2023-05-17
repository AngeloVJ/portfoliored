import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import pokedex from  '../../images/pokedex.PNG'
import rick from  '../../images/rick.PNG'
import weater from  '../../images/weater.PNG'
import crud from  '../../images/crud.PNG'
import ecomerce from  '../../images/ecomerce.PNG'


function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox title = "Pokedex Api using React" img= {pokedex} link = "https://github.com/AngeloVJ/repo__pokemon"/>
            <ProjectBox title = "Rick & Morty Api React " img= {rick} link = "https://github.com/AngeloVJ/repo_rickmorty"  />
            <ProjectBox title = "Weater app with React" img= {weater} link = "https://github.com/AngeloVJ/repo_clima"  />
            <ProjectBox title = "Users Crud Api" img= {crud} link = "https://github.com/AngeloVJ/repo_users"  />
            <ProjectBox title = "E-comerce with Javascitp" img= {ecomerce} link = "https://github.com/AngeloVJ/repo_ecomerce"  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
