import React , { useRef }from 'react'
import './contact.css'
import { SiGmail,SiDiscord } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pstf0zo', 'template_6lxm2yp', form.current, 'NgnOCXI4iBa6-o0PO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>luishung1996@gmail.com</h5>
            <a href="mailto:luishung1996@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <SiDiscord className='contact__option-icon' />
            <h4>Discord</h4>
            <h5>luis hung#7139</h5>
            <a href="https://discord.io/LuisHung" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+0017783028624" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact