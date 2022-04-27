import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio.jpg"
import IMG2 from "../../assets/portfolio2.webp"
import IMG3 from "../../assets/mileyLogo.png"

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'HWread Online Reading',
      github: 'https://github.com/Kaminopapa/HWread',
      demo: 'https://kaminopapa.github.io/HWread/'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Welcome to Venezuela',
      github: 'https://github.com/Kaminopapa/Kaminopapa.github.io',
      demo: 'https://kaminopapa.github.io/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Miley Design',
      github: 'https://github.com/Kaminopapa/Mileydesign',
      demo: 'https://kaminopapa.github.io/Mileydesign/'
    },
  
  ]



 
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
          {
            data.map(({ id, image, title, github, demo }) => {
              return (
                
                <article key={id} className="portfolio__item" >
                <MouseParallaxContainer>
                <MouseParallaxChild factorX={0.05} factorY={0.09} >
                  <div className="portfolio__item-image">
                    <img src={image} style={{ height: '300px' }} alt={title} />
                    
                  </div>
                  </MouseParallaxChild>
                  </MouseParallaxContainer>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </article>
               
              )
            })
          }
       
      </div>
    </section>
  )
}

export default Portfolio