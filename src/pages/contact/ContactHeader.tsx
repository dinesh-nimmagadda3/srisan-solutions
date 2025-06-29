import { ArrowLeft } from 'lucide-react';

interface ContactHeaderProps {
  onBackHome: () => void;
}

export default function ContactHeader({ onBackHome }: ContactHeaderProps) {
  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-6xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='h-12 w-12 bg-orange-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>SSL</span>
            </div>
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
            onClick={onBackHome}
            className='flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-200'
          >
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back to Home
          </button>
        </div>
      </div>
    </header>
  );
}
