'use client';

import { motion } from 'framer-motion';
import { Smile, Sparkles, Zap, Heart, Shield, Stethoscope } from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, teeth whitening, and aesthetic enhancements.',
    features: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeover'],
    color: 'from-sky-400 to-cyan-400',
  },
  {
    icon: Sparkles,
    title: 'Dental Aesthetics',
    description: 'Advanced aesthetic treatments for a radiant, confident smile.',
    features: ['Facial Aesthetics', 'Gum Contouring', 'Aesthetic Fillings', 'Digital Smile Design'],
    color: 'from-blue-400 to-sky-400',
  },
  {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Comprehensive care to maintain your oral health and prevent issues.',
    features: ['Regular Checkups', 'Cleanings', 'Fluoride Treatment', 'Sealants'],
    color: 'from-cyan-400 to-teal-400',
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: '24/7 emergency dental services for urgent dental issues.',
    features: ['Toothache Relief', 'Broken Tooth', 'Lost Filling', 'Abscess Treatment'],
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Stethoscope,
    title: 'Restorative Dentistry',
    description: 'Restore your teeth to their natural function and appearance.',
    features: ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'Root Canal'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Orthodontics',
    description: 'Straighten your teeth for a perfect, healthy smile.',
    features: ['Braces', 'Clear Aligners', 'Retainers', 'Bite Correction'],
    color: 'from-cyan-500 to-sky-500',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-sky-500/20 rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-black border border-neon-blue/30 px-4 py-2 rounded-full mb-4 animate-neon">
            <Sparkles className="w-5 h-5 text-neon-blue" />
            <span className="text-sm font-semibold text-white">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            Comprehensive Dental
            <span className="block text-glow-neon mt-2">
              & Aesthetic Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From routine checkups to advanced cosmetic procedures, we offer a full spectrum of dental services
            tailored to your unique needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative card-black-premium rounded-2xl p-8 transition-all duration-300"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-2xl p-[2px] -z-10">
                  <div className={`w-full h-full bg-gradient-to-r ${service.color} rounded-2xl`} />
                </div>
                
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-3 rounded-2xl transition-opacity duration-300`} />

                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 relative overflow-hidden glow-primary group-hover:scale-110 group-hover:animate-glow`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                  <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-lg" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-neon-blue rounded-full shadow-[0_0_5px_rgba(103,232,249,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8 text-neon-blue opacity-0 group-hover:opacity-100 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white mb-6">Don't see what you're looking for?</p>
          <motion.a
            href="#contact"
            className="inline-block btn-black-neon px-8 py-4 rounded-full font-bold text-lg animate-neon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for More Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
