export const contactContent = {
  title: 'Get In Touch',
  subtitle:
    "Ready to transform your business with SAP? Let's discuss how our expertise can help you achieve your goals.",
  form: {
    title: 'Send us a message',
    subtitle: "We'll get back to you within 24 hours",
    fields: {
      name: 'Full Name',
      email: 'Email Address',
      company: 'Company Name',
      phone: 'Phone Number',
      service: 'Service Interest',
      message: 'Message',
    },
    serviceOptions: [
      'SAP S/4HANA Implementation',
      'System Upgrades & Migration',
      'Process Optimization',
      'Custom Development',
      'Training & Support',
      'General Consultation',
    ],
    submitButton: 'Send Message',
    successMessage: "Thank you! We'll be in touch soon.",
    errorMessage: 'Something went wrong. Please try again.',
  },
  info: {
    title: 'Contact Information',
    subtitle: 'Get in touch with our SAP experts',
    items: [
      {
        icon: 'email',
        label: 'Email',
        value: 'info@srian.com',
        action: 'mailto:info@srian.com',
      },
      {
        icon: 'location',
        label: 'Address',
        value: '383 Kenton Road, Harrow HA3 8DP, United Kingdom',
        action:
          'https://maps.google.com/?q=383+Kenton+Road,+Harrow+HA3+8DP,+United+Kingdom',
      },
      {
        icon: 'time',
        label: 'Business Hours',
        value: 'Monday - Friday: 9:00 AM - 6:00 PM GMT',
        action: null,
      },
    ],
  },
  cta: {
    title: 'Ready to Get Started?',
    subtitle:
      "Let's discuss your SAP requirements and how we can help transform your business.",
    primaryButton: 'Schedule a Consultation',
    secondaryButton: 'Download Our Brochure',
  },
};
