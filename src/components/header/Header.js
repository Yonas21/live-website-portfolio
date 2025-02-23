import React from "react";
import "./header.css";
import CTA from "./CTA";
import { FaArrowCircleRight } from "react-icons/fa";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";
import {  aboutMe } from "../../models";
const containerVariants = {
  visible: {
    x: 0,
    y: 0,
    transition: { delay: 0.5, duration: 1 },
  },
  top: {
    y: "-100vh",
    transition: { delay: 1.5, duration: 2.5 },
  },
  bottom: {
    y: "100vh",
    transition: { delay: 1.5, duration: 2.5 },
  },
  right: {
    x: "100vw",
    transition: { delay: 1.5, duration: 2.5 },
  },
  left: {
    x: "-100vw",
    transition: { delay: 1.5, duration: 2.5 },
  },
};
const Header = () => {
  return (
		<header>
			<div className="container header__container">
				<motion.div
					variants={containerVariants}
					initial="top"
					animate="visible"
				>
					<h5>Hello I'm </h5>
					<h1>
						{aboutMe.name}{" "}
						<span className="father-name">
							{aboutMe.fatherName}
						</span>
					</h1>
					<h5 className="text-light">{aboutMe.position}</h5>
				</motion.div>
				<motion.div
					variants={containerVariants}
					initial="right"
					animate="visible"
				>
					<CTA />
				</motion.div>
				<HeaderSocials />

				<motion.div
					className="me"
					variants={containerVariants}
					initial="bottom"
					animate="visible"
				>
					<img
						src={aboutMe.image}
						alt="me"
						height={300}
						width={300}
					/>
				</motion.div>

				<a href="#contact" className="scroll__down">
					<FaArrowCircleRight />
				</a>
			</div>
		</header>
  );
};

export default Header;
