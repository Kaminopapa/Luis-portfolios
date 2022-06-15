import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio.jpg";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/mileyLogo.png";
import IMG4 from "../../assets/learning.jpeg";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG3,
      title: "Miley Design",
      description: "React.js CSS3 ",
      github: "https://github.com/Kaminopapa/MileyDesignn",
      demo: "https://kaminopapa.github.io/MileyDesignn/",
    },
    {
      id: 2,
      image: IMG4,
      title: "MERN Project",
      description: "React.js express.js MongoDB JWT",
      github: "https://github.com/Kaminopapa/CourseResgister",
      demo: "https://studynet.netlify.app/",
    },
    {
      id: 3,
      image: IMG1,
      title: "HWread Online Reading",
      description: "React.js React-bootstrap API",
      github: "https://github.com/Kaminopapa/HWread",
      demo: "https://kaminopapa.github.io/HWread/",
    },
    {
      id: 4,
      image: IMG2,
      title: "Welcome to Venezuela",
      description: "HTML5 CSS3 JavaScript",
      github: "https://github.com/Kaminopapa/Kaminopapa.github.io",
      demo: "https://kaminopapa.github.io/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, description, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <MouseParallaxContainer>
                <MouseParallaxChild factorX={0.05} factorY={0.09}>
                  <div className="portfolio__item-image">
                    <img src={image} style={{ height: "330px" }} alt={title} />
                  </div>
                </MouseParallaxChild>
              </MouseParallaxContainer>
              <h2>{title}</h2>
              <div className="description">
                <p>{description}</p>
              </div>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
