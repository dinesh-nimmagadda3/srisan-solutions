import { Users, Building2, Award, Handshake } from 'lucide-react';

export const clientsPageContent = {
  hero: {
    title: 'Our Global Clients',
    subtitle: 'Trusted by industry leaders worldwide',
    description:
      "Our consultants have successfully delivered SAP solutions for some of the world's most respected organizations across multiple industries and continents.",
  },

  introduction: {
    title: 'Trusted by Global Leaders',
    content: [
      "At SSL Solutions Limited, we are proud to have served some of the world's most prestigious organizations. Our client portfolio spans across seven major industries and multiple continents, showcasing our ability to deliver exceptional SAP solutions regardless of scale or complexity.",

      'From Fortune 500 companies to innovative mid-market organizations, our clients trust us to transform their business operations through strategic SAP implementations. Our boutique approach ensures that every client receives the personalized attention and expertise they deserve.',

      "The long-term relationships we've built with our clients are a testament to our commitment to excellence, reliability, and delivering measurable business value through SAP solutions.",
    ],
  },

  partnerships: {
    title: 'Strategic Partnerships',
    subtitle:
      'Collaborating with leading System Integrators and Solution Providers',
    content: [
      "Our success is amplified through strategic partnerships with the world's leading System Integrators and SAP solution providers. These partnerships enable us to deliver comprehensive solutions and extend our reach globally.",

      'By working alongside industry giants like IBM, KPMG, SAP, and Accenture, we combine our boutique expertise with enterprise-scale capabilities, ensuring our clients receive the best of both worlds.',
    ],
  },

  testimonials: {
    title: 'What Our Clients Say',
    subtitle: 'Real feedback from successful SAP implementations',
    testimonials: [
      {
        quote:
          'SSL Solutions provided exceptional expertise during our S/4HANA implementation. Their boutique approach meant we received dedicated attention that larger firms simply cannot provide.',
        client: 'Healthcare & Pharmaceuticals Leader',
        industry: 'Healthcare',
        project: 'SAP S/4HANA Implementation',
      },
      {
        quote:
          "The team's deep understanding of the oil & gas industry made all the difference. They delivered a solution that truly addressed our sector-specific challenges.",
        client: 'Global Energy Company',
        industry: 'Oil & Gas',
        project: 'Process Optimization',
      },
      {
        quote:
          'Outstanding technical expertise combined with excellent project management. SSL Solutions delivered on time and exceeded our expectations.',
        client: 'Leading Electronics Manufacturer',
        industry: 'Electronics',
        project: 'System Upgrade & Integration',
      },
    ],
  },

  stats: {
    title: 'Our Impact by Numbers',
    data: [
      {
        value: '100+',
        label: 'Global Clients',
        description: 'Successful implementations worldwide',
        icon: Users,
      },
      {
        value: '7',
        label: 'Industry Sectors',
        description: 'Deep expertise across markets',
        icon: Building2,
      },
      {
        value: '6',
        label: 'SI Partners',
        description: 'Strategic partnerships with top firms',
        icon: Handshake,
      },
      {
        value: '14+',
        label: 'Years Experience',
        description: 'Serving clients since 2011',
        icon: Award,
      },
    ],
  },

  cta: {
    title: 'Ready to Join Our Success Stories?',
    description:
      'Discover how SSL Solutions can help transform your business with proven SAP expertise and personalized service.',
    primaryButton: 'Start Your Journey',
  },
};
