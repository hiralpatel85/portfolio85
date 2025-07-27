import React from 'react';
import ServiceCard from '../components/Services/ServiceCard'; // Ensure this path is correct
import { motion } from 'framer-motion';

// Dummy data for services
const servicesData = [
  {
    icon: 'Code', // Corresponds to Lucide icon name, e.g., <Code />
    title: 'Web Development',
    description: 'Building responsive, high-performance web applications from concept to deployment using modern frameworks like React, Next.js, and Vue.js.',
    details: [
      'Custom web application development',
      'Frontend and Backend development',
      'Single Page Applications (SPAs)',
      'Progressive Web Apps (PWAs)'
    ]
  },
  {
    icon: 'LayoutGrid', // Example icon
    title: 'UI/UX Design & Implementation',
    description: 'Transforming design mockups into pixel-perfect, interactive user interfaces with a focus on user experience and accessibility.',
    details: [
      'Figma to code conversion',
      'Responsive design implementation',
      'Accessibility (A11y) standards',
      'Component library development'
    ]
  },
  {
    icon: 'Database', // Example icon
    title: 'API Development & Integration',
    description: 'Designing, developing, and integrating robust RESTful and GraphQL APIs for seamless data flow and third-party service connections.',
    details: [
      'Node.js and Python backend development',
      'Database design and optimization',
      'Third-party API integration (e.g., payment gateways)',
      'Microservices architecture'
    ]
  },
  {
    icon: 'Cloud', // Example icon
    title: 'Cloud Deployment & DevOps',
    description: 'Deploying and managing applications on cloud platforms, implementing CI/CD pipelines, and ensuring scalability and reliability.',
    details: [
      'AWS, Vercel, Netlify deployments',
      'Docker containerization',
      'CI/CD pipeline setup (GitHub Actions)',
      'Performance optimization and monitoring'
    ]
  },
  // Add more services as needed
];

function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger cards' appearance
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        My Services
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </div>
  );
}

export default ServicesPage;