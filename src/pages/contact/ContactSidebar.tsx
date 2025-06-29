import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const contactInfo = {
  title: 'Contact Information',
  items: [
    {
      icon: 'email',
      label: 'Email',
      value: 'info@srisan.com',
      action: 'mailto:info@srisan.com',
    },
    {
      icon: 'time',
      label: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM GMT',
      action: null,
    },
  ],
};

const whyChooseUs = [
  {
    title: 'Expert Team',
    description: '20+ years of SAP consulting experience',
  },
  {
    title: 'Proven Results',
    description: 'Trusted by global leaders like Shell, AstraZeneca',
  },
  {
    title: 'Personal Service',
    description: 'Boutique approach with dedicated attention',
  },
];

export default function ContactSidebar() {
  const iconMap = {
    email: Mail,
    location: MapPin,
    time: Clock,
  } as const;

  return (
    <div className='space-y-8'>
      {/* Contact Details */}
      <div className='bg-white rounded-2xl p-8 shadow-lg'>
        <h3 className='text-2xl font-bold text-gray-900 mb-6'>
          {contactInfo.title}
        </h3>

        <div className='space-y-6'>
          {contactInfo.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];

            return (
              <div key={index} className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <IconComponent className='w-6 h-6 text-orange-600' />
                </div>

                <div>
                  <h4 className='font-semibold text-gray-900 mb-1'>
                    {item.label}
                  </h4>
                  {item.action ? (
                    <a
                      href={item.action}
                      target={
                        item.action.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.action.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className='text-gray-600 hover:text-orange-600 transition-colors duration-200'
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className='text-gray-600'>{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white'>
        <h3 className='text-2xl font-bold mb-6'>Why Choose SSL Solutions?</h3>

        <div className='space-y-4'>
          {whyChooseUs.map((item, index) => (
            <div key={index} className='flex items-start space-x-3'>
              <CheckCircle className='w-5 h-5 text-orange-200 flex-shrink-0 mt-0.5' />
              <div>
                <h4 className='font-semibold mb-1'>{item.title}</h4>
                <p className='text-orange-100 text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
