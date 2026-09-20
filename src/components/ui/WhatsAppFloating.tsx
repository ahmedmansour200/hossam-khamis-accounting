import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteData';

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside aria-label="زر التواصل عبر واتساب" className="fixed bottom-6 left-6 z-40 flex items-center group">
      {/* Tooltip visible on hover / focus */}
      <span className="hidden sm:inline-block ml-3 px-3 py-1.5 bg-navy-900 text-white text-xs font-medium rounded-lg shadow-soft-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-navy-800">
        تحدث معنا مباشرة عبر واتساب
      </span>

      <a
        href={SITE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع مكتب المحاسب القانوني حسام محمد خميس عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Subtle ping ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </a>
    </aside>
  );
};
