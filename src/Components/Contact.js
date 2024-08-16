import React from 'react';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contacting'>
        <h1 className='poppins-medium'>Contact Us</h1>
        <p className='njn'>YOU CAN <span style={{ color: '#f4ce14' }}>CONNECT</span> US AT</p>
        <h5 className='bhk'>Email@gmail.com</h5>
      </div>
      <div className='forming'>
        <input className='username' placeholder='Name' type='text' />
        <input className='Email' placeholder='Email' type='email' />
        <input className='Subject' placeholder='Subject' type='text' />
        <input className='More' placeholder='More information about subject' type='text' />
        <button className='feedback' >Send feedback</button>
      </div>
    </div>
  );
};

export default Contact;
