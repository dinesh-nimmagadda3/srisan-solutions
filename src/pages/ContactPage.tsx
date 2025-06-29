import { useState } from 'react';
import ContactHeader from './contact/ContactHeader';
import ContactForm from './contact/ContactForm';
import ContactSidebar from './contact/ContactSidebar';
import SuccessMessage from './contact/SuccessMessage';

const contactContent = {
  title: 'Get in Touch',
  subtitle:
    "Ready to transform your business with SAP? Let's discuss your requirements and how we can help you achieve your goals.",
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleFormSuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setShowResetConfirm(true);
    }, 8000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setShowResetConfirm(false);
  };

  const handleBackHome = () => {
    if (window.confirm('Are you sure you want to leave this page?')) {
      window.location.href = '/';
    }
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <ContactHeader onBackHome={handleBackHome} />

      <main className='py-12'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              {contactContent.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-4xl mx-auto'>
              {contactContent.subtitle}
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='lg:col-span-2'>
              {isSubmitted ? (
                <div className='bg-white rounded-2xl p-8 shadow-lg'>
                  <SuccessMessage
                    showResetConfirm={showResetConfirm}
                    onReset={handleReset}
                    onBackHome={handleBackHome}
                  />
                </div>
              ) : (
                <ContactForm onSuccess={handleFormSuccess} />
              )}
            </div>

            <ContactSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
