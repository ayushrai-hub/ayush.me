import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto text-center">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex items-center justify-center space-x-4"
        >
          <a href="https://github.com/ayushrai-hub" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/ayushrai02" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
            <Linkedin size={32} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
