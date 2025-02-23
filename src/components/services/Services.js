import React, { useRef } from "react";
import { GiCheckMark } from "react-icons/gi";
import {  motion, useInView } from "framer-motion";
import "./services.css";
import { services } from "../../models";

const Services = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: i === 1 ? 1.3 : 1.6,
      },
    }),
  };

  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <motion.article
          className="service"
          ref={ref1}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"}
          variants={containerVariants}
          custom={0}
        >
          <div className="service_head">
            <h3>Mobile App Dev.</h3>
          </div>
          <ul className="service__list">
             {services.mobile_development.map((service, index) => (
              <li key={index}>
                <GiCheckMark className="service__list-icon" />{" "}
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          className="service"
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={containerVariants}
          custom={1}
        >
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {services.web_development.map((service, index) => (
              <li key={index}>
                <GiCheckMark className="service__list-icon" />{" "}
                <p>{service}</p>
              </li>
            ))}
            
          </ul>
        </motion.article>

        <motion.article
          className="service"
          ref={ref3}
          initial="hidden"
          animate={isInView3 ? "visible" : "hidden"}
          variants={containerVariants}
          custom={2}
        >
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            {services.ui_ux_design.map((service, index) => (
              <li key={index}>
                <GiCheckMark className="service__list-icon" />{" "}
                <p>{service}</p>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
};

export default Services;
