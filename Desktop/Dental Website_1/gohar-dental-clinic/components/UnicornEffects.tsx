'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollParallax({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

export function GlassMorphism({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

export function MagneticButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const moveX = x * force * 0.3;
        const moveY = y * force * 0.3;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

export function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      time += 0.01;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `rgba(14, 165, 233, ${0.1 + Math.sin(time) * 0.05})`);
      gradient.addColorStop(0.5, `rgba(6, 182, 212, ${0.1 + Math.cos(time) * 0.05})`);
      gradient.addColorStop(1, `rgba(34, 211, 238, ${0.1 + Math.sin(time + 1) * 0.05})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw liquid blobs
      for (let i = 0; i < 5; i++) {
        const x = canvas.width / 2 + Math.sin(time + i) * 200;
        const y = canvas.height / 2 + Math.cos(time + i) * 150;
        const radius = 100 + Math.sin(time * 2 + i) * 30;

        const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        blobGradient.addColorStop(0, 'rgba(14, 165, 233, 0.2)');
        blobGradient.addColorStop(1, 'rgba(14, 165, 233, 0)');

        ctx.fillStyle = blobGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ filter: 'blur(60px)' }}
    />
  );
}
