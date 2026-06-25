import { motion } from 'framer-motion';

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  const projectsData = [
    {
      category: "Security / ML",
      rankClass: "rank-rare",
      rankLabel: "Backend",
      title: "Auth Kavatch",
      desc: <>An anomaly-based intrusion detection engine that applies the <strong>Isolation Forest</strong> algorithm to identify unusual access patterns in real time. Built with FastAPI and Node.js, it integrates seamlessly with existing authentication services and flags threats with high precision and low latency.</>,
      tech: ["Python", "Scikit-learn", "FastAPI", "Node.js", "Isolation Forest"]
    },
    {
      category: "Healthcare / Full-Stack",
      rankClass: "rank-legendary",
      rankLabel: "Award Winner",
      title: "ArogyaConnect",
      award: "🏆 E-Summit Shark Tank 2026 — 1st Place",
      desc: <>A full-stack healthcare platform built on the MERN stack, designed to expand medical access in tier-3 Indian cities. Features a <strong>PyTorch-powered AI diagnostic module</strong>, real-time appointment management, and immersive Three.js data visualizations for health trends.</>,
      tech: ["React", "Node.js", "MongoDB", "PyTorch", "Three.js"]
    },
    {
      category: "Computer Vision",
      rankClass: "rank-epic",
      rankLabel: "Real-Time",
      title: "Driver Drowsiness Detection",
      desc: <>A real-time computer vision system that monitors facial landmarks to detect driver fatigue and microsleep. Uses <strong>MediaPipe's face mesh</strong> to track eye aspect ratio and blink frequency, triggering audio alerts when drowsiness is detected — sub-100ms latency on standard hardware.</>,
      tech: ["Python", "MediaPipe", "OpenCV", "Computer Vision"]
    },
    {
      category: "Web Application",
      rankClass: "rank-rare",
      rankLabel: "Full-Stack",
      title: "PG Life",
      desc: <>A multi-city paying guest accommodation discovery platform covering major Indian cities. Includes advanced search and filter, user authentication, property listings management, and a responsive UI — all backed by a <strong>Flask + PHP + MySQL</strong> architecture.</>,
      tech: ["Flask", "PHP", "MySQL", "Bootstrap"]
    },
    {
      category: "Generative AI",
      rankClass: "rank-epic",
      rankLabel: "LLM",
      title: "Code Generator AI",
      desc: <>A privacy-first, locally-hosted coding assistant that converts natural language prompts into functional code. Built with <strong>LangChain for prompt orchestration</strong> and Ollama to run LLMs entirely on-device — no API costs, no data exposure. Streamlit frontend for fast developer interaction.</>,
      tech: ["LangChain", "Streamlit", "Ollama", "Python"]
    }
  ];

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <p className="section-kana">武勲 · Projects</p>
        <motion.h2 
          className="section-title" 
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="accent">Projects</span>
        </motion.h2>

        <motion.div 
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projectsData.map((project, idx) => (
            <motion.article key={idx} className="project-card parchment-card" variants={item}>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className={`rank-badge ${project.rankClass}`}>{project.rankLabel}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              {project.award && <div className="project-award">{project.award}</div>}
              <p className="project-desc">{project.desc}</p>
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-cta">View Project Details</div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
