import { motion } from 'framer-motion';

const Achievements = () => {
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

  const achievementsData = [
    {
      icon: "🏆",
      label: "Competition — 1st Place",
      title: "E-Summit Shark Tank 2026 Winner",
      desc: "Won the E-Summit Shark Tank 2.0 competition with ArogyaConnect — a healthcare platform addressing accessibility gaps in underserved Indian cities. Pitched to industry investors and emerged as the top team."
    },
    {
      icon: "🥈",
      label: "National Hackathon — Finalist",
      title: "Smart India Hackathon 2025 Finalist",
      desc: "Selected as a national finalist in SIH 2025 for developing an ML-based power grid demand forecasting system — one of India's most competitive engineering challenges with thousands of participating teams."
    },
    {
      icon: "🎙️",
      label: "Leadership Position",
      title: "Treasurer & Technical Head",
      desc: "Served as Treasurer and Technical Head of the Public Speaking Club at BIT Durg — managing events, overseeing technical initiatives, and mentoring members in communication and presentation skills."
    }
  ];

  return (
    <section id="achievements" aria-labelledby="achievements-heading">
      <div className="container">
        <p className="section-kana">Achievements</p>
        <motion.h2
          className="section-title"
          id="achievements-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Honors & <span className="accent">Recognition</span>
        </motion.h2>

        <motion.div
          className="achievements-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievementsData.map((ach, idx) => (
            <motion.div key={idx} className="parchment-card achievement-card" variants={item}>
              <div className="achievement-icon">{ach.icon}</div>
              <div>
                <div className="achievement-label">{ach.label}</div>
                <div className="achievement-title">{ach.title}</div>
                <p className="achievement-desc">{ach.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
