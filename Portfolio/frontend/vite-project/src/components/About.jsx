import React from 'react';
import { motion } from 'framer-motion';
import portfolioImg from '../assets/portfolio.png';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      {/* Colorful background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 dark:bg-green-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-300 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 text-center text-gray-800 dark:text-gray-100"
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-48 h-48 md:w-72 md:h-72 shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-teal-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={portfolioImg} 
              alt="Profile" 
              className="relative w-full h-full object-cover rounded-full shadow-md border-4 border-white dark:border-gray-800 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-5 text-lg"
          >
            <p>
              I'm currently diving into the world of front-end web development and am passionate about crafting engaging and accessible web experiences. My foundational skills include HTML, CSS, and JavaScript. 
            </p>
            <p>
              I'm particularly fascinated by the intersection of design and functionality, and I'm always eager to learn new techniques for creating seamless user experiences. I'm eager to apply my learning to real-world projects and continue growing as a developer.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500 font-bold mt-6 tracking-wide">
              #HTML #CSS #JavaScript #React #Tailwind
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
