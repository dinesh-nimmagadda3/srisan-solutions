import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  showResetConfirm: boolean;
  onReset: () => void;
  onBackHome: () => void;
}

export default function SuccessMessage({
  showResetConfirm,
  onReset,
  onBackHome,
}: SuccessMessageProps) {
  return (
    <div className='text-center py-12 relative'>
      <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
      <h4 className='text-xl font-semibold text-gray-900 mb-2'>
        Message Sent Successfully!
      </h4>
      <p className='text-gray-600 mb-6'>
        Thank you for your inquiry! We have received your message and will
        contact you within 24 hours to discuss your SAP requirements.
      </p>

      {showResetConfirm && (
        <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6'>
          <p className='text-yellow-800 mb-4'>
            Would you like to send another message?
          </p>
          <div className='flex justify-center space-x-4'>
            <button
              onClick={onReset}
              className='bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200'
            >
              Send Another Message
            </button>
            <button
              onClick={onBackHome}
              className='bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200'
            >
              Return to Homepage
            </button>
          </div>
        </div>
      )}

      <button
        onClick={onBackHome}
        className='bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200'
      >
        Return to Homepage
      </button>
    </div>
  );
}
