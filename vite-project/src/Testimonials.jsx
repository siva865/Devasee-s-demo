import { motion } from 'framer-motion';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote: "Devansee's classes transformed my life. I've never felt more balanced and at peace.",
    author: "Sarah M.",
    role: "Student for 3 years"
  },
  {
    quote: "Her attention to alignment and breath work is exceptional. I've improved tremendously under her guidance.",
    author: "Michael T.",
    role: "Student for 1 year"
  },
  {
    quote: "The most welcoming and knowledgeable yoga instructor I've ever worked with. Highly recommend!",
    author: "Priya K.",
    role: "Student for 2 years"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What Our Students Say
      </motion.h2>
      
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p className="quote">{testimonial.quote}</p>
            <div className="author">
              <h4>{testimonial.author}</h4>
              <p>{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;