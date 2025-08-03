import React from "react";
import ServiceCard from "../components/Services/ServiceCard.jsx";
import { motion } from "framer-motion";

const servicesData = [
  {
    icon: "Code",
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js) from frontend to backend.",
    details: [
      "React.js frontend development",
      "Node.js and Express.js backend",
      "MongoDB database design",
      "RESTful API development",
    ],
  },
  {
    icon: "LayoutGrid",
    title: "Responsive UI/UX Design",
    description:
      "Creating modern, responsive user interfaces with excellent user experience using React and modern CSS frameworks.",
    details: [
      "Responsive web design",
      "Modern UI components",
      "User experience optimization",
      "Cross-browser compatibility",
    ],
  },
  {
    icon: "Database",
    title: "API Development & Integration",
    description:
      "Designing and developing RESTful APIs, integrating third-party services, and ensuring seamless data flow.",
    details: [
      "RESTful API development",
      "Third-party API integration",
      "Database optimization",
      "Authentication & authorization",
    ],
  },
  {
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications using React Native for iOS and Android platforms.",
    details: [
      "React Native development",
      "Cross-platform solutions",
      "Mobile UI/UX design",
      "App store deployment",
    ],
  },
  {
    icon: "Settings",
    title: "Database Design & Management",
    description:
      "Designing and managing MongoDB databases with efficient data modeling and query optimization.",
    details: [
      "MongoDB database design",
      "Data modeling",
      "Query optimization",
      "Database administration",
    ],
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Optimizing application performance, improving load times, and ensuring smooth user experiences.",
    details: [
      "Frontend optimization",
      "Backend performance tuning",
      "Database query optimization",
      "Caching strategies",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 select-none">
      {" "}
      {/* Prevent cursor on text click */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        My Services
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden" // Fix: set animation start
        animate="visible" // Fix: trigger animation
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </div>
  );
}

export default ServicesPage;
