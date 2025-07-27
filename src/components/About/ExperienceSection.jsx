import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react'; // Icon for experience

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovators Inc.',
    duration: 'Jan 2023 - Present',
    description: 'Led development of scalable microservices, mentored junior developers, and optimized database performance, resulting in a 20% reduction in query times.',
    skills: ['Node.js', 'React', 'TypeScript', 'AWS', 'Docker']
  },
  {
    title: 'Software Developer',
    company: 'Web Solutions Co.',
    duration: 'Aug 2020 - Dec 2022',
    description: 'Developed and maintained front-end features for e-commerce platforms, collaborating closely with design and product teams to deliver intuitive user experiences.',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'REST APIs']
  },
  {
    title: 'Junior Web Developer',
    company: 'Startup Digital',
    duration: 'Feb 2019 - Jul 2020',
    description: 'Assisted in building responsive website layouts and integrated third-party APIs. Gained foundational knowledge in web development best practices.',
    skills: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  // Add more experiences as needed
];

function ExperienceSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
        <Briefcase className="inline-block mr-2 text-primary" size={30} /> My Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-1">
              {exp.title}
            </h3>
            <p className="text-primary text-lg mb-2">{exp.company} <span className="text-gray-500 dark:text-gray-400 text-base ml-2">• {exp.duration}</span></p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ExperienceSection;