import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Section from './components/Section';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section id="hero">
                  <Hero />
                </Section>
                <Section id="about">
                  <About />
                </Section>
                <Section id="experience">
                  <Experience />
                </Section>
                <Section id="skills">
                  <Skills />
                </Section>
                <Section id="projects">
                  <Projects />
                </Section>
                <Section id="certifications">
                  <Certifications />
                </Section>
                <Section id="contact">
                  <Contact />
                </Section>
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
