import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/hitendra.jpg'
import Avt2 from '../../assets/moverstrip.png'
import Avt3 from '../../assets/aakashdeep.png'
import Avt4 from '../../assets/vinod.jpg'





import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const data = [
   
  {
    avatar: Avt1,
    name: 'Hitendra Vaishnav',
    review: 'Working with Bhagya Shree was very good experince, she learned very quickly and very harworking.'
  },

  {
    avatar: Avt2,
    name: 'Moverstrip Company',
    review: 'As a employee of company she did very hard work, learned skills like React as well as graphic designing. She helped us in developing our website, helped in updation of mobile application and software. She is good designer too.'
  },

  {
    avatar: Avt3,
    name: 'Aakash Deep Packers and Movers Company',
    review: 'As a freelancer, we hire Bhagya Shree for digital marketing and maintaing our google listing. We are very happy for her work.'
  },
  {
    avatar: Avt4,
    name: 'Vinod Katiriya ',
    review: 'Working with Bhagya Shree was very good experience.'
  }


]

const Testimonials = () => {
  
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"

      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }} >
      

        {
          data.map(({avatar, name, review}, index)=> {
            return(
              <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar} alt='Avtar 1'/></div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}
              </small>
          </SwiperSlide>
            )

            

          })
        }
        

          
        </Swiper>
      </section>
      
   
  )
}

export default Testimonials
