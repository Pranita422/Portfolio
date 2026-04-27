import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    { name: "HTML", level: "90%", color: "bg-orange-500" },
    { name: "CSS", level: "85%", color: "bg-blue-500" },
    { name: "JavaScript", level: "75%", color: "bg-yellow-400" },
    { name: "React", level: "70%", color: "bg-cyan-400" },
    { name: "Node.js", level: "60%", color: "bg-green-600" },
    { name: "Tailwind CSS", level: "80%", color: "bg-teal-400" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-16 text-center text-gray-800 dark:text-gray-100"
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {skillsList.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={skillVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center transition-shadow hover:shadow-xl hover:shadow-green-500/10"
            >
              <span className="text-xl font-bold text-gray-700 dark:text-gray-200">{skill.name}</span>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-6 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`h-2.5 rounded-full ${skill.color}`} 
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
