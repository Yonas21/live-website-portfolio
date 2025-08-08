import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Metrics from './components/Metrics';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Logos from './components/Logos';
import Endorsements from './components/Endorsements';
import ScrollProgress from './components/ScrollProgress';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Metrics />
      <Logos />
      <Experience />
      <Endorsements />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
