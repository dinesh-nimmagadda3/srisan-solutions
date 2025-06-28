// src/components/sections/ClientsSection.tsx
import { useEffect, useState } from 'react';
import { Building2 } from 'lucide-react';
import { clientsContent, clientsData, partnersData } from '@/data/clients';

export const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % Math.ceil(clientsData.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Group clients into slides of 4
  const clientSlides = [];
  for (let i = 0; i < clientsData.length; i += 4) {
    clientSlides.push(clientsData.slice(i, i + 4));
  }

  return (
    <section id='clients' className='py-12 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            {clientsContent.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
            {clientsContent.subtitle}
          </p>
        </div>

        {/* Clients Carousel */}
        <div
          className='relative mb-20 bg-gray-50 rounded-2xl p-8'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Carousel Container */}
          <div className='overflow-hidden'>
            <div
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clientSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className='w-full flex-shrink-0'>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {slide.map(client => (
                      <div
                        key={client.id}
                        className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group'
                      >
                        {/* Client Logo */}
                        <div className='w-full h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                          {client.logo ? (
                            <img
                              src={client.logo}
                              alt={`${client.name} logo`}
                              className='max-h-16 max-w-full object-contain'
                            />
                          ) : (
                            <div className='text-center'>
                              <Building2 className='w-8 h-8 text-gray-400 mx-auto mb-2' />
                              <div className='text-sm font-semibold text-gray-700'>
                                {client.name}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Removed */}

          {/* Dots Indicator */}
          <div className='flex justify-center mt-6 space-x-2'>
            {clientSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-orange-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Partners Section - Simplified */}
        <div className='bg-gray-50 rounded-2xl p-8'>
          <div className='text-center mb-8'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              {clientsContent.partnersTitle}
            </h3>
            <p className='text-lg text-gray-600'>
              {clientsContent.partnersSubtitle}
            </p>
          </div>

          {/* Partners Logo Grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {partnersData.map(partner => (
              <div
                key={partner.id}
                className='bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 group'
              >
                <div className='h-12 flex items-center justify-center'>
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className='max-h-10 max-w-full object-contain transition-all duration-300'
                    />
                  ) : (
                    <div className='text-center'>
                      <div className='text-xs font-semibold text-gray-700'>
                        {partner.name}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Stats */}
        <div className='mt-16 text-center'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <div className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'>
                {clientsData.length}+
              </div>
              <div className='text-gray-600'>Global Clients</div>
            </div>

            <div>
              <div className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'>
                {partnersData.length}
              </div>
              <div className='text-gray-600'>SI Partners</div>
            </div>

            <div>
              <div className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'>
                {new Set(clientsData.map(client => client.industry)).size}
              </div>
              <div className='text-gray-600'>Industries</div>
            </div>

            <div>
              <div className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'>
                14+
              </div>
              <div className='text-gray-600'>Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
