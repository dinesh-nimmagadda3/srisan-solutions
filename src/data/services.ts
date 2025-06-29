export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  benefits: string[];
}

export const servicesContent = {
  title: 'Our Expertise',
  subtitle:
    'We offer a wide range of SAP services, from implementation and upgrades to support and training, helping our clients drive digital transformation.',
};

export const servicesData: ServiceDetail[] = [
  {
    id: 'sap-s4hana',
    title: 'SAP S/4HANA Implementations',
    shortDescription:
      'Complete lifecycle support for SAP S/4HANA implementation, from blueprinting to go-live with minimal business disruption.',
    fullDescription:
      'Our consultants work closely with you to ensure the S/4HANA solution aligns with your unique business needs, providing full lifecycle support throughout the implementation journey.',
    keyFeatures: [
      'Business blueprinting and design',
      'System configuration and customization',
      'Data migration and validation',
      'Integration with existing systems',
      'Go-live support and stabilization',
    ],
    benefits: [
      'Faster business processes',
      'Real-time analytics and insights',
      'Simplified IT landscape',
      'Enhanced user experience',
    ],
  },
  {
    id: 'system-upgrades',
    title: 'System Upgrades & Migration',
    shortDescription:
      'Smooth migration from SAP ECC to SAP S/4HANA or upgrading your current system with minimal disruption and optimal performance.',
    fullDescription:
      "Whether you're migrating from SAP ECC to SAP S/4HANA or upgrading your current system, we ensure a smooth transition with comprehensive planning and execution.",
    keyFeatures: [
      'Technical upgrade planning',
      'Custom code remediation',
      'Database migration',
      'System landscape optimization',
      'Performance tuning',
    ],
    benefits: [
      'Minimal business disruption',
      'Preserved customizations',
      'Improved system performance',
      'Future-ready technology platform',
    ],
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization & Automation',
    shortDescription:
      'Optimize and automate key business processes using SAP tools to improve efficiency, reduce costs, and enhance overall performance.',
    fullDescription:
      'We help streamline your business processes through SAP automation tools, workflow optimization, and best practice implementation to drive operational excellence.',
    keyFeatures: [
      'Business process analysis',
      'Workflow automation design',
      'SAP Fiori app development',
      'Process standardization',
      'Performance monitoring',
    ],
    benefits: [
      'Increased operational efficiency',
      'Reduced manual processing',
      'Lower operational costs',
      'Improved compliance and governance',
    ],
  },
  {
    id: 'custom-development',
    title: 'Custom Development & Integration',
    shortDescription:
      'Tailored ABAP development, custom reporting, and seamless integration services to meet your specific business requirements.',
    fullDescription:
      'Our development team creates custom solutions, reports, and integrations that extend SAP functionality to meet your unique business needs.',
    keyFeatures: [
      'ABAP development and programming',
      'Custom report development',
      'Third-party system integration',
      'API development and management',
      'Enhancement and modification',
    ],
    benefits: [
      'Tailored to specific needs',
      'Seamless system integration',
      'Enhanced functionality',
      'Competitive advantage',
    ],
  },
  {
    id: 'training',
    title: 'Training & Change Management',
    shortDescription:
      'Comprehensive user training and change management strategies to ensure your teams effectively adopt and utilize SAP systems.',
    fullDescription:
      'We provide structured training programs and change management support to ensure successful SAP adoption across your organization.',
    keyFeatures: [
      'Role-based training programs',
      'User documentation creation',
      'Change management strategy',
      'Super user development',
      'Ongoing learning support',
    ],
    benefits: [
      'Faster user adoption',
      'Reduced support tickets',
      'Improved productivity',
      'Successful change implementation',
    ],
  },
  {
    id: 'support',
    title: 'Ongoing Support & Maintenance',
    shortDescription:
      'Flexible support services with proactive monitoring and troubleshooting to keep your SAP systems running smoothly and efficiently.',
    fullDescription:
      'Our team offers comprehensive support and maintenance services, providing proactive monitoring, issue resolution, and system optimization.',
    keyFeatures: [
      'Proactive system monitoring',
      '24/7 technical support',
      'Issue resolution and troubleshooting',
      'System health checks',
      'Patch management and updates',
    ],
    benefits: [
      'Minimized system downtime',
      'Predictable support costs',
      'Expert technical assistance',
      'Optimized system performance',
    ],
  },
];
