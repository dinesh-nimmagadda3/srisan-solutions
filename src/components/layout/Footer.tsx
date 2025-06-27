import { companyInfo, navigationItems } from '@/data/company';
import type { NavItem } from '@/types';
import { scrollToSection } from '@/utils/scrollTo';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className = '' }: FooterProps) => {
  const handleNavClick = (item: NavItem) => {
    scrollToSection(item.id);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='md:col-span-2'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              {companyInfo.name}
            </h3>
            <p className='text-gray-300 mb-4 leading-relaxed'>
              {companyInfo.description}
            </p>
            <div className='space-y-2 text-gray-300'>
              <p>
                <span className='font-medium'>Founded:</span>{' '}
                {companyInfo.founded}
              </p>
              <p>
                <span className='font-medium'>Expertise:</span> 20+ years in SAP
                consulting
              </p>
            </div>
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
                    className='text-gray-300 hover:text-white transition-colors duration-200 text-left'
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold text-white mb-4'>Contact</h4>
            <div className='space-y-3 text-gray-300'>
              <div className='flex items-start space-x-2'>
                <span className='text-indigo-400 mt-1'>📞</span>
                <div>
                  <p className='font-medium text-white'>Phone</p>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className='hover:text-white transition-colors duration-200'
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-2'>
                <span className='text-indigo-400 mt-1'>✉️</span>
                <div>
                  <p className='font-medium text-white'>Email</p>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className='hover:text-white transition-colors duration-200'
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className='flex items-start space-x-2'>
                <span className='text-indigo-400 mt-1'>📍</span>
                <div>
                  <p className='font-medium text-white'>Address</p>
                  <address className='not-italic'>
                    {companyInfo.contact.address.street}
                    <br />
                    {companyInfo.contact.address.city}{' '}
                    {companyInfo.contact.address.postcode}
                    <br />
                    {companyInfo.contact.address.country}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-300 text-sm'>
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>

          <div className='flex space-x-6 mt-4 md:mt-0'>
            <button
              onClick={() => scrollToSection('home')}
              className='text-gray-300 hover:text-white transition-colors duration-200 text-sm'
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
