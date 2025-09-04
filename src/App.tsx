import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
