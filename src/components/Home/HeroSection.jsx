import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Smartphone, Zap } from 'lucide-react';
import { Button } from '../ui/button.tsx';

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  const floatingIcons = [
    { icon: Code, delay: 0 },
    { icon: Database, delay: 2 },
    { icon: Smartphone, delay: 4 },
    { icon: Zap, delay: 6 },
  ];

  return (
    <div className="relative min-h-[calc(100vh-50px)] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/10"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <item.icon size={40} className="md:w-[60px] md:h-[60px]" />
          </motion.div>
        ))}
      </div>

      <motion.section
        className="text-center max-w-4xl md:max-w-5xl mx-auto py-8 md:py-12 lg:py-24 px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-6 md:mb-8"
          variants={itemVariants}
        >
          <h2 className="text-base md:text-lg lg:text-xl text-primary font-semibold mb-4">
            Welcome to my portfolio
          </h2>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-text-light dark:text-text-dark leading-tight mb-4 md:mb-6 hero-text-shadow"
          variants={itemVariants}
        >
          Hi, I'm <span className="text-gradient">Hiral Patel</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          A passionate <strong className="text-primary">MERN Stack Developer</strong> crafting 
          <span className="text-gradient font-semibold"> innovative web solutions</span> with 
          modern technologies and exceptional user experiences.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12"
          variants={itemVariants}
        >
          <Link to="/portfolio">
            <Button className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary-hover hover:to-accent/80 px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-soft-md hover:shadow-soft-lg transition-all duration-300 group hover-lift">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-semibold shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover-lift">
              Get in Touch
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl md:max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">1+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">5+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">5+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">100%</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default HeroSection;