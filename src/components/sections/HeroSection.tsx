import { useState, useEffect, useCallback, useMemo } from 'react';
import { heroSlides } from '@/data/herosection';
import { scrollToSection } from '@/utils/scrollTo';

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize slides length to avoid recalculation
  const slidesLength = useMemo(() => heroSlides.length, []);

  // Memoized navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slidesLength);
  }, [slidesLength]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slidesLength) % slidesLength);
  }, [slidesLength]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (slidesLength <= 1) return;

    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide, slidesLength]);

  const handleGetStarted = useCallback(() => {
    scrollToSection('contact');
  }, []);

  const handleLearnMore = useCallback(() => {
    scrollToSection('about');
  }, []);

  // Current slide data
  const currentSlideData = useMemo(
    () => heroSlides[currentSlide],
    [currentSlide]
  );

  return (
    <section
      id='home'
      className='min-h-screen relative overflow-hidden'
      role='banner'
      aria-label='Hero section with company introduction'
    >
      {/* Slide Images */}
      <div
        className='absolute inset-0'
        role='img'
        aria-label={`Background image: ${currentSlideData.title}`}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden={index !== currentSlide}
          >
            {/* Dark overlay for text readability */}
            <div
              className='absolute inset-0 bg-black/50'
              aria-hidden='true'
            ></div>
          </div>
        ))}
      </div>

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
                loading='eager'
                onError={e => {
                  e.currentTarget.style.display = 'none';
                }}
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
            <div
              role='region'
              aria-live='polite'
              aria-label='Slideshow content'
              key={currentSlide} // Force re-render for screen readers
            >
              <h2 className='text-4xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                {currentSlideData.title}
              </h2>
              <h3 className='text-3xl md:text-4xl font-light text-white mb-6'>
                {currentSlideData.subtitle}
              </h3>

              <p className='text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl'>
                {currentSlideData.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className='flex flex-col sm:flex-row gap-4'
              role='group'
              aria-label='Call to action buttons'
            >
              <button
                onClick={handleGetStarted}
                className='bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                aria-describedby='get-started-desc'
              >
                Get Started
              </button>
              <span id='get-started-desc' className='sr-only'>
                Navigate to contact section to start your SAP journey
              </span>

              <button
                onClick={handleLearnMore}
                className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                aria-describedby='learn-more-desc'
              >
                Learn More
              </button>
              <span id='learn-more-desc' className='sr-only'>
                Navigate to about section to learn more about our company
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {slidesLength > 1 && (
        <div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
          role='tablist'
          aria-label='Slideshow navigation'
        >
          <div className='flex space-x-3'>
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                role='tab'
                aria-selected={index === currentSlide}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-controls={`slide-${index}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation Arrows */}
      {slidesLength > 1 && (
        <>
          <button
            onClick={prevSlide}
            className='absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
            aria-label={`Previous slide. Currently showing slide ${currentSlide + 1} of ${slidesLength}`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
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
            onClick={nextSlide}
            className='absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
            aria-label={`Next slide. Currently showing slide ${currentSlide + 1} of ${slidesLength}`}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </>
      )}

      {/* Screen reader only slide content */}
      <div className='sr-only'>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide-${index}`}
            role='tabpanel'
            aria-labelledby={`slide-tab-${index}`}
            aria-hidden={index !== currentSlide}
          >
            <h2>{slide.title}</h2>
            <h3>{slide.subtitle}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
