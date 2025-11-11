import HeroSection from '@/components/sections/hero-section';
import FeaturedSongsSection from '@/components/sections/featured-songs-section';
import FeaturesGridSection from '@/components/sections/features-grid-section';
import MobileAppSection from '@/components/sections/mobile-app-section';
import TestimonialVideosSection from '@/components/sections/testimonial-videos-section';
import FooterSection from '@/components/sections/footer-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101012]">
      <HeroSection />
      <FeaturedSongsSection />
      <FeaturesGridSection />
      <MobileAppSection />
      <TestimonialVideosSection />
      <FooterSection />
    </main>
  );
}