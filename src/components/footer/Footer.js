import React from 'react'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import './footer.css'
import { socials } from '../../models'

const Footer = () => {
  return (
		<footer id="footer">
			<a href={socials.github} className="footer__logo">
				Yon
			</a>

			<ul className="permalinks">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a
					href={socials.facebook}
					target="_blank"
					rel="noreferrer"
				>
					<ImFacebook className="footer-icons" />
				</a>
				<a
					href={socials.instagram}
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram className="footer-icons" />
				</a>
			</div>

			<div className="footer__copyright">
				<small>
					&copy; {new Date().getFullYear()} Yonas Alem. All rights
					reserved.
				</small>
			</div>
		</footer>
  );
}

export default Footer