import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Section from './components/Section';

// Lazy load components for performance
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Experience = React.lazy(() => import('./components/Experience'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Profiles = React.lazy(() => import('./components/Profiles'));
const Contact = React.lazy(() => import('./components/Contact'));

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<LoadingSpinner />}>
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
                  <Section id="profiles">
                    <Profiles />
                  </Section>
                  <Section id="contact">
                    <Contact />
                  </Section>
                </Suspense>
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
