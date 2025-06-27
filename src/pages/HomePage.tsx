// src/pages/HomePage.tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
// import { ServicesSection } from '@/components/sections/ServicesSection';
// import { IndustriesSection } from '@/components/sections/IndustriesSection';
// import { ClientsSection } from '@/components/sections/ClientsSection';
// import { ContactSection } from '@/components/sections/ContactSection';

export const HomePage = () => {
  return (
    <main className='pt-20'>
      <HeroSection />

      <AboutSection />

      {/* Temporary sections - uncomment as you create them */}
      {/* <section
        id='about'
        className='min-h-screen bg-white flex items-center justify-center'
      >
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            About Section
          </h2>
          <p className='text-gray-600'>About component will go here</p>
        </div>
      </section> */}

      <section
        id='services'
        className='min-h-screen bg-gray-50 flex items-center justify-center'
      >
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Services Section
          </h2>
          <p className='text-gray-600'>Services component will go here</p>
        </div>
      </section>

      <section
        id='industries'
        className='min-h-screen bg-white flex items-center justify-center'
      >
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Industries Section
          </h2>
          <p className='text-gray-600'>Industries component will go here</p>
        </div>
      </section>

      <section
        id='clients'
        className='min-h-screen bg-gray-50 flex items-center justify-center'
      >
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Clients Section
          </h2>
          <p className='text-gray-600'>Clients component will go here</p>
        </div>
      </section>

      <section
        id='contact'
        className='min-h-screen bg-white flex items-center justify-center'
      >
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Contact Section
          </h2>
          <p className='text-gray-600'>Contact component will go here</p>
        </div>
      </section>

      {/* Add sections as you create them:
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ClientsSection />
      <ContactSection />
      */}
    </main>
  );
};
