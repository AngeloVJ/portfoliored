import React from 'react'
import './Contact.css'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function Contact() {
  useEffect(() =>{
    Aos.init({
      duration : 2000
    })
  },[])
  return (
    <>
    <div  id ="Contact" class="container contact">
    <h1>Contact Me</h1>
		<form data-aos = "fade-up">
			<div class="field" tabindex="1">
				<label for="username">
					<i class="far fa-user"></i>Your Name
				</label>
				<input name="username" type="text" placeholder="enter yor name" required/>
			</div>
			<div class="field" tabindex="2">
				<label for="email">
					<i class="far fa-envelope"></i>Your Email
				</label>
				<input name="email" type="text" placeholder="email@domain.com" required/>
			</div>
			<div class="field" tabindex="3">
				<label for="message">
					<i class="far fa-edit"></i>Your Message
				</label>
				<textarea name="message" placeholder="type here" required></textarea>
			</div>
			<button type="reset">Send Me Message</button>
			<div class="social-media">
				<span>Get In Touch : </span>
				<a class="fab fa-linkedin" href="https://www.linkedin.com/in/angelov-d5da777/" target="blank_"> </a>
				<a class="fab fa-github" href="https://github.com/AngeloVJ" target="blank_"> </a>
			</div>
		</form>
	  </div>
    </>
  )
}

export default Contact
