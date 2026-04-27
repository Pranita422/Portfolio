import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Link } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://portfolio-k3o3.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (data.success) {
        alert("Thanks for your message! It has been sent successfully.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Could not connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-16 text-center text-gray-800 dark:text-gray-100"
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500/10 dark:bg-green-400/5 rounded-full blur-3xl"></div>
          
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow text-gray-800 dark:text-gray-100 placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow text-gray-800 dark:text-gray-100 placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-shadow resize-none text-gray-800 dark:text-gray-100 placeholder-gray-400"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-xl hover:from-green-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : <><Send size={20} /> Send Message</>}
            </motion.button>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center relative z-10">
            <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">Or connect with me on</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:yadavpranita706@email.com" className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-900/30 dark:hover:text-green-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/pranita-yadav-226312296/" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors">
                <Link size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
