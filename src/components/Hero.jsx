import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from '@tsparticles/react';

const Hero = () => {
  const [honor, setHonor] = useState(0);

  useEffect(() => {
    let n = 0;
    const target = 78;
    const interval = setInterval(() => {
      n = Math.min(n + 1, target);
      setHonor(n);
      if (n >= target) clearInterval(interval);
    }, 26);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" aria-labelledby="hero-name">
      {/* Particles will be rendered globally in App.jsx so they float everywhere like before, or we can isolate them here if the user specifically asked for "in the hero" */}

      <div className="hero-wrap">
        {/* Left: text content */}
        <div className="hero-content">
          <motion.p
            className="hero-stamp"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ambitious · Persistent · Curious
          </motion.p>

          <motion.h1
            className="hero-name"
            id="hero-name"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>Yaduraj Singh</span>
            <span className="name-gold">Yadav</span>
            <span className="name-role">AI / ML Engineer, Data Analyst & Full-Stack Developer</span>
          </motion.h1>

          <motion.div
            className="hero-typewriter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            aria-live="polite"
          >
            <TypeAnimation
              sequence={[
                'AI / ML Engineer focused on real-world machine learning systems.',
                2600,
                'Data Analyst focused on data-driven insights and decision-making.',
                2600,
                'Full-Stack Developer building scalable web applications.',
                2600,
                'SIH 2025 National Finalist — ML for power grid forecasting.',
                2600,
                'E-Summit Shark Tank 2026 Winner with ArogyaConnect.',
                2600,
                'Open to internships, collaborations, and exciting projects.',
                2600
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="hero-tag highlight">B.Tech CS · BIT Durg</span>
            <span className="hero-tag highlight">AI / ML</span>
            <span className="hero-tag highlight">Data Analyst</span>
            <span className="hero-tag highlight">Full-Stack Dev</span>
            <span className="hero-tag">SIH 2025 Finalist</span>
            <span className="hero-tag">Open to Work</span>
          </motion.div>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a href="#projects" className="btn-primary" id="btn-view-projects">⚔ View Projects</a>
            <a href="#contact" className="btn-secondary" id="btn-contact">✉ Get in Touch</a>
            <a href="YADURAJ_SINGH_YADAV_Resume.pdf" download className="btn-resume" id="btn-resume">
              ↓ Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right: profile photo */}
        <motion.div
          className="hero-emblem-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, type: 'spring' }}
        >
          <div className="photo-frame" aria-label="Profile photo of Yaduraj Singh Yadav">
            <div className="photo-ring photo-ring-outer" aria-hidden="true"></div>
            <div className="photo-ring photo-ring-inner" aria-hidden="true"></div>
            <div className="photo-circle">
              <img
                src="YOUR_PHOTO_FILENAME.jpg"
                alt="Yaduraj Singh Yadav"
                className="photo-img"
                id="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('photo-placeholder');
                }}
              />
              <div className="photo-monogram" aria-hidden="true">Y</div>
            </div>
            <span className="photo-orn photo-orn-tl" aria-hidden="true"></span>
            <span className="photo-orn photo-orn-tr" aria-hidden="true"></span>
            <span className="photo-orn photo-orn-bl" aria-hidden="true"></span>
            <span className="photo-orn photo-orn-br" aria-hidden="true"></span>
          </div>

          <p className="emblem-caption">
            <span>Status</span> · Available for Hire
          </p>

          <div className="honor-wrap">
            <div className="honor-label">
              <span>Experience</span>
              <span id="honor-num">{honor}%</span>
            </div>
            <div className="honor-bar fill" id="honor-bar" style={{ width: `${honor}%` }}></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
