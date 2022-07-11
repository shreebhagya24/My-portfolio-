import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

          <h3>Technical Skills</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
              </article>
              

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              {/* <small className='text-light'></small> */}
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React JS</h4>
              {/* <small className='text-light'>Basic</small> */}
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Redux</h4>
              {/* <small className='text-light'>Basic</small> */}
              </div>
              </article>

          </div>

        </div>


        {/*end of frontend*/}

        <div className="experience__backend">

          <h3>Other Skills</h3>

          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>NodeJS</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Photoshop</h4>
              {/* <small className='text-light'>Intermediate</small> */}
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Digital Marketing</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
              </article>

              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Graphic Design</h4>
              {/* <small className='text-light'>Experienced</small> */}
              </div>
              </article>

              

          </div>

        </div>
      
      
      
      </div>
    </section>
      
    
  )
}

export default Experience
