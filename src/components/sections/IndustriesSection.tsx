// src/components/sections/IndustriesSection.tsx
import { useState } from 'react';
import {
  Factory,
  ShoppingCart,
  Cpu,
  Fuel,
  Heart,
  Wheat,
  FlaskConical,
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
};

export const IndustriesSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0]);

  return (
    <section id='industries' className='py-12 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            {industriesContent.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
            {industriesContent.subtitle}
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          {/* Left Side - Industry List */}
          <div className='space-y-3'>
            {industriesData.map(industry => {
              const IconComponent =
                industryIcons[industry.id as keyof typeof industryIcons];
              const isSelected = selectedIndustry.id === industry.id;

              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry)}
                  onMouseEnter={() => setSelectedIndustry(industry)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 group ${
                    isSelected
                      ? 'bg-orange-600 text-white shadow-lg scale-105'
                      : 'bg-white hover:bg-orange-50 shadow-md hover:shadow-lg border border-gray-100'
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
                </button>
              );
            })}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className='lg:sticky lg:top-24'>
            <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
              {/* Industry Header */}
              <div className='flex items-center space-x-4 mb-6'>
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
              </div>

              {/* Description */}
              <p className='text-gray-700 leading-relaxed mb-8'>
                {selectedIndustry.shortDescription}
              </p>

              {/* Key Challenges & Solutions */}
              <div className='grid md:grid-cols-2 gap-6 mb-8'>
                <div>
                  <h4 className='font-bold text-gray-900 mb-4 flex items-center'>
                    <div className='w-2 h-2 bg-red-500 rounded-full mr-3'></div>
                    Key Challenges
                  </h4>
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
                  <h4 className='font-bold text-gray-900 mb-4 flex items-center'>
                    <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                    Our Solutions
                  </h4>
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

              {/* CTA */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <button
                  onClick={() =>
                    (window.location.href = `/industries#${selectedIndustry.id}`)
                  }
                  className='flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200 text-center'
                >
                  Learn More About {selectedIndustry.name}
                </button>
                <button
                  onClick={() => (window.location.href = '#contact')}
                  className='flex-1 border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 text-center'
                >
                  Discuss Your Needs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
