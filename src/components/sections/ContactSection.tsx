import { ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  const handleContactPage = () => {
    window.location.href = '/contact';
  };

  return (
    <section id='contact' className='py-20 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        {/* Main CTA Content */}
        <div className='text-gray-900 mb-12'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed'>
            Let's discuss how our SAP expertise can help you achieve your
            business objectives and drive operational excellence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className='flex justify-center'>
          <button
            onClick={handleContactPage}
            className='bg-orange-600 text-white px-12 py-5 rounded-lg font-semibold text-xl hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center'
          >
            Get Started Today
            <ArrowRight className='w-6 h-6 ml-3' />
          </button>
        </div>
      </div>
    </section>
  );
};
