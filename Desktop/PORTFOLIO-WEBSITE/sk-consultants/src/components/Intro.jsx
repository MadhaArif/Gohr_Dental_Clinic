import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, BarChart3, ArrowRight, Shield, Zap, Globe, Sparkles, Rocket, CheckCircle, X, CheckCircle2 } from 'lucide-react';

// Counting animation component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", glowColor = "cyan" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasStarted]);

  const getGlowColor = (color) => {
    const colors = {
      cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
      purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      blue: 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]',
      pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]',
      green: 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div ref={ref} className={`text-3xl md:text-4xl font-bold mb-2 ${getGlowColor(glowColor)}`}>
      {count}{suffix}
    </div>
  );
};

const Intro = () => {
  const [statsInView, setStatsInView] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Target size={32} />,
      title: "Website Design & Development",
      description: "Custom responsive websites with modern UI/UX design that showcase your brand and attract customers effectively.",
      gradient: "from-cyan-500 to-blue-500",
      glow: "cyan",
      buttonText: "View Services",
      details: {
        features: [
          "Custom responsive website design",
          "Modern UI/UX with mobile-first approach",
          "Cross-browser compatibility",
          "Fast loading times & optimization",
          "User-friendly navigation",
          "SEO-friendly structure"
        ],
        benefits: [
          "Professional brand representation",
          "Increased customer engagement",
          "Better conversion rates",
          "Mobile-friendly design"
        ]
      }
    },
    {
      icon: <Zap size={32} />,
      title: "E-commerce Solutions",
      description: "Powerful online stores with payment integration, product management, and shopping cart functionality.",
      gradient: "from-purple-500 to-pink-500",
      glow: "purple",
      buttonText: "Learn More",
      details: {
        features: [
          "Online store setup & configuration",
          "Payment gateway integration",
          "Product catalog management",
          "Shopping cart & checkout system",
          "Order management dashboard",
          "Inventory tracking"
        ],
        benefits: [
          "Sell products online 24/7",
          "Secure payment processing",
          "Easy product management",
          "Automated order handling"
        ]
      }
    },
    {
      icon: <Globe size={32} />,
      title: "SEO & Digital Marketing",
      description: "Boost your online visibility with SEO optimization, content marketing, and performance analytics.",
      gradient: "from-blue-500 to-cyan-500",
      glow: "blue",
      buttonText: "Explore",
      details: {
        features: [
          "SEO optimization & keyword research",
          "Content marketing strategy",
          "Social media management",
          "Performance analytics & reporting",
          "Google Ads management",
          "Local SEO optimization"
        ],
        benefits: [
          "Higher search engine rankings",
          "Increased website traffic",
          "Better online visibility",
          "Measurable growth metrics"
        ]
      }
    },
    {
      icon: <Shield size={32} />,
      title: "Website Maintenance",
      description: "Ongoing support, regular updates, security monitoring, and technical assistance to keep your site running smoothly.",
      gradient: "from-green-500 to-cyan-500",
      glow: "green",
      buttonText: "Get Support",
      details: {
        features: [
          "Regular security updates",
          "Performance monitoring",
          "Backup & recovery services",
          "Content updates & changes",
          "Technical support & troubleshooting",
          "Plugin & software updates"
        ],
        benefits: [
          "Always up-to-date website",
          "Protected against threats",
          "Peace of mind",
          "Continuous improvements"
        ]
      }
    }
  ];

  const keyFeatures = [
    {
      icon: <Target size={24} />,
      title: "Responsive Design",
      description: "Mobile-first approach",
      glow: "cyan"
    },
    {
      icon: <Zap size={24} />,
      title: "Fast Performance",
      description: "Optimized & quick loading",
      glow: "purple"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "SEO Optimized",
      description: "Better search rankings",
      glow: "blue"
    }
  ];

  return (
    <section id="about-us" className="text-center my-16 sm:my-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
      
      {/* Header Section */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-black border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300">
          <Rocket size={16} className="animate-pulse" />
          FUTURE-READY SOLUTIONS
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold bg-gradient-to-r from-[#2992BE] via-[#173357] to-[#235780] bg-clip-text text-transparent mb-6 animate-pulse">
          About MA Bytes
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16">
          MA Bytes is a growing online agency based in Lahore, Pakistan, dedicated to helping local and small businesses build a strong digital presence.
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
          We specialize in creating high-quality, responsive websites that showcase your brand and attract customers. Through our collaboration with expert digital marketers, we also help businesses scale their online reach and achieve measurable growth. Our goal is simple — to turn your vision into a successful digital experience.
        </p>
        
        {/* Trust & Credibility Badge */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-[#141A38]/60 via-[#173357]/60 to-[#2992BE]/40 rounded-2xl p-6 border border-[#2992BE]/30 backdrop-blur-sm shadow-2xl shadow-[#2992BE]/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2992BE] to-[#173357] flex items-center justify-center">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cyan-300">100% Online Business</h4>
                  <p className="text-sm text-gray-400">Fully Digital & Trustworthy</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#2992BE]/30"></div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#173357] to-[#235780] flex items-center justify-center">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cyan-300">Verified & Reliable</h4>
                  <p className="text-sm text-gray-400">Secure Online Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid - Neon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Animated Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
            
            {/* Main Card */}
            <div className={`relative bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-${service.glow}-500/30 shadow-2xl shadow-${service.glow}-500/20 hover:shadow-${service.glow}-400/30 transition-all duration-500 group-hover:-translate-y-2`}>
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`}></div>
              
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${service.glow}-500/50`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className={`text-xl font-bold text-${service.glow}-300 mb-4 group-hover:drop-shadow-[0_0_10px_rgba(var(--${service.glow}-500),0.5)] transition-all duration-300`}>
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* CTA */}
              <button
                onClick={() => setSelectedService(service)}
                className="w-full flex items-center justify-center text-cyan-400 font-semibold hover:translate-x-2 transition-transform duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] cursor-pointer"
              >
                {service.buttonText} <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Why Choose Us Section - MA BYTES Theme */}
      <div className="relative bg-gradient-to-r from-[#141A38]/40 via-[#173357]/40 to-[#2992BE]/30 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 overflow-hidden border border-[#2992BE]/30 backdrop-blur-sm">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2992BE] rounded-full -translate-y-32 translate-x-32 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#173357] rounded-full translate-y-24 -translate-x-24 animate-pulse-medium"></div>
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="relative flex flex-col lg:flex-row items-center gap-8 z-10">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#2992BE]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-[#2992BE]/30">
              <Zap className="text-[#2992BE]" size={20} />
              <span className="text-[#2992BE] font-semibold text-sm">OUR EXPERTISE</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2992BE] to-[#173357] bg-clip-text text-transparent mb-4">
              Why Choose MA Bytes?
            </h3>
            <p className="text-cyan-100 text-lg md:text-xl leading-relaxed mb-6">
              We specialize in creating <span className="text-[#2992BE] font-semibold">high-quality, responsive websites</span> that showcase your brand and attract customers. 
              Our team combines <span className="text-cyan-300 font-semibold">modern design</span> with <span className="text-blue-300 font-semibold">smart digital strategies</span> to help local businesses 
              grow faster and reach more customers online. From custom websites to e-commerce solutions, we turn your vision into a successful digital experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-gradient-to-r from-[#2992BE] to-[#173357] text-white px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#2992BE]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                GET STARTED <ArrowRight size={20} />
              </a>
              <a href="#services" className="border-2 border-[#2992BE] text-[#2992BE] px-8 py-3 rounded-xl font-bold hover:bg-[#2992BE]/10 transition-all duration-300 backdrop-blur-sm hover:shadow-[#2992BE]/25 hover:shadow-2xl">
                VIEW OUR SERVICES
              </a>
            </div>
          </div>
          
          {/* Right Features */}
          <div className="flex flex-col gap-4">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`bg-${feature.glow}-500/10 backdrop-blur-sm rounded-2xl p-6 border border-${feature.glow}-500/30 hover:bg-${feature.glow}-500/15 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-${feature.glow}-500/20 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-${feature.glow}-500/30`}>
                    {React.cloneElement(feature.icon, { className: `text-${feature.glow}-400` })}
                  </div>
                  <div>
                    <h4 className={`text-white font-bold text-lg text-${feature.glow}-300`}>{feature.title}</h4>
                    <p className={`text-${feature.glow}-200 text-sm`}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Stats Section - Neon Theme */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10">
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <AnimatedCounter 
            end={50} 
            duration={2000} 
            suffix="+" 
            glowColor="cyan"
          />
          <div className="text-cyan-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] transition-all duration-300">Happy Clients</div>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3 group-hover:bg-cyan-400 transition-colors duration-300"></div>
        </div>
        
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <AnimatedCounter 
            end={100} 
            duration={2200} 
            suffix="+" 
            glowColor="purple"
          />
          <div className="text-purple-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-all duration-300">Projects Completed</div>
          <div className="w-12 h-1 bg-purple-500 rounded-full mx-auto mt-3 group-hover:bg-purple-400 transition-colors duration-300"></div>
        </div>
        
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">24/7</div>
          <div className="text-blue-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-all duration-300">Support Available</div>
          <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mt-3 group-hover:bg-blue-400 transition-colors duration-300"></div>
        </div>
        
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <AnimatedCounter 
            end={98} 
            duration={1800} 
            suffix="%" 
            glowColor="pink"
          />
          <div className="text-pink-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.3)] transition-all duration-300">Client Satisfaction</div>
          <div className="w-12 h-1 bg-pink-500 rounded-full mx-auto mt-3 group-hover:bg-pink-400 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Animated Decorative Elements */}
      <div className="mt-16 flex justify-center space-x-4">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-500/50"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-500/50" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-500/50" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-500/50" style={{ animationDelay: '0.3s' }}></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Sparkles
            key={i}
            size={16}
            className={`absolute text-cyan-400 opacity-40 animate-neon-float-slow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative bg-gradient-to-br from-[#141A38] via-[#173357] to-[#235780] rounded-3xl border-2 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl"
            style={{
              borderColor: selectedService.glow === 'cyan' ? 'rgba(34, 211, 238, 0.5)' :
                          selectedService.glow === 'purple' ? 'rgba(168, 85, 247, 0.5)' :
                          selectedService.glow === 'blue' ? 'rgba(59, 130, 246, 0.5)' :
                          'rgba(34, 197, 94, 0.5)',
              boxShadow: selectedService.glow === 'cyan' ? '0 25px 50px -12px rgba(34, 211, 238, 0.3)' :
                        selectedService.glow === 'purple' ? '0 25px 50px -12px rgba(168, 85, 247, 0.3)' :
                        selectedService.glow === 'blue' ? '0 25px 50px -12px rgba(59, 130, 246, 0.3)' :
                        '0 25px 50px -12px rgba(34, 197, 94, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 border border-gray-600 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <X size={20} className="text-gray-300 hover:text-cyan-400" />
            </button>

            {/* Header */}
            <div className={`bg-gradient-to-r ${selectedService.gradient} p-6 rounded-t-3xl`}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h3>
                  <p className="text-white/90">{selectedService.description}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Features Section */}
              <div>
                <h4 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                  <Sparkles 
                    size={20} 
                    style={{
                      color: selectedService.glow === 'cyan' ? '#22d3ee' :
                             selectedService.glow === 'purple' ? '#a855f7' :
                             selectedService.glow === 'blue' ? '#3b82f6' :
                             '#22c55e'
                    }}
                  />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.details.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-black/30 rounded-lg p-3 border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                      <CheckCircle2 
                        size={20} 
                        className="flex-shrink-0 mt-0.5"
                        style={{
                          color: selectedService.glow === 'cyan' ? '#22d3ee' :
                                 selectedService.glow === 'purple' ? '#a855f7' :
                                 selectedService.glow === 'blue' ? '#3b82f6' :
                                 '#22c55e'
                        }}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <h4 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                  <Rocket 
                    size={20}
                    style={{
                      color: selectedService.glow === 'cyan' ? '#22d3ee' :
                             selectedService.glow === 'purple' ? '#a855f7' :
                             selectedService.glow === 'blue' ? '#3b82f6' :
                             '#22c55e'
                    }}
                  />
                  Benefits
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.details.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-black/30 rounded-lg p-3 border border-gray-700/50 hover:border-cyan-500/50 transition-all">
                      <CheckCircle 
                        size={20} 
                        className="flex-shrink-0 mt-0.5"
                        style={{
                          color: selectedService.glow === 'cyan' ? '#22d3ee' :
                                 selectedService.glow === 'purple' ? '#a855f7' :
                                 selectedService.glow === 'blue' ? '#3b82f6' :
                                 '#22c55e'
                        }}
                      />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className={`flex-1 bg-gradient-to-r ${selectedService.gradient} text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:scale-105`}
                  style={{
                    boxShadow: selectedService.glow === 'cyan' ? '0 10px 25px -5px rgba(34, 211, 238, 0.5)' :
                              selectedService.glow === 'purple' ? '0 10px 25px -5px rgba(168, 85, 247, 0.5)' :
                              selectedService.glow === 'blue' ? '0 10px 25px -5px rgba(59, 130, 246, 0.5)' :
                              '0 10px 25px -5px rgba(34, 197, 94, 0.5)'
                  }}
                >
                  Get Started
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Intro;