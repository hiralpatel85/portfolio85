import React from 'react';
import BioSection from '../components/About/BioSection.jsx';
import ExperienceSection from '../components/About/ExperienceSection.jsx';
import SkillsSection from '../components/About/SkillsSection.jsx';
import EducationSection from '../components/About/EducationSection.jsx';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        About Me
      </h1>
      <div className="max-w-4xl mx-auto space-y-16">
        <BioSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </div>
    </div>
  );
}

export default AboutPage;