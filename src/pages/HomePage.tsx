import React from 'react';
import HeroSection from '../components/Home/HeroSection.jsx';

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-theme(space.16))] flex items-center justify-center py-16 px-4">
      {/* The min-h-screen minus navbar height ensures content doesn't get hidden */}
      <HeroSection />
    </div>
  );
}

export default HomePage;