import React from 'react';
import ProjectCard from '../components/Portfolio/ProjectCard';
import projectsData from '../assets/data/projects'; // Import your project data

function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;