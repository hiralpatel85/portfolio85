import React from "react";
import { motion, easeInOut } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function SocialLinksSection() {
  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:hirpatel2314@gmail.com" },
    { name: "Phone", icon: Phone, url: "tel:+918849662996" },
    { name: "Location", icon: MapPin, url: "#", text: "Ahmedabad, Gujarat" },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeInOut, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: easeInOut },
    },
  };

  return (
    <motion.section
      className="bg-gray-900 text-white dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-indigo-400 mb-8">Get In Touch</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={
              link.url.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="flex flex-col items-center justify-center bg-gray-800 rounded-xl px-6 py-5 shadow hover:shadow-indigo-500/20 hover:-translate-y-1 transition-all duration-300 group max-w-xs mx-auto min-w-40"
            variants={itemVariants}
            aria-label={`Link to ${link.name}`}
          >
            <link.icon
              size={36}
              className="mb-2 text-indigo-300 group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-white font-semibold text-base">
              {link.name}
            </span>
            {link.text && (
              <span className="text-sm text-gray-400 mt-1 text-center">
                {link.text}
              </span>
            )}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default SocialLinksSection;
