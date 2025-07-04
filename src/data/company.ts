import type { CompanyInfo, NavItem } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Srisan Solutions Limited',
  tagline: 'Boutique SAP Consulting Practice',
  description:
    'Tailored SAP consulting services designed to help businesses maximize the value of their SAP investments.',
  footerDescription:
    'Our comprehensive SAP consulting services are the perfect fit for our clients. Our broad expertise expands the SAP capabilities of these companies, giving them technology that fits their business and supports their business success and growth.',
  founded: 2011,
  contact: {
    phone: '+44 7828736387',
    email: 'info@srisan.com',
    address: {
      street: '382 Kenton Road',
      city: 'Harrow',
      postcode: 'HA3 8DP',
      country: 'United Kingdom',
    },
  },
};

// Updated navigation items with router-compatible hrefs
export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'industries', label: 'Industries', href: '/industries' },
  { id: 'clients', label: 'Clients', href: '/clients' },
  { id: 'careers', label: 'Careers', href: '/careers' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// Services data from the profile
export const services = [
  {
    id: 'sap-s4hana',
    title: 'SAP S/4HANA Implementations',
    description:
      'From blueprinting to go-live, we provide full lifecycle support for your SAP S/4HANA implementation.',
    icon: '🔄',
  },
  {
    id: 'system-upgrades',
    title: 'System Upgrades',
    description:
      'Smooth migration from SAP ECC to SAP S/4HANA with minimal disruption and optimal performance.',
    icon: '⬆️',
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    description:
      'Optimize and automate key business processes using SAP tools to improve efficiency and reduce costs.',
    icon: '⚡',
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description:
      'Tailored ABAP development, custom reporting, and integration services for your specific needs.',
    icon: '🛠️',
  },
  {
    id: 'training',
    title: 'Training & Change Management',
    description:
      'Comprehensive user training and change management strategies to ensure effective SAP adoption.',
    icon: '📚',
  },
  {
    id: 'support',
    title: 'Ongoing Support & Maintenance',
    description:
      'Flexible support services with proactive monitoring to keep your SAP systems running smoothly.',
    icon: '🔧',
  },
];

// Industries served
export const industries = [
  'Retail & Consumer Goods',
  'Manufacturing',
  'Electronics & Semiconductors',
  'Oil & Gas',
  'Healthcare & Pharmaceuticals',
  'Food & Beverages',
  'Fertilizers & Chemicals',
];

// Notable clients
export const clients = [
  { name: 'AstraZeneca', location: 'UK' },
  { name: 'McKesson', location: 'UK, Norway, Germany' },
  { name: 'Alliance Healthcare', location: 'UK' },
  { name: 'Shell International Petroleum', location: 'UK' },
  { name: 'Reliance Industries', location: 'India' },
  { name: 'NIS', location: 'Serbia' },
  { name: 'BP', location: 'UK & North America' },
  { name: 'Sony Electronics', location: 'US' },
  { name: 'NEC', location: 'Japan & Worldwide' },
  { name: 'Fujitsu', location: 'Japan & Worldwide' },
  { name: 'UTAC', location: 'Singapore' },
  { name: 'Marks & Spencer', location: 'UK & Europe' },
  { name: 'B&Q', location: 'UK' },
  { name: 'ALDI South', location: 'Germany' },
  { name: 'ASDA', location: 'UK' },
  { name: 'Ahold Delhaize Group', location: 'Belgium' },
];

// Partner System Integrators
export const partners = [
  'IBM UK',
  'KPMG UK & Germany',
  'SAP UK',
  'EY UK',
  'Accenture UK',
  'Capgemini UK & Germany',
];
