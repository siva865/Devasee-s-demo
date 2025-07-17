import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import ClassCards from './Classcard';
import Testimonials from './Testimonials';
import Schedule from './Schedule';
import ContactForm from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="app">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      
      <main>
        <Hero />
        <About />
        <ClassCards />
        <Testimonials />
        <Schedule />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;