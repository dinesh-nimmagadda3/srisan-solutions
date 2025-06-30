import {
  Target,
  Users,
  Code,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Headphones,
} from 'lucide-react';

export const servicesPageContent = {
  hero: {
    title: 'Our SAP Services',
    subtitle: 'Comprehensive SAP solutions tailored to your business needs',
    description:
      'From implementation to optimization, we provide end-to-end SAP services that drive digital transformation and business excellence.',
  },

  introduction: {
    title: 'Driving Business Excellence Through SAP',
    content: [
      'At SSL Solutions Limited, we offer a comprehensive suite of SAP services designed to help businesses maximize the value of their SAP investments. Our experienced consultants bring deep technical expertise and industry knowledge to every engagement.',

      "Whether you're implementing SAP S/4HANA for the first time, migrating from legacy systems, or optimizing existing processes, we provide tailored solutions that align with your unique business objectives and deliver measurable results.",

      'Our proven methodology ensures successful project delivery while minimizing business disruption and maximizing return on investment.',
    ],
  },

  methodology: {
    title: 'Our Proven Methodology',
    subtitle: 'A structured approach that ensures project success',
    steps: [
      {
        step: '01',
        title: 'Discovery & Assessment',
        description:
          'We begin by understanding your business goals, current processes, and pain points to create a comprehensive project foundation.',
        icon: Target,
      },
      {
        step: '02',
        title: 'Solution Design & Planning',
        description:
          'Working closely with your team, we design a detailed roadmap for implementation based on SAP best practices and your specific needs.',
        icon: Users,
      },
      {
        step: '03',
        title: 'Implementation & Configuration',
        description:
          'Our experts handle the technical configuration, testing, and deployment of SAP solutions with minimal business disruption.',
        icon: Code,
      },
      {
        step: '04',
        title: 'Training & Go-Live Support',
        description:
          'We provide comprehensive user training and dedicated support during the critical go-live phase to ensure smooth operations.',
        icon: BookOpen,
      },
      {
        step: '05',
        title: 'Optimization & Growth',
        description:
          'Post-implementation, we help you continuously optimize your system and adapt to evolving business needs and technologies.',
        icon: TrendingUp,
      },
    ],
  },

  whyChooseUs: {
    title: 'Why Choose SSL Solutions?',
    reasons: [
      {
        title: 'Experienced Team',
        description:
          'Our consultants typically have 20+ years of hands-on SAP experience',
        icon: Users,
      },
      {
        title: 'Tailored Solutions',
        description:
          'Customized approaches that align with your specific goals and challenges',
        icon: Target,
      },
      {
        title: 'Proven Track Record',
        description:
          'Successfully delivered projects for global leaders across industries',
        icon: CheckCircle,
      },
      {
        title: 'Ongoing Partnership',
        description:
          'Long-term relationships built on trust, transparency, and mutual success',
        icon: Headphones,
      },
    ],
  },

  cta: {
    title: 'Ready to Transform Your SAP Landscape?',
    description:
      "Let's discuss how our SAP expertise can help you achieve your business objectives and drive operational excellence.",
    primaryButton: 'Get Started Today',
  },
};
