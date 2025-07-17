import { motion } from 'framer-motion';
import './About.css';
import { FaLeaf, FaHeart, FaPeace } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Devansee
      </motion.h2>
      
      <div className="about-content">
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Certified yoga instructor with 10+ years of experience helping students achieve mindfulness and physical wellness.
            Devansee specializes in Hatha, Vinyasa, and Yin yoga styles, creating personalized practices for each student.
          </p>
          <p>
            Her approach combines traditional techniques with modern understanding of anatomy and physiology,
            ensuring safe and effective practice for all levels.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-features"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="feature">
            <FaLeaf className="feature-icon" />
            <h3>Holistic Approach</h3>
            <p>Mind, body & spirit connection</p>
          </div>
          <div className="feature">
            <FaHeart className="feature-icon" />
            <h3>Personalized</h3>
            <p>Tailored to your needs</p>
          </div>
          <div className="feature">
            <FaPeace className="feature-icon" />
            <h3>Peaceful Space</h3>
            <p>Serene environment</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;