import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects as projectsData } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projectsData.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  const filtered = useMemo(() => {
    return activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

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
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-sm rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue transition-colors ${
                activeCategory === cat
                  ? 'bg-electric-blue text-gray-900 border-electric-blue'
                  : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filtered.map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-inter text-lg font-semibold text-gray-700 dark:text-gray-300">{project.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200">{project.category}</span>
              </div>
              <p className="font-inter text-gray-700 dark:text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="text-electric-blue hover:text-blue-500 transition duration-300 mt-4 inline-block"
              >
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
