import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Lucide icons for mobile toggle
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  // { name: 'Services', path: '/services' }, // Uncomment if needed
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const commonClasses = "font-medium text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors duration-200";
  const activeClasses = "text-primary dark:text-primary font-semibold";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300
        ${isScrolled ? 'bg-background-light/90 dark:bg-background-dark/90 shadow-soft-md backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo/Name */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Your Name
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${commonClasses} ${location.pathname === link.path ? activeClasses : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-text-light dark:text-text-dark focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background-light dark:bg-background-dark shadow-soft-lg py-4 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${commonClasses} ${location.pathname === link.path ? activeClasses : ''}`}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;