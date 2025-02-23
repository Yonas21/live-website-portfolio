import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./portfolio.css";
import { portfolioItems } from "../../models";


const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 1.5,
      },
    }),
  };

  return (
    <section id="portfolio" ref={ref}>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map(({ img, title, github, demo }, index) => (
          <motion.article
            className="portfolio__item"
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animationVariants}
            custom={index}
          >
            <div className="portfolio__item-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              {github !== "" && <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>}
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
