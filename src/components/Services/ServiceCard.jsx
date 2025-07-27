import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react'; // Import all Lucide icons
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// Function to dynamically get Lucide icon component
const Icon = ({ name, size = 28, className = "" }) => {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

function ServiceCard({ service }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full" // Ensure card takes full height for consistent grid
    >
      <Card className="h-full flex flex-col justify-start p-6 rounded-xl shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-center">
        <CardHeader className="p-0 mb-4 flex flex-col items-center">
          <div className="text-primary mb-3">
            <Icon name={service.icon} size={48} /> {/* Dynamic icon */}
          </div>
          <CardTitle className="text-2xl font-semibold text-text-light dark:text-text-dark">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <CardDescription className="text-gray-700 dark:text-gray-300 text-base mb-4">
            {service.description}
          </CardDescription>
          {service.details && service.details.length > 0 && (
            <ul className="text-left text-sm text-gray-600 dark:text-gray-400 space-y-2">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span> {detail}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;