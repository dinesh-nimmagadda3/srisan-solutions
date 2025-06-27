import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  className?: string;
}

export const Layout = ({ className = '' }: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
