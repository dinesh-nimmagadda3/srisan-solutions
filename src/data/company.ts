import type { CompanyInfo, NavItem } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Srisan Solutions Limited',
  tagline: 'Boutique SAP Consulting Practice',
  description:
    'Tailored SAP consulting services designed to help businesses maximize the value of their SAP investments.',
  founded: 2011,
  contact: {
    phone: '+44 7828736387',
    email: 'info@srian.com',
    address: {
      street: '383 Kenton Road',
      city: 'Harrow',
      postcode: 'HA3 8DP',
      country: 'United Kingdom',
    },
  },
};

export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'industries', label: 'Industries', href: '#industries' },
  { id: 'clients', label: 'Clients', href: '#clients' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
