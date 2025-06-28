// src/components/sections/ServicesSection.tsx
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
};

export const ServicesSection = () => {
  return (
    <section id='services' className='py-6 bg-white'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            {servicesContent.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map(service => (
            <div
              key={service.id}
              className='bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-100'
            >
              {/* Icon */}
              <div className='w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300'>
                {(() => {
                  const IconComponent =
                    serviceIcons[service.id as keyof typeof serviceIcons];
                  return <IconComponent className='w-8 h-8 text-orange-600' />;
                })()}
              </div>

              {/* Content */}
              <h3 className='text-xl font-bold text-gray-900 mb-4'>
                {service.title}
              </h3>

              <p className='text-gray-600 leading-relaxed'>
                {service.shortDescription}
              </p>

              {/* Learn More Link */}
              <div className='mt-6'>
                <button
                  onClick={() =>
                    (window.location.href = `/services#${service.id}`)
                  }
                  className='text-orange-600 font-semibold hover:text-orange-700 transition-all duration-200 flex items-center group-hover:translate-x-2'
                >
                  Learn More
                  <svg
                    className='w-4 h-4 ml-2 transition-transform duration-200'
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
