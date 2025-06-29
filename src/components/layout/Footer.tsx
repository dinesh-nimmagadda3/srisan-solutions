import { useNavigate } from 'react-router-dom';
import { companyInfo, navigationItems } from '@/data/company';
import { getRouteFromId, navigateWithScroll } from '@/utils/routing';
import type { NavItem } from '@/types';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = '' }: FooterProps) => {
  const navigate = useNavigate();

  const handleNavClick = (item: NavItem) => {
    const route = getRouteFromId(item.id);
    navigateWithScroll(navigate, route);
  };

  const handleBackToTop = () => {
    navigateWithScroll(navigate, '/');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='md:col-span-2'>
            <div className='flex items-center space-x-3 mb-4'>
              <img
                src='/ssl-logo.png'
                alt={`${companyInfo.name} Logo`}
                className='h-10 w-auto'
              />
              <h3 className='text-2xl font-bold text-white'>
                SSL Solutions Limited
              </h3>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              {companyInfo.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              {navigationItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className='text-gray-300 hover:text-white transition-colors duration-200 text-left relative group focus:outline-none focus:ring-0'
                  >
                    <span className='relative z-10'>{item.label}</span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full' />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>Contact</h4>
            <div className='space-y-4 text-gray-300'>
              <div className='flex items-start space-x-3'>
                <svg
                  className='w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <div>
                  <p className='font-medium text-white'>Email</p>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className='hover:text-orange-400 transition-colors duration-200 relative group'
                  >
                    <span className='relative z-10'>
                      {companyInfo.contact.email}
                    </span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full' />
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-3'>
                <svg
                  className='w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div>
                  <p className='font-medium text-white'>Registered Address</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${companyInfo.contact.address.street}, ${companyInfo.contact.address.city} ${companyInfo.contact.address.postcode}, ${companyInfo.contact.address.country}`
                    )}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-orange-400 transition-colors duration-200 relative group'
                  >
                    <span className='relative z-10'>
                      <address className='not-italic'>
                        {companyInfo.contact.address.street}
                        <br />
                        {companyInfo.contact.address.city}{' '}
                        {companyInfo.contact.address.postcode}
                        <br />
                        {companyInfo.contact.address.country}
                      </address>
                    </span>
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 mt-8 pt-8 flex justify-center items-center'>
          <p className='text-gray-400 text-sm text-center'>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={handleBackToTop}
        className='fixed bottom-8 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center focus:outline-none focus:ring-0'
        aria-label='Back to top'
      >
        <svg
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 15l7-7 7 7'
          />
        </svg>
      </button>
    </footer>
  );
};
