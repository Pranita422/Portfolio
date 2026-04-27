import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "Brief description of project 1.",
      link: "#",
      image: "project1.png"
    },
    {
      title: "Project Title 2",
      description: "Brief description of project 2.",
      link: "#",
      image: "project2.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-16 text-center text-gray-800 dark:text-gray-100"
        >
          My Projects
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group"
            >
              <div className="h-64 bg-gray-200 dark:bg-gray-700 w-full relative overflow-hidden">
                {/* Fallback for image if it doesn't exist */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <span className="text-sm border border-dashed border-gray-400 p-4 rounded">[Image: {project.image}]</span>
                </div>
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                   <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-green-400 transition-colors"
                  >
                    View Live <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 flex-1 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
