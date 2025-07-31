import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card.tsx';

// Function to dynamically get Lucide icon component
const Icon = ({ name, size = 28, className = "" }) => {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

function ServiceCard({ service }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { 
      scale: 1.05, 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col justify-start p-6 rounded-2xl shadow-soft-lg hover:shadow-soft-md transition-all duration-300 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-center group relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full -translate-y-10 translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full translate-y-8 -translate-x-8"></div>
        
        <CardHeader className="p-0 mb-6 flex flex-col items-center relative z-10">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon name={service.icon} size={32} />
          </div>
          <CardTitle className="text-2xl font-semibold text-gradient">
            {service.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="p-0 flex-grow relative z-10">
          <CardDescription className="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
            {service.description}
          </CardDescription>
          
          {service.details && service.details.length > 0 && (
            <ul className="text-left text-sm text-gray-600 dark:text-gray-400 space-y-3">
              {service.details.map((detail, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start group/item"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-primary mr-3 mt-1 group-hover/item:scale-110 transition-transform duration-200">•</span> 
                  <span className="group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-200">
                    {detail}
                  </span>
                </motion.li>
              ))}
            </ul>
          )}
        </CardContent>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;