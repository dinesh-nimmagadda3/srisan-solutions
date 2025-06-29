import {
  ArrowLeft,
  Star,
  Users,
  Lightbulb,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { aboutPageContent } from '@/data/aboutPage';

export const AboutPage = () => {
  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleContactPage = () => {
    window.location.href = '/contact';
  };

  const valueIcons = {
    star: Star,
    handshake: Users,
    lightbulb: Lightbulb,
    shield: Shield,
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <img
                src='/ssl-logo.png'
                alt='SSL Solutions Logo'
                className='h-12 w-auto'
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
              className='flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Back to Home
            </button>
          </div>
        </div>
      </header>

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
            {aboutPageContent.hero.title}
          </h2>
          <p className='text-2xl text-blue-100 mb-8 drop-shadow-md'>
            {aboutPageContent.hero.subtitle}
          </p>
          <p className='text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md'>
            {aboutPageContent.hero.description}
          </p>
        </div>
      </section>

      <section className='py-10 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h3 className='text-4xl font-bold text-gray-900 mb-8'>
                {aboutPageContent.story.title}
              </h3>
              <div className='space-y-6 text-gray-700 leading-relaxed'>
                {aboutPageContent.story.content.map((paragraph, index) => (
                  <p key={index} className='text-lg'>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className='relative'>
              <img
                src='/images/about-story.jpg'
                alt='Our story and journey'
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
                  <Users className='w-16 h-16 mx-auto mb-4' />
                  <p className='text-sm'>Our Journey Since 2011</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {aboutPageContent.mission.title}
            </h3>
            <p className='text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed'>
              {aboutPageContent.mission.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {aboutPageContent.mission.values.map((value, index) => {
              const IconComponent =
                valueIcons[value.icon as keyof typeof valueIcons];

              return (
                <div
                  key={index}
                  className='bg-white rounded-xl p-8 shadow-lg text-center'
                >
                  <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                    <IconComponent className='w-8 h-8 text-orange-600' />
                  </div>
                  <h4 className='text-xl font-bold text-gray-900 mb-4'>
                    {value.title}
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {aboutPageContent.expertise.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {aboutPageContent.expertise.subtitle}
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {aboutPageContent.expertise.areas.map((area, index) => (
              <div key={index} className='bg-white rounded-xl p-8 shadow-lg'>
                <h4 className='text-2xl font-bold text-gray-900 mb-4'>
                  {area.title}
                </h4>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {area.description}
                </p>
                <ul className='space-y-2'>
                  {area.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className='flex items-center text-gray-700'
                    >
                      <CheckCircle className='w-5 h-5 text-orange-500 mr-3 flex-shrink-0' />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-10 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-12'>
              {aboutPageContent.achievements.title}
            </h3>
          </div>

          <div className='grid md:grid-cols-4 gap-8 mb-16'>
            {aboutPageContent.achievements.stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl lg:text-5xl font-bold text-orange-600 mb-2'>
                  {stat.value}
                </div>
                <div className='text-lg font-semibold text-gray-900 mb-2'>
                  {stat.label}
                </div>
                <div className='text-gray-600'>{stat.description}</div>
              </div>
            ))}
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <h4 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
              Recognition & Trust
            </h4>
            <div className='grid md:grid-cols-2 gap-6'>
              {aboutPageContent.achievements.recognition.map((item, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <CheckCircle className='w-6 h-6 text-orange-500 flex-shrink-0' />
                  <span className='text-gray-700'>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {aboutPageContent.approach.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {aboutPageContent.approach.subtitle}
            </p>
          </div>

          <div className='space-y-8'>
            {aboutPageContent.approach.steps.map((step, index) => (
              <div key={index} className='flex items-start space-x-6'>
                <div className='flex-shrink-0'>
                  <div className='w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold'>
                    {step.step}
                  </div>
                </div>
                <div className='flex-1'>
                  <h4 className='text-2xl font-bold text-gray-900 mb-4'>
                    {step.title}
                  </h4>
                  <p className='text-gray-700 leading-relaxed text-lg'>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-10 bg-gray-50 border-gray-200'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h3 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            {aboutPageContent.cta.title}
          </h3>
          <p className='text-xl text-gray-600 mb-12 leading-relaxed'>
            {aboutPageContent.cta.description}
          </p>

          <div className='flex justify-center'>
            <button
              onClick={handleContactPage}
              className='bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center'
            >
              {aboutPageContent.cta.primaryButton}
              <ArrowRight className='w-5 h-5 ml-2' />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
