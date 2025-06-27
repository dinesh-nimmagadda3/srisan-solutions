import { useState, useEffect } from 'react';
import { heroSlides } from '@/data/heroImages';
import { scrollToSection } from '@/utils/scrollTo';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  const handleLearnMore = () => {
    scrollToSection('about');
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id='home' className='min-h-screen relative overflow-hidden'>
      {/* Slide Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className='absolute inset-0 bg-black/50'></div>
        </div>
      ))}

      {/* Content */}
      <div className='relative z-10 min-h-screen flex items-center'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='max-w-2xl'>
            {/* SSL Logo */}
            <div className='flex items-center mb-8'>
              <img
                src='/ssl-logo.png'
                alt='SSL Solutions Logo'
                className='h-16 md:h-20 w-auto drop-shadow-lg mr-4'
              />
              <div>
                <h1 className='text-white text-2xl md:text-3xl font-bold'>
                  SSL Solutions Limited
                </h1>
                <p className='text-orange-300 text-sm md:text-base font-medium'>
                  BOUTIQUE SAP CONSULTING
                </p>
              </div>
            </div>

            {/* Dynamic Content */}
            <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 leading-tight'>
              {heroSlides[currentSlide].title}
            </h2>
            <h3 className='text-3xl md:text-4xl font-light text-white mb-6'>
              {heroSlides[currentSlide].subtitle}
            </h3>

            <p className='text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl'>
              {heroSlides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={handleGetStarted}
                className='bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg'
              >
                Get Started
              </button>

              <button
                onClick={handleLearnMore}
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200'
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex space-x-3'>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide(
            prev => (prev - 1 + heroSlides.length) % heroSlides.length
          )
        }
        className='absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200'
        aria-label='Previous slide'
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
            d='M15 19l-7-7 7-7'
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
        className='absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200'
        aria-label='Next slide'
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
            d='M9 5l7 7-7 7'
          />
        </svg>
      </button>
    </section>
  );
};
