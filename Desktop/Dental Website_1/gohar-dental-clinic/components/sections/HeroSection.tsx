'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { MagneticButton } from '../UnicornEffects';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-black via-black/90 to-black/85">
      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 glass-black border border-neon-blue/30 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-neon-blue" />
                <span className="text-sm font-semibold text-white">Trusted by 5000+ Happy Patients</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transform Your
                <span className="block text-glow-neon mt-2">
                  Smile With Us
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Experience premium dental care in the heart of Lahore. Our expert team uses cutting-edge technology to create beautiful, healthy smiles with compassionate, personalized care.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <motion.a
                  href="#contact"
                  className="group relative btn-black-neon px-8 py-4 rounded-full font-bold text-lg animate-neon inline-flex items-center justify-center gap-2 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Book Appointment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </motion.a>
              </MagneticButton>

              <motion.a
                href="tel:03278008880"
                className="relative glass-black border border-neon-blue/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-500 hover:border-sky-500 transition-all inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Call: 0327 8008880</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-8 pt-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-lg flex items-center justify-center glow-primary">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Expert Care</div>
                  <div className="text-sm text-gray-400">Certified Professionals</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-lg flex items-center justify-center glow-primary">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">24/7 Service</div>
                  <div className="text-sm text-gray-400">Always Available</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
            style={{
              perspective: '1000px'
            }}
          >
            <div className="relative h-[650px] flex items-center justify-center">
              {/* Image Container with 3D effect and enhanced styling */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-sky-400/40 shadow-[0_0_80px_rgba(14,165,233,0.4)] transform transition-all duration-500 hover:shadow-[0_0_100px_rgba(14,165,233,0.6)] hover:scale-[1.02] bg-gradient-to-br from-black/60 to-sky-900/20"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(5deg) rotateX(5deg)'
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15)_0%,rgba(0,0,0,0)_70%)] z-10" />
                
                {/* Hero Image from Pinterest link with 3D effect */}
                <div className="absolute inset-0 flex items-center justify-center p-8"
                  style={{
                    transform: 'translateZ(50px)'
                  }}
                >
                  <img 
                    src="https://i.pinimg.com/736x/2f/b4/d5/2fb4d58568dbcdd206a3c5cc5f2698ce.jpg" 
                    alt="Dental Care" 
                    className="object-contain w-full h-full rounded-3xl"
                  />
                </div>
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-end justify-center p-8 z-30"
                  style={{
                    transform: 'translateZ(50px)'
                  }}
                >
                  <div className="text-center bg-black/70 backdrop-blur-lg rounded-xl p-5 border border-sky-400/30 w-full max-w-sm shadow-lg">
                    <div className="flex justify-center mb-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Premium Dental Care</h3>
                    <p className="text-gray-300 mb-3 text-sm">Expert care with modern technology</p>
                    <div className="text-gray-400 text-xs">5000+ satisfied patients</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-400/30 flex items-center justify-center"
                animate={{ 
                  y: [0, -20, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="text-sky-300 text-2xl">✨</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-500/20 border border-sky-400/30 flex items-center justify-center"
                animate={{ 
                  y: [0, 20, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              >
                <div className="text-cyan-300 text-2xl">🦷</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-8 h-12 border-2 border-neon-blue/50 rounded-full flex justify-center p-2"
        >
          <div className="w-1.5 h-4 bg-neon-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
