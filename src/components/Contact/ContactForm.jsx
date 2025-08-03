import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, FileText } from "lucide-react";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/yourformid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Message sent successfully! I will get back to you soon.");
      } else {
        setStatus("error");
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      alert("An error occurred. Please try again.");
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-x-12 -translate-y-12 md:-translate-x-16 md:-translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full translate-x-10 translate-y-10 md:translate-x-12 md:translate-y-12"></div>

      <div className="relative z-10">
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Mail className="text-primary w-6 h-6 md:w-8 md:h-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-gradient">
            Send a Message
          </h2>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6 max-w-lg mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
            >
              <User size={14} className="text-primary md:w-4 md:h-4" />
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-lg md:rounded-xl shadow-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary focus:ring-2 transition-all duration-300 text-sm md:text-base"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
            >
              <Mail size={14} className="text-primary md:w-4 md:h-4" />
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full rounded-lg md:rounded-xl shadow-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary focus:ring-2 transition-all duration-300 text-sm md:text-base"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
            >
              <FileText size={14} className="text-primary md:w-4 md:h-4" />
              Subject
            </label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry / Collaboration"
              className="w-full rounded-lg md:rounded-xl shadow-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary focus:ring-2 transition-all duration-300 text-sm md:text-base"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2"
            >
              <MessageSquare size={14} className="text-primary md:w-4 md:h-4" />
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Hi Hiral, I'd like to discuss a project..."
              className="w-full rounded-lg md:rounded-xl shadow-sm border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-text-light dark:text-text-dark focus:border-primary focus:ring-primary focus:ring-2 transition-all duration-300 resize-none text-sm md:text-base"
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary-hover hover:to-accent/80 px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-base md:text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 group hover-lift"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </Button>
          </motion.div>

          {status === "success" && (
            <motion.p
              className="text-center text-green-600 mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg md:rounded-xl border border-green-200 dark:border-green-800 text-sm md:text-base"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Message sent successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-center text-red-600 mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg md:rounded-xl border border-red-200 dark:border-red-800 text-sm md:text-base"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
}

export default ContactForm;
