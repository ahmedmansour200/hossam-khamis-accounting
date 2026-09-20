import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ArrowLeft } from 'lucide-react';
import { SITE_INFO, NAV_ITEMS } from '../../constants/siteData';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Office Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 rounded-lg p-1"
            aria-label="الرئيسية - مكتب المحاسب القانوني حسام محمد خميس"
          >
            {/* Elegant Emblem */}
            <div className="w-11 h-11 rounded-lg bg-navy-900 flex items-center justify-center text-gold-500 shadow-soft border border-navy-800 transition-transform group-hover:scale-105 shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M6 7h12" />
                <path d="M6 7l-3 6h6l-3-6Z" />
                <path d="M18 7l-3 6h6l-3-6Z" />
                <path d="M8 21h8" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-navy-800 transition-colors leading-tight">
                {SITE_INFO.officeName}
              </span>
              <span className="text-xs text-ink-muted font-normal">
                محاسبة • ضرائب • تأسيس شركات • استشارات
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="شريط التنقل الرئيسي">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-navy-900 font-semibold bg-navy-50/80'
                      : 'text-ink-primary hover:text-navy-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 right-3 left-3 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              تواصل معنا
            </Button>
          </div>

          {/* Mobile Menu Trigger Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="p-2 text-navy-900 bg-navy-50 hover:bg-navy-100 rounded-lg transition-colors"
              aria-label="اتصال هاتفي سريع"
            >
              <Phone className="w-5 h-5 text-navy-900" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-2 text-navy-900 hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 transition-colors"
              aria-expanded={isOpen}
              aria-label="فتح القائمة الرئيسية"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل للأجهزة الذكية"
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between p-4 border-b border-slate-200/80 bg-slate-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 flex items-center justify-center text-gold-500 shadow-sm shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v18" />
                      <path d="M6 7h12" />
                      <path d="M6 7l-3 6h6l-3-6Z" />
                      <path d="M18 7l-3 6h6l-3-6Z" />
                      <path d="M8 21h8" />
                    </svg>
                  </div>
                  <span className="font-bold text-navy-900 text-sm leading-snug">
                    حسام محمد خميس
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-500 hover:text-navy-900 hover:bg-slate-200/60 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1.5" aria-label="روابط التنقل">
                {NAV_ITEMS.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-navy-900 text-white shadow-soft font-semibold'
                          : 'text-navy-900 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowLeft className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 space-y-3">
              <div className="text-xs text-ink-muted font-medium">
                تواصل مباشر مع المحاسب القانوني
              </div>

              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-navy-900 text-white font-medium rounded-lg text-sm shadow-soft hover:bg-navy-850 transition-colors"
                dir="ltr"
              >
                <span>{SITE_INFO.phone}</span>
                <Phone className="w-4 h-4 text-gold-500" />
              </a>

              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25D366] text-white font-medium rounded-lg text-sm shadow-soft hover:bg-[#20bd5a] transition-colors"
              >
                <span>محادثة فورية عبر واتساب</span>
                <MessageSquare className="w-4 h-4" />
              </a>

              <div className="text-[11px] text-center text-ink-muted pt-1">
                {SITE_INFO.workingHours}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
