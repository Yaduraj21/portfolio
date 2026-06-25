import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Add smooth scrolling to html
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <ParticleBackground />
      
      {/* Scroll progress bar */}
      <motion.div 
        id="scroll-prog" 
        role="progressbar" 
        aria-hidden="true"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <div className="brush-divider" role="separator" aria-hidden="true"></div>
        <About />
        <div className="brush-divider" role="separator" aria-hidden="true"></div>
        <Skills />
        <div className="brush-divider" role="separator" aria-hidden="true"></div>
        <Projects />
        <div className="brush-divider" role="separator" aria-hidden="true"></div>
        <Achievements />
        <div className="brush-divider" role="separator" aria-hidden="true"></div>
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
