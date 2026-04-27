import React from 'react';
import { motion } from 'framer-motion';
import heartImg from '../assets/heart.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-10 text-center text-sm transition-colors duration-300 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 text-gray-500"
        >
          Copyright &copy; {new Date().getFullYear()} Pranita. All rights reserved.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 font-medium"
        >
          Made with 
          <motion.img 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            src={heartImg} 
            alt="love" 
            className="w-5 h-5 inline-block" 
          /> 
          by Pranita
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
