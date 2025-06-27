// src/components/sections/HeroSection.tsx
import { companyInfo } from '@/data/company';
import { scrollToSection } from '@/utils/scrollTo';

export const HeroSection = () => {
  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  const handleLearnMore = () => {
    scrollToSection('about');
  };

  return (
    <section
      id='home'
      className='min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 flex items-center justify-center relative overflow-hidden'
    >
      {/* Background Pattern
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div> */}

      <div className='max-w-6xl mx-auto px-6 text-center relative z-10'>
        {/* Main Heading */}
        <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
          <span className='block'>{companyInfo.name.split(' ')[0]}</span>
          <span className='block text-4xl md:text-5xl font-medium text-blue-200 mt-2'>
            Solutions Limited
          </span>
        </h1>

        {/* Tagline */}
        <p className='text-xl md:text-3xl text-blue-100 mb-8 font-light'>
          {companyInfo.tagline}
        </p>

        {/* Description */}
        <p className='text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed opacity-90'>
          {companyInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button
            onClick={handleGetStarted}
            className='bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg'
          >
            Get Started
          </button>

          <button
            onClick={handleLearnMore}
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all duration-200'
          >
            Learn More
          </button>
        </div>

        {/* Stats or Features */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
              {new Date().getFullYear() - companyInfo.founded}+
            </div>
            <div className='text-blue-200'>Years of Experience</div>
          </div>

          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
              100%
            </div>
            <div className='text-blue-200'>SAP Focused</div>
          </div>

          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-white mb-2'>
              24/7
            </div>
            <div className='text-blue-200'>Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <button
          onClick={handleLearnMore}
          className='text-white opacity-70 hover:opacity-100 transition-opacity duration-200'
          aria-label='Scroll to learn more'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
