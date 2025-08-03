import React from "react";
import { motion, easeInOut } from "framer-motion";
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "The One Technologies",
    duration: "Jul 2024 - Present",
    location: "Ahmedabad",
    description:
      "As a MERN Stack Developer, I worked on a dedicated project, developing both front-end and back-end features using MongoDB, Express.js, React, and Node.js. I was responsible for building responsive web applications, integrating APIs, and ensuring database efficiency. Additionally, I actively participated in client calls, gathering requirements, providing updates, and ensuring alignment with project goals.",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "API Integration",
      "Client Communication",
    ],
    highlight: true,
  },
  {
    title: "Trainee Software Developer",
    company: "The One Technologies",
    duration: "Jan 2024 - Jun 2024",
    location: "Ahmedabad",
    description:
      "• Basic Trainee (1 Month): Gained foundational skills in HTML5, CSS3, JavaScript, and SQL, completing training with a solid understanding of web development.\n• Advanced Trainee (2 Months): Enhanced MERN stack skills by building full-stack applications using MongoDB, Express.js, React, and Node.js.\n• Live Project (3 Months): Worked on live projects, gaining hands-on experience in bug fixing, meeting deadlines, and resolving complex issues in a collaborative team environment.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQL",
      "MERN Stack",
      "Bug Fixing",
      "Team Collaboration",
    ],
  },
  {
    title: "Intern",
    company: "Infolabz",
    duration: "Aug 2023 - Aug 2023",
    location: "Ahmedabad",
    description:
      "During this fifteen days internship I learned React.js Library and API Integration for real-time projects. I created a News-project using API integration.",
    skills: ["React.js", "API Integration", "News Project"],
  },
  {
    title: "Intern",
    company: "Sukem-Tech Lab",
    duration: "Jul 2023 - Aug 2023",
    location: "Ahmedabad",
    description:
      "During this internship I enhanced my web designing knowledge and learned Web designing with React.js Library.",
    skills: ["Web Design", "React.js", "Frontend Development"],
  },
];

function ExperienceSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: easeInOut },
    },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden select-none"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-x-16 -translate-y-16 md:-translate-x-20 md:-translate-y-20"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full translate-x-12 translate-y-12 md:translate-x-16 md:translate-y-16"></div>

      <div className="relative">
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8"
          variants={itemVariants}
        >
          <Briefcase className="text-primary w-6 h-6 md:w-8 md:h-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">
            My Experience
          </h2>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative experience-card ${
                exp.highlight
                  ? "ring-2 ring-primary/20 bg-gradient-to-r from-primary/5 to-accent/5"
                  : ""
              }`}
              variants={itemVariants}
            >
              {exp.highlight && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold shadow-lg">
                  <Star size={10} className="inline mr-1 md:w-3 md:h-3" />
                  <span className="hidden sm:inline">Current</span>
                  <span className="sm:hidden">Now</span>
                </div>
              )}

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-light dark:text-text-dark mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-4 mb-3 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Briefcase size={12} className="md:w-4 md:h-4" />
                      <span className="text-primary font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="md:w-4 md:h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="md:w-4 md:h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-badge text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
