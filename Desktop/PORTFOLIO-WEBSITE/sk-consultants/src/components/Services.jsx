import React, { useState } from 'react';
import { ChartLine, Database, FileSpreadsheet, Users, Target, ArrowRight, CheckCircle, Play, MessageCircle, Settings, BarChart3, Zap, Sparkles } from 'lucide-react';

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <ChartLine size={48} />,
      title: 'Website Design & Development',
      items: [
        'Custom responsive websites',
        'Modern UI/UX design',
        'Mobile-first approach',
        'Cross-browser compatibility',
      ],
      glow: 'blue'
    },
    {
      icon: <Database size={48} />,
      title: 'E-commerce Development',
      items: [
        'Online store setup',
        'Payment gateway integration',
        'Product management systems',
        'Shopping cart functionality',
      ],
      glow: 'green'
    },
    {
      icon: <FileSpreadsheet size={48} />,
      title: 'SEO & Digital Marketing',
      items: [
        'SEO optimization',
        'Content marketing',
        'Social media management',
        'Performance analytics',
      ],
      glow: 'purple'
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and vision to create a strategic website plan.",
      icon: <MessageCircle size={24} />
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our team creates beautiful, responsive designs and builds your website with modern technologies.",
      icon: <FileSpreadsheet size={24} />
    },
    {
      number: "03",
      title: "Review & Refinement",
      description: "You review the website, provide feedback, and we refine until it's perfect for your brand.",
      icon: <Settings size={24} />
    },
    {
      number: "04",
      title: "Launch & Optimization",
      description: "We launch your website and optimize it for speed, SEO, and user experience.",
      icon: <BarChart3 size={24} />
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "Continuous maintenance, updates, and support to keep your website running smoothly.",
      icon: <ArrowRight size={24} />
    }
  ];

  const businessSolutions = [
    {
      title: "Business Landing Pages",
      subtitle: "High-Converting Pages",
      description: "Create stunning landing pages that convert visitors into customers with strategic design and compelling copy.",
      features: ["Fast loading", "Mobile responsive", "SEO optimized", "Conversion focused"],
      glow: 'cyan',
      icon: <Users size={32} />
    },
    {
      title: "Website Maintenance",
      subtitle: "Ongoing Support",
      description: "Keep your website running smoothly with regular updates, security patches, and technical support.",
      features: ["Regular updates", "Security monitoring", "Backup & recovery", "Performance optimization"],
      glow: 'pink',
      icon: <Target size={32} />
    }
  ];

  const getGlowColor = (color) => {
    const colors = {
      blue: 'shadow-blue-500/50 hover:shadow-blue-500/80',
      green: 'shadow-green-500/50 hover:shadow-green-500/80',
      purple: 'shadow-purple-500/50 hover:shadow-purple-500/80',
      cyan: 'shadow-cyan-500/50 hover:shadow-cyan-500/80',
      pink: 'shadow-pink-500/50 hover:shadow-pink-500/80'
    };
    return colors[color] || colors.blue;
  };

  const getBorderColor = (color) => {
    const colors = {
      blue: 'border-blue-500/30 hover:border-blue-400',
      green: 'border-green-500/30 hover:border-green-400',
      purple: 'border-purple-500/30 hover:border-purple-400',
      cyan: 'border-cyan-500/30 hover:border-cyan-400',
      pink: 'border-pink-500/30 hover:border-pink-400'
    };
    return colors[color] || colors.blue;
  };

  const getTextGlow = (color) => {
    const colors = {
      blue: 'text-blue-400',
      green: 'text-green-400',
      purple: 'text-purple-400',
      cyan: 'text-cyan-400',
      pink: 'text-pink-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="services" className="my-20 sm:my-32 scroll-mt-20 px-4 bg-black">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-black border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300">
          <Zap size={16} className="animate-pulse" />
          FUTURE-READY SOLUTIONS
        </div>
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2992BE] via-[#173357] to-[#235780] bg-clip-text text-transparent mb-6 animate-pulse">
          Our Services
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Professional website solutions that help your business grow and reach more customers online
        </p>
      </div>

      {/* Main Services - Neon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => {
          // Map service titles to IDs
          const serviceIds = {
            'Website Design & Development': 'website-design',
            'E-commerce Development': 'ecommerce',
            'SEO & Digital Marketing': 'seo'
          };
          const serviceId = serviceIds[service.title] || `service-${index}`;
          
          return (
          <div
            key={index}
            id={serviceId}
            className="group relative scroll-mt-24"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Animated Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${service.glow}-500 to-${service.glow}-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse`}></div>
            
            {/* Main Card */}
            <div className={`relative bg-black rounded-2xl p-8 border ${getBorderColor(service.glow)} shadow-2xl ${getGlowColor(service.glow)} hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 backdrop-blur-sm`}>
              {/* Animated Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-${service.glow}-500 to-${service.glow}-700 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${getGlowColor(service.glow)}`}>
                {service.icon}
              </div>
              
              <h3 className={`text-2xl font-bold ${getTextGlow(service.glow)} mb-4`}>
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-gray-300">
                    <Sparkles size={16} className={`${getTextGlow(service.glow)}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          );
        })}
      </div>

      {/* How It Works - Neon Process */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2992BE] to-[#173357] bg-clip-text text-transparent mb-4">
            OUR WORK PROCESS
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A streamlined approach to building your perfect website
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Process Steps */}
          <div className="flex flex-col space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl transition-all duration-500 border backdrop-blur-sm ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-cyan-400/50 shadow-2xl shadow-cyan-500/25' 
                    : 'bg-black/50 border-gray-700 shadow-lg shadow-blue-500/10 hover:shadow-cyan-500/20'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Number with Glow */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-500 scale-110 shadow-cyan-500/50' 
                    : 'bg-gradient-to-br from-gray-700 to-gray-800 group-hover:from-cyan-900 group-hover:to-blue-900'
                }`}>
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h4 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                    activeStep === index ? 'text-cyan-300' : 'text-gray-300 group-hover:text-cyan-200'
                  }`}>
                    {step.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Solutions - Neon Cards */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#235780] to-[#2992BE] bg-clip-text text-transparent mb-4">
            ADDITIONAL SERVICES
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expand your online presence with our comprehensive digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {businessSolutions.map((solution, index) => {
            // Map solution titles to IDs
            const solutionIds = {
              'Business Landing Pages': 'landing-pages',
              'Website Maintenance': 'maintenance'
            };
            const solutionId = solutionIds[solution.title] || `solution-${index}`;
            
            return (
            <div
              key={index}
              id={solutionId}
              className="group relative overflow-hidden rounded-2xl bg-black border backdrop-blur-sm shadow-2xl transition-all duration-500 hover:-translate-y-2 scroll-mt-24"
              style={{
                borderColor: `rgba(var(--${solution.glow}-500), 0.3)`,
                boxShadow: `0 0 50px rgba(var(--${solution.glow}-500), 0.2)`
              }}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${solution.glow}-900/20 to-${solution.glow}-700/10 opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-${solution.glow}-500 to-${solution.glow}-700 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${getGlowColor(solution.glow)}`}>
                  {solution.icon}
                </div>
                
                <h4 className={`text-2xl font-bold ${getTextGlow(solution.glow)} mb-2`}>
                  {solution.title}
                </h4>
                <p className="text-lg text-gray-400 mb-2 font-semibold">
                  {solution.subtitle}
                </p>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {solution.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle size={20} className={getTextGlow(solution.glow)} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = '#contact';
                    const element = document.getElementById('contact');
                    if (element) {
                      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'smooth',
                      });
                    }
                  }}
                  className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-${solution.glow}-500 to-${solution.glow}-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${getGlowColor(solution.glow)} flex items-center justify-center gap-2`}
                >
                  ACTIVATE <ArrowRight size={18} />
                </a>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section - Neon Glow */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 rounded-3xl p-12 text-white shadow-2xl border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2992BE] via-[#173357] to-[#235780] bg-clip-text text-transparent mb-4 relative z-10">
            READY TO GET STARTED?
          </h3>
          <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto relative z-10">
            Let's build a powerful website that grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="#contact" className="bg-gradient-to-r from-[#2992BE] to-[#173357] text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#2992BE]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              GET STARTED <ArrowRight size={20} />
            </a>
            <a href="#contact" className="border-2 border-[#2992BE] text-[#2992BE] px-8 py-4 rounded-xl font-bold hover:bg-[#2992BE]/10 transition-all duration-300 backdrop-blur-sm hover:shadow-[#2992BE]/25 hover:shadow-2xl">
              CONTACT US
            </a>
          </div>
        </div>
      </div>

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;