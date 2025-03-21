import React, { Suspense, lazy } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Fallback from "./components/fallback/Fallback.js";

// Lazy load components
const Header = lazy(() => import("./components/header/Header.js"));
const Nav = lazy(() => import("./components/nav/Nav.js"));
const About = lazy(() => import("./components/about/About.js"));
const Experience = lazy(() => import("./components/experience/Experience.js"));
const Services = lazy(() => import("./components/services/Services.js"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio.js"));
const Contact = lazy(() => import("./components/contact/Contact.js"));
const Footer = lazy(() => import("./components/footer/Footer.js"));

export default function App() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>
					Yonas Alem - React & Fullstack Developer | Available for
					Hire
				</title>
				<meta
					name="description"
					content="Hire Yonas Alem - Professional React and Fullstack Developer based in Addis Ababa, Ethiopia. Specializing in React, Node.js, PHP, Golang, and AWS. Available for remote work and outsourcing projects."
				/>
				<meta
					name="keywords"
					content="Yonas Alem, React Developer, Fullstack Developer, Backend Developer, Upwork Developer, Outsourcing Developers, Hire Developer, Web Developer, Addis Ababa, Ethiopia, Remote Developer"
				/>

				{/* Open Graph / Social Media Meta Tags */}
				<meta
					property="og:title"
					content="Yonas Alem - React & Fullstack Developer | Available for Hire"
				/>
				<meta
					property="og:description"
					content="Professional React and Fullstack Developer available for remote work and outsourcing projects. Hire Yonas Alem for high-quality web development services."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://yonasalem.dev" />
				<meta
					property="og:image"
					content="https://yonasalem.dev/preview-image.jpg"
				/>

				{/* Additional SEO Meta Tags */}
				<meta name="robots" content="index, follow" />
				<meta name="language" content="English" />
				<meta name="author" content="Yonas Alem" />
				<link rel="canonical" href="https://yonasalem.dev" />

				{/* Structured Data */}
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org/",
						"@type": "Person",
						name: "Yonas Alem",
						jobTitle: "React & Fullstack Developer",
						url: "https://yonasalem.dev",
						sameAs: [
							"https://linkedin.com/in/yonasalem21",
							"https://github.com/Yonas21",
							"https://www.upwork.com/freelancers/~01682245c0c04d20d0",
						],
						skills: ["React","React-Native", "Node.js", "AWS", "PHP", "Python", "Golang"],
						availableForHire: true,
						location: {
							"@type": "Addis Ababa, Ethiopia",
							address: {
								"@type": "Addis Ababa, Ethiopia, Remote",
								addressLocality: "Addis Ababa",
								addressRegion: "Ethiopia",
							},
						},
					})}
				</script>
			</Helmet>

			<Suspense fallback={<Fallback />}>
				<Header />
				<Nav />
				<About />
				<Experience />
				<Services />
				<Portfolio />
				<Contact />
				<Footer />
			</Suspense>
		</HelmetProvider>
	);
}
