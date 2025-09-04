import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-gray-800 py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              With over 4 years of experience, I bring a unique blend of skills and knowledge to every project.
            </p>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              I hold dual education credentials: a B.Tech in Computer Science and a BS in Data Science from IIT Madras.
            </p>
            <p className="font-inter text-gray-700 dark:text-gray-300">
              My key strengths lie in AI/ML, Full-Stack Development, and Leadership.
            </p>
          </div>
          <div>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              I am passionate about leveraging technology to solve complex problems and create innovative solutions.
            </p>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              My experience spans various domains, from optimizing LLMs to building scalable web applications.
            </p>
            <p className="font-inter text-gray-700 dark:text-gray-300">
              I am always eager to learn and explore new technologies to stay at the forefront of the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
