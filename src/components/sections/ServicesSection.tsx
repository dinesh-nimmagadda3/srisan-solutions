import { useMemo, useCallback } from 'react';
import {
  RefreshCw,
  TrendingUp,
  Zap,
  Code,
  BookOpen,
  Headphones,
} from 'lucide-react';
import { servicesContent, servicesData } from '@/data/services';

const serviceIcons = {
  'sap-s4hana': RefreshCw,
  'system-upgrades': TrendingUp,
  'process-optimization': Zap,
  'custom-development': Code,
  training: BookOpen,
  support: Headphones,
} as const;

export const ServicesSection = () => {
  // Memoize services with their icons
  const servicesWithIcons = useMemo(
    () =>
      servicesData.map(service => ({
        ...service,
        IconComponent: serviceIcons[service.id as keyof typeof serviceIcons],
      })),
    []
  );

  // Memoized navigation handler
  const handleServiceClick = useCallback(
    (_serviceId: string, _serviceName: string) => {
      // For now, scroll to contact since services pages don't exist yet
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // TODO: Replace with actual route when services pages are created
      // window.location.href = `/services#${serviceId}`;
    },
    []
  );

  return (
    <section
      id='services'
      className='py-6 bg-gray-50'
      aria-labelledby='services-heading'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <header className='text-center mb-16'>
          <h2
            id='services-heading'
            className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'
          >
            {servicesContent.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {servicesContent.subtitle}
          </p>
        </header>

        {/* Services Grid */}
        <div
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
          role='region'
          aria-label='Our SAP services'
        >
          {servicesWithIcons.map((service, _index) => (
            <article
              key={service.id}
              className='bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-100 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2'
              role='group'
              aria-labelledby={`service-title-${service.id}`}
              aria-describedby={`service-desc-${service.id}`}
            >
              {/* Icon */}
              <div
                className='w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300'
                aria-hidden='true'
              >
                <service.IconComponent className='w-8 h-8 text-orange-600' />
              </div>

              {/* Content */}
              <h3
                id={`service-title-${service.id}`}
                className='text-xl font-bold text-gray-900 mb-4'
              >
                {service.title}
              </h3>

              <p
                id={`service-desc-${service.id}`}
                className='text-gray-600 leading-relaxed mb-6'
              >
                {service.shortDescription}
              </p>

              {/* Learn More Link */}
              <div className='mt-auto'>
                <button
                  onClick={() => handleServiceClick(service.id, service.title)}
                  className='text-orange-600 font-semibold hover:text-orange-700 transition-all duration-200 flex items-center group-hover:translate-x-2 focus:outline-none focus:underline'
                  aria-label={`Learn more about ${service.title}`}
                  aria-describedby={`service-action-${service.id}`}
                >
                  Learn More
                  <svg
                    className='w-4 h-4 ml-2 transition-transform duration-200'
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
                <span id={`service-action-${service.id}`} className='sr-only'>
                  Click to get in touch about {service.title} services
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <p className='text-lg text-gray-600 mb-6'>
            Need a custom solution or have questions about our services?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className='bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            aria-label='Contact us to discuss your SAP requirements'
          >
            Discuss Your Requirements
          </button>
        </div>
      </div>
    </section>
  );
};
