import {
  Factory,
  ShoppingCart,
  Cpu,
  Fuel,
  Heart,
  Wheat,
  FlaskConical,
  Users,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';

export const industriesPageContent = {
  hero: {
    title: 'Industries We Serve',
    subtitle: 'Specialized SAP expertise across diverse sectors',
    description:
      'Our team has extensive experience delivering SAP solutions across a wide range of industries, understanding the unique challenges and requirements of each sector.',
  },

  introduction: {
    title: 'Industry-Focused SAP Solutions',
    content: [
      'At SSL Solutions Limited, we understand that each industry has unique challenges, regulatory requirements, and business processes. Our consultants bring deep industry knowledge combined with technical SAP expertise to deliver solutions that address your specific sector needs.',

      'Over the years, our team has successfully implemented SAP solutions across seven major industries, working with global leaders to transform their operations and drive business excellence. We understand the nuances of each sector and tailor our approach accordingly.',

      'From complex manufacturing processes to stringent healthcare regulations, from volatile energy markets to fast-moving consumer goods - we have the experience and expertise to deliver SAP solutions that work for your industry.',
    ],
  },

  approach: {
    title: 'Our Industry-Specific Approach',
    subtitle: 'Tailored solutions that understand your sector',
    benefits: [
      {
        title: 'Industry Expertise',
        description:
          'Deep understanding of sector-specific challenges and requirements',
        icon: Users,
      },
      {
        title: 'Regulatory Compliance',
        description:
          'Ensuring your SAP solutions meet industry standards and regulations',
        icon: Shield,
      },
      {
        title: 'Best Practices',
        description:
          'Implementing proven industry best practices and benchmarks',
        icon: TrendingUp,
      },
      {
        title: 'Rapid Implementation',
        description:
          'Faster deployments through industry-specific accelerators',
        icon: Zap,
      },
    ],
  },

  clientSuccess: {
    title: 'Proven Success Across Industries',
    subtitle: 'Trusted by global leaders in every sector we serve',
    stats: [
      {
        value: '7',
        label: 'Industry Sectors',
        description: 'Deep expertise across markets',
      },
      {
        value: '100+',
        label: 'Global Clients',
        description: 'Successful implementations worldwide',
      },
      {
        value: '20+',
        label: 'Years Experience',
        description: 'Industry knowledge and expertise',
      },
      {
        value: '14+',
        label: 'Years in Business',
        description: 'Serving clients since 2011',
      },
    ],
  },

  cta: {
    title: 'Ready to Transform Your Industry Operations?',
    description:
      "Let's discuss how our industry-specific SAP expertise can help you overcome sector challenges and achieve operational excellence.",
    primaryButton: 'Discuss Your Industry Needs',
    secondaryButton: 'View Our Case Studies',
  },
};

export const industriesData = [
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer Goods',
    icon: ShoppingCart,
    shortDescription:
      'Streamline supply chain, inventory management, and customer experience with retail-focused SAP solutions.',
    fullDescription:
      'Transform your retail operations with SAP solutions designed for omnichannel commerce, inventory optimization, and enhanced customer experiences. We help retailers manage complex supply chains, implement real-time inventory tracking, and create seamless customer journeys.',
    challenges: [
      'Complex omnichannel supply chains',
      'Real-time inventory management across locations',
      'Customer experience optimization',
      'Seasonal demand fluctuations',
      'Rapid product lifecycle management',
    ],
    solutions: [
      'Integrated omnichannel commerce platforms',
      'Real-time inventory visibility and optimization',
      'Advanced customer analytics and personalization',
      'Demand planning and forecasting solutions',
      'Product lifecycle management systems',
    ],
    keyClients: [
      'Marks & Spencer',
      'ASDA',
      'ALDI South',
      'B&Q',
      'Ahold Delhaize Group',
    ],
    benefits: [
      'Improved inventory turnover and reduced stockouts',
      'Enhanced customer satisfaction and loyalty',
      'Streamlined supply chain operations',
      'Better demand forecasting and planning',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    shortDescription:
      'Optimize production processes, quality management, and supply chain operations for manufacturing excellence.',
    fullDescription:
      'Drive manufacturing efficiency with SAP solutions for production planning, quality management, and integrated supply chain operations. We help manufacturers implement lean processes, ensure quality compliance, and optimize resource utilization.',
    challenges: [
      'Complex production planning and scheduling',
      'Quality control and compliance management',
      'Supply chain visibility and coordination',
      'Equipment maintenance and downtime',
      'Cost management and margin optimization',
    ],
    solutions: [
      'Advanced production planning and scheduling',
      'Integrated quality management systems',
      'End-to-end supply chain visibility',
      'Predictive maintenance solutions',
      'Real-time cost tracking and analysis',
    ],
    keyClients: ['Shell International Petroleum', 'BP', 'Reliance Industries'],
    benefits: [
      'Increased production efficiency and throughput',
      'Improved quality and reduced defects',
      'Better supply chain coordination',
      'Reduced maintenance costs and downtime',
    ],
  },
  {
    id: 'electronics-semiconductors',
    name: 'Electronics & Semiconductors',
    icon: Cpu,
    shortDescription:
      'Support complex manufacturing processes and global supply chains in the electronics industry.',
    fullDescription:
      'Manage sophisticated product lifecycles and global operations with SAP solutions tailored for electronics and semiconductor companies. We address the unique challenges of high-tech manufacturing, from design to delivery.',
    challenges: [
      'Rapid product innovation cycles',
      'Complex global supply chains',
      'Technology obsolescence management',
      'High-volume, low-margin operations',
      'Stringent quality and testing requirements',
    ],
    solutions: [
      'Product lifecycle management for rapid innovation',
      'Global supply chain optimization',
      'Technology roadmap and obsolescence planning',
      'High-volume manufacturing optimization',
      'Integrated quality and testing systems',
    ],
    keyClients: ['Sony Electronics', 'NEC', 'Fujitsu', 'UTAC'],
    benefits: [
      'Faster time-to-market for new products',
      'Optimized global supply chain performance',
      'Better technology lifecycle management',
      'Improved operational efficiency',
    ],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    icon: Fuel,
    shortDescription:
      'Manage upstream, midstream, and downstream operations with energy sector SAP expertise.',
    fullDescription:
      'Optimize energy operations across the value chain with SAP solutions designed for oil and gas industry complexities. We help energy companies manage assets, ensure compliance, and optimize operations in volatile markets.',
    challenges: [
      'Complex asset management and maintenance',
      'Regulatory compliance and safety requirements',
      'Volatile commodity pricing and risk management',
      'Environmental sustainability requirements',
      'Global operations coordination',
    ],
    solutions: [
      'Comprehensive asset lifecycle management',
      'Regulatory compliance and safety systems',
      'Risk management and hedging solutions',
      'Environmental monitoring and reporting',
      'Integrated global operations platform',
    ],
    keyClients: [
      'Shell International Petroleum',
      'BP',
      'Reliance Industries',
      'NIS',
    ],
    benefits: [
      'Optimized asset performance and reliability',
      'Enhanced safety and compliance',
      'Better risk management and profitability',
      'Improved environmental stewardship',
    ],
  },
  {
    id: 'healthcare-pharma',
    name: 'Healthcare & Pharmaceuticals',
    icon: Heart,
    shortDescription:
      'Ensure compliance and optimize operations with healthcare-specific SAP solutions.',
    fullDescription:
      'Navigate regulatory requirements and optimize pharmaceutical operations with specialized SAP healthcare solutions. We help healthcare organizations ensure compliance, manage clinical trials, and maintain supply chain integrity.',
    challenges: [
      'Strict regulatory compliance requirements',
      'Complex clinical trial management',
      'Supply chain traceability and serialization',
      'Quality assurance and validation',
      'Global regulatory variations',
    ],
    solutions: [
      'Regulatory compliance management systems',
      'Clinical trial optimization platforms',
      'End-to-end supply chain traceability',
      'Quality management and validation tools',
      'Global regulatory reporting solutions',
    ],
    keyClients: ['AstraZeneca', 'McKesson', 'Alliance Healthcare'],
    benefits: [
      'Ensured regulatory compliance',
      'Optimized clinical trial processes',
      'Complete supply chain transparency',
      'Enhanced quality assurance',
    ],
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    icon: Wheat,
    shortDescription:
      'Manage food safety, traceability, and supply chain with industry-specific SAP solutions.',
    fullDescription:
      'Ensure food safety and optimize operations with SAP solutions designed for food and beverage industry requirements. We help companies maintain quality standards, ensure traceability, and optimize supply chain operations.',
    challenges: [
      'Food safety and quality compliance',
      'Complete batch traceability requirements',
      'Perishable inventory management',
      'Complex recipe and formulation management',
      'Seasonal demand variations',
    ],
    solutions: [
      'Comprehensive food safety protocols',
      'Complete batch tracking and traceability',
      'Optimized perishable inventory systems',
      'Recipe and formulation management',
      'Demand planning for seasonal products',
    ],
    keyClients: ['Various food and beverage manufacturers'],
    benefits: [
      'Enhanced food safety and compliance',
      'Complete product traceability',
      'Reduced waste and spoilage',
      'Better demand forecasting',
    ],
  },
  {
    id: 'fertilizers-chemicals',
    name: 'Fertilizers & Chemicals',
    icon: FlaskConical,
    shortDescription:
      'Handle complex formulations and regulatory requirements with chemical industry SAP expertise.',
    fullDescription:
      'Manage complex chemical processes and compliance requirements with specialized SAP solutions for the chemical industry. We help companies optimize formulations, ensure safety, and maintain regulatory compliance.',
    challenges: [
      'Complex formula and recipe management',
      'Safety and environmental compliance',
      'Hazardous material handling',
      'Batch processing optimization',
      'Environmental impact reporting',
    ],
    solutions: [
      'Advanced formula and recipe optimization',
      'Safety and environmental compliance systems',
      'Hazmat management and tracking',
      'Batch process optimization tools',
      'Environmental reporting and monitoring',
    ],
    keyClients: ['Various chemical and fertilizer companies'],
    benefits: [
      'Optimized formulations and processes',
      'Enhanced safety and compliance',
      'Better environmental stewardship',
      'Improved operational efficiency',
    ],
  },
];
