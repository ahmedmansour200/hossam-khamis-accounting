import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

// Lazy-loaded pages for optimal bundle splitting and performance
const HomePage = lazy(() => import('../pages/Home/HomePage').then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('../pages/Services/ServicesPage').then(m => ({ default: m.ServicesPage })));
const AboutPage = lazy(() => import('../pages/About/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage').then(m => ({ default: m.ContactPage })));

const LoadingFallback: React.FC = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
    <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-gold-500 animate-spin mb-4" />
    <span className="text-sm font-medium text-navy-900">جاري التحميل...</span>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
