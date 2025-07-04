import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { navigationItems, companyInfo } from '@/data/company';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { navigateWithScroll } from '@/utils/routing';
import { Navigation } from './Navigation';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);
  const navigate = useNavigate();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleLogoClick = useCallback(() => {
    navigateWithScroll(navigate, '/');
  }, [navigate]);

  // Memoize navigation items to prevent unnecessary re-renders
  const memoizedNavItems = useMemo(() => navigationItems, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg'
          : 'bg-white/95 backdrop-blur-md'
      } ${className}`}
      role='banner'
    >
      <nav
        className='max-w-6xl mx-auto px-6 py-3'
        role='navigation'
        aria-label='Main navigation'
      >
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className='flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-0 rounded-lg'
            aria-label={`${companyInfo.name} - Go to homepage`}
          >
            {/* Company Logo Image */}
            <img
              src='/ssl-logo.png'
              alt={`${companyInfo.name} Logo`}
              className='h-12 w-auto'
              loading='eager'
              onError={e => {
                // Hide image if it fails to load
                e.currentTarget.style.display = 'none';
              }}
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
          <div
            className='hidden md:flex items-center space-x-8'
            role='menubar'
            aria-label='Main menu'
          >
            <Navigation items={memoizedNavItems}>
              {({ item, handleNavClick, isActive }) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`font-medium transition-colors duration-200 py-2 px-1 relative group focus:outline-none focus:ring-0 ${
                    isActive
                      ? 'text-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                  role='menuitem'
                  aria-label={`Navigate to ${item.label} page`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    aria-hidden='true'
                  />
                </button>
              )}
            </Navigation>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
            aria-label={
              isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
            aria-haspopup='true'
          >
            <div className='w-6 h-6 flex flex-col justify-center items-center'>
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-1'
                    : '-translate-y-0.5'
                }`}
                aria-hidden='true'
              />
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
                aria-hidden='true'
              />
              <span
                className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-1'
                    : 'translate-y-0.5'
                }`}
                aria-hidden='true'
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id='mobile-menu'
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
          role='menu'
          aria-label='Mobile navigation menu'
          aria-hidden={!isMobileMenuOpen}
        >
          <div className='py-4 border-t border-gray-200'>
            <Navigation
              items={memoizedNavItems}
              onItemClick={() => setIsMobileMenuOpen(false)}
            >
              {({ item, handleNavClick, isActive }) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-0 ${
                    isActive
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                  role='menuitem'
                  aria-label={`Navigate to ${item.label} page`}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </button>
              )}
            </Navigation>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
