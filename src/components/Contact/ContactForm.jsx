import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Input } from '../ui/input'; // Shadcn Input
import { Textarea } from '../ui/textarea'; // Shadcn Textarea
import { Button } from '../ui/button'; // Shadcn Button

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'submitting', ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      alert('Please fill in all required fields.');
      return;
    }

    // --- IMPORTANT: Replace this with your actual form submission method ---
    // Options:
    // 1. Formspree: Easiest, free for basic use. Set action="https://formspree.io/f/yourformid"
    // 2. Netlify Forms / Vercel Forms: If deploying on these platforms, follow their docs.
    // 3. Custom Backend: If you have your own server.
    // ---------------------------------------------------------------------

    try {
      // Example for Formspree (replace with your form endpoint)
      const response = await fetch("https://formspree.io/f/yourformid", { // <--- REPLACE 'yourformid'
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        alert('Message sent successfully! I will get back to you soon.');
      } else {
        setStatus('error');
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
      alert('An error occurred. Please try again.');
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft-lg"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        <Mail className="inline-block mr-2 text-primary" size={30} /> Send a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject
          </label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry / Collaboration"
            className="w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Hi Your Name, I'd like to discuss a project..."
            className="w-full rounded-md shadow-sm border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary text-white hover:bg-primary-hover px-8 py-3 rounded-lg text-lg font-semibold shadow-soft-md transition-all duration-200"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending...' : (
            <>
              <Send className="mr-2 h-5 w-5" /> Send Message
            </>
          )}
        </Button>
        {status === 'success' && (
          <p className="text-center text-green-600 mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-600 mt-4">Failed to send message. Please try again.</p>
        )}
      </form>
    </motion.section>
  );
}

export default ContactForm;