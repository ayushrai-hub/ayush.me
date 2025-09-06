import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, FileDown, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const CountUp: React.FC<{ to: number; duration?: number }> = ({ to, duration = 1200 }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min(1, (ts - start) / duration);
      setValue(Math.floor(progress * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span>{value}</span>;
};

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 py-20 min-h-screen flex items-center justify-center"
    >
      {/* CSS-Based Particle Animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-electric-blue/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-electric-blue/10 rounded-lg"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              rotate: [0, 90, 180, 270, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${20 + i * 10}%`,
              top: `${10 + i * 8}%`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto text-center">
        <div className="mb-4 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-50/70 dark:bg-emerald-500/10 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to opportunities
          </span>
        </div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-poppins font-bold mb-4"
        >
          Ayush Rai
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-2xl md:text-4xl font-inter font-semibold text-electric-blue mb-6"
        >
          <TypeAnimation
            sequence={[
              'SDE - AI Engineer',
              1000,
              'Generative AI Specialist',
              1000,
              'Full-Stack Developer',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-md md:text-lg font-inter mb-8"
        >
          Polymath with Strategic Approach
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-10 flex items-center justify-center gap-3"
        >
          <a
            href="https://drive.google.com/file/d/1oJlYWL4UAavvSwbjwwptoGWizPXjYtAn/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-electric-blue text-gray-900 px-4 py-2 font-medium shadow hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
          >
            <FileDown size={18} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center justify-center space-x-6 mb-8"
        >
          <a href="mailto:ayushrai0211@gmail.com" className="hover:text-electric-blue transition duration-300">
            ayushrai0211@gmail.com
          </a>
          <span>|</span>
          <a href="tel:+917440567944" className="hover:text-electric-blue transition duration-300">
            +91-7440567944
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mb-10 grid grid-cols-3 max-w-md mx-auto gap-6 text-center"
        >
          <div>
            <div className="text-3xl font-bold"><CountUp to={25} />+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold"><CountUp to={3} />+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Years Exp</div>
          </div>
          <div>
            <div className="text-3xl font-bold"><CountUp to={500} />+</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Commits</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex items-center justify-center space-x-4"
        >
          <a href="https://github.com/ayushrai-hub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300" aria-label="GitHub">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/ayushrai02" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300" aria-label="LinkedIn">
            <Linkedin size={32} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
