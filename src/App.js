import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Publication from './components/Publication';
import Achievement from './components/Achievement';
import Certificate from './components/Certificate';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Achievement />
      <Publication />
      <Certificate />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

