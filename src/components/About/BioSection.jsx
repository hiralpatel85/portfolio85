import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Heart } from 'lucide-react';

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
      className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 rounded-3xl shadow-soft-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-12 translate-x-12 md:-translate-y-16 md:translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full translate-y-10 -translate-x-10 md:translate-y-12 md:-translate-x-12"></div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <motion.div variants={imageVariants} className="flex-shrink-0 relative">
          <div className="relative">
            <img
              src="/assets/images/profile.jpg"
              alt="Hiral Patel - Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-gradient-to-r from-primary to-accent shadow-soft-md hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-gradient-to-r from-primary to-accent text-white p-2 md:p-3 rounded-full shadow-lg">
              <Code size={16} className="md:w-5 md:h-5" />
            </div>
          </div>
        </motion.div>

        <div className="text-center md:text-left flex-1">
          <motion.div
            className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-6"
            variants={textVariants}
          >
            <User className="text-primary w-5 h-5 md:w-6 md:h-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gradient">
              Who I Am
            </h2>
          </motion.div>

          <motion.p
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            Hello! I'm <strong className="text-primary">Hiral Patel</strong>, a dedicated <strong className="text-gradient">MERN Stack Developer</strong> with a passion for building innovative web solutions. My journey into development started with a fascination for creating dynamic, user-friendly applications that solve real-world problems.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:mb-6"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            I thrive on turning complex problems into elegant solutions and love the process of bringing ideas to life, from concept to deployment. With experience in both front-end and back-end development, I specialize in creating full-stack applications using MongoDB, Express.js, React, and Node.js.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            variants={textVariants}
            transition={{ delay: 0.3 }}
          >
            I'm always eager to learn new technologies and collaborate on exciting projects! When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or staying updated with the latest industry trends.
          </motion.p>

          {/* Quick facts */}
          <motion.div
            className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8 justify-center md:justify-start"
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 md:px-4 md:py-2 rounded-full shadow-soft-sm border border-gray-200 dark:border-gray-600">
              <Heart className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium">Passionate Developer</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 md:px-4 md:py-2 rounded-full shadow-soft-sm border border-gray-200 dark:border-gray-600">
              <Code className="text-primary w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium">MERN Stack Expert</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default BioSection;