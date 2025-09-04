import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              Feel free to reach out to me for any questions or opportunities.
            </p>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              I am open to new collaborations and projects.
            </p>
          </div>
          <div>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              Email: ayushrai0211@gmail.com
            </p>
            <p className="font-inter text-gray-700 dark:text-gray-300 mb-4">
              Phone: +91-7440567944
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
