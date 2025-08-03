import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; // Icon for education

const education = [
  {
    degree: "Bachelor of Engineering",
    institution: "Government Engineering College, Modasa",
    duration: "Jul 2024",
    location: "Modasa",
    description:
      "Completed Bachelor of Engineering degree with focus on computer science and engineering principles.",
  },
  {
    degree: "Science",
    institution: "Government Science School, Morva(H)",
    duration: "Apr 2020",
    location: "Morva(H)",
    description: "Completed higher secondary education with science stream.",
  },
  {
    degree: "SSC",
    institution: "Gurukrupa Vidhyamandir, Santroad",
    duration: "May 2018",
    location: "Santroad",
    description: "Completed secondary school education.",
  },
];

function EducationSection() {
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
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        <GraduationCap className="inline-block mr-2 text-primary" size={30} />{" "}
        Education
      </h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-1">
              {edu.degree}
            </h3>
            <p className="text-primary text-lg mb-2">
              {edu.institution}{" "}
              <span className="text-gray-500 dark:text-gray-400 text-base ml-2">
                • {edu.duration} • {edu.location}
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default EducationSection;
