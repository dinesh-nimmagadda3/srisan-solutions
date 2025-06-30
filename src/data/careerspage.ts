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

// Icon mapping for benefits loaded from JSON
export const iconMap = {
  'trending-up': TrendingUp,
  'book-open': BookOpen,
  globe: Globe,
  heart: Heart,
  users: Users,
} as const;
