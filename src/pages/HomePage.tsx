import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const HomePage = () => {
  return (
    <main className='pt-20'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
};
