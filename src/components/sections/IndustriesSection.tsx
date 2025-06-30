import { useState, useMemo, useCallback } from 'react';
import {
  Factory,
  ShoppingCart,
  Cpu,
  Fuel,
  Heart,
  Wheat,
  FlaskConical,
  ChevronDown,
} from 'lucide-react';
import { industriesContent, industriesData } from '@/data/industries';

const industryIcons = {
  'retail-consumer': ShoppingCart,
  manufacturing: Factory,
  'electronics-semiconductors': Cpu,
  'oil-gas': Fuel,
  'healthcare-pharma': Heart,
  'food-beverages': Wheat,
  'fertilizers-chemicals': FlaskConical,
} as const;

export const IndustriesSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  // Memoize industries with their icons
  const industriesWithIcons = useMemo(
    () =>
      industriesData.map(industry => ({
        ...industry,
        IconComponent: industryIcons[industry.id as keyof typeof industryIcons],
      })),
    []
  );

  // Memoized handlers
  const handleIndustrySelect = useCallback(
    (industry: (typeof industriesData)[0]) => {
      setSelectedIndustry(industry);
    },
    []
  );

  const handleMobileToggle = useCallback((industryId: string) => {
    setExpandedMobile(prev => (prev === industryId ? null : industryId));
  }, []);

  const handleLearnMore = useCallback(() => {
    // For now, scroll to contact since industry pages don't exist yet
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // TODO: Replace with actual route when industry pages are created
    // window.location.href = `/industries#${industryId}`;
  }, []);

  const handleDiscussNeeds = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section
      id='industries'
      className='py-12 bg-gray-50'
      aria-labelledby='industries-heading'
    >
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <header className='text-center mb-16'>
          <h2
            id='industries-heading'
            className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'
          >
            {industriesContent.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
            {industriesContent.subtitle}
          </p>
        </header>

        {/* Desktop: Split Screen Layout */}
        <div className='hidden lg:grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Side - Industry List */}
          <nav
            className='space-y-3'
            role='tablist'
            aria-label='Industry selection'
          >
            {industriesWithIcons.map(industry => {
              const isSelected = selectedIndustry.id === industry.id;

              return (
                <button
                  key={industry.id}
                  onClick={() => handleIndustrySelect(industry)}
                  onMouseEnter={() => handleIndustrySelect(industry)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-orange-50 shadow-md hover:shadow-lg border border-gray-100'
                  }`}
                  role='tab'
                  aria-selected={isSelected}
                  aria-controls='industry-content'
                  aria-describedby={`industry-desc-${industry.id}`}
                  id={`industry-tab-${industry.id}`}
                >
                  <div className='flex items-center space-x-4'>
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? 'bg-white/20'
                          : 'bg-orange-100 group-hover:bg-orange-200'
                      }`}
                      aria-hidden='true'
                    >
                      <industry.IconComponent
                        className={`w-6 h-6 ${
                          isSelected ? 'text-white' : 'text-orange-600'
                        }`}
                      />
                    </div>

                    <div className='flex-1'>
                      <h3
                        className={`font-bold text-base leading-tight ${
                          isSelected
                            ? 'text-white'
                            : 'text-gray-900 group-hover:text-orange-600'
                        }`}
                      >
                        {industry.name}
                      </h3>

                      <div className='flex items-center mt-2'>
                        <span
                          className={`text-sm font-medium ${
                            isSelected ? 'text-orange-100' : 'text-orange-600'
                          }`}
                        >
                          Explore Industry
                        </span>
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                            isSelected
                              ? 'translate-x-2 text-orange-100'
                              : 'group-hover:translate-x-1 text-orange-600'
                          }`}
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
                      </div>
                    </div>
                  </div>
                  <div id={`industry-desc-${industry.id}`} className='sr-only'>
                    {industry.shortDescription}
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Right Side - Dynamic Content */}
          <div className='lg:sticky lg:top-24'>
            <div
              className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'
              id='industry-content'
              role='tabpanel'
              aria-labelledby={`industry-tab-${selectedIndustry.id}`}
            >
              {/* Industry Header */}
              <header className='flex items-center space-x-4 mb-6'>
                <div className='w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center'>
                  {(() => {
                    const IconComponent =
                      industryIcons[
                        selectedIndustry.id as keyof typeof industryIcons
                      ];
                    return (
                      <IconComponent className='w-8 h-8 text-orange-600' />
                    );
                  })()}
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-gray-900'>
                    {selectedIndustry.name}
                  </h3>
                  <p className='text-orange-600 font-medium'>SAP Expertise</p>
                </div>
              </header>

              {/* Description */}
              <p className='text-gray-700 leading-relaxed mb-8'>
                {selectedIndustry.shortDescription}
              </p>

              {/* Key Challenges & Solutions */}
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div>
                  <h4 className='font-bold text-gray-900 mb-4 flex items-center'>
                    <div
                      className='w-2 h-2 bg-red-500 rounded-full mr-3'
                      aria-hidden='true'
                    ></div>
                    Key Challenges
                  </h4>
                  <ul className='space-y-2' role='list'>
                    {selectedIndustry.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className='text-gray-600 text-sm flex items-start'
                      >
                        <span
                          className='text-red-400 mr-2 mt-1.5'
                          aria-hidden='true'
                        >
                          •
                        </span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className='font-bold text-gray-900 mb-4 flex items-center'>
                    <div
                      className='w-2 h-2 bg-green-500 rounded-full mr-3'
                      aria-hidden='true'
                    ></div>
                    Our Solutions
                  </h4>
                  <ul className='space-y-2' role='list'>
                    {selectedIndustry.solutions.map((solution, index) => (
                      <li
                        key={index}
                        className='text-gray-600 text-sm flex items-start'
                      >
                        <span
                          className='text-green-400 mr-2 mt-1.5'
                          aria-hidden='true'
                        >
                          •
                        </span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={handleLearnMore}
                  className='flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  aria-label={`Learn more about ${selectedIndustry.name} solutions`}
                >
                  Learn More About {selectedIndustry.name}
                </button>
                <button
                  onClick={handleDiscussNeeds}
                  className='flex-1 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                  aria-label='Contact us to discuss your specific industry needs'
                >
                  Discuss Your Needs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion Layout */}
        <div
          className='lg:hidden space-y-4'
          role='region'
          aria-label='Industries accordion'
        >
          {industriesWithIcons.map(industry => {
            const isExpanded = expandedMobile === industry.id;

            return (
              <div
                key={industry.id}
                className='bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden'
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleMobileToggle(industry.id)}
                  className='w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset'
                  aria-expanded={isExpanded}
                  aria-controls={`industry-mobile-${industry.id}`}
                  aria-describedby={`industry-mobile-desc-${industry.id}`}
                >
                  <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center'>
                      <industry.IconComponent className='w-6 h-6 text-orange-600' />
                    </div>
                    <div>
                      <h3 className='font-bold text-gray-900 text-base leading-tight'>
                        {industry.name}
                      </h3>
                      <p className='text-orange-600 text-sm font-medium'>
                        SAP Expertise
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    aria-hidden='true'
                  />
                </button>

                {/* Accordion Content */}
                <div
                  id={`industry-mobile-${industry.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? 'max-h-screen opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                  role='region'
                  aria-labelledby={`industry-mobile-header-${industry.id}`}
                >
                  <div className='px-6 pb-6 border-t border-gray-100'>
                    <p
                      className='text-gray-700 leading-relaxed mb-6 mt-4'
                      id={`industry-mobile-desc-${industry.id}`}
                    >
                      {industry.shortDescription}
                    </p>

                    {/* Key Challenges & Solutions */}
                    <div className='space-y-6 mb-6'>
                      <div>
                        <h4 className='font-bold text-gray-900 mb-3 flex items-center'>
                          <div
                            className='w-2 h-2 bg-red-500 rounded-full mr-3'
                            aria-hidden='true'
                          ></div>
                          Key Challenges
                        </h4>
                        <ul className='space-y-2' role='list'>
                          {industry.challenges.map(
                            (challenge, challengeIndex) => (
                              <li
                                key={challengeIndex}
                                className='text-gray-600 text-sm flex items-start'
                              >
                                <span
                                  className='text-red-400 mr-2 mt-1.5'
                                  aria-hidden='true'
                                >
                                  •
                                </span>
                                {challenge}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h4 className='font-bold text-gray-900 mb-3 flex items-center'>
                          <div
                            className='w-2 h-2 bg-green-500 rounded-full mr-3'
                            aria-hidden='true'
                          ></div>
                          Our Solutions
                        </h4>
                        <ul className='space-y-2' role='list'>
                          {industry.solutions.map((solution, solutionIndex) => (
                            <li
                              key={solutionIndex}
                              className='text-gray-600 text-sm flex items-start'
                            >
                              <span
                                className='text-green-400 mr-2 mt-1.5'
                                aria-hidden='true'
                              >
                                •
                              </span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className='flex flex-col gap-3'>
                      <button
                        onClick={handleLearnMore}
                        className='w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                        aria-label={`Learn more about ${industry.name} solutions`}
                      >
                        Learn More About {industry.name}
                      </button>
                      <button
                        onClick={handleDiscussNeeds}
                        className='w-full border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
                        aria-label='Contact us to discuss your specific industry needs'
                      >
                        Discuss Your Needs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
