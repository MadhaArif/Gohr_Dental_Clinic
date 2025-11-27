'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Image as ImageIcon } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  category: string;
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // Enhanced gallery data with more attractive, diverse dental images
  const galleryItems: GalleryItem[] = [
    // Facility images
    {
      id: 1,
      type: 'image',
      src: 'https://i.pinimg.com/1200x/d4/9b/bd/d49bbd77e32fb61532254e45b1bd748c.jpg',
      thumbnail: 'https://i.pinimg.com/1200x/d4/9b/bd/d49bbd77e32fb61532254e45b1bd748c.jpg',
      alt: 'Gohar Dental Clinic modern facility with advanced equipment',
      title: 'Our Modern Clinic',
      category: 'facility'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://i.pinimg.com/736x/15/77/97/157797580aae1e3cfbead55110a47044.jpg',
      thumbnail: 'https://i.pinimg.com/736x/15/77/97/157797580aae1e3cfbead55110a47044.jpg',
      alt: 'Gohar Dental Clinic welcoming reception area',
      title: 'Welcoming You',
      category: 'facility'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/7501693/pexels-photo-7501693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/7501693/pexels-photo-7501693.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Gohar Dental treatment room with modern technology',
      title: 'Advanced Technology',
      category: 'facility'
    },
    {
      id: 14,
      type: 'image',
      src: 'https://images.pexels.com/photos/7209226/pexels-photo-7209226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/7209226/pexels-photo-7209226.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Sterilized dental instruments and equipment at Gohar Dental',
      title: 'Sterile Environment',
      category: 'facility'
    },
    {
      id: 15,
      type: 'image',
      src: 'https://images.pexels.com/photos/7490999/pexels-photo-7490999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/7490999/pexels-photo-7490999.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Comfortable patient waiting area with modern seating',
      title: 'Comfortable Waiting',
      category: 'facility'
    },
    
    // Treatment results
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/8422142/pexels-photo-8422142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/8422142/pexels-photo-8422142.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Teeth whitening before and after results at Gohar Dental',
      title: 'Whitening Results',
      category: 'results'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/8422150/pexels-photo-8422150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/8422150/pexels-photo-8422150.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Veneers transformation at Gohar Dental Clinic',
      title: 'Veneers Smile',
      category: 'results'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/4709287/pexels-photo-4709287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/4709287/pexels-photo-4709287.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Dental implants results at Gohar Dental',
      title: 'Implant Success',
      category: 'results'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Orthodontic treatment results at Gohar Dental',
      title: 'Braces Journey',
      category: 'results'
    },
    {
      id: 16,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Smiling patient showing perfect dental crowns results',
      title: 'Crown Perfection',
      category: 'results'
    },
    {
      id: 17,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      thumbnail: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Happy patient after successful root canal treatment',
      title: 'Root Canal Relief',
      category: 'results'
    },
    
    // Team photos
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/7501693/pexels-photo-7501693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      thumbnail: 'https://images.pexels.com/photos/7501693/pexels-photo-7501693.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=200&w=300',
      alt: 'Dr. Gohar and team providing professional dental care',
      title: 'Meet Dr. Gohar',
      category: 'team'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media' },
    { id: 'facility', name: 'Facility' },
    { id: 'results', name: 'Results' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openItem = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeItem = () => {
    setSelectedItem(null);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-black via-black/95 to-black/90 relative overflow-hidden">
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
            <Sparkles className="w-5 h-5 text-neon-blue" />
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
                  ? 'bg-neon-blue text-white glow-primary'
                  : 'bg-black/50 text-white border border-sky-500/30 hover:bg-sky-500/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer card-black-premium rounded-2xl border-2 border-sky-500/30 overflow-hidden h-64"
              onClick={() => openItem(item)}
            >
              <div className="relative w-full h-full overflow-hidden">
                {/* Background with thumbnail image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-30 transform transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${item.thumbnail})` }} />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10" />
                
                {/* Media type indicator */}
                <div className="absolute top-3 right-3 z-10 transform transition-transform duration-300 group-hover:scale-110">
                  {item.type === 'video' ? (
                    <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                      <Play className="w-4 h-4 text-neon-blue ml-0.5" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ImageIcon className="w-4 h-4 text-neon-blue" />
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                  <h3 className="text-white font-semibold mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{item.title}</h3>
                  <p className="text-white text-sm capitalize drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{item.category}</p>
                </div>
                
                {/* Hover overlay - hidden by default, shows on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4 pointer-events-none">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.title}</h4>
                    <p className="text-white text-sm capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</p>
                  </div>
                </div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Media Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={closeItem}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeItem}
              className="absolute -top-12 right-0 text-white hover:text-neon-blue transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-neon-blue/30">
              {selectedItem.type === 'image' ? (
                <div className="relative">
                  <img 
                    src={selectedItem.src} 
                    alt={selectedItem.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                </div>
              ) : (
                <div className="relative bg-black">
                  <video 
                    src={selectedItem.src} 
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[70vh]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-black via-black/90 to-black p-6 border-t border-neon-blue/20">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-white text-lg">{selectedItem.alt}</p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-neon-blue/20 rounded-full">
                  <span className="text-neon-blue text-sm font-medium capitalize">{selectedItem.category}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}