import { ArrowLeft, Building2, ArrowRight, Globe, Star } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { clientsData, partnersData } from '@/data/clients';
import { clientsPageContent } from '@/data/clientspage';

// // Group clients by industry for better organization
// const clientsByIndustry = {
//   'Healthcare & Pharmaceuticals': clientsData.filter(
//     client => client.industry === 'Healthcare & Pharmaceuticals'
//   ),
//   'Oil & Gas': clientsData.filter(client => client.industry === 'Oil & Gas'),
//   'Electronics & Semiconductors': clientsData.filter(
//     client => client.industry === 'Electronics & Semiconductors'
//   ),
//   'Retail & Consumer Goods': clientsData.filter(
//     client => client.industry === 'Retail & Consumer Goods'
//   ),
// };

export const ClientsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentClientSlide, setCurrentClientSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleContactPage = () => {
    window.location.href = '/contact';
  };

  // Create client slides (4 clients per slide)
  const clientSlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < clientsData.length; i += 4) {
      slides.push(clientsData.slice(i, i + 4));
    }
    return slides;
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    if (clientsPageContent.testimonials.testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentTestimonial(
        prev => (prev + 1) % clientsPageContent.testimonials.testimonials.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Auto-advance client slides
  useEffect(() => {
    if (!isAutoPlaying || clientSlides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentClientSlide(prev => (prev + 1) % clientSlides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, clientSlides.length]);

  const handleMouseEnter = useCallback(() => setIsAutoPlaying(false), []);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);

  const goToClientSlide = useCallback((index: number) => {
    setCurrentClientSlide(index);
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentTestimonial(index);
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <img
                src='/ssl-logo.png'
                alt='SSL Solutions Logo'
                className='h-12 w-auto'
                onError={e => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div>
                <h1 className='text-xl font-bold text-gray-900'>
                  SSL Solutions Limited
                </h1>
                <p className='text-orange-600 text-sm font-medium'>
                  BOUTIQUE SAP CONSULTING
                </p>
              </div>
            </div>

            <button
              onClick={handleBackHome}
              className='flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg px-3 py-2'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-20 relative bg-gray-900 text-white overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/images/hero-clients.jpg')`,
          }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/70'></div>

        {/* Content */}
        <div className='max-w-6xl mx-auto px-6 text-center relative z-10'>
          <h2 className='text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg'>
            {clientsPageContent.hero.title}
          </h2>
          <p className='text-2xl text-blue-100 mb-8 drop-shadow-md'>
            {clientsPageContent.hero.subtitle}
          </p>
          <p className='text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md'>
            {clientsPageContent.hero.description}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h3 className='text-4xl font-bold text-gray-900 mb-8'>
                {clientsPageContent.introduction.title}
              </h3>
              <div className='space-y-6 text-gray-700 leading-relaxed'>
                {clientsPageContent.introduction.content.map(
                  (paragraph, index) => (
                    <p key={index} className='text-lg'>
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </div>

            <div className='relative'>
              <img
                src='/images/clients-intro.jpg'
                alt='Global client relationships'
                className='w-full h-auto rounded-2xl shadow-lg object-cover'
                onError={e => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className='w-full h-96 rounded-2xl shadow-lg bg-gradient-to-br from-orange-100 to-gray-200 hidden items-center justify-center'>
                <div className='text-center text-gray-500'>
                  <Globe className='w-16 h-16 mx-auto mb-4' />
                  <p className='text-sm'>Global Client Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {clientsPageContent.stats.title}
            </h3>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {clientsPageContent.stats.data.map((stat, index) => (
              <div
                key={index}
                className='text-center bg-gray-50 rounded-xl p-8'
              >
                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <stat.icon className='w-8 h-8 text-orange-600' />
                </div>
                <div className='text-4xl font-bold text-orange-600 mb-2'>
                  {stat.value}
                </div>
                <div className='text-lg font-semibold text-gray-900 mb-2'>
                  {stat.label}
                </div>
                <div className='text-gray-600'>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase Carousel */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              Our Esteemed Clients
            </h3>
            <p className='text-xl text-gray-600'>
              Organizations that trust SSL Solutions for their SAP
              transformation journey
            </p>
          </div>

          {/* Client Carousel */}
          <div
            className='relative mb-12 p-8'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{
                  transform: `translateX(-${currentClientSlide * 100}%)`,
                }}
              >
                {clientSlides.map((slide, slideIndex) => (
                  <div key={slideIndex} className='w-full flex-shrink-0'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                      {slide.map(client => (
                        <div
                          key={client.id}
                          className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group'
                        >
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
                              <Building2 className='w-8 h-8 text-gray-400 mx-auto mb-2' />
                              <div className='text-sm font-semibold text-gray-700'>
                                {client.name}
                              </div>
                              <div className='text-xs text-gray-500'>
                                {client.location}
                              </div>
                            </div>
                          </div>

                          <div className='mt-4 text-center'>
                            <p className='text-xs text-orange-600 font-medium'>
                              {client.industry}
                            </p>
                            <p className='text-xs text-gray-500 mt-1'>
                              {client.location}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            {clientSlides.length > 1 && (
              <div className='flex justify-center mt-6 space-x-2'>
                {clientSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToClientSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                      index === currentClientSlide
                        ? 'bg-orange-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className='py-20 bg-white'>
        <div className='max-w-4xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {clientsPageContent.testimonials.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {clientsPageContent.testimonials.subtitle}
            </p>
          </div>

          <div className='relative'>
            <div className='bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg'>
              <div className='text-center'>
                <Star className='w-8 h-8 text-orange-400 mx-auto mb-6' />

                <blockquote className='text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic'>
                  "
                  {
                    clientsPageContent.testimonials.testimonials[
                      currentTestimonial
                    ].quote
                  }
                  "
                </blockquote>

                <div className='border-t border-gray-200 pt-6'>
                  <p className='font-semibold text-gray-900 text-lg'>
                    {
                      clientsPageContent.testimonials.testimonials[
                        currentTestimonial
                      ].client
                    }
                  </p>
                  <p className='text-orange-600 font-medium'>
                    {
                      clientsPageContent.testimonials.testimonials[
                        currentTestimonial
                      ].industry
                    }{' '}
                    •{' '}
                    {
                      clientsPageContent.testimonials.testimonials[
                        currentTestimonial
                      ].project
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            {clientsPageContent.testimonials.testimonials.length > 1 && (
              <div className='flex justify-center mt-8 space-x-2'>
                {clientsPageContent.testimonials.testimonials.map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                        index === currentTestimonial
                          ? 'bg-orange-600 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {clientsPageContent.partnerships.title}
            </h3>
            <p className='text-xl text-gray-600 mb-8'>
              {clientsPageContent.partnerships.subtitle}
            </p>

            <div className='space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto'>
              {clientsPageContent.partnerships.content.map(
                (paragraph, index) => (
                  <p key={index} className='text-lg'>
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Partners Grid */}
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

                <div className='mt-2 text-center'>
                  <p className='text-xs text-gray-500'>{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h3 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            {clientsPageContent.cta.title}
          </h3>
          <p className='text-xl mb-12 leading-relaxed text-gray-600'>
            {clientsPageContent.cta.description}
          </p>

          <button
            onClick={handleContactPage}
            className='bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center mx-auto'
          >
            {clientsPageContent.cta.primaryButton}
            <ArrowRight className='w-5 h-5 ml-2' />
          </button>
        </div>
      </section>
    </div>
  );
};
