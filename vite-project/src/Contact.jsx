import { motion } from 'framer-motion';
import { useState } from 'react';
import './contact.css';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>
      
      <div className="contact-container">
        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            <FaPaperPlane /> Send Message
          </button>
        </motion.form>
        
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>123 Yoga Street, Serene City</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>devansee@yogahouse.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;