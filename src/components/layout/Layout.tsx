import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloating } from '../ui/WhatsAppFloating';
import { ScrollToTop } from '../ui/ScrollToTop';

export const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Scroll to top or to hash element on route change
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-bg text-ink-primary">
      {/* Top utility bar */}
      <TopBar />

      {/* Main navigation */}
      <Navbar />

      {/* Page Content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent interactive floating tools */}
      <WhatsAppFloating />
      <ScrollToTop />
    </div>
  );
};
