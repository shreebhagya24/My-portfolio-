import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>My Experience</h2>

      <div className="container service__container">
        
        <article className='service'>

          <div className="service__head">
            <h5>Graphic Design</h5>
          </div>

          <ul className='service__list'>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Freelancing in Develop creative advertising content for the company products.</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Design various media including social post, menus, flyres, banner etc.</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Coceptualize logo design , gif animation, videos to promote product brand.</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Utilize After Effects and create basic motion graphic.</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Web and Mobile app design.</p></div>
            </li>

          </ul>
          </article>

          {/* END OF UI/UX */}

          <article className='service'>

          <div className="service__head">
            <h5>React Development</h5>
          </div>

          <ul className='service__list'>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Design and Develop HTML, CSS, Bootstrap, and React JS that meets web browser standards for website.</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Learn React-Router to turn application into Single Page Application</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Learn how to maintained states in the stores and dispatched the actions using Redux.</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>learning about Api method</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>learn about react hooks</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>learning Node JS for backend</p></div>
            </li>

          </ul>
          </article>

          {/* END OF Web Development  */}

          <article className='service'>

          <div className="service__head">
            <h5>Digital Marketer</h5>
          </div>

          <ul className='service__list'>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Run Facebook ads and Instagram ads campaign</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Run Google Ads Campaign, Yutube ads.</p></div>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Worked on company google listing.</p>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Content write for advertising.</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Learned website SEO</p></div>
            </li>

            <li>
              <div><BiCheck className='service__list-icon'/></div>
              <div><p>Freelancing experience in digital marketing.</p></div>
            </li>

          </ul>
          </article>

           {/* END OF Content Creater  */}




      
      
      </div>
    </section>
  )
    
}

export default Services
