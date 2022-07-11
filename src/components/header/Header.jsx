import React from 'react'
import './header.css'

import CTA from './CTA'
import ME from '../../assets/floral1.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  
  return (
    <header>
   
    
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Bhagya Shree Chouhan</h1>
        <h5 className="text-light">React JS Developer/Graphic Designer</h5>
        <CTA/>
        <HeaderSocial/>
        <a href='#contact' className="scroll__down" >Scroll Down</a>
        
        <div className="me" >
          <img src={ME} alt='me' className='zoom-in-out-box'/>

        </div>

        
        
      </div>
      </header>
      
      
      
    
  )
}

export default Header
