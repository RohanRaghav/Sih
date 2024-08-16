import React from 'react'

const Login = () => {
  return (
    <div>
       <div className='contact-container'>
      <div className='contacting'>
        <h1 className='tecka'>TEKATHON 3.0</h1>
        <p className='njn'>Internal Hackathon for SIH 2024 </p>
        <h5 className='bhk'>Chandigarh University</h5>
      </div>
      <div className='formings'>
        <h1 className='log'>Login</h1>
        <h6 className='lead'>Only for team leader</h6>
        <input className='Uid' placeholder='UID' type='text' />
        <input className='passwords' placeholder='Password' type='password' />
        <center>
        <button className='signing' >Sign up</button>
        <p className='llll'>For New User <a href='/Register'>Register Now</a></p>
        </center>
      </div>
    </div>
    </div>
  )
}

export default Login
