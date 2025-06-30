import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components';
import { HomePage } from '@/pages';
import { AboutPage } from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { IndustriesPage } from '@/pages/IndustriesPage';
import { ClientsPage } from '@/pages/ClientsPage';
import { CareersPage } from '@/pages/CareersPage';

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
        element: <CareersPage />,
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
