'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-rich border-t border-sky-500/20 text-white relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center animate-neon border border-sky-500/50 overflow-hidden">
                <img 
                  src="/images/logo/g-logo.svg" 
                  alt="Gohar Dental Clinic Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Gohar Dental</div>
                <div className="text-xs text-neon-blue">Clinic & Aesthetics</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premier dental and aesthetic services in Lahore. Your smile is our passion.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-400">4.6 (20 reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Sultan Pura Rd, opposite near masjid, Lahore, 54000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neon-blue flex-shrink-0" />
                <a href="tel:03278008880" className="text-gray-400 hover:text-neon-blue transition-colors text-sm">
                  0327 8008880
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-neon-blue flex-shrink-0" />
                <span className="text-gray-400 text-sm">Open 24 Hours</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://facebook.com/gohardentalaesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-sky-500/30 bg-black/50 rounded-full flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/gohardentalaesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-sky-500/30 bg-black/50 rounded-full flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Get Emergency Care</p>
              <motion.a
                href="tel:03278008880"
                className="inline-block btn-black-neon px-6 py-2 rounded-full text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Gohar Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
