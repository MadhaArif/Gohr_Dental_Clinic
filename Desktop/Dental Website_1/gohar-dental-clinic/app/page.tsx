import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
