import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Logos from './components/Logos';
import Endorsements from './components/Endorsements';
import ScrollProgress from './components/ScrollProgress';
import HowIWork from './components/HowIWork';
import CaseStudies from './components/CaseStudies';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pb-16 md:pb-0">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Metrics />
      <Logos />
      <Experience />
      <Endorsements />
      <div id="how-i-work">
        <HowIWork />
      </div>
      <div id="case-studies">
        <CaseStudies />
      </div>
      <Projects />
      <Contact />
      <Footer />
      <BottomNav />
    </main>
  );
}
