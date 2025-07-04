import type { Industry } from '@/types';

export const industriesContent = {
  title: 'Industries We Serve',
  subtitle:
    'We provide specialized SAP solutions for a wide range of industries, understanding the unique challenges and opportunities of each sector.',
  exploreIndustryText: 'Explore Industry',
  sapExpertiseText: 'SAP Expertise',
  keyChallengesText: 'Key Challenges',
  ourSolutionsText: 'Our Solutions',
  learnMoreButton: 'Learn More About',
  discussNeedsButton: 'Discuss Your Needs',
};

export const industriesData: Industry[] = [
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer Goods',
    shortDescription:
      'Enhancing customer experience and supply chain efficiency with tailored SAP solutions for the retail sector.',
    fullDescription:
      'Transform your retail operations with SAP solutions designed for omnichannel commerce, inventory optimization, and enhanced customer experiences.',
    challenges: [
      'Managing complex supply chains and inventory levels.',
      'Meeting evolving customer expectations for personalization.',
      'Integrating e-commerce with brick-and-mortar stores.',
      'Optimizing pricing and promotion strategies.',
    ],
    solutions: [
      'SAP S/4HANA for Retail for real-time inventory management.',
      'SAP Customer Experience (CX) solutions for personalized marketing.',
      'SAP Commerce Cloud for unified omnichannel sales.',
      'SAP Analytics Cloud for data-driven decision-making.',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    shortDescription:
      'Streamlining production processes and improving operational visibility with our SAP manufacturing solutions.',
    fullDescription:
      'Drive manufacturing efficiency with SAP solutions for production planning, quality management, and integrated supply chain operations.',
    challenges: [
      'Optimizing production planning and scheduling.',
      'Ensuring quality control and compliance.',
      'Managing shop floor operations effectively.',
      'Integrating with Industry 4.0 technologies.',
    ],
    solutions: [
      'SAP S/4HANA Manufacturing for production planning and execution.',
      'SAP Quality Management (QM) for quality control.',
      'SAP Manufacturing Execution (ME) for shop floor control.',
      'SAP Digital Manufacturing Cloud for smart factory initiatives.',
    ],
  },
  {
    id: 'electronics-semiconductors',
    name: 'Electronics & Semiconductors',
    shortDescription:
      'Navigating the fast-paced electronics industry with agile and responsive SAP systems.',
    fullDescription:
      'Manage sophisticated product lifecycles and global operations with SAP solutions tailored for electronics and semiconductor companies.',
    challenges: [
      'Managing short product lifecycles and rapid innovation.',
      'Ensuring supply chain resilience and visibility.',
      'Controlling R&D and manufacturing costs.',
      'Adhering to strict quality and compliance standards.',
    ],
    solutions: [
      'SAP S/4HANA for high-tech industry-specific functionalities.',
      'SAP Integrated Business Planning (IBP) for demand forecasting.',
      'SAP Product Lifecycle Management (PLM) for innovation management.',
      'SAP Manufacturing Suite for complex assembly processes.',
    ],
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    shortDescription:
      'Optimizing upstream, midstream, and downstream operations with robust SAP solutions for the energy sector.',
    fullDescription:
      'Optimize energy operations across the value chain with SAP solutions designed for oil and gas industry complexities.',
    challenges: [
      'Managing volatile commodity prices and market demand.',
      'Ensuring asset performance and maintenance.',
      'Adhering to stringent health, safety, and environmental regulations.',
      'Optimizing hydrocarbon supply chain management.',
    ],
    solutions: [
      'SAP S/4HANA for Oil & Gas for end-to-end process integration.',
      'SAP Asset Intelligence Network (AIN) for predictive maintenance.',
      'SAP Environment, Health, and Safety (EHS) Management.',
      'SAP Upstream Operations Management (UOM) for production optimization.',
    ],
  },
  {
    id: 'healthcare-pharma',
    name: 'Healthcare & Pharmaceuticals',
    shortDescription:
      'Ensuring compliance, quality, and efficiency in the highly regulated healthcare and pharma industries.',
    fullDescription:
      'Navigate regulatory requirements and optimize pharmaceutical operations with specialized SAP healthcare solutions.',
    challenges: [
      'Adhering to strict regulatory requirements (e.g., FDA, EMA).',
      'Managing complex clinical trial supply chains.',
      'Ensuring drug traceability and serialization.',
      'Optimizing patient care and hospital management.',
    ],
    solutions: [
      'SAP S/4HANA for Life Sciences for GxP compliance.',
      'SAP Batch Release Hub for streamlined quality control.',
      'SAP Advanced Track and Trace for Pharmaceuticals.',
      'SAP Patient Management for healthcare providers.',
    ],
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    shortDescription:
      'Meeting consumer demands and ensuring food safety with our specialized SAP solutions for the F&B industry.',
    fullDescription:
      'Ensure food safety and optimize operations with SAP solutions designed for food and beverage industry requirements.',
    challenges: [
      'Managing perishable inventory and shelf life.',
      'Ensuring farm-to-fork traceability and food safety.',
      'Responding to changing consumer tastes and trends.',
      'Optimizing recipe and batch management.',
    ],
    solutions: [
      'SAP S/4HANA for batch management and traceability.',
      'SAP Global Batch Traceability (GBT) for end-to-end visibility.',
      'SAP Recipe Development for product innovation.',
      'SAP Direct Store Delivery (DSD) for efficient distribution.',
    ],
  },
  {
    id: 'fertilizers-chemicals',
    name: 'Fertilizers & Chemicals',
    shortDescription:
      'Managing complex chemical manufacturing processes with a focus on safety, compliance, and efficiency.',
    fullDescription:
      'Manage complex chemical processes and compliance requirements with specialized SAP solutions for the chemical industry.',
    challenges: [
      'Handling hazardous materials and ensuring process safety.',
      'Complying with complex environmental regulations (e.g., REACH).',
      'Managing batch and formula management.',
      'Optimizing supply chain and logistics for bulk materials.',
    ],
    solutions: [
      'SAP S/4HANA for Chemical Companies for industry-specific processes.',
      'SAP EHS Management for safety and compliance.',
      'SAP Recipe Development for formula and recipe management.',
      'SAP Transportation Management (TM) for bulk logistics.',
    ],
  },
];
