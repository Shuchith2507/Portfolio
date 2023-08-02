import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;

