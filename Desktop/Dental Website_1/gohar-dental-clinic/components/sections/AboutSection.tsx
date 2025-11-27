'use client';

import { motion } from 'framer-motion';
import { Award, Users, Sparkles, Target, Clock, Shield } from 'lucide-react';
import { ParticleBackground } from '../ParticleBackground';

const stats = [
  { value: '10+', label: 'Years Experience', icon: Award },
  { value: '5000+', label: 'Happy Patients', icon: Users },
  { value: '24/7', label: 'Emergency Care', icon: Clock },
  { value: '100%', label: 'Patient Satisfaction', icon: Target },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background decorative elements - NEON GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <span className="text-sm font-semibold text-white">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            Excellence in Dental Care
            <span className="block text-glow-neon mt-2">
              Since Day One
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Your Trusted Partner for Complete Oral Health
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              At Gohar Dental Clinic, we believe that a beautiful smile is more than just aesthetics—it's about 
              confidence, health, and quality of life. Located in the heart of Lahore, we've been serving our 
              community with exceptional dental and aesthetic services.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our state-of-the-art facility combines cutting-edge technology with compassionate care. Whether 
              you need routine dental care or advanced cosmetic procedures, our experienced team is dedicated 
              to providing personalized treatment that exceeds your expectations.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {[
                { icon: Shield, text: 'Certified Professionals' },
                { icon: Target, text: 'Advanced Technology' },
                { icon: Users, text: 'Patient-Centered Care' },
                { icon: Award, text: 'Award-Winning Service' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
                      <Icon className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                    <span className="font-semibold text-white">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
              {/* Real clinic image with neon border */}
              <div className="absolute inset-0 gradient-neon-black rounded-3xl transform -rotate-6 shadow-[0_0_60px_rgba(14,165,233,0.4)]" />
              <div className="absolute inset-0 card-black-premium rounded-3xl border-2 border-sky-500/30 overflow-hidden">
                {/* Real clinic image */}
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="text-center relative z-10">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center animate-neon overflow-hidden"
                      >
                        <img 
                          src="/images/logo/g-logo.svg" 
                          alt="Gohar Dental Clinic Logo" 
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-white mb-2">Gohar Dental Clinic</h4>
                      <p className="text-gray-300">Premier Dental Care in Lahore</p>
                    </div>
                  </div>
                  
                  {/* Real clinic interior image from Unsplash */}
                  <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1588776813677-77d366d3ec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)' }} />
                </div>
              </div>
              
              {/* Floating badge - BLACK PREMIUM */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 card-black-premium rounded-2xl border-2 border-sky-500/30 p-6 shadow-[0_0_30px_rgba(14,165,233,0.3)]"
              >
                <div className="text-center">
                  <div className="text-yellow-400 text-2xl mb-1 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">★★★★★</div>
                  <div className="text-3xl font-bold text-glow-neon">4.6</div>
                  <div className="text-sm text-gray-400">Rating</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 card-black-premium rounded-2xl border-2 border-sky-500/30"
              >
                <Icon className="w-10 h-10 text-neon-blue mx-auto mb-4 drop-shadow-[0_0_10px_rgba(103,232,249,0.5)]" />
                <div className="text-4xl font-bold text-glow-neon mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
