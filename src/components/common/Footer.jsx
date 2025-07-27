import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-background-light dark:bg-background-dark py-8 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm text-text-light dark:text-text-dark mb-4">
          &copy; {year} Your Name. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/yourusername" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:youremail@example.com" // Replace with your email
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Email Me"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Built with React, Tailwind CSS, Shadcn/ui, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;