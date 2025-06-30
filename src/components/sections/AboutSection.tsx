import { useMemo } from 'react';
import { companyInfo } from '@/data/company';
import { aboutContent } from '@/data/aboutsection';

export const AboutSection = () => {
  // Memoize calculated values
  const yearsInBusiness = useMemo(
    () => new Date().getFullYear() - companyInfo.founded,
    []
  );

  // Memoize stats data
  const stats = useMemo(
    () => [
      {
        value: `${yearsInBusiness}+`,
        label: 'Years Experience',
        description: `Founded in ${companyInfo.founded}, we have been serving clients for over ${yearsInBusiness} years`,
      },
      {
        value: '20+',
        label: 'Years Expertise',
        description: 'Two decades of deep SAP expertise and industry knowledge',
      },
      {
        value: '100%',
        label: 'SAP Focused',
        description: 'Exclusively focused on SAP solutions and services',
      },
      {
        value: 'Global',
        label: 'Client Base',
        description:
          'Serving clients across multiple continents and industries',
      },
    ],
    [yearsInBusiness]
  );

  return (
    <section
      id='about'
      className='py-20 bg-gray-50'
      aria-labelledby='about-heading'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <div>
            <h2
              id='about-heading'
              className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'
            >
              {aboutContent.title}
            </h2>

            <div
              className='space-y-6 text-gray-700 leading-relaxed'
              role='region'
              aria-label='About us content'
            >
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p key={index} className='text-base'>
                  {index === 0 ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                          .replace(
                            /Srisan Solutions Limited/g,
                            '<strong>Srisan Solutions Limited</strong>'
                          )
                          .replace(/2011/g, '<strong>2011</strong>'),
                      }}
                    />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Key Stats */}
            <div
              className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12'
              role='region'
              aria-label='Company statistics'
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='text-center'
                  role='group'
                  aria-labelledby={`stat-${index}-value`}
                  aria-describedby={`stat-${index}-desc`}
                >
                  <div
                    id={`stat-${index}-value`}
                    className='text-3xl font-bold text-orange-600 mb-2'
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </div>
                  <div className='text-sm text-gray-600'>{stat.label}</div>
                  <div id={`stat-${index}-desc`} className='sr-only'>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className='relative'
            role='img'
            aria-label='Professional team collaboration'
          >
            <img
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              className='w-full h-auto rounded-2xl shadow-lg object-cover'
              loading='lazy'
              onError={e => {
                // Fallback for missing image
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget
                  .nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
            {/* Fallback placeholder */}
            <div
              className='w-full h-96 rounded-2xl shadow-lg bg-gradient-to-br from-orange-100 to-gray-200 hidden items-center justify-center'
              aria-label='Image placeholder for team collaboration'
            >
              <div className='text-center text-gray-500'>
                <svg
                  className='w-16 h-16 mx-auto mb-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <p className='text-sm'>Professional Team</p>
              </div>
            </div>
            <div
              className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl'
              aria-hidden='true'
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
