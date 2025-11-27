'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  category: string;
}

export function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  
  // Sample media data - in a real implementation, this would come from an API
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/images/placeholder-clinic.svg',
      thumbnail: '/images/placeholder-clinic.svg',
      alt: 'Modern dental clinic interior',
      title: 'State-of-the-art Facility',
      category: 'facility'
    },
    {
      id: 2,
      type: 'image',
      src: '/images/placeholder-results.svg',
      thumbnail: '/images/placeholder-results.svg',
      alt: 'Teeth whitening before and after',
      title: 'Teeth Whitening Results',
      category: 'results'
    },
    {
      id: 3,
      type: 'video',
      src: '/videos/testimonials.txt',
      thumbnail: '/images/placeholder-video.svg',
      alt: 'Patient testimonial video',
      title: 'Patient Testimonial',
      category: 'testimonials'
    },
    {
      id: 4,
      type: 'image',
      src: '/images/placeholder-team.svg',
      thumbnail: '/images/placeholder-team.svg',
      alt: 'Professional dental team',
      title: 'Our Expert Team',
      category: 'team'
    },
    {
      id: 5,
      type: 'video',
      src: '/videos/procedures.txt',
      thumbnail: '/images/placeholder-video.svg',
      alt: 'Dental implant procedure',
      title: 'Implant Procedure',
      category: 'procedures'
    },
    {
      id: 6,
      type: 'image',
      src: '/images/placeholder-results.svg',
      thumbnail: '/images/placeholder-results.svg',
      alt: 'Veneers before and after',
      title: 'Veneers Transformation',
      category: 'results'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'facility', name: 'Facility' },
    { id: 'results', name: 'Results' },
    { id: 'team', name: 'Our Team' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'procedures', name: 'Procedures' }
  ];

  const filteredMedia = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const openMedia = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMedia();
    };

    if (selectedMedia) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMedia]);

  return (
    <section className="py-24 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
      {/* Background decorative elements */}
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
            <span className="text-sm font-semibold text-white">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
            Real Stories,
            <span className="block text-glow-neon mt-2">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the transformation our patients have experienced with our premium dental care services.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-neon-blue text-black glow-primary'
                  : 'bg-black/50 text-gray-300 border border-sky-500/30 hover:bg-sky-500/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredMedia.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => openMedia(item)}
            >
              <div className="relative overflow-hidden rounded-2xl card-black-premium border-2 border-sky-500/30 h-64">
                {/* Thumbnail */}
                <div className="w-full h-full bg-gradient-to-br from-sky-500/10 to-cyan-500/10 flex items-center justify-center">
                  <div className="text-center">
                    {/* Play icon for videos */}
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg className="w-8 h-8 text-neon-blue ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">Click to view</p>
                    </div>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Media Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeMedia}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMedia}
              className="absolute -top-12 right-0 text-white hover:text-neon-blue transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="rounded-2xl overflow-hidden">
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <div className="relative bg-black aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-10 h-10 text-neon-blue ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                    <p className="text-white">Video Player Placeholder</p>
                    <p className="text-gray-400 text-sm mt-2">{selectedMedia.title}</p>
                  </div>
                </div>
              )}
              
              <div className="bg-black/80 p-4">
                <h3 className="text-white text-xl font-semibold">{selectedMedia.title}</h3>
                <p className="text-gray-300 mt-1">{selectedMedia.alt}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}