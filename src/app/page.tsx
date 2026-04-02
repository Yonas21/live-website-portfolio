import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import HowIWork from './components/HowIWork';
import CaseStudies from './components/CaseStudies';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <main id="content" className="flex min-h-screen flex-col pb-16 md:pb-0">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Metrics />
      <Experience />
      <CaseStudies />
      <HowIWork />
      <Contact />
      <Footer />
      <BottomNav />
      <BackToTop />
    </main>
  );
}
