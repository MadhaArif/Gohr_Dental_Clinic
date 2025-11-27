'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Clock } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top bar with contact info - BLACK WITH NEON */}
      <div className="bg-black-rich text-white py-2 px-4 border-b border-sky-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:03278008880" className="flex items-center gap-2 text-neon-blue hover:text-sky-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">0327 8008880</span>
            </a>
            <div className="flex items-center gap-2 text-cyan-400">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Open 24 Hours</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="hidden sm:inline text-gray-300">4.6 (20 reviews)</span>
          </div>
        </div>
      </div>

      {/* Main navigation - GLASS BLACK */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-black border-b border-sky-500/30'
            : 'bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-sm border-b border-sky-500/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - NEON STYLE */}
            <motion.a
              href="#home"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center animate-neon border border-sky-500/50 overflow-hidden">
                <img 
                  src="/images/logo/g-logo.svg" 
                  alt="Gohar Dental Clinic Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">Gohar Dental</div>
                <div className="text-xs text-neon-blue">Clinic & Aesthetics</div>
              </div>
            </motion.a>

            {/* Desktop Navigation - NEON LINKS */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-neon-blue font-medium transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-400 transition-all group-hover:w-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span>
                </a>
              ))}
              <motion.a
                href="#contact"
                className="btn-black-neon px-6 py-3 rounded-full font-semibold animate-neon"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Appointment
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-black/50 border border-sky-500/30 hover:bg-sky-500/20 text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu - BLACK GLASS */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-black border-t border-sky-500/30"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-neon-blue font-medium py-2 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block btn-black-neon px-6 py-3 rounded-full font-semibold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
