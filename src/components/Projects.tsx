import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      name: 'AI Chatbot',
      description: 'A chatbot powered by AI to assist users with their queries.',
      link: '#',
    },
    {
      name: 'E-commerce Platform',
      description: 'A full-fledged e-commerce platform with user authentication and payment gateway.',
      link: '#',
    },
    {
      name: 'Data Analysis Tool',
      description: 'A tool to analyze large datasets and generate insights.',
      link: '#',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-900 py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-inter text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{project.name}</h3>
              <p className="font-inter text-gray-700 dark:text-gray-300">{project.description}</p>
              <a href={project.link} className="text-electric-blue hover:text-blue-500 transition duration-300 mt-4 inline-block">
                Learn More
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
