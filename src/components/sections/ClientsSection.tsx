import { useEffect, useState, useMemo, useCallback } from 'react';
import { Building2 } from 'lucide-react';
import { clientsContent, clientsData, partnersData } from '@/data/clients';

export const ClientsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Memoize client slides to avoid recalculation
  const clientSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < clientsData.length; i += 4) {
      slides.push(clientsData.slice(i, i + 4));
    }
    return slides;
  }, []);

  // Memoize stats calculations
  const stats = useMemo(
    () => ({
      totalClients: clientsData.length,
      totalPartners: partnersData.length,
      totalIndustries: new Set(clientsData.map(client => client.industry)).size,
      yearsExperience: 14,
    }),
    []
  );

  // Memoized navigation functions
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % clientSlides.length);
  }, [clientSlides.length]);

  // Pause/resume handlers
  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  // Auto-scroll functionality with cleanup
  useEffect(() => {
    if (!isAutoPlaying || clientSlides.length <= 1) return;

    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, clientSlides.length]);

  return (
    <section
      id='clients'
      className='py-12 bg-gray-50'
      aria-labelledby='clients-heading'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <header className='text-center mb-16'>
          <h2
            id='clients-heading'
            className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'
          >
            {clientsContent.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
            {clientsContent.subtitle}
          </p>
        </header>

        {/* Clients Carousel */}
        {clientSlides.length > 0 && (
          <div
            className='relative mb-12 p-8'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role='region'
            aria-label='Client logos carousel'
            aria-describedby='carousel-instructions'
          >
            <div id='carousel-instructions' className='sr-only'>
              Use the navigation dots below or arrow keys to browse through our
              client logos. Carousel auto-advances every 3 seconds, pause by
              hovering over the content.
            </div>

            {/* Carousel Container */}
            <div
              className='overflow-hidden'
              aria-live='polite'
              aria-atomic='false'
            >
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                role='group'
                aria-label={`Slide ${currentIndex + 1} of ${clientSlides.length}`}
              >
                {clientSlides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className='w-full flex-shrink-0'
                    role='tabpanel'
                    aria-label={`Client group ${slideIndex + 1}`}
                  >
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                      {slide.map(client => (
                        <div
                          key={client.id}
                          className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group'
                          role='img'
                          aria-label={`${client.name} from ${client.location}, ${client.industry} industry`}
                        >
                          {/* Client Logo */}
                          <div className='w-full h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
                            {client.logo ? (
                              <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className='max-h-16 max-w-full object-contain'
                                loading='lazy'
                                onError={e => {
                                  e.currentTarget.style.display = 'none';
                                  const fallback =
                                    e.currentTarget.parentElement?.querySelector(
                                      '.fallback-logo'
                                    ) as HTMLElement;
                                  if (fallback) {
                                    fallback.style.display = 'block';
                                  }
                                }}
                              />
                            ) : null}
                            <div
                              className={`text-center fallback-logo ${client.logo ? 'hidden' : 'block'}`}
                            >
                              <Building2
                                className='w-8 h-8 text-gray-400 mx-auto mb-2'
                                aria-hidden='true'
                              />
                              <div className='text-sm font-semibold text-gray-700'>
                                {client.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            {clientSlides.length > 1 && (
              <nav
                className='flex justify-center mt-6 space-x-2'
                role='tablist'
                aria-label='Carousel navigation'
              >
                {clientSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                      index === currentIndex
                        ? 'bg-orange-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    role='tab'
                    aria-selected={index === currentIndex}
                    aria-label={`Go to slide ${index + 1} of ${clientSlides.length}`}
                    aria-controls={`slide-panel-${index}`}
                  />
                ))}
              </nav>
            )}
          </div>
        )}

        {/* Partners Section */}
        <div className='rounded-2xl'>
          <header className='text-center mb-8'>
            <h3
              className='text-3xl font-bold text-gray-900 mb-4'
              id='partners-heading'
            >
              {clientsContent.partnersTitle}
            </h3>
            <p className='text-lg text-gray-600'>
              {clientsContent.partnersSubtitle}
            </p>
          </header>

          {/* Partners Logo Grid */}
          <div
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'
            role='region'
            aria-labelledby='partners-heading'
          >
            {partnersData.map(partner => (
              <div
                key={partner.id}
                className='bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 group'
                role='img'
                aria-label={`${partner.name} - ${partner.description}`}
              >
                <div className='h-12 flex items-center justify-center'>
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className='max-h-10 max-w-full object-contain transition-all duration-300'
                      loading='lazy'
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget
                          .nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'block';
                        }
                      }}
                    />
                  ) : null}
                  <div
                    className={`text-center ${partner.logo ? 'hidden' : 'block'}`}
                  >
                    <div className='text-xs font-semibold text-gray-700'>
                      {partner.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div
          className='mt-16 text-center'
          role='region'
          aria-label='Company statistics'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div role='group' aria-labelledby='stat-clients'>
              <div
                className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'
                aria-label={`${stats.totalClients} plus global clients`}
              >
                {stats.totalClients}+
              </div>
              <div id='stat-clients' className='text-gray-600'>
                Global Clients
              </div>
            </div>

            <div role='group' aria-labelledby='stat-partners'>
              <div
                className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'
                aria-label={`${stats.totalPartners} SI partners`}
              >
                {stats.totalPartners}
              </div>
              <div id='stat-partners' className='text-gray-600'>
                SI Partners
              </div>
            </div>

            <div role='group' aria-labelledby='stat-industries'>
              <div
                className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'
                aria-label={`${stats.totalIndustries} different industries served`}
              >
                {stats.totalIndustries}
              </div>
              <div id='stat-industries' className='text-gray-600'>
                Industries
              </div>
            </div>

            <div role='group' aria-labelledby='stat-experience'>
              <div
                className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'
                aria-label={`${stats.yearsExperience} plus years of experience`}
              >
                {stats.yearsExperience}+
              </div>
              <div id='stat-experience' className='text-gray-600'>
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
