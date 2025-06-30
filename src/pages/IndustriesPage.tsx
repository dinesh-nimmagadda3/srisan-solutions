import { ArrowLeft, Factory, ArrowRight } from 'lucide-react';
import { useState, useMemo, useCallback } from 'react';
import { industriesPageContent, industriesData } from '@/data/industriespage';

export const IndustriesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const handleContactPage = () => {
    window.location.href = '/contact';
  };

  const handleDiscussNeeds = () => {
    window.location.href = '/contact';
  };

  const handleIndustrySelect = useCallback(
    (industry: (typeof industriesData)[0]) => {
      setSelectedIndustry(industry);
    },
    []
  );

  const memoizedIndustries = useMemo(() => industriesData, []);

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
            backgroundImage: `url('/images/hero-industries.jpg')`,
          }}
        ></div>

        {/* Dark overlay for text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/70'></div>

        {/* Content */}
        <div className='max-w-6xl mx-auto px-6 text-center relative z-10'>
          <h2 className='text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg'>
            {industriesPageContent.hero.title}
          </h2>
          <p className='text-2xl text-blue-100 mb-8 drop-shadow-md'>
            {industriesPageContent.hero.subtitle}
          </p>
          <p className='text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md'>
            {industriesPageContent.hero.description}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h3 className='text-4xl font-bold text-gray-900 mb-8'>
                {industriesPageContent.introduction.title}
              </h3>
              <div className='space-y-6 text-gray-700 leading-relaxed'>
                {industriesPageContent.introduction.content.map(
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
                src='/images/industries-intro.jpg'
                alt='Industry-specific SAP solutions'
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
                  <Factory className='w-16 h-16 mx-auto mb-4' />
                  <p className='text-sm'>Industry Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Showcase - Desktop Split View */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              Our Industry Expertise
            </h3>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Deep sector knowledge combined with technical SAP expertise
            </p>
          </div>

          <div className='hidden lg:grid lg:grid-cols-2 gap-12 items-start'>
            {/* Left Side - Industry List */}
            <div className='space-y-4'>
              {memoizedIndustries.map(industry => {
                const isSelected = selectedIndustry.id === industry.id;
                const IconComponent = industry.icon;

                return (
                  <button
                    key={industry.id}
                    onClick={() => handleIndustrySelect(industry)}
                    onMouseEnter={() => handleIndustrySelect(industry)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                      isSelected
                        ? 'bg-orange-600 text-white shadow-lg scale-105'
                        : 'bg-gray-50 hover:bg-orange-50 shadow-md hover:shadow-lg border border-gray-100'
                    }`}
                  >
                    <div className='flex items-center space-x-4'>
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          isSelected
                            ? 'bg-white/20'
                            : 'bg-orange-100 group-hover:bg-orange-200'
                        }`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${
                            isSelected ? 'text-white' : 'text-orange-600'
                          }`}
                        />
                      </div>

                      <div className='flex-1'>
                        <h4
                          className={`font-bold text-base leading-tight ${
                            isSelected
                              ? 'text-white'
                              : 'text-gray-900 group-hover:text-orange-600'
                          }`}
                        >
                          {industry.name}
                        </h4>

                        <div className='flex items-center mt-2'>
                          <span
                            className={`text-sm font-medium ${
                              isSelected ? 'text-orange-100' : 'text-orange-600'
                            }`}
                          >
                            Explore Industry
                          </span>
                          <ArrowRight
                            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                              isSelected
                                ? 'translate-x-2 text-orange-100'
                                : 'group-hover:translate-x-1 text-orange-600'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Side - Dynamic Content */}
            <div className='lg:sticky lg:top-24'>
              <div className='bg-gray-50 rounded-2xl p-8 shadow-xl border border-gray-100'>
                {/* Industry Header */}
                <div className='flex items-center space-x-4 mb-6'>
                  <div className='w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center'>
                    <selectedIndustry.icon className='w-8 h-8 text-orange-600' />
                  </div>
                  <div>
                    <h4 className='text-2xl font-bold text-gray-900'>
                      {selectedIndustry.name}
                    </h4>
                    <p className='text-orange-600 font-medium'>SAP Expertise</p>
                  </div>
                </div>

                {/* Description */}
                <p className='text-gray-700 leading-relaxed mb-8'>
                  {selectedIndustry.fullDescription}
                </p>

                {/* Key Challenges & Solutions */}
                <div className='grid md:grid-cols-2 gap-6 mb-8'>
                  <div>
                    <h5 className='font-bold text-gray-900 mb-4 flex items-center'>
                      <div className='w-2 h-2 bg-red-500 rounded-full mr-3'></div>
                      Key Challenges
                    </h5>
                    <ul className='space-y-2'>
                      {selectedIndustry.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className='text-gray-600 text-sm flex items-start'
                        >
                          <span className='text-red-400 mr-2 mt-1.5'>•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className='font-bold text-gray-900 mb-4 flex items-center'>
                      <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                      Our Solutions
                    </h5>
                    <ul className='space-y-2'>
                      {selectedIndustry.solutions.map((solution, index) => (
                        <li
                          key={index}
                          className='text-gray-600 text-sm flex items-start'
                        >
                          <span className='text-green-400 mr-2 mt-1.5'>•</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Clients */}
                {selectedIndustry.keyClients.length > 0 && (
                  <div className='mb-8'>
                    <h5 className='font-bold text-gray-900 mb-4'>
                      Notable Clients
                    </h5>
                    <div className='flex flex-wrap gap-2'>
                      {selectedIndustry.keyClients.map((client, index) => (
                        <span
                          key={index}
                          className='bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium'
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <button
                    onClick={handleContactPage}
                    className='flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  >
                    Learn More About {selectedIndustry.name}
                  </button>
                  <button
                    onClick={handleDiscussNeeds}
                    className='flex-1 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  >
                    Discuss Your Needs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Card Layout */}
          <div className='lg:hidden space-y-6'>
            {memoizedIndustries.map(industry => (
              <div
                key={industry.id}
                className='bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-100'
              >
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center'>
                    <industry.icon className='w-6 h-6 text-orange-600' />
                  </div>
                  <div>
                    <h4 className='text-xl font-bold text-gray-900'>
                      {industry.name}
                    </h4>
                    <p className='text-orange-600 text-sm font-medium'>
                      SAP Expertise
                    </p>
                  </div>
                </div>

                <p className='text-gray-700 leading-relaxed mb-4'>
                  {industry.shortDescription}
                </p>

                {industry.keyClients.length > 0 && (
                  <div className='mb-4'>
                    <p className='text-sm font-semibold text-gray-900 mb-2'>
                      Notable Clients:
                    </p>
                    <div className='flex flex-wrap gap-1'>
                      {industry.keyClients.slice(0, 3).map((client, index) => (
                        <span
                          key={index}
                          className='bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs'
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleContactPage}
                  className='w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {industriesPageContent.approach.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {industriesPageContent.approach.subtitle}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {industriesPageContent.approach.benefits.map((benefit, index) => (
              <div
                key={index}
                className='text-center bg-white rounded-xl p-8 shadow-lg'
              >
                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <benefit.icon className='w-8 h-8 text-orange-600' />
                </div>
                <h4 className='text-xl font-bold text-gray-900 mb-4'>
                  {benefit.title}
                </h4>
                <p className='text-gray-600 leading-relaxed'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className='py-20 bg-white'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h3 className='text-4xl font-bold text-gray-900 mb-6'>
              {industriesPageContent.clientSuccess.title}
            </h3>
            <p className='text-xl text-gray-600'>
              {industriesPageContent.clientSuccess.subtitle}
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8'>
            {industriesPageContent.clientSuccess.stats.map((stat, index) => (
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h3 className='text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            {industriesPageContent.cta.title}
          </h3>
          <p className='text-xl mb-12 leading-relaxed text-gray-600'>
            {industriesPageContent.cta.description}
          </p>

          <button
            onClick={handleContactPage}
            className='bg-orange-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center justify-center mx-auto'
          >
            {industriesPageContent.cta.primaryButton}
            <ArrowRight className='w-5 h-5 ml-2' />
          </button>
        </div>
      </section>
    </div>
  );
};
