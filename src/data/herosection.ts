export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 's4hana',
    image: '/images/hero-s4hana.jpg',
    title: 'SAP S/4HANA',
    subtitle: 'Implementation & Migration',
    description:
      'Full lifecycle support from blueprinting to go-live. Smooth ECC to S/4HANA migration with minimal disruption.',
  },
  {
    id: 'optimization',
    image: '/images/hero-optimization.jpg',
    title: 'Process Optimization',
    subtitle: 'Custom Development',
    description:
      'Tailored ABAP development and business process automation to improve efficiency and reduce costs.',
  },
  {
    id: 'training',
    image: '/images/hero-training.jpg',
    title: 'Training & Support',
    subtitle: 'Change Management',
    description:
      'Comprehensive user training and ongoing support to ensure successful SAP adoption and system optimization.',
  },
  {
    id: 'expertise',
    image: '/images/hero-expertise.jpg',
    title: '20+ Years Experience',
    subtitle: 'Proven Track Record',
    description:
      'Trusted by global leaders including Shell, AstraZeneca, Sony Electronics, and BP across multiple industries.',
  },
  {
    id: 'partnership',
    image: '/images/hero-partnership.jpg',
    title: 'Boutique Consulting',
    subtitle: 'Personal Service',
    description:
      'Flexible engagement models with personalized solutions. Partner with IBM, KPMG, SAP, and other leading SIs.',
  },
];
