import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ArrowRight, Zap } from 'lucide-react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Images for the slider - matching MA BYTES services theme
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Website Design & Development",
      subtitle: "Custom responsive websites that showcase your brand and attract customers"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title: "Modern Web Solutions",
      subtitle: "Building professional websites with cutting-edge technology and smart design"
    },
    {
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      title: "E-commerce Development",
      subtitle: "Transform your business with powerful online stores and digital commerce"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Digital Growth & SEO",
      subtitle: "Helping local businesses grow faster and reach more customers online"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };



  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
  });

  const slideAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(1.1)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.molasses,
  });

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((image, index) => (
          <animated.div
            key={index}
            style={{
              ...slideAnimation,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image.url})`,
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)',
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          />
        ))}
        
        {/* Animated Gradient Overlay - MA BYTES Brand Colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141A38]/80 via-[#173357]/70 to-[#2992BE]/60 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-4 relative z-10">
        <animated.div
          style={fadeIn}
          className="text-center max-w-5xl"
        >
          {/* Dynamic Slide Title */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-[#2992BE]/20 backdrop-blur-sm border border-[#2992BE]/30 text-[#2992BE] text-sm font-semibold rounded-full mb-4 shadow-lg shadow-[#2992BE]/20">
              MA BYTES
            </span>
          </div>
          
          {/* Dynamic Heading based on current slide */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight drop-shadow-2xl transition-all duration-500">
            {sliderImages[currentSlide].title}
          </h1>
          
          {/* Dynamic Subtitle based on current slide */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium transition-all duration-500">
            {sliderImages[currentSlide].subtitle}
          </p>
          
          {/* Main Tagline */}
          <p className="text-base sm:text-lg md:text-xl mb-10 text-cyan-200/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light">
            Building Websites That Grow Businesses
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <animated.a
              href="#contact"
              style={fadeIn}
              className="group relative bg-gradient-to-r from-[#2992BE] to-[#173357] text-white py-3 px-8 rounded-xl font-bold text-lg hover:from-[#2992BE] hover:to-[#235780] transition-all duration-300 shadow-2xl hover:shadow-[#2992BE]/50 transform hover:-translate-y-1 hover:scale-105"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-[#2992BE] rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </animated.a>
            <animated.a
              href="#services"
              style={fadeIn}
              className="group relative border-2 border-[#2992BE] text-[#2992BE] py-3 px-8 rounded-xl font-bold text-lg hover:bg-[#2992BE]/10 transition-all duration-300 shadow-2xl hover:shadow-[#2992BE]/25 backdrop-blur-sm transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                <Zap size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Our Services
              </span>
            </animated.a>
          </div>
        </animated.div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="p-2 text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          {/* <button
            onClick={toggleAutoplay}
            className="p-2 text-white/80 hover:text-white transition-colors duration-200"
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5" />
            )}
          </button> */}

          {/* Navigation Arrows */}
          <button
            onClick={nextSlide}
            className="p-2 text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Floating Elements - MA BYTES Brand Colors */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#2992BE]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-[#173357]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-[#235780]/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </header>
  );
};

export default Header;