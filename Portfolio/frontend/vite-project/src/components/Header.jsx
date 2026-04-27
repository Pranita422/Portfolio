import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-400">
          Pranita
          <span className="text-green-500 dark:text-green-400 font-mono text-sm ml-2 hidden sm:inline">&lt;!--Frontend Developer--&gt;</span>
        </h1>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-gray-600 dark:text-gray-300 font-medium">
              <li><a href="#about" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-green-500 dark:hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-indigo-500" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
