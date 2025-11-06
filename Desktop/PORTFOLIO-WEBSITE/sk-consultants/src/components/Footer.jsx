import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Zap, Sparkles, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', color: 'hover:text-[#2992BE]' },
    { name: 'Instagram', href: '#', color: 'hover:text-[#173357]' },
    { name: 'Facebook', href: '#', color: 'hover:text-[#235780]' },
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-blue-900/10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#2992BE] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-2 border border-[#2992BE]/40 group-hover:border-[#2992BE]/60 transition-all duration-300 overflow-hidden flex items-center justify-center">
                  <img
                    src="/mabytes-logo.svg"
                    alt="MA BYTES Logo"
                    className="h-20 w-20 shadow-2xl shadow-[#2992BE]/20 relative z-10 group-hover:scale-110 transition-transform duration-300 mx-auto"
                    style={{ objectFit: 'contain', display: 'block', transform: 'scale(1.9) translateX(-2px)' }}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#2992BE] to-[#173357] bg-clip-text text-transparent">
                  MA BYTES
                </h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Sparkles size={12} className="text-[#2992BE] animate-pulse" />
                  <p className="text-[#2992BE] text-sm font-medium">Building Websites That Grow Businesses</p>
                  <Sparkles size={12} className="text-[#2992BE] animate-pulse" />
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed border-l-2 border-[#2992BE]/30 pl-4">
              MA Bytes is a growing online agency based in Lahore, Pakistan, dedicated to helping local and small businesses build a strong digital presence.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#2992BE] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <MapPin size={20} className="text-[#2992BE] mt-1 flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-gray-400 group-hover:text-[#2992BE] transition-colors duration-300">Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#173357] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Phone size={20} className="text-[#173357] flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a
                  href="tel:+923061610701"
                  className="text-gray-400 hover:text-[#173357] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(23,51,87,0.5)]"
                >
                  0306-1610701
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#235780] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <Mail size={20} className="text-[#235780] flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <a
                  href="mailto:mabytes2025@gmail.com"
                  className="text-gray-400 hover:text-[#235780] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(35,87,128,0.5)]"
                >
                  mabytes2025@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent border-l-4 border-cyan-500 pl-3 glow-cyan">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {navItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-300 transition-all duration-300 font-medium flex items-center group/link"
                  >
                    <ChevronRight size={16} className="text-cyan-400 mr-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-8">
            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-300 transition-all duration-300 flex items-center group/legal"
                    >
                      <ExternalLink size={14} className="text-blue-400 mr-2 group-hover/legal:scale-110 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/30 backdrop-blur-sm shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-500 group/cta">
              <div className="absolute inset-0 bg-cyan-500/5 rounded-2xl opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h4 className="font-semibold text-cyan-300 mb-3 flex items-center">
                  <Zap size={18} className="text-cyan-400 mr-2 animate-pulse" />
                  Ready to Power Up?
                </h4>
                <p className="text-gray-400 text-sm mb-4 group-hover/cta:text-cyan-200 transition-colors duration-300">
                  Contact us today for a free consultation and discover how we can accelerate your business growth.
                </p>
                <a
                  href="tel:+923061610701"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 inline-block text-center w-full shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:scale-105 transform"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm flex items-center">
              <Sparkles size={12} className="text-[#2992BE] mr-2 animate-pulse" />
              &copy; {new Date().getFullYear()} MA BYTES. All rights reserved.
              <Sparkles size={12} className="text-[#2992BE] ml-2 animate-pulse" />
            </p>
            <div className="flex space-x-6 items-center">
              <span className="text-gray-500 text-sm flex items-center">
                <Globe size={14} className="text-cyan-400 mr-2" />
                Connect with us:
              </span>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className={`text-gray-500 ${social.color} transition-all duration-300 text-sm font-medium hover:scale-110 transform`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-neon-float-slow opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;