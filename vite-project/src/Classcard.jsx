import { motion } from 'framer-motion';
import './classcard.css';
import { FaYinYang, FaRunning, FaMedal } from 'react-icons/fa';

const ClassCards = () => {
  const classes = [
    {
      icon: <FaYinYang />,
      title: "Hatha Yoga",
      description: "Traditional yoga practice focusing on postures and breathing.",
      benefits: ["Improves flexibility", "Enhances concentration", "Reduces stress"]
    },
    {
      icon: <FaRunning />,
      title: "Vinyasa Flow",
      description: "Dynamic movement synchronized with breath.",
      benefits: ["Builds strength", "Increases stamina", "Improves coordination"]
    },
    {
      icon: <FaMedal />,
      title: "Yin Yoga",
      description: "Slow-paced style with postures held for longer periods.",
      benefits: ["Deepens flexibility", "Calms the mind", "Releases fascia"]
    }
  ];

  return (
    <section className="classes" id="classes">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Classes
      </motion.h2>
      
      <div className="class-cards">
        {classes.map((cls, index) => (
          <motion.div 
            className="card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="card-icon">{cls.icon}</div>
            <h3>{cls.title}</h3>
            <p>{cls.description}</p>
            <ul className="benefits-list">
              {cls.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
            <button className="class-button">Learn More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClassCards;