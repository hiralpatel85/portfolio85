import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card.tsx';
import { Button } from '../ui/button.tsx';

function ProjectCard({ project }) {
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
      <Card className="h-full flex flex-col justify-between rounded-2xl shadow-soft-lg hover:shadow-soft-md transition-all duration-300 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden group">
        <CardHeader className="p-0 rounded-t-2xl overflow-hidden relative">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Code size={12} className="inline mr-1" />
              MERN Stack
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6 flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="text-primary" size={20} />
            <CardTitle className="text-xl font-semibold text-gradient">
              {project.title}
            </CardTitle>
          </div>
          
          <CardDescription className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            {project.description}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary dark:text-primary font-medium text-xs px-3 py-1 rounded-full border border-primary/20 hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 flex justify-start gap-3">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary-hover hover:to-accent/80 rounded-lg px-4 py-2 text-sm shadow-soft-sm hover:shadow-soft-md transition-all duration-300 group/btn" aria-label={`View live demo of ${project.title}`}>
                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" /> 
                Live Demo
              </Button>
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg px-4 py-2 text-sm shadow-soft-sm hover:shadow-soft-md transition-all duration-300 group/btn" aria-label={`View GitHub repository for ${project.title}`}>
                <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" /> 
                GitHub
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;