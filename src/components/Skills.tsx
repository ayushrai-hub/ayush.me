import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  // Group skills by category
  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.keys(categorizedSkills);

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
          className="text-3xl md:text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white border-b pb-2">
                {category}
              </h3>
              <div className="space-y-3">
                {categorizedSkills[category].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-inter text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <div className="ml-4 flex items-center">
                      <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: catIndex * 0.1 + index * 0.05 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 w-8 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
