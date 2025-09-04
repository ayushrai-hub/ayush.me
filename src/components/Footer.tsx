import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Ayush Rai. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:ayushrai0211@gmail.com"
            className="hover:text-electric-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue rounded"
          >
            Email
          </a>
          <a
            href="https://github.com/ayushrai-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-electric-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue rounded"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ayushrai02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-electric-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue rounded"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
