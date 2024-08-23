import React from 'react'
import '../css/Header.css'
import hero from '../assets/hero.png'

function Header() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Build Your Brand<br />With #1 Hiring Expert <br />
          <span className="highlight">Freelancer</span> World
        </h1>
        <p>
          Work with the best freelance talent from around the world on our
          secure, flexible, and cost-effective platform. Hire expert freelancers
          globally, and you can contact us if you don't understand this
          application for your questions.
        </p>
        <div className="hero-buttons">
          <button className="btn primary-btn">Contact Us</button>
          <button className="btn secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Freelancer World" />
      </div>
    </div>
  )
}

export default Header
