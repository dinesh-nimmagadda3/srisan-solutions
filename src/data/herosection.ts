export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export const heroContent = {
  mainTitle: 'SSL Solutions Limited',
  tagline: 'BOUTIQUE SAP CONSULTING',
  getStartedButton: 'Get Started',
  learnMoreButton: 'Learn More',
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'transformation',
    title: 'SAP Digital Transformation',
    subtitle: 'Unlocking Your Business Potential',
    description:
      'We specialize in guiding businesses through seamless SAP digital transformations, ensuring that your technology aligns perfectly with your strategic goals.',
    image: '/images/hero-transformation.jpg',
  },
  {
    id: 's4hana',
    title: 'S/4HANA Implementation',
    subtitle: 'Modernizing Your ERP Landscape',
    description:
      'Leverage our expertise for a smooth transition to SAP S/4HANA, from initial assessment and roadmap design to full implementation and support.',
    image: '/images/hero-s4hana.jpg',
  },
  {
    id: 'optimization',
    title: 'Process Optimization',
    subtitle: 'Driving Efficiency and Growth',
    description:
      'Our tailored solutions help you optimize critical business processes, reduce operational costs, and enhance overall productivity within your SAP environment.',
    image: '/images/hero-optimization.jpg',
  },
  {
    id: 'expertise',
    title: 'Deep SAP Expertise',
    subtitle: 'Experience You Can Trust',
    description:
      'With over two decades of focused SAP experience, our consultants bring unparalleled knowledge to every project, ensuring high-quality outcomes.',
    image: '/images/hero-expertise.jpg',
  },
  {
    id: 'partnership',
    title: 'Your Trusted Partner',
    subtitle: 'Building Success Together',
    description:
      'We believe in building long-term partnerships, working collaboratively with you to navigate challenges and achieve sustainable business success.',
    image: '/images/hero-partnership.jpg',
  },
  {
    id: 'training',
    title: 'Empowering Your Team',
    subtitle: 'Training and Change Management',
    description:
      'We provide comprehensive training and change management to ensure your team fully adopts and benefits from your new SAP solutions.',
    image: '/images/hero-training.jpg',
  },
];

