import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function SocialLinksSection() {
  const socialLinks = [
    { name: 'Email', icon: Mail, url: 'mailto:hirpatel2314@gmail.com' },
    { name: 'Phone', icon: Phone, url: 'tel:+918849662996' },
    { name: 'Location', icon: MapPin, url: '#', text: 'Ahmedabad, Gujarat' },
    // Add your GitHub and LinkedIn URLs when available
    // { name: 'GitHub', icon: Github, url: 'https://github.com/yourusername' },
    // { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/yourusername' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft-lg text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6">
        Get In Touch
      </h2>
      <motion.div
        className="flex justify-center flex-wrap gap-6"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target={link.url.startsWith('http') ? "_blank" : undefined}
            rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary group"
            variants={itemVariants}
            aria-label={`Link to my ${link.name}`}
          >
            <link.icon size={48} className="mb-2 group-hover:scale-110 transition-transform" />
            <span className="font-medium">{link.name}</span>
            {link.text && <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">{link.text}</span>}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default SocialLinksSection;