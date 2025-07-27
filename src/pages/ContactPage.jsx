import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import SocialLinksSection from '../components/Contact/SocialLinksSection';
import { motion } from 'framer-motion';

function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        Get in Touch
      </h1>
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        <ContactForm />
        <SocialLinksSection />
      </div>
    </motion.div>
  );
}

export default ContactPage;