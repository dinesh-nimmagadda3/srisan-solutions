import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components';
import { HomePage } from '@/pages';
import { AboutPage } from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { ClientsPage } from '@/pages/ClientsPage';

// Placeholder components for pages that don't exist yet
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center max-w-md mx-auto px-4'>
      <h1 className='text-4xl font-bold text-gray-900 mb-4'>{title}</h1>
      <p className='text-gray-600 mb-8'>
        This page is under construction. We're working hard to bring you amazing
        content!
      </p>
      <button
        onClick={() => (window.location.href = '/')}
        className='bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors'
      >
        Go Home
      </button>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/industries',
        element: <IndustriesPage />,
      },
      {
        path: '/clients',
        element: <ClientsPage />,
      },
      {
        path: '/careers',
        element: <PlaceholderPage title='Careers' />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      // Catch-all route for undefined paths
      {
        path: '*',
        element: (
          <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold text-gray-900 mb-4'>
                404 - Page Not Found
              </h1>
              <p className='text-gray-600 mb-8'>
                The page you're looking for doesn't exist.
              </p>
              <button
                onClick={() => (window.location.href = '/')}
                className='bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors'
              >
                Go Home
              </button>
            </div>
          </div>
        ),
      },
    ],
  },
]);
