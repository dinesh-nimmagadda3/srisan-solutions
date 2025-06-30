import { TrendingUp, BookOpen, Globe, Heart, Users } from 'lucide-react';

export const careersPageContent = {
  hero: {
    title: 'Careers at SSL Solutions',
    // subtitle and description will come from JSON data
  },

  culture: {
    title: 'Why Work With Us?',
  },

  benefits: {
    title: "Why You'll Love Working Here",
    subtitle:
      'We offer more than just a job - we offer a career path with growth opportunities',
    // This section will be hidden if no benefits are provided in the JSON
  },

  positions: {
    title: 'Open Positions',
    subtitle: 'Join our team and help shape the future of SAP consulting',
    noPositions: {
      title: 'No Open Positions Currently',
      description:
        "We're always looking for talented individuals to join our team. Send us your CV and we'll keep you in mind for future opportunities.",
      buttonText: 'Send Your CV',
    },
  },

  cta: {
    title: 'Ready to Start Your Journey?',
    description:
      "Don't see a position that fits? We're always interested in hearing from talented SAP professionals.",
    primaryButton: 'Send Your CV',
  },

  loading: {
    message: 'Loading careers information...',
  },

  error: {
    fallbackTitle: 'Careers',
    fallbackMessage: 'Unable to load careers information at the moment.',
    buttonText: 'Go Home',
  },

  application: {
    applyButtonText: 'Apply Now',
    contactInstructions: 'Email us at:',
    getInTouchText: 'Get in Touch',
  },
};

// Default data as fallback when JSON is incomplete or fails to load
export const defaultCareersData = {
  company: {
    name: 'SSL Solutions Limited',
    tagline: 'Join Our Boutique SAP Consulting Team',
    description:
      'Build your career with a dynamic team of SAP experts who are passionate about delivering exceptional solutions for global clients.',
    culture: [
      'Collaborative and supportive work environment',
      'Opportunity to work with leading global organizations',
      'Continuous learning and professional development',
      'Work-life balance and flexible arrangements',
      'Competitive compensation and benefits',
    ],
  },
  contact: {
    email: 'careers@srisan.com',
    subject: 'Job Application - [Position Title]',
    instructions:
      "Please include your CV, a brief cover letter, and mention the position you're applying for in the subject line.",
  },
  benefits: [
    {
      title: 'Professional Growth',
      description:
        'Work on challenging SAP projects with industry-leading clients',
      icon: 'trending-up',
    },
    {
      title: 'Learning Opportunities',
      description:
        'Continuous training and certification in latest SAP technologies',
      icon: 'book-open',
    },
    {
      title: 'Global Exposure',
      description: 'Collaborate with international teams and clients worldwide',
      icon: 'globe',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and supportive culture',
      icon: 'heart',
    },
  ],
  openPositions: [],
};

// Icon mapping for benefits loaded from JSON
export const iconMap = {
  'trending-up': TrendingUp,
  'book-open': BookOpen,
  globe: Globe,
  heart: Heart,
  users: Users,
} as const;
