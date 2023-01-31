import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* using react icons */}
        <a href="https://www.linkedin.com/in/lmghw" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Kaminopapa" target="_blank"><FaGithubAlt /></a>
        <a href="https://www.instagram.com/gantzmiguel/" target="_blank"><AiFillInstagram /></a>
        </div>
  )
}

export default HeaderSocials