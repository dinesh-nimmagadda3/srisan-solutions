export interface Industry {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string[];
  solutions: string[];
}

export const industriesContent = {
  title: 'Industries We Serve',
  subtitle:
    'Our team has extensive experience delivering SAP solutions across a wide range of industries, understanding the unique challenges and requirements of each sector.',
};

export const industriesData: Industry[] = [
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer Goods',
    shortDescription:
      'Streamline supply chain, inventory management, and customer experience with retail-focused SAP solutions.',
    fullDescription:
      'Transform your retail operations with SAP solutions designed for omnichannel commerce, inventory optimization, and enhanced customer experiences.',
    challenges: [
      'Complex supply chains',
      'Inventory management',
      'Customer experience',
    ],
    solutions: [
      'Omnichannel integration',
      'Real-time inventory',
      'Customer analytics',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    shortDescription:
      'Optimize production processes, quality management, and supply chain operations for manufacturing excellence.',
    fullDescription:
      'Drive manufacturing efficiency with SAP solutions for production planning, quality management, and integrated supply chain operations.',
    challenges: [
      'Production planning',
      'Quality control',
      'Supply chain complexity',
    ],
    solutions: [
      'Automated planning',
      'Quality systems',
      'Integrated operations',
    ],
  },
  {
    id: 'electronics-semiconductors',
    name: 'Electronics & Semiconductors',
    shortDescription:
      'Support complex manufacturing processes and global supply chains in the electronics industry.',
    fullDescription:
      'Manage sophisticated product lifecycles and global operations with SAP solutions tailored for electronics and semiconductor companies.',
    challenges: [
      'Complex products',
      'Global supply chains',
      'Rapid innovation',
    ],
    solutions: [
      'Product lifecycle management',
      'Supply optimization',
      'Innovation tracking',
    ],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    shortDescription:
      'Manage upstream, midstream, and downstream operations with energy sector SAP expertise.',
    fullDescription:
      'Optimize energy operations across the value chain with SAP solutions designed for oil and gas industry complexities.',
    challenges: [
      'Asset management',
      'Regulatory compliance',
      'Risk management',
    ],
    solutions: [
      'Asset optimization',
      'Compliance automation',
      'Risk mitigation',
    ],
  },
  {
    id: 'healthcare-pharma',
    name: 'Healthcare & Pharmaceuticals',
    shortDescription:
      'Ensure compliance and optimize operations with healthcare-specific SAP solutions.',
    fullDescription:
      'Navigate regulatory requirements and optimize pharmaceutical operations with specialized SAP healthcare solutions.',
    challenges: [
      'Regulatory compliance',
      'Clinical trials',
      'Supply traceability',
    ],
    solutions: [
      'Compliance management',
      'Trial optimization',
      'End-to-end traceability',
    ],
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    shortDescription:
      'Manage food safety, traceability, and supply chain with industry-specific SAP solutions.',
    fullDescription:
      'Ensure food safety and optimize operations with SAP solutions designed for food and beverage industry requirements.',
    challenges: ['Food safety', 'Batch traceability', 'Supply chain'],
    solutions: [
      'Safety protocols',
      'Complete traceability',
      'Supply optimization',
    ],
  },
  {
    id: 'fertilizers-chemicals',
    name: 'Fertilizers & Chemicals',
    shortDescription:
      'Handle complex formulations and regulatory requirements with chemical industry SAP expertise.',
    fullDescription:
      'Manage complex chemical processes and compliance requirements with specialized SAP solutions for the chemical industry.',
    challenges: [
      'Formula management',
      'Safety compliance',
      'Environmental reporting',
    ],
    solutions: [
      'Formula optimization',
      'Safety automation',
      'Compliance reporting',
    ],
  },
];
