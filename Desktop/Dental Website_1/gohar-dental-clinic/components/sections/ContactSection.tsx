'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send, Sparkles, Facebook, Instagram } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
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
            <span className="text-sm font-semibold text-white">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            Book Your Appointment
            <span className="block text-glow-neon mt-2">
              Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take the first step towards your perfect smile. Our team is ready to help you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-gradient"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
                    <MapPin className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Location</div>
                    <p className="text-gray-600 text-sm">
                      Sultan Pura Rd, opposite near masjid<br />
                      Sultan Pura Sultanpura Misri Shah<br />
                      Lahore, 54000
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-gradient"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
                    <Phone className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:03278008880" className="text-gradient-primary hover:text-gradient-vivid text-sm font-medium transition-all">
                      0327 8008880
                    </a>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-gradient"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 glow-primary">
                    <Clock className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Hours</div>
                    <p className="text-gray-600 text-sm">
                      Open 24 Hours<br />
                      <span className="text-sky-600 font-semibold">7 Days a Week</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map with Real Clinic Image - BLACK PREMIUM */}
            <div className="card-black-premium rounded-2xl shadow-lg overflow-hidden border-2 border-sky-500/30">
              <div className="h-64 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-500/10 flex items-center justify-center relative">
                {/* Real clinic exterior image from Unsplash */}
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)' }} />
                
                <div className="text-center p-6 relative z-10">
                  <MapPin className="w-16 h-16 text-neon-blue mx-auto mb-3 drop-shadow-[0_0_20px_rgba(103,232,249,0.5)]" />
                  <p className="text-white font-medium">Gohar Dental Clinic</p>
                  <p className="text-sm text-gray-400">Sultan Pura, Lahore</p>
                  <a
                    href="https://maps.google.com/?q=Sultan+Pura+Rd+Lahore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-neon-blue hover:text-sky-400 text-sm font-semibold transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Team Photos - REAL IMAGES */}
            <div>
              <h4 className="font-semibold text-white mb-4">Meet Our Team</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="relative h-24 rounded-lg overflow-hidden border-2 border-sky-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }} />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                    <p className="text-white text-xs font-medium">Dr. Gohar</p>
                  </div>
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden border-2 border-sky-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }} />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                    <p className="text-white text-xs font-medium">Dr. Sarah</p>
                  </div>
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden border-2 border-sky-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10" />
                  <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }} />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2">
                    <p className="text-white text-xs font-medium">Nurse Ayesha</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media - NEON STYLE */}
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com/gohardentalaesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-neon-blue/50 bg-black/50 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all"
                >
                  <Facebook className="w-6 h-6 text-neon-blue" />
                </a>
                <a
                  href="https://instagram.com/gohardentalaesthetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-neon-blue/50 bg-black/50 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all"
                >
                  <Instagram className="w-6 h-6 text-neon-blue" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card-black-premium rounded-2xl p-8 space-y-6 border-2 border-sky-500/30">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-sky-500/30 text-white rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all outline-none placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-sky-500/30 text-white rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all outline-none placeholder-gray-500"
                    placeholder="03XX XXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-sky-500/30 text-white rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all outline-none placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-sky-500/30 text-white rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="aesthetics">Dental Aesthetics</option>
                  <option value="preventive">Preventive Care</option>
                  <option value="emergency">Emergency Care</option>
                  <option value="restorative">Restorative Dentistry</option>
                  <option value="orthodontics">Orthodontics</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-white mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-sky-500/30 text-white rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-white mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-sky-500/30 text-white rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-sky-500/30 text-white rounded-lg focus:ring-2 focus:ring-neon-blue focus:border-neon-blue transition-all outline-none resize-none placeholder-gray-500"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                >
                  ✓ Thank you! Your appointment request has been received. We'll contact you shortly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-black-neon px-8 py-4 rounded-full font-bold text-lg animate-neon disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Book Appointment'}</span>
                {!isSubmitting && <Send className="w-5 h-5 relative z-10" />}
              </motion.button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to be contacted by Gohar Dental Clinic.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
