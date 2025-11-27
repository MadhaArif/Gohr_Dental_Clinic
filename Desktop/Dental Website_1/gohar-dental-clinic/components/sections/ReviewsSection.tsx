'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, Play } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  comment: string;
  treatment: string;
  date: string;
  video?: string;
}

const reviews: Review[] = [
  {
    name: 'Ahmed Khan',
    rating: 5,
    comment: 'Exceptional service! Dr. Gohar and the team made my smile transformation journey comfortable and the results are amazing. Highly recommend!',
    treatment: 'Teeth Whitening',
    date: '2 weeks ago',
    video: '/videos/testimonial-ahmed.mp4'
  },
  {
    name: 'Fatima Ali',
    rating: 5,
    comment: 'Professional, caring, and the clinic is state-of-the-art. My dental implant procedure was painless and the aftercare was excellent.',
    treatment: 'Dental Implants',
    date: '1 month ago',
    video: '/videos/testimonial-fatima.mp4'
  },
  {
    name: 'Hassan Raza',
    rating: 5,
    comment: 'Best dental clinic in Lahore! The 24/7 availability is a lifesaver. Got emergency treatment at midnight and the staff was incredibly professional.',
    treatment: 'Emergency Care',
    date: '3 weeks ago',
  },
  {
    name: 'Ayesha Malik',
    rating: 4,
    comment: 'Great experience with cosmetic dentistry. The team is knowledgeable and the results exceeded my expectations. Very happy with my new smile!',
    treatment: 'Veneers',
    date: '2 months ago',
    video: '/videos/testimonial-ayesha.mp4'
  },
  {
    name: 'Bilal Sheikh',
    rating: 5,
    comment: 'Outstanding orthodontic treatment. Clear communication, affordable pricing, and excellent results. My teeth are perfectly aligned now!',
    treatment: 'Braces',
    date: '1 month ago',
  },
  {
    name: 'Sara Ahmed',
    rating: 5,
    comment: 'The aesthetic services are top-notch. Very clean facility, modern equipment, and the staff makes you feel comfortable throughout the procedure.',
    treatment: 'Aesthetic Dentistry',
    date: '3 weeks ago',
    video: '/videos/testimonial-sara.mp4'
  },
];

export function ReviewsSection() {
  const averageRating = 4.6;
  const totalReviews = 20;

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-black/90 via-black/95 to-black relative overflow-hidden">
      {/* Background decorative elements - NEON GLOW */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-sky-500/20 rounded-full filter blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl opacity-40" />

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
            <span className="text-sm font-semibold text-white">Patient Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            What Our Patients
            <span className="block text-glow-neon mt-2">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Don't just take our word for it—hear from our satisfied patients about their experiences.
          </p>

          {/* Rating Summary - BLACK PREMIUM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-4 card-black-premium rounded-2xl px-8 py-6 relative overflow-hidden border-2 border-sky-500/30 animate-neon"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-sky-500/10 opacity-50" />
            
            <div className="text-center relative z-10">
              <motion.div 
                className="text-5xl font-bold text-glow-neon mb-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {averageRating}
              </motion.div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                          : 'text-gray-600'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <div className="text-sm text-gray-500">{totalReviews} Reviews</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card-black-premium rounded-2xl p-8 transition-all duration-300 relative border-2 border-sky-500/20 hover:border-sky-500/50"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10" />
              {/* Quote icon - NEON */}
              <div className="absolute top-6 right-6 text-sky-500/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating - GLOWING STARS */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]'
                        : 'text-gray-700'
                    }`}
                  />
                ))}
              </div>

              {/* Comment - WHITE TEXT */}
              <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                "{review.comment}"
              </p>

              {/* Author info - NEON ACCENTS */}
              <div className="border-t border-sky-500/20 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-sm text-neon-blue">{review.treatment}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {review.video && (
                      <Play className="w-4 h-4 text-neon-blue" />
                    )}
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - BLACK NEON BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ready to experience the same quality care?</p>
          <motion.a
            href="#contact"
            className="inline-block btn-black-neon px-8 py-4 rounded-full font-bold text-lg animate-neon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Appointment Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
