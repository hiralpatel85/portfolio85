import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Code,
  Database,
  Smartphone,
  Settings,
  Zap,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "JavaScript", "TypeScript"],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Java"],
    icon: Settings,
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Databases",
    items: ["MongoDB", "SQL"],
    icon: Database,
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Mobile Development",
    items: ["React Native"],
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Tools & Others",
    items: ["Git", "VS Code", "API Integration", "Responsive Design"],
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
  },
];

function SkillsSection() {
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

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full translate-x-16 -translate-y-16 md:translate-x-20 md:-translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full -translate-x-12 translate-y-12 md:-translate-x-16 md:translate-y-16"></div>

      <div className="relative">
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8"
          variants={categoryVariants}
        >
          <Lightbulb className="text-primary w-6 h-6 md:w-8 md:h-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">
            My Skills
          </h2>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {skills.map((categoryData, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="relative"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${categoryData.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                >
                  <categoryData.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-light dark:text-text-dark">
                  {categoryData.category}
                </h3>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {categoryData.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="relative group"
                    variants={skillItemVariants}
                  >
                    <div
                      className={`bg-gradient-to-r ${categoryData.color} text-white px-2 py-2 md:px-4 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center font-medium text-xs md:text-sm`}
                    >
                      {skill}
                      <div className="absolute inset-0 bg-white/10 rounded-lg md:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skills summary */}
        <motion.div
          className="mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl md:rounded-2xl border border-primary/20"
          variants={categoryVariants}
        >
          <h4 className="text-lg md:text-xl font-semibold text-text-light dark:text-text-dark mb-2 md:mb-3 text-center">
            Technical Expertise
          </h4>
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            I specialize in the MERN stack with expertise in building scalable
            web applications, creating responsive user interfaces, and
            implementing robust backend solutions. My passion for clean code and
            user experience drives me to deliver exceptional results.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default SkillsSection;
