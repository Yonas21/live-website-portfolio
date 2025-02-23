import React, { useRef } from "react";
import { MdVerified } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import "./experience.css";
import { skills } from "../../models";

const Experience = () => {
  const frontendRef = useRef();
  const backendRef = useRef();
  const databaseRef = useRef();
  const versionControlRef = useRef();

  const frontendInView = useInView(frontendRef, { once: true });
  const backendInView = useInView(backendRef, { once: true });
  const databaseInView = useInView(databaseRef, { once: true });
  const versionControlInView = useInView(versionControlRef, { once: true });

  const containerVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 1.3 },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Top Skills</h2>

      <div className="container experience__container">
        <motion.div
          className="experience__frontend"
          ref={frontendRef}
          variants={containerVariants}
          initial="hidden"
          animate={frontendInView ? "visible" : "hidden"}
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {skills.frontend.map((skill, index) => (
              <article key={index} className="experience__details">
                <MdVerified className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
            className="experience__backend"
          ref={backendRef}
          variants={containerVariants}
          initial="hidden"
          animate={backendInView ? "visible" : "hidden"}
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            {skills.backend.map((skill, index) => (
              <article key={index} className="experience__details">
                <MdVerified className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
           

        <motion.div
          className="experience__database"
          ref={databaseRef}
          variants={containerVariants}
          initial="hidden"
          animate={databaseInView ? "visible" : "hidden"}
        >
          <h3>Database</h3>
          <div className="experience__content">
            {skills.database.map((skill, index) => (
              <article key={index} className="experience__details">
                <MdVerified className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      

        <motion.div
          className="experience__tools"
          ref={versionControlRef}
          variants={containerVariants}
          initial="hidden"
          animate={versionControlInView ? "visible" : "hidden"}
        >
          <h3>Version Control</h3>
          <div className="experience__content">
            {skills.tools.map((skill, index) => (
              <article key={index} className="experience__details">
                <MdVerified className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
