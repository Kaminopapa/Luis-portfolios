import React from 'react'
import './about.css'
import ME from '../../assets/aboutmerec.jpg'
import { FaAward } from 'react-icons/fa'
import { BiCodeCurly } from "react-icons/bi"
import { VscFolderLibrary } from "react-icons/vsc"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Langara College</h5>
              <small>Computer Study</small>
            </article>
            <article className="about__card">
              <BiCodeCurly className='about__icon' />
              <h5>Coding Experience</h5>
              <small>2 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
          Heellooo~ This is Luis from Venezuela.<br/> When I first came into contact with web development, I was deeply attracted. I have always been a person full of fantasies, and all kinds of thoughts often come into my mind. Now, these ideas have a chance to show to everyone -> Encode them into the real world ! This is what I have always wanted to do and what I am doing.
              </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About