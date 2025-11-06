import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Code, Zap, Sparkles, ArrowRight, Briefcase, Rocket } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Focus Mate",
      type: "Mobile App",
      description: "A productivity app designed to help students stay focused and distraction-free while studying. Features include study time locking, points system, badges, and motivational quotes.",
      tech: ["React Native", "Mobile Development"],
      links: {
        github: "https://github.com/MadhaArif/FocusMate2.git",
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7353396181298819072/",
        live: null
      },
      icon: <Smartphone size={32} />,
      glow: "cyan",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Campus Connect",
      type: "Web Application",
      description: "A comprehensive campus networking platform connecting students, faculty, and resources in one place. Built with modern web technologies for seamless user experience.",
      tech: ["React", "Vercel"],
      links: {
        github: null,
        linkedin: null,
        live: "https://campus-connect-au9m.vercel.app/"
      },
      icon: <Globe size={32} />,
      glow: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Client Portfolio",
      type: "Portfolio Website",
      description: "A professional portfolio website designed and developed for a client, showcasing their work, skills, and achievements with a modern, responsive design.",
      tech: ["React", "Netlify"],
      links: {
        github: null,
        linkedin: null,
        live: "https://lucky-gnome-b8e7fd.netlify.app/"
      },
      icon: <Briefcase size={32} />,
      glow: "blue",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Emotion-Driven UI",
      type: "Concept Website",
      description: "An innovative UI customization concept that adapts to user emotions, creating personalized and engaging user experiences through intelligent design.",
      tech: ["React", "UI/UX"],
      links: {
        github: null,
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7344679286093557761/",
        live: null
      },
      icon: <Code size={32} />,
      glow: "pink",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Sweet Delights",
      type: "E-commerce Website",
      description: "A beautiful e-commerce website for a bakery business, featuring product listings, shopping cart, and seamless checkout experience.",
      tech: ["React", "E-commerce"],
      links: {
        github: "https://lnkd.in/dpMH7H2J",
        linkedin: null,
        live: null
      },
      icon: <Globe size={32} />,
      glow: "green",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Uni Lost & Found",
      type: "University Platform",
      description: "A dedicated platform for university students to report and find lost items on campus, making campus life easier and more connected.",
      tech: ["React", "University Platform"],
      links: {
        github: "https://lnkd.in/d9UjuYZA",
        linkedin: null,
        live: "https://lnkd.in/d2M3AypM"
      },
      icon: <Globe size={32} />,
      glow: "yellow",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const ongoingProjects = [
    {
      title: "Media Agency Website",
      status: "In Development",
      description: "Currently building a professional website for a media agency with modern design and advanced features.",
      icon: <Rocket size={24} />
    },
    {
      title: "Startup Scaling Projects",
      status: "Active",
      description: "Helping multiple startups scale their digital presence with custom websites and digital solutions.",
      icon: <Zap size={24} />
    }
  ];

  const getGlowColor = (color) => {
    const colors = {
      cyan: 'shadow-cyan-500/50 hover:shadow-cyan-500/80',
      purple: 'shadow-purple-500/50 hover:shadow-purple-500/80',
      blue: 'shadow-blue-500/50 hover:shadow-blue-500/80',
      pink: 'shadow-pink-500/50 hover:shadow-pink-500/80',
      green: 'shadow-green-500/50 hover:shadow-green-500/80',
      yellow: 'shadow-yellow-500/50 hover:shadow-yellow-500/80'
    };
    return colors[color] || colors.cyan;
  };

  const getBorderColor = (color) => {
    const colors = {
      cyan: 'border-cyan-500/30 hover:border-cyan-400',
      purple: 'border-purple-500/30 hover:border-purple-400',
      blue: 'border-blue-500/30 hover:border-blue-400',
      pink: 'border-pink-500/30 hover:border-pink-400',
      green: 'border-green-500/30 hover:border-green-400',
      yellow: 'border-yellow-500/30 hover:border-yellow-400'
    };
    return colors[color] || colors.cyan;
  };

  const getTextGlow = (color) => {
    const colors = {
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      blue: 'text-blue-400',
      pink: 'text-pink-400',
      green: 'text-green-400',
      yellow: 'text-yellow-400'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="projects" className="my-20 sm:my-32 scroll-mt-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-fast"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-black border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300">
          <Zap size={16} className="animate-pulse" />
          OUR WORK
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#2992BE] via-[#173357] to-[#235780] bg-clip-text text-transparent mb-4 animate-pulse">
          Featured Projects
        </h2>
        <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
          Showcasing our expertise through real-world projects that deliver results
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Animated Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>

            {/* Main Card */}
            <div className={`relative bg-black/80 backdrop-blur-sm rounded-2xl p-6 border ${getBorderColor(project.glow)} shadow-2xl ${getGlowColor(project.glow)} hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}>
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`}></div>

              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${getGlowColor(project.glow)}`}>
                {project.icon}
              </div>

              {/* Project Type Badge */}
              <div className="inline-block px-3 py-1 bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 text-xs font-semibold rounded-full mb-3">
                {project.type}
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold ${getTextGlow(project.glow)} mb-3 group-hover:drop-shadow-[0_0_10px_rgba(var(--${project.glow}-500),0.5)] transition-all duration-300`}>
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-black/50 text-gray-300 text-xs rounded-lg border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold hover:scale-105 transition-all duration-300 ${getGlowColor(project.glow)}`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/50 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300"
                    title="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.links.linkedin && (
                  <a
                    href={project.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/50 border border-gray-700 text-gray-300 hover:text-[#0077B5] hover:border-[#0077B5] transition-all duration-300"
                    title="View on LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ongoing Projects Section */}
      <div className="relative z-10 mb-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2992BE] to-[#173357] bg-clip-text text-transparent mb-4">
            Currently Working On
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ongoingProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-[#141A38]/60 via-[#173357]/60 to-[#2992BE]/40 rounded-2xl p-6 border border-[#2992BE]/30 backdrop-blur-sm shadow-2xl shadow-[#2992BE]/20 hover:shadow-[#2992BE]/30 transition-all duration-500 group hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#2992BE] to-[#173357] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold text-cyan-300">{project.title}</h4>
                    <span className="px-2 py-1 bg-[#2992BE]/20 border border-[#2992BE]/50 text-[#2992BE] text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center relative z-10">
        <div className="bg-gradient-to-r from-[#141A38]/40 via-[#173357]/40 to-[#2992BE]/30 rounded-3xl p-8 md:p-12 border border-[#2992BE]/30 backdrop-blur-sm shadow-2xl shadow-[#2992BE]/20">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2992BE] to-[#173357] bg-clip-text text-transparent mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-cyan-200 mb-6 max-w-2xl mx-auto">
            Let's bring your vision to life with a website that grows your business
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2992BE] to-[#173357] text-white px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-[#2992BE]/50 transition-all duration-300 hover:scale-105"
          >
            Get Started <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Sparkles
            key={i}
            size={16}
            className="absolute text-cyan-400 opacity-40 animate-neon-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

