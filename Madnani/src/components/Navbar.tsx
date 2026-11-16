import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-3 md:pt-4"
    >
      <div className="container-custom">
        {/* Floating Pill Navbar */}
        <div 
          className={`
            flex items-center justify-between 
            px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-full
            transition-all duration-500
            ${isScrolled ? 'bg-white/15 shadow-lg shadow-black/10' : ''}
          `}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-white rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
              <img src="/logo-transparent-svg.svg" alt="Madnani Group" className="h-5 sm:h-7 md:h-9 w-auto" />
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium border border-white/30 transition-all duration-300 hover:bg-white/30"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 p-2 rounded-full hover:bg-white/10 transition-colors text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Pill Style */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden"
            >
              <div className="py-4 px-6 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium text-white/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-white/20 text-white py-3 px-6 rounded-full text-sm font-medium border border-white/30 transition-all duration-300 hover:bg-white/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
