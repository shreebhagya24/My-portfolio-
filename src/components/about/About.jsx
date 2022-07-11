import React from 'react'
import './about.css'

import ME from '../../assets/shree-o.jpg'
import {FaAward} from 'react-icons/fa'
import {VscHome} from 'react-icons/vsc'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          
          <div className="about__me-image" >
            <img src={ME} alt='About Image'/>
          </div>

        </div>






      <div className="about__content">

        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ year work</small>
            </article>

            <article className='about__card'>
            <VscHome className='about__icon'/>
            <h5>Company</h5>
            <small>Moverstrip</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Project</h5>
            <small>2+ Completed</small>
            </article>

            
        </div>
        <p> A positive and motivated individual committed to excellence and successful outcomes. Hi, I have been learning and developing React-based applications for less than one year (want to become a Full-Stack developer one day). I am interested in coding, developing and designing.</p>

              <a href='#contact' className='btn btn-primary'>Let's Talk</a>


      </div>

      </div>
</section>
  )
}

export default About
