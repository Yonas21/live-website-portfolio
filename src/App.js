import React, { Suspense, lazy } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import Fallback from './components/fallback/Fallback.js'

// Lazy load components
const Header = lazy(() => import('./components/header/Header.js'))
const Nav = lazy(() => import('./components/nav/Nav.js'))
const About = lazy(() => import('./components/about/About.js'))
const Experience = lazy(() => import('./components/experience/Experience.js'))
const Services = lazy(() => import('./components/services/Services.js'))
const Portfolio = lazy(() => import('./components/portfolio/Portfolio.js'))
const Contact = lazy(() => import('./components/contact/Contact.js'))
const Footer = lazy(() => import('./components/footer/Footer.js'))

export default function App() {
  return (
		<HelmetProvider>
			<Helmet>
				<title>Yonas Alem  - Portfolio & Professional Work</title>
				<meta
					name="description"
					content="Professional portfolio showcasing web development projects, services, and expertise in React, React-Native, Node.js, PHP, AWS. Contact for collaboration opportunities."
				/>
				<meta
					name="keywords"
					content="web developer, portfolio, Addis Ababa, Ethiopia, Remote, React, Typescript, Node.js, PHP, Golang, AWS, Bash"
				/>

				{/* Open Graph / Social Media Meta Tags */}
				<meta
					property="og:title"
					content="Yonas Alem - Professional Portfolio"
				/>
				<meta
					property="og:description"
					content="Web development portfolio showcasing innovative projects and professional services."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://yonasalem.tech" />
				<meta
					property="og:image"
					content="https://yourwebsite.com/preview-image.jpg"
				/>

				{/* Additional SEO Meta Tags */}
				<meta name="robots" content="index, follow" />
				<meta name="language" content="English" />
				<meta name="author" content="Yonas Alem" />
				<link rel="canonical" href="https://yonasalem.tech" />
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
