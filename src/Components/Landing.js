import React from 'react'
import Navbar from './Navbar'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <img src='back.png' className='background'alt='back'/>
      <div className='content'>
      <h1 className='libre-bodoni-heading'>TEKATHON 3.0</h1><br />
      <p className='why'>Internal Hackathon for SIH 2024</p>
      <button href="/" className="menu-link-button">
              Register Now
            </button>
      </div>
      <img src='person.png' className='person' alt='person'/>
      <img src='bush.png' className='bush' alt='bush'/>
    </div>
  )
}

export default Landing
