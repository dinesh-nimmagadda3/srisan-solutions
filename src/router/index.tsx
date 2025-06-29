import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { HomePage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Future routes can be added here:
      // {
      //   path: '/about',
      //   element: <AboutPage />,
      // },
      // {
      //   path: '/services',
      //   element: <ServicesPage />,
      // },
      // {
      //   path: '/contact',
      //   element: <ContactPage />,
      // },
    ],
  },
]);
