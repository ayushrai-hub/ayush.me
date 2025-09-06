import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { projects as projectsData, type Project } from '../data/projects';

const ProjectCard = ({ project, index, expandedProject, setExpandedProject }: {
  project: Project;
  index: number;
  expandedProject: string | null;
  setExpandedProject: (name: string | null) => void;
}) => {
  const isExpanded = expandedProject === project.name;
  const toggleExpanded = () => setExpandedProject(isExpanded ? null : project.name);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="flex items-start justify-between mb-4">
        <header>
          <h3
            className="font-inter text-xl font-semibold text-gray-800 dark:text-white mb-1"
            itemProp="name"
          >
            {project.name}
          </h3>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {project.category}
          </span>
        </header>
      </div>

      <p
        className="font-inter text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4"
        itemProp="description"
      >
        {project.shortDescription || project.description}
      </p>

      {project.techStack && project.techStack.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-xs font-medium rounded-full border border-electric-blue/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                +{project.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3">
          {project.liveDemo && (
            <motion.a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-electric-blue hover:text-blue-600 transition-colors duration-200"
              aria-label={`View live demo of ${project.name}`}
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Demo</span>
            </motion.a>
          )}
          {project.sourceCode && (
            <motion.a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label={`View source code of ${project.name}`}
            >
              <Github size={16} />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
          )}
        </div>
      </div>

      {(project.detailedDescription || project.description) && (
        <motion.button
          onClick={toggleExpanded}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 text-electric-blue hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
          aria-expanded={isExpanded}
          aria-controls={`project-details-${index}`}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
        </motion.button>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
            id={`project-details-${index}`}
          >
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="font-inter text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {project.detailedDescription || project.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              expandedProject={expandedProject}
              setExpandedProject={setExpandedProject}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
