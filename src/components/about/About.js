import React, { useRef } from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";
import { motion, useInView } from "framer-motion";
import { aboutMe } from "../../models";

const About = () => {
  const view = useRef();
  const isInView = useInView(view, { once: true });

  const containerVariants = {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1.4 },
    },
    hidden: {
      x: "-100vw",
      opacity: 0,
      transition: { duration: 1.4 },
    },
  };

  return (
		<section id="about" ref={view}>
			<h5 className="about-h5">Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<motion.div
					className="about__me"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					<div className="about__me-img">
						<img src={aboutMe.office_image} alt="About" />
					</div>
				</motion.div>

				<motion.div
					className="about__content"
					variants={containerVariants}
					initial="right"
					animate={isInView ? "visible" : "hidden"}
				>
					<div className="about__cards">
						<a href="#experience">
							<article className="about__card">
								<FaAward className="about__icon" />
								<h5>Experience</h5>
								<small>{aboutMe.experience}</small>
							</article>
						</a>

						<a href="#portfolio">
							<article className="about__card">
								<FiUsers className="about__icon" />
								<h5>Clients</h5>
								<small>{aboutMe.clients}</small>
							</article>
						</a>

						<a href="#portfolio">
							<article className="about__card">
								<VscFolderLibrary className="about__icon" />
								<h5>Projects</h5>
								<small>{aboutMe.projects} Worked</small>
							</article>
						</a>
					</div>

					<p>{aboutMe.description.intro}</p>
					<ul style={{ paddingLeft: "40px", marginBottom: "20px" }}>
						{aboutMe.description.list.map((item, index) => (
							<li
								key={index}
								style={{
									listStyleType: "disc",
									marginBottom: "8px",
									color: "gray",
								}}
							>
								{item}
							</li>
						))}
					</ul>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</motion.div>
			</div>
		</section>
  );
};

export default About;
