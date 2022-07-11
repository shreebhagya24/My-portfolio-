import React, {useEffect} from 'react'
import './portfolio.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import IMG1 from '../../assets/pfm.png'
import IMG2 from '../../assets/pfm.png'
import IMG3 from '../../assets/pfp.png'
import IMG4 from '../../assets/pfa.png'
import IMG5 from '../../assets/pfp.png'
import IMG6 from '../../assets/pfpp.png'


const data = [

  {
    id: 1,
    image: IMG1,
    title: 'Portfolio1',
    text: "Designs for Moverstrip",
    nme: "View Designs",
    github: 'https://github.com',
    demo: 'https://www.instagram.com/moverstripdigital/'
  },
   
  {
    id: 2,
    image: IMG2,
    title: 'Moverstrip',
    text: "Moverstrip Website",
    nme: "View Website",
    github: 'https://github.com',
    demo: 'https://moverstrip.com/'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Portfolio1',
    text: "Mini Project",
    nme: "View Projects",
    github: 'https://github.com',
    demo: 'https://github.com/shreebhagya24'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Portfolio1',
    text: "Designs for Aakshdeep",
    nme: "View Designs",
    github: 'https://github.com',
    demo: 'https://www.instagram.com/aakashdeeppackers/'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Portfolio1',
    text: "Mini Projects",
    nme: "View Projects",
    github: 'https://github.com',
    demo: 'https://github.com/shreebhagya24'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Portfolio1',
    text: "My portfolio",
    nme: "View Portfolio",
    github: 'https://github.com',
    demo: 'https://github.com/shreebhagya24'
  }

]



function Portfolio() {

  useEffect(()=>{Aos.init({duration:2000})},[]);
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {data.map(({ id, image, title, github, demo, text, nme }) => {
          return (

            <article key={id} className='portfolio__item' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{text}</h3>
              <div className="portfolio__tem-cta">
                {/* <a href={github} className='btn' target="_blank">Github</a> */}
                <a href={demo} className='btn btn-primary' target="_blank">{nme}</a>
              </div>
            </article>

          )
        })}


      </div>
    </section>


  )
}

export default Portfolio
