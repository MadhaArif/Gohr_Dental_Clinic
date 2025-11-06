import React, { useState, useEffect } from 'react';
import { Zap, Sparkles } from 'lucide-react';
import { useSpring, animated } from 'react-spring';

const LoadingScreen = ({ onComplete }) => {
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);

  // Fade in animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  // Logo animation
  const logoAnimation = useSpring({
    from: { 
      opacity: 0, 
      transform: 'scale(0.5) rotate(-180deg)',
      filter: 'blur(10px)'
    },
    to: { 
      opacity: 1, 
      transform: 'scale(1) rotate(0deg)',
      filter: 'blur(0px)'
    },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  // Text animation
  const textAnimation = useSpring({
    from: { 
      opacity: 0, 
      transform: 'translateY(30px)',
    },
    to: { 
      opacity: 1, 
      transform: 'translateY(0px)',
    },
    config: { tension: 150, friction: 20 },
    delay: 800,
  });

  // Sparkles animation
  const sparklesAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 400 },
    delay: 1200,
  });

  useEffect(() => {
    // Show content after a brief delay
    setTimeout(() => setShowContent(true), 100);
    setTimeout(() => setShowLogo(true), 400);
    setTimeout(() => setShowText(true), 1000);
    
    // Complete after 4.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <animated.div
      style={fadeIn}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#141A38] via-[#173357] to-[#2992BE] opacity-20"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[#2992BE] rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        {showLogo && (
          <animated.div
            style={logoAnimation}
            className="mb-8"
          >
            <div className="relative flex items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#2992BE] rounded-lg blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Logo Container */}
              <div className="relative bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-[#2992BE]/50 overflow-hidden">
                <img
                  src="/mabytes-logo.svg"
                  alt="MA BYTES Logo"
                  className="h-24 w-24 sm:h-32 sm:w-32 transition-all duration-300"
                  style={{ objectFit: 'contain', display: 'block', transform: 'scale(1.8) translateX(-2px)' }}
                />
              </div>
            </div>
          </animated.div>
        )}

        {/* Text */}
        {showText && (
          <animated.div style={textAnimation}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2992BE] via-cyan-400 to-[#173357] bg-clip-text text-transparent">
              Are You Ready?
            </h1>
            
            {/* Sparkles */}
            <animated.div
              style={sparklesAnimation}
              className="flex items-center justify-center gap-4"
            >
              <Sparkles size={24} className="text-[#2992BE] animate-pulse" />
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-cyan-400 animate-pulse" />
                <span className="text-lg sm:text-xl text-cyan-300 font-medium">
                  Building Websites That Grow Businesses
                </span>
                <Zap size={20} className="text-cyan-400 animate-pulse" />
              </div>
              <Sparkles size={24} className="text-[#2992BE] animate-pulse" />
            </animated.div>

            {/* Loading Dots */}
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-3 h-3 bg-[#2992BE] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-[#173357] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </animated.div>
        )}
      </div>

      {/* CSS for float animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
    </animated.div>
  );
};

export default LoadingScreen;

