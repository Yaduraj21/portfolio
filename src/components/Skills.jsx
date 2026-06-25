import { motion } from 'framer-motion';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const skillsData = [
    {
      icon: "⟨/⟩",
      category: "Programming Languages",
      pills: ["Python", "C", "C++", "SQL", "JavaScript"]
    },
    {
      icon: "🌿",
      category: "Web Development",
      pills: ["HTML", "CSS", "React", "Node.js", "Flask", "FastAPI", "Streamlit"]
    },
    {
      icon: "🧠",
      category: "AI, ML & Data Science",
      pills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "PyTorch", "MediaPipe", "OpenCV", "LangChain"]
    },
    {
      icon: "⚒",
      category: "Developer Tools",
      pills: ["VS Code", "MySQL", "Google Colab", "Jupyter", "Tableau", "Git", "Ollama"]
    },
    {
      icon: "🎴",
      category: "Design & Visualization",
      pills: ["Adobe Illustrator", "Canva"]
    }
  ];

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <p className="section-kana">Technical Skills</p>
        <motion.h2
          className="section-title"
          id="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical <span className="accent">Skills</span>
        </motion.h2>

        <motion.div
          className="skill-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((skill, idx) => (
            <motion.div key={idx} className="parchment-card skill-card" variants={item}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-category">{skill.category}</div>
              <div className="skill-pills">
                {skill.pills.map((pill, pIdx) => (
                  <span key={pIdx} className="pill">{pill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
