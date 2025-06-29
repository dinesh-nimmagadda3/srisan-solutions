import { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowLeft,
} from 'lucide-react';
import { contactContent } from '@/data/contact';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    website: '', // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's likely a bot
    if (formData.website) {
      console.log('Bot detected - honeypot field filled');
      return; // Silently reject
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        website: '',
      });
    }, 5000);
  };

  const handleBackHome = () => {
    window.location.href = '/';
  };

  const iconMap = {
    email: Mail,
    location: MapPin,
    time: Clock,
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header with SSL branding */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <img
                src='/ssl-logo.png'
                alt='SSL Solutions Logo'
                className='h-12 w-auto'
              />
              <div>
                <h1 className='text-xl font-bold text-gray-900'>
                  SSL Solutions Limited
                </h1>
                <p className='text-orange-600 text-sm font-medium'>
                  BOUTIQUE SAP CONSULTING
                </p>
              </div>
            </div>

            <button
              onClick={handleBackHome}
              className='flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200'
            >
              <ArrowLeft className='w-5 h-5 mr-2' />
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='py-12'>
        <div className='max-w-6xl mx-auto px-6'>
          {/* Page Header */}
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              {contactContent.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
              {contactContent.subtitle}
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-12'>
            {/* Contact Form - Takes 2 columns */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <div className='mb-8'>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {contactContent.form.title}
                  </h3>
                  <p className='text-gray-600'>
                    {contactContent.form.subtitle}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className='text-center py-12'>
                    <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                    <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                      Message Sent Successfully!
                    </h4>
                    <p className='text-gray-600 mb-6'>
                      {contactContent.form.successMessage}
                    </p>
                    <button
                      onClick={handleBackHome}
                      className='bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200'
                    >
                      Return to Homepage
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='space-y-6'>
                    {/* Honeypot field - hidden from users but visible to bots */}
                    <div className='hidden' aria-hidden='true'>
                      <label htmlFor='website'>Website (leave blank)</label>
                      <input
                        type='text'
                        id='website'
                        name='website'
                        value={formData.website}
                        onChange={handleInputChange}
                        tabIndex={-1}
                        autoComplete='off'
                      />
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-gray-700 mb-2'
                        >
                          {contactContent.form.fields.name} *
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                          placeholder='John Doe'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-700 mb-2'
                        >
                          {contactContent.form.fields.email} *
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                          placeholder='john@company.com'
                        />
                      </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                      <div>
                        <label
                          htmlFor='company'
                          className='block text-sm font-medium text-gray-700 mb-2'
                        >
                          {contactContent.form.fields.company}
                        </label>
                        <input
                          type='text'
                          id='company'
                          name='company'
                          value={formData.company}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                          placeholder='Your Company'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='phone'
                          className='block text-sm font-medium text-gray-700 mb-2'
                        >
                          {contactContent.form.fields.phone}
                        </label>
                        <input
                          type='tel'
                          id='phone'
                          name='phone'
                          value={formData.phone}
                          onChange={handleInputChange}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200'
                          placeholder='+44 1234 567890'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        {contactContent.form.fields.message} *
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 resize-none'
                        placeholder='Tell us about your SAP requirements, project timeline, current challenges, and how we can help...'
                      />
                    </div>

                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center'
                    >
                      {isSubmitting ? (
                        <>
                          <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className='w-5 h-5 mr-2' />
                          {contactContent.form.submitButton}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className='space-y-8'>
              {/* Contact Details */}
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                  {contactContent.info.title}
                </h3>

                <div className='space-y-6'>
                  {contactContent.info.items.map((item, index) => {
                    const IconComponent =
                      iconMap[item.icon as keyof typeof iconMap];

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
                                item.action.startsWith('http')
                                  ? '_blank'
                                  : undefined
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
                <h3 className='text-2xl font-bold mb-6'>
                  Why Choose SSL Solutions?
                </h3>

                <div className='space-y-4'>
                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-orange-200 flex-shrink-0 mt-0.5' />
                    <div>
                      <h4 className='font-semibold mb-1'>Expert Team</h4>
                      <p className='text-orange-100 text-sm'>
                        20+ years of SAP consulting experience
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-orange-200 flex-shrink-0 mt-0.5' />
                    <div>
                      <h4 className='font-semibold mb-1'>Proven Results</h4>
                      <p className='text-orange-100 text-sm'>
                        Trusted by global leaders like Shell, AstraZeneca
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start space-x-3'>
                    <CheckCircle className='w-5 h-5 text-orange-200 flex-shrink-0 mt-0.5' />
                    <div>
                      <h4 className='font-semibold mb-1'>Personal Service</h4>
                      <p className='text-orange-100 text-sm'>
                        Boutique approach with dedicated attention
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
