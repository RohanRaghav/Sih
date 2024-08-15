import React from 'react'

const ThemeCard = () => {
  return (
    <div className='cards-container'>
      <div className='cards'>
        <div className='cardimage'>
            <img src='/' alt='theme' height={150} width={150} />
        </div>
        <div className='carddescribe'>Themes</div>
      </div>
      <div className='cards'>
        <div className='cardimage'>
            <img src='/' alt='theme' height={150} width={150} />
        </div>
        <div className='carddescribe'>Problem Statment</div>
      </div>
      <div className='cards'>
        <div className='cardimage'>
            <img src='/' alt='theme' height={150} width={150} />
        </div>
        <div className='carddescribe'>Guidelines</div>
      </div>
    </div>
  )
}

export default ThemeCard
