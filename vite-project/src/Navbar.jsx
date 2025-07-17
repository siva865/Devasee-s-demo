import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ navOpen, setNavOpen }) => {
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Devansee's Yogahouse</h1>
        
        <nav className="desktop-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <button className="mobile-menu-button" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {navOpen && (
          <motion.nav 
            className="mobile-nav"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', ease: 'easeInOut' }}
          >
            <ul>
              <li><a href="#home" onClick={toggleNav}>Home</a></li>
              <li><a href="#about" onClick={toggleNav}>About</a></li>
              <li><a href="#classes" onClick={toggleNav}>Classes</a></li>
              <li><a href="#contact" onClick={toggleNav}>Contact</a></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;