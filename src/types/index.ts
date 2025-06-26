export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Client {
  id: string;
  name: string;
  location?: string;
}

export interface Industry {
  id: string;
  name: string;
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
  founded: number;
  contact: ContactInfo;
}
