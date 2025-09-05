import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../data/about';
import { Book, Heart, Users, Globe, Activity, Zap, BookOpen, Dumbbell, GraduationCap } from 'lucide-react';

const About = () => {
  const iconMap = {
    heart: <Heart className="w-5 h-5 text-rose-500" />,
    users: <Users className="w-5 h-5 text-blue-500" />,
    book: <Book className="w-5 h-5 text-emerald-500" />,
    globe: <Globe className="w-5 h-5 text-cyan-500" />,
    activity: <Activity className="w-5 h-5 text-amber-500" />,
    zap: <Zap className="w-5 h-5 text-purple-500" />,
    'book-open': <BookOpen className="w-5 h-5 text-indigo-500" />,
    dumbbell: <Dumbbell className="w-5 h-5 text-red-500" />
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 text-center mb-16"
      >
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            AR
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {aboutData.hero.headline}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {aboutData.hero.tagline}
        </p>
      </motion.section>

      {/* Bio Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            {aboutData.bio.map((para, i) => (
              <p key={i} className="text-lg">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Defines Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(aboutData.highlights).map(([key, items]) => (
              <motion.div 
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 capitalize">{key}</h3>
                <ul className="space-y-3">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 mt-0.5">
                        {iconMap[item.icon] || <span className="w-5 h-5" />}
                      </span>
                      <span>
                        {item.name}
                        {item.level && (
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-1.5 rounded-full" 
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {aboutData.education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
