import React from 'react'
import CV from '../../assets/Bhagya Shree Resume.pdf'
import CV1 from '../../assets/Bhagya Shree Graphic Designer Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
    <a href={CV} download className='btn'>Download CV for React</a>
    <a href={CV1} download className='btn btn-primary'>Download CV for GD</a>
     
   
 </div>
  )
}

export default CTA
