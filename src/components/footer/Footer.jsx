import React from 'react'
import './footer.css'
import{GrFacebookOption} from 'react-icons/gr'
import{AiFillInstagram} from 'react-icons/ai'
import LG from '../../assets/luisLogo.png'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={LG} style={{width:"70px",height:"70px"}} alt="logo"/></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://www.facebook.com/miguel.hungwu/"><GrFacebookOption/></a>
        <a href="https://www.instagram.com/gantzmiguel/"><AiFillInstagram/></a>
      </div> */}
      <div className="footer__copyright">
        <small>&copy; LUIS HUNG. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer