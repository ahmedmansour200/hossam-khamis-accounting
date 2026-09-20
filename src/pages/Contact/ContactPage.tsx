import React from 'react';
import { Phone, Mail, MessageSquare, Clock, MapPin, Shield, CheckCircle } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteData';
import { ContactForm } from '../../components/sections/ContactForm';


export const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-bg py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/5 text-navy-900 border border-navy-900/10 text-xs sm:text-sm font-medium mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span>تواصل مباشر ومستمر</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            تواصل مع مكتب المحاسب القانوني حسام محمد خميس
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            يسعدنا استقبال استفساراتكم وتقديم المشورة المحاسبية والضريبية والقانونية المتخصصة. فريقنا جاهز للتواصل معكم عبر كافة القنوات المتاحة.
          </p>
        </div>

        {/* Quick Action Buttons (Call, WhatsApp, Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* Call Button */}
          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-navy-900 text-white shadow-soft hover:shadow-soft-lg hover:bg-navy-850 transition-all group"
            dir="ltr"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-800 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-300 font-medium">اتصل هاتفياً مباشرة</div>
              <div className="text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                {SITE_INFO.phone}
              </div>
            </div>
          </a>

          {/* WhatsApp Button */}
          <a
            href={SITE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-[#25D366] text-white shadow-soft hover:shadow-soft-lg hover:bg-[#20bd5a] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-right">
              <div className="text-xs text-emerald-100 font-medium">تواصل فوري عبر واتساب</div>
              <div className="text-base font-bold text-white" dir="ltr">
                {SITE_INFO.phone}
              </div>
            </div>
          </a>

          {/* Email Button */}
          <a
            href={`mailto:${SITE_INFO.email}`}
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-slate-200 text-navy-900 shadow-soft hover:shadow-soft-lg hover:border-navy-900 transition-all group"
            dir="ltr"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <Mail className="w-5 h-5 text-gold-600" />
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 font-medium">مراسلة عبر البريد الإلكتروني</div>
              <div className="text-sm font-bold text-navy-900 group-hover:text-gold-600 transition-colors truncate max-w-[210px]">
                {SITE_INFO.email}
              </div>
            </div>
          </a>
        </div>

        {/* Main Content Grid: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-soft space-y-6">
              <div>
                <h2 className="text-xl font-bold text-navy-900 mb-1">
                  {SITE_INFO.officeName}
                </h2>
                <p className="text-xs sm:text-sm text-gold-600 font-medium">
                  {SITE_INFO.jurisdiction}
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-bg border border-slate-200/80">
                  <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-900">مواعيد العمل والاستقبال:</div>
                    <div className="text-ink-muted text-xs sm:text-sm mt-0.5">
                      {SITE_INFO.workingHours}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-bg border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-900">النطاق الجغرافي:</div>
                    <div className="text-ink-muted text-xs sm:text-sm mt-0.5">
                      جمهورية مصر العربية — تمثيل أمام كافة مأموريات الضرائب ومكاتب التأمينات وهيئة الاستثمار.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-bg border border-slate-200/80">
                  <Shield className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy-900">سرية وسرعة المعالجة:</div>
                    <div className="text-ink-muted text-xs sm:text-sm mt-0.5">
                      يتم التعامل مع كافة البيانات المحاسبية والمستندات بسرية مطلقة وفق ميثاق الشرف المهني.
                    </div>
                  </div>
                </div>
              </div>

              {/* Service commitment checkmarks */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>رد سريع خلال ساعات العمل الرسمية</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>استشارة أولية واضحة لتحديد الخطوات المطلوبة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500" />
                  <span>تسعير واضح دون أي مصاريف أو أتعاب خفية</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
