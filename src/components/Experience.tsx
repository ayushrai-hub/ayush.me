import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, GraduationCap, TrendingUp, Users, Code, Award } from 'lucide-react';

const Experience = () => {
  const metrics = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      value: "3+",
      label: "Years Experience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-500" />,
      value: "15+",
      label: "Technologies",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      value: "5+",
      label: "Projects Delivered",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      value: "3",
      label: "Certifications",
      color: "from-amber-500 to-orange-500"
    }
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
          className="text-3xl md:text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-4"
        >
          Professional Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          Building innovative solutions and driving technical excellence
        </motion.p>

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${metric.color} p-6 rounded-xl shadow-lg text-white text-center`}
            >
              <div className="flex justify-center mb-3">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm opacity-90">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-16 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'React & Frontend', level: 95 },
              { skill: 'Python & Backend', level: 90 },
              { skill: 'AI/ML Development', level: 85 },
              { skill: 'Cloud Platforms', level: 80 },
              { skill: 'DevOps & CI/CD', level: 75 },
              { skill: 'Database Design', level: 85 }
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-gray-600 dark:text-gray-400">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className={`bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <VerticalTimeline>
          {experience.map((item, idx) => (
            <VerticalTimelineElement
              key={idx}
              className={`vertical-timeline-element--${item.type}`}
              date={item.date}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{
                background: item.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(33, 150, 243)',
                color: '#fff',
              }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Experience;
