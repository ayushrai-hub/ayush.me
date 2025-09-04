import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure',
    'GCP',
    'Python',
    'Machine Learning',
    'Deep Learning',
  ];

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
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 text-center">
              <span className="font-inter text-gray-700 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
