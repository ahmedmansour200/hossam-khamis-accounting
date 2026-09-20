import React from 'react';
import { ArrowLeft, Phone, Shield, CheckCircle2, FileCheck2, Calculator, Landmark } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteData';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C9A44C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Right Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-right">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/25 text-gold-300 text-xs sm:text-sm font-medium">
              <Shield className="w-4 h-4 text-gold-400" />
              <span>محاسب ومراجع قانوني مقيد • خبرة وحلول متكاملة</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight sm:leading-snug text-white">
                مكتب المحاسب القانوني
                <span className="block text-gold-400 mt-1 sm:mt-2">حسام محمد خميس</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 pt-2">
                حلول محاسبية وضريبية وقانونية متكاملة لأعمالك
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              شريكك المهني الموثوق في تأسيس الشركات، إدارة التأمينات الاجتماعية، استخراج البطاقات الضريبية، إعداد وتقديم إقرارات القيمة المضافة والدخل، واعتماد شهادات الدخل وفقاً لأحدث القوانين والمعايير المصرية.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="gold"
                size="lg"
                icon={<ArrowLeft className="w-5 h-5" />}
                iconPosition="left"
              >
                تواصل معنا
              </Button>

              <Button
                to="/services"
                variant="white"
                size="lg"
              >
                تعرف على خدماتنا
              </Button>

              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-slate-200 hover:text-gold-300 text-sm font-medium transition-colors"
                dir="ltr"
              >
                <span>{SITE_INFO.phone}</span>
                <Phone className="w-4 h-4 text-gold-400" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>دقة وسرية مهنية تامة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>متابعة المواعيد القانونية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>حلول ملائمة لطبيعة نشاطك</span>
              </div>
            </div>
          </div>

          {/* Left Column: Visual Representation (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative subtle glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-500/20 to-navy-700/40 rounded-2xl blur-lg opacity-60" />

              {/* Main Card Container */}
              <div className="relative bg-navy-900/90 border border-navy-750 rounded-2xl p-6 sm:p-8 shadow-soft-xl space-y-6 backdrop-blur-sm">
                {/* Header of the visual card */}
                <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400 border border-navy-700">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">الخدمات المهنية المعتمدة</h3>
                      <p className="text-xs text-slate-400">جمهورية مصر العربية</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    امتثال رسمي
                  </span>
                </div>

                {/* Practical Services Snapshot */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-navy-800">
                    <div className="p-2 rounded-lg bg-navy-900 text-gold-400 shrink-0 mt-0.5">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">الضرائب والإقرارات الرسمية</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        إقرارات القيمة المضافة والدخل • بطاقات ضريبية • الفاتورة الإلكترونية
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-navy-800">
                    <div className="p-2 rounded-lg bg-navy-900 text-gold-400 shrink-0 mt-0.5">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">تأسيس الشركات والكيانات</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        شركات الأموال والأشخاص • السجل التجاري • الغرف التجارية
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-950/60 border border-navy-800">
                    <div className="p-2 rounded-lg bg-navy-900 text-gold-400 shrink-0 mt-0.5">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">التأمينات وشهادات الدخل</div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        ملفات التأمينات الاجتماعية • شهادات دخل معتمدة للبنوك
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct quick action banner inside the card */}
                <div className="pt-2">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-navy-850 to-navy-800 border border-navy-700 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-gold-400 font-medium">استشارة مباشرة وسريعة</div>
                      <div className="text-sm font-bold text-white mt-0.5">جاهزون لدعم أعمالك</div>
                    </div>
                    <a
                      href={SITE_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-lg transition-colors shadow-soft shrink-0"
                    >
                      واتساب مباشر
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
