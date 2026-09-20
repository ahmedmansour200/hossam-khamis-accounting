import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside aria-label="زر الصعود لأعلى الصفحة" className="fixed bottom-6 right-6 z-40">
      <button
        onClick={scrollToTop}
        aria-label="الرجوع إلى أعلى الصفحة"
        className="flex items-center justify-center w-11 h-11 bg-white hover:bg-navy-900 text-navy-900 hover:text-white rounded-full shadow-soft-lg border border-slate-200 hover:border-navy-800 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </aside>
  );
};
