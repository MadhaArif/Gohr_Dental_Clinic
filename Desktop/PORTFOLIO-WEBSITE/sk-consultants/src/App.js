import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen on every page load/reload
    // The LoadingScreen component will handle the timing
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Ensure page is at top when loading completes
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }, 50);
  };

  return (
    <div className="font-sans text-gray-100 bg-black relative overflow-hidden">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* Main Content - hide until loading is complete */}
      {!isLoading && (
        <>
      {/* Global Animated Background */}
      <AnimatedBackground />
      
      {/* Animated Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Animated Glow Orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="fixed bottom-1/4 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="fixed top-3/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-fast"></div>

      {/* Main Content Container with Neon Border Effect */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>
        
        {/* Animated Scan Lines */}
        <div className="fixed inset-0 bg-[linear-gradient(transparent_95%,rgba(0,255,255,0.03)_100%)] bg-[size:100%_4px] pointer-events-none animate-scanlines z-20"></div>

        <Navbar />
        <Header id="home" />
        <main className="container mx-auto px-4 py-8 relative">
          {/* Section Connector Lines */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden md:block"></div>
          
          <Intro id="about-us" />
          <div className="my-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          </div>
          <Services id="services" />
          <div className="my-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          </div>
          <Projects id="projects" />
          <div className="my-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          <WhyChooseUs id="why-us" />
          <div className="my-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          <ContactSection id="contact" />
        </main>
        <Footer />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/923061610701?text=Hello%20MA%20BYTES!%0A%0A%F0%9F%9A%80%20Building%20Websites%20That%20Grow%20Businesses%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20website%20design%20and%20development%20services." 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-400/60 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        
        {/* Email Button */}
        <a 
          href="mailto:mabytes2025@gmail.com" 
          className="w-12 h-12 bg-gradient-to-br from-[#2992BE] to-[#173357] rounded-full shadow-2xl shadow-[#2992BE]/50 hover:shadow-[#2992BE]/60 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white group"
          title="Send Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        
        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/60 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white animate-bounce-slow"
          title="Scroll to Top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

      {/* Loading Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 transform origin-left scale-x-0 animate-loading-bar z-50"></div>
        </>
      )}
    </div>
  );
};

export default App;