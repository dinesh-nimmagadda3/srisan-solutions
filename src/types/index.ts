export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  benefits: string[];
  deliverables: string[];
  timeline: string;
  technologies: string[];
}

export interface Client {
  id: string;
  name: string;
  location?: string;
}

export interface Industry {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postcode: string;
    country: string;
  };
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  footerDescription: string;
  founded: number;
  contact: ContactInfo;
}
