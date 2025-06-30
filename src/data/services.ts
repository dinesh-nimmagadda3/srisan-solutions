// Enhanced services data based on the company profile
export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  benefits: string[];
  deliverables: string[];
  timeline: string;
  technologies: string[];
}

export const servicesContent = {
  title: 'Our SAP Expertise',
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
      'Our consultants work closely with you to ensure the S/4HANA solution aligns with your unique business needs, providing full lifecycle support throughout the implementation journey. We follow SAP best practices while tailoring the solution to your specific industry requirements.',
    keyFeatures: [
      'Business blueprinting and design',
      'System configuration and customization',
      'Data migration and validation',
      'Integration with existing systems',
      'Go-live support and stabilization',
      'Performance optimization',
    ],
    benefits: [
      'Faster business processes with real-time analytics',
      'Simplified IT landscape and reduced TCO',
      'Enhanced user experience with SAP Fiori',
      'Future-ready digital foundation',
      'Improved decision-making capabilities',
    ],
    deliverables: [
      'Business Blueprint Document',
      'Technical Design Specification',
      'Configured SAP S/4HANA System',
      'Data Migration Reports',
      'User Training Materials',
      'Go-Live Support Documentation',
    ],
    timeline: '6-18 months depending on scope',
    technologies: [
      'SAP S/4HANA',
      'SAP Fiori',
      'SAP HANA Database',
      'SAP Activate',
    ],
  },
  {
    id: 'system-upgrades',
    title: 'System Upgrades & Migration',
    shortDescription:
      'Smooth migration from SAP ECC to SAP S/4HANA or upgrading your current system with minimal disruption and optimal performance.',
    fullDescription:
      "Whether you're migrating from SAP ECC to SAP S/4HANA or upgrading your current system, we ensure a smooth transition with comprehensive planning, custom code remediation, and thorough testing to minimize business disruption.",
    keyFeatures: [
      'Technical upgrade planning and assessment',
      'Custom code remediation and optimization',
      'Database migration and optimization',
      'System landscape transformation',
      'Performance tuning and optimization',
      'Risk mitigation strategies',
    ],
    benefits: [
      'Minimal business disruption during transition',
      'Preserved and optimized customizations',
      'Improved system performance and reliability',
      'Access to latest SAP innovations',
      'Enhanced security and compliance',
    ],
    deliverables: [
      'Upgrade Readiness Assessment',
      'Migration Strategy Document',
      'Custom Code Analysis Report',
      'Upgraded SAP System',
      'Performance Optimization Report',
      'Post-Migration Support Plan',
    ],
    timeline: '4-12 months depending on complexity',
    technologies: ['SAP S/4HANA', 'SAP ECC', 'SAP HANA', 'Custom ABAP Code'],
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization & Automation',
    shortDescription:
      'Optimize and automate key business processes using SAP tools to improve efficiency, reduce costs, and enhance overall performance.',
    fullDescription:
      'We help streamline your business processes through SAP automation tools, workflow optimization, and best practice implementation. Our approach focuses on identifying bottlenecks, eliminating manual tasks, and improving overall operational efficiency.',
    keyFeatures: [
      'Business process analysis and mapping',
      'Workflow automation design and implementation',
      'SAP Fiori app development and deployment',
      'Process standardization across locations',
      'Performance monitoring and KPI tracking',
      'Continuous improvement strategies',
    ],
    benefits: [
      'Significantly increased operational efficiency',
      'Reduced manual processing and errors',
      'Lower operational costs and faster ROI',
      'Improved compliance and governance',
      'Enhanced employee productivity',
    ],
    deliverables: [
      'Process Analysis Report',
      'Automation Roadmap',
      'Configured Workflows',
      'Custom Fiori Applications',
      'KPI Dashboard',
      'Process Documentation',
    ],
    timeline: '3-8 months per process area',
    technologies: [
      'SAP Workflow',
      'SAP Fiori',
      'SAP Business Process Management',
      'ABAP',
    ],
  },
  {
    id: 'custom-development',
    title: 'Custom Development & Integration',
    shortDescription:
      'Tailored ABAP development, custom reporting, and seamless integration services to meet your specific business requirements.',
    fullDescription:
      'Our experienced development team creates custom solutions, reports, and integrations that extend SAP functionality to meet your unique business needs. We follow SAP development standards and ensure future upgrade compatibility.',
    keyFeatures: [
      'Custom ABAP development and programming',
      'Advanced reporting and analytics solutions',
      'Third-party system integration and APIs',
      'SAP enhancement and modification services',
      'Interface development and data exchange',
      'Mobile application development',
    ],
    benefits: [
      'Solutions tailored to your exact requirements',
      'Seamless integration with existing systems',
      'Enhanced functionality beyond standard SAP',
      'Competitive advantage through innovation',
      'Improved data visibility and reporting',
    ],
    deliverables: [
      'Technical Specification Documents',
      'Custom ABAP Programs',
      'Integration Solutions',
      'Custom Reports and Forms',
      'API Documentation',
      'Testing and Validation Reports',
    ],
    timeline: '2-6 months per development project',
    technologies: [
      'ABAP',
      'SAP PI/PO',
      'SAP Cloud Platform',
      'REST/SOAP APIs',
      'OData',
    ],
  },
  {
    id: 'training',
    title: 'Training & Change Management',
    shortDescription:
      'Comprehensive user training and change management strategies to ensure your teams effectively adopt and utilize SAP systems.',
    fullDescription:
      'We provide structured training programs and change management support to ensure successful SAP adoption across your organization. Our approach includes role-based training, super user development, and ongoing support to maximize user productivity.',
    keyFeatures: [
      'Role-based training program development',
      'Interactive training materials and documentation',
      'Change management strategy and execution',
      'Super user identification and development',
      'Post-implementation learning support',
      'Knowledge transfer and documentation',
    ],
    benefits: [
      'Faster user adoption and productivity',
      'Reduced support tickets and issues',
      'Improved employee satisfaction',
      'Successful change implementation',
      'Sustainable knowledge transfer',
    ],
    deliverables: [
      'Training Needs Assessment',
      'Role-Based Training Materials',
      'Change Management Plan',
      'Super User Certification',
      'Knowledge Base',
      'Training Effectiveness Report',
    ],
    timeline: '2-4 months including post-go-live support',
    technologies: [
      'SAP Fiori',
      'SAP Enable Now',
      'Learning Management Systems',
    ],
  },
  {
    id: 'support',
    title: 'Ongoing Support & Maintenance',
    shortDescription:
      'Flexible support services with proactive monitoring and troubleshooting to keep your SAP systems running smoothly and efficiently.',
    fullDescription:
      'Our comprehensive support and maintenance services provide proactive monitoring, issue resolution, and system optimization to ensure your SAP landscape operates at peak performance. We offer flexible support models to meet your specific needs.',
    keyFeatures: [
      'Proactive system monitoring and alerts',
      '24/7 technical support and help desk',
      'Issue resolution and root cause analysis',
      'Regular system health checks and optimization',
      'Patch management and security updates',
      'Performance tuning and capacity planning',
    ],
    benefits: [
      'Minimized system downtime and disruptions',
      'Predictable support costs and budgeting',
      'Expert technical assistance when needed',
      'Optimized system performance over time',
      'Peace of mind and business continuity',
    ],
    deliverables: [
      'Support Service Level Agreement',
      'Monthly System Health Reports',
      'Issue Resolution Documentation',
      'Performance Optimization Reports',
      'Security Update Reports',
      'Capacity Planning Recommendations',
    ],
    timeline: 'Ongoing service with flexible terms',
    technologies: [
      'SAP Solution Manager',
      'SAP Early Watch Alert',
      'System Monitoring Tools',
    ],
  },
];
