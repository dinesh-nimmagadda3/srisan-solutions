// src/data/clients.ts

export interface Client {
  id: string;
  name: string;
  location: string;
  industry: string;
  logo?: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo?: string;
}

export const clientsContent = {
  title: 'Trusted by Global Leaders',
  subtitle:
    'Our consultants have successfully delivered SAP solutions for industry-leading organizations worldwide.',
  partnersTitle: 'Strategic Partnerships',
  partnersSubtitle:
    'We collaborate with leading System Integrators and Solution Providers to deliver comprehensive SAP solutions.',
};

export const clientsData: Client[] = [
  {
    id: 'astrazeneca',
    name: 'AstraZeneca',
    location: 'UK',
    industry: 'Healthcare & Pharmaceuticals',
    logo: '/images/clients/astrazeneca-logo.png',
  },
  {
    id: 'mckesson',
    name: 'McKesson',
    location: 'UK, Norway, Germany',
    industry: 'Healthcare & Pharmaceuticals',
    logo: '/images/clients/mckesson-logo.jpg',
  },
  {
    id: 'shell',
    name: 'Shell International Petroleum',
    location: 'UK',
    industry: 'Oil & Gas',
    logo: '/images/clients/shell-logo.png',
  },
  {
    id: 'bp',
    name: 'BP',
    location: 'UK & North America',
    industry: 'Oil & Gas',
    logo: '/images/clients/bp-logo.png',
  },
  {
    id: 'sony',
    name: 'Sony Electronics',
    location: 'US',
    industry: 'Electronics & Semiconductors',
    logo: '/images/clients/sony-logo.jpg',
  },
  {
    id: 'nec',
    name: 'NEC',
    location: 'Japan & Worldwide',
    industry: 'Electronics & Semiconductors',
    logo: '/images/clients/nec-logo.png',
  },
  {
    id: 'fujitsu',
    name: 'Fujitsu',
    location: 'Japan & Worldwide',
    industry: 'Electronics & Semiconductors',
    logo: '/images/clients/fujitsu-logo.png',
  },
  {
    id: 'marks-spencer',
    name: 'Marks & Spencer',
    location: 'UK & Europe',
    industry: 'Retail & Consumer Goods',
    logo: '/images/clients/marks-spencer-logo.png',
  },
  {
    id: 'asda',
    name: 'ASDA',
    location: 'UK',
    industry: 'Retail & Consumer Goods',
    logo: '/images/clients/asda-logo.png',
  },
  {
    id: 'reliance',
    name: 'Reliance Industries',
    location: 'India',
    industry: 'Oil & Gas',
    logo: '/images/clients/reliance-logo.png',
  },
  {
    id: 'alliance-healthcare',
    name: 'Alliance Healthcare',
    location: 'UK',
    industry: 'Healthcare & Pharmaceuticals',
    logo: '/images/clients/alliance-healthcare-logo.jpg',
  },
  {
    id: 'aldi',
    name: 'ALDI South',
    location: 'Germany',
    industry: 'Retail & Consumer Goods',
    logo: '/images/clients/aldi-logo.jpg',
  },
];

export const partnersData: Partner[] = [
  {
    id: 'ibm',
    name: 'IBM UK',
    description: 'Global technology and consulting services',
    logo: '/images/partners/ibm-logo.jpg',
  },
  {
    id: 'kpmg',
    name: 'KPMG',
    description: 'UK & Germany operations',
    logo: '/images/partners/kpmg-logo.jpg',
  },
  {
    id: 'sap',
    name: 'SAP UK',
    description: 'Official SAP partnership',
    logo: '/images/partners/sap-logo.png',
  },
  {
    id: 'ey',
    name: 'EY UK',
    description: 'Professional services and consulting',
    logo: '/images/partners/ey-logo.png',
  },
  {
    id: 'accenture',
    name: 'Accenture UK',
    description: 'Digital transformation and consulting',
    logo: '/images/partners/accenture-logo.jpg',
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    description: 'UK & Germany operations',
    logo: '/images/partners/capgemini-logo.png',
  },
];
