import { useState } from 'react';

import { navigationItems } from '@/data/company';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import type { NavItem } from '@/types';
import { scrollToSection } from '@/utils/scrollTo';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);

  const handleNavClick = (item: NavItem) => {
    scrollToSection(item.id);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg'
          : 'bg-white/95 backdrop-blur-md'
      } ${className}`}
    >
      <nav className='max-w-6xl mx-auto px-6 py-3'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className='flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200'
          >
            {/* SSL Logo Image */}
            <img
              src='/ssl-logo.png'
              alt='SSL Solutions Logo'
              className='h-12 w-auto'
            />

            {/* Company Text */}
            <div className='flex flex-col'>
              <div className='flex items-baseline space-x-1'>
                <span className='text-2xl font-bold text-orange-600'>SSL</span>
                <span className='hidden sm:inline text-sm font-medium text-gray-600'>
                  Solutions
                </span>
              </div>
              <span className='hidden md:block text-xs text-orange-500 font-medium tracking-wide'>
                BOUTIQUE SAP CONSULTING
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigationItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className='text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2 px-1 relative group'
              >
                {item.label}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full' />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
            aria-label='Toggle mobile menu'
          >
            <div className='w-6 h-6 flex flex-col justify-center items-center'>
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-1'
                    : '-translate-y-0.5'
                }`}
              />
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-1'
                    : 'translate-y-0.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <div className='py-4 border-t border-gray-200'>
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className='block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-lg transition-colors duration-200'
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
