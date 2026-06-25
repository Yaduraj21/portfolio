import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <p className="section-kana">Background</p>
        <motion.h2
          className="section-title"
          id="about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          About <span className="accent">Me</span>
        </motion.h2>

        <div className="about-grid">

          {/* Bio */}
          <motion.div
            className="parchment-card about-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="ornament orn-tl"></div>
            <div className="ornament orn-tr"></div>
            <div className="ornament orn-bl"></div>
            <div className="ornament orn-br"></div>

            <p>
              I am a <span className="hl-gold">Computer Science student at BIT Durg</span>, passionate about building
              AI-powered products that solve real-world problems. My focus areas are <span className="hl-jade">Machine
                Learning, Deep Learning, and Full-Stack Web Development</span>.
            </p>
            <p>
              I built <span className="hl-gold">ArogyaConnect</span> — a MERN-stack healthcare platform with PyTorch-based
              diagnostics and Three.js visualizations — designed to improve medical access in underserved tier-3 Indian
              cities. The project won the <span className="hl-gold">E-Summit Shark Tank 2026</span> competition.
            </p>
            <p>
              At the national level, I reached the finals of <span className="hl-jade">Smart India Hackathon 2025</span> with
              an ML pipeline for power grid demand forecasting. I am actively seeking internship and project collaboration
              opportunities in AI, full-stack development, or product engineering.
            </p>
          </motion.div>

          {/* Info sheet */}
          <motion.div
            className="about-sheet"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sheet-header">✦ Quick Profile</div>
            <div className="sheet-row">
              <span className="sheet-key">Name</span>
              <span className="sheet-val">Yaduraj Singh Yadav</span>
            </div>
            <div className="sheet-row">
              <span className="sheet-key">Education</span>
              <span className="sheet-val">B.Tech CS, BIT Durg</span>
            </div>
            <div className="sheet-row">
              <span className="sheet-key">Year</span>
              <span className="sheet-val">4th Year</span>
            </div>
            <div className="sheet-row">
              <span className="sheet-key">Specialization</span>
              <span className="sheet-val">AI / ML, Data Science & Full-Stack</span>
            </div>
            <div className="sheet-row">
              <span className="sheet-key">Award</span>
              <span className="sheet-val">🏆 E-Summit Shark Tank '26</span>
            </div>
            <div className="sheet-row">
              <span className="sheet-key">Recognition</span>
              <span className="sheet-val">🥈 SIH 2025 Finalist</span>
            </div>
            <div className="sheet-row">
              <span className="sheet-key">Leadership</span>
              <span className="sheet-val">Treasurer & Tech Head of "Public Speaking Club"</span>
            </div>
            <div className="sheet-row">
              <span className="sheet-key">Status</span>
              <span className="sheet-val">
                <span className="status-open">Open to Opportunities</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
