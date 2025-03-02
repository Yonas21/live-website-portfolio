import './footer.css'
import { contact, socials } from '../../models'
import { FaLink } from 'react-icons/fa';

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
				{/* <a
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
				<a
					href={contact.whatsapp}
					target="_blank"
					rel="noreferrer"
				>
					<FaWhatsapp className="footer-icons" />
				</a>
				
				<a
					href={socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin className="footer-icons" />
				</a> */}
				<a
					href={contact.linktree}
					target="_blank"
					rel="noreferrer"
				>
					<FaLink className="footer-icons" />
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