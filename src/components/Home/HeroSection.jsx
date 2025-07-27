import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button'; // Assuming you've added this via shadcn/ui

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.section
      className="text-center max-w-4xl mx-auto py-12 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-text-light dark:text-text-dark leading-tight mb-4 drop-shadow-sm"
        variants={itemVariants}
      >
        Hi, I'm <span className="text-primary">Your Name</span>.
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        A passionate **Full-Stack Developer** building modern, responsive, and performant web applications with a focus on user experience.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link to="/portfolio">
          <Button className="bg-primary text-white hover:bg-primary-hover px-8 py-3 rounded-lg text-lg font-semibold shadow-soft-md transition-all duration-200 group">
            View My Work
            <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 px-8 py-3 rounded-lg text-lg font-semibold shadow-soft-sm transition-all duration-200">
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection;