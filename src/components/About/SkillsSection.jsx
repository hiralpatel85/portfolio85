import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react'; // Icon for skills

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Figma (Basic)'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'RESTful APIs', 'GraphQL', 'PHP (Basic)'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'] },
  { category: 'Cloud & DevOps', items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes (Basic)', 'Netlify', 'Vercel', 'Git', 'GitHub Actions'] },
  { category: 'Tools & Others', items: ['VS Code', 'Webpack', 'Vite', 'Jira', 'Agile Methodologies', 'Framer Motion', 'Shadcn/ui'] },
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
        staggerChildren: 0.1, // Stagger categories
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        <Lightbulb className="inline-block mr-2 text-primary" size={30} /> My Skills
      </h2>
      <div className="space-y-8">
        {skills.map((categoryData, index) => (
          <motion.div key={index} variants={categoryVariants}>
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              {categoryData.category}
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05, // Stagger individual skills
                  },
                },
              }}
            >
              {categoryData.items.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm text-base font-medium whitespace-nowrap"
                  variants={skillItemVariants}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default SkillsSection;