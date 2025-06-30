import {
  ArrowLeft,
  RefreshCw,
  TrendingUp,
  Zap,
  Code,
  BookOpen,
  Headphones,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { servicesPageContent } from '@/data/Servicepage';

const serviceIcons = {
  'sap-s4hana': RefreshCw,
  'system-upgrades': TrendingUp,
  'process-optimization': Zap,
  'custom-development': Code,
  training: BookOpen,
  support: Headphones,
} as const;

export const ServicesPage = () => {
  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleContactPage = () => {
    window.location.href = '/contact';
  };

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
            backgroundImage: `url('/images/hero-s4hana.jpg')`,
          }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/70'></div>

        {/* Content */}
        <div className='max-w-6xl mx-auto px-6 text-center relative z-10'>
          <h2 className='text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg'>
            {servicesPageContent.hero.title}
          </h2>
          <p className='text-2xl text-blue-100 mb-8 drop-shadow-md'>
            {servicesPageContent.hero.subtitle}
          </p>
          <p className='text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md'>
            {servicesPageContent.hero.description}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h3 className='text-4xl font-bold text-gray-900 mb-8'>
                {servicesPageContent.introduction.title}
              </h3>
              <div className='space-y-6 text-gray-700 leading-relaxed'>
                {servicesPageContent.introduction.content.map(
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
                src='/images/services-intro.jpg'
                alt='SAP consulting services'
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
                  <Code className='w-16 h-16 mx-auto mb-4' />
                  <p className='text-sm'>SAP Solutions & Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              Our Service Offerings
            </h3>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive SAP services designed to drive digital
              transformation and business excellence
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service, _index) => {
              const IconComponent =
                serviceIcons[service.id as keyof typeof serviceIcons];

              return (
                <div
                  key={service.id}
                  className='bg-gray-50 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group'
                >
                  {/* Icon */}
                  <div className='w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300'>
                    <IconComponent className='w-8 h-8 text-orange-600' />
                  </div>

                  {/* Content */}
                  <h4 className='text-xl font-bold text-gray-900 mb-4'>
                    {service.title}
                  </h4>

                  <p className='text-gray-600 leading-relaxed mb-6'>
                    {service.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className='mb-6'>
                    <h5 className='font-semibold text-gray-900 mb-3'>
                      Key Features:
                    </h5>
                    <ul className='space-y-2'>
                      {service.keyFeatures
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className='text-gray-600 text-sm flex items-start'
                          >
                            <CheckCircle className='w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0' />
                            {feature}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={handleContactPage}
                    className='text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200 flex items-center group-hover:translate-x-2 focus:outline-none focus:underline'
                  >
                    Learn More
                    <ArrowRight className='w-4 h-4 ml-2 transition-transform duration-200' />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {servicesPageContent.methodology.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {servicesPageContent.methodology.subtitle}
            </p>
          </div>

          <div className='space-y-12'>
            {servicesPageContent.methodology.steps.map((step, index) => (
              <div key={index} className='flex items-start space-x-8'>
                <div className='flex-shrink-0'>
                  <div className='w-20 h-20 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg'>
                    {step.step}
                  </div>
                </div>
                <div className='flex-1 bg-white rounded-xl p-8 shadow-md'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <step.icon className='w-6 h-6 text-orange-600' />
                    </div>
                    <div>
                      <h4 className='text-2xl font-bold text-gray-900 mb-4'>
                        {step.title}
                      </h4>
                      <p className='text-gray-700 leading-relaxed text-lg'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {servicesPageContent.whyChooseUs.title}
            </h3>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {servicesPageContent.whyChooseUs.reasons.map((reason, index) => (
              <div
                key={index}
                className='text-center bg-gray-50 rounded-xl p-8'
              >
                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <reason.icon className='w-8 h-8 text-orange-600' />
                </div>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  {reason.title}
                </h4>
                <p className='text-gray-600 leading-relaxed'>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h3 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            {servicesPageContent.cta.title}
          </h3>
          <p className='text-xl mb-12 leading-relaxed text-gray-600'>
            {servicesPageContent.cta.description}
          </p>

          <button
            onClick={handleContactPage}
            className='bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center mx-auto'
          >
            {servicesPageContent.cta.primaryButton}
            <ArrowRight className='w-5 h-5 ml-2' />
          </button>
        </div>
      </section>
    </div>
  );
};
