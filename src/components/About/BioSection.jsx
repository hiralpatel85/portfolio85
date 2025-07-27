import React from 'react';
import { motion } from 'framer-motion';

function BioSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row items-center md:items-start gap-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={imageVariants} className="flex-shrink-0">
        <img
          src="/assets/images/profile.jpg" // Ensure you have your profile image here
          alt="Your Name - Profile"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-soft-md"
        />
      </motion.div>
      <div className="text-center md:text-left">
        <motion.h2
          className="text-3xl font-bold text-primary mb-4"
          variants={textVariants}
        >
          Who I Am
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          variants={textVariants}
          transition={{ delay: 0.1 }}
        >
          Hello! I'm [Your Name], a dedicated **Full-Stack Developer** with X years of experience crafting robust and user-friendly web applications. My journey into development started with [brief, engaging story – e.g., "a fascination for how interactive websites were built," or "a desire to solve real-world problems through code"].
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
          I thrive on turning complex problems into elegant solutions and love the process of bringing ideas to life, from concept to deployment. When I'm not coding, you can find me [mention a hobby or interest, e.g., "exploring new hiking trails," "experimenting with new recipes," or "reading sci-fi novels"]. I'm always eager to learn new technologies and collaborate on exciting projects!
        </motion.p>
      </div>
    </motion.section>
  );
}

export default BioSection;