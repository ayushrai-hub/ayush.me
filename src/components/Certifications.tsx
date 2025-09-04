import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Certified Machine Learning Specialist',
      organization: 'Amazon Web Services',
      date: '2023',
    },
    {
      name: 'Google Cloud Certified Professional Data Engineer',
      organization: 'Google Cloud',
      date: '2022',
    },
    {
      name: 'Microsoft Certified Azure AI Engineer',
      organization: 'Microsoft',
      date: '2021',
    },
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
          Certifications
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {certifications.map((certification, index) => (
            <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-inter text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{certification.name}</h3>
              <p className="font-inter text-gray-700 dark:text-gray-300">{certification.organization}</p>
              <p className="font-inter text-gray-700 dark:text-gray-300">{certification.date}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certifications;
