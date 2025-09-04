import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useDarkMode from '../hooks/useDarkMode';
import useAnalytics from '../hooks/useAnalytics';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [dark, toggleDark] = useDarkMode();
  useAnalytics();

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <Navbar dark={dark} toggleDark={toggleDark} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
