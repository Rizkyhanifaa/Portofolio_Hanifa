import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tentang from './components/Tentang';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Bootcamp from './components/Bootcamp';
import Sertifikat from './components/Sertifikat';
import './index.css';

function App() {
  return (
      <div className="App">
      <Navbar />
      <Hero />
      <Tentang />
      <Skills />
      <Projects />
      <Bootcamp />
      <Sertifikat />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
