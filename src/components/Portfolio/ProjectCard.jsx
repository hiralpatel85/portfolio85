import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'; // Shadcn Card components
import { Button } from '../ui/button'; // Shadcn Button component

function ProjectCard({ project }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.03, boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }, // Increased shadow on hover
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
      <Card className="h-full flex flex-col justify-between rounded-xl shadow-soft-md hover:shadow-soft-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <CardHeader className="p-0 rounded-t-xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover object-center"
          />
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-semibold text-primary mb-2">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-auto"> {/* mt-auto pushes tech stack to bottom */}
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-start gap-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-white hover:bg-primary-hover rounded-md px-4 py-2 text-sm shadow-sm" aria-label={`View live demo of ${project.title}`}>
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Button>
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-4 py-2 text-sm shadow-sm" aria-label={`View GitHub repository for ${project.title}`}>
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;