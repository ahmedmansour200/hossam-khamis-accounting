import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteData';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden border-t border-navy-800">
      {/* Subtle accent border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-80" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/20 text-gold-300 text-xs sm:text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-gold-400" />
          <span>استشارات متخصصة وسريعة</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white mb-4">
          هل تحتاج إلى استشارة أو خدمة محاسبية؟
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          تواصل معنا لمعرفة كيف يمكننا مساعدتك في تسوية وضعك الضريبي، تأسيس شركتك، أو إدارة ملفاتك المحاسبية باحترافية.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            href={`tel:${SITE_INFO.phoneRaw}`}
            variant="gold"
            size="lg"
            icon={<Phone className="w-5 h-5" />}
            iconPosition="right"
          >
            اتصل الآن
          </Button>

          <Button
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            variant="white"
            size="lg"
            icon={<MessageSquare className="w-5 h-5 text-[#25D366]" />}
            iconPosition="right"
          >
            تواصل عبر واتساب
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>هاتف: {SITE_INFO.phone}</span>
          <span className="text-navy-700 hidden sm:inline">•</span>
          <span>بريد: {SITE_INFO.email}</span>
          <span className="text-navy-700 hidden sm:inline">•</span>
          <span>{SITE_INFO.workingHours}</span>
        </div>
      </div>
    </section>
  );
};
