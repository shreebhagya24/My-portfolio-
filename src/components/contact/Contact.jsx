import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3i2xi17', 'template_sif7ki6', form.current, '8jYdhDUycgh-UGI3u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Conatct Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>bha24.gweca15@gmail.com</h5>
            <a href='mailto:bhagyashreechouhan248@gmail.com' target="_blank">Send a message</a>
            </article>

            <article className='contact__option'>
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>BhagyaShree</h5>
            <a href='https://m.me/100009149825132' target='_blank'>Send a message</a>
            </article>

            <article className='contact__option'>
            <BsWhatsapp className='.contact__option-icon' />
            <h4>Whtasapp</h4>
            <h5>8949344560</h5>
            <a href='https://api.whatsapp.com/sen?phone=+918949344560' target="_blank">Send a message</a>
            </article>
          </div>

          {/* End of Contact Option */}
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name="name" placeholder='Your Name' required></input>
            <input type='Email' name="Email" placeholder='Your Email here' required></input>
            <textarea name="Message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='Submit' className='btn btn-primary'>Send Message</button>

          </form>
        </div>
      </section>
  )
}

export default Contact
