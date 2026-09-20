import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Shield, CheckCircle2 } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteData';
import { Hero } from '../../components/sections/Hero';
import { ServicesGrid } from '../../components/sections/ServicesGrid';
import { WhyChooseUs } from '../../components/sections/WhyChooseUs';
import { WorkflowSection } from '../../components/sections/WorkflowSection';
import { CTASection } from '../../components/sections/CTASection';
import { ContactForm } from '../../components/sections/ContactForm';
import { SectionTitle } from '../../components/ui/SectionTitle';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Office Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-100 text-navy-900 text-xs font-semibold">
                <Shield className="w-3.5 h-3.5 text-gold-500" />
                <span>عن المكتب والرسالة المهنية</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
                خبرة عملية ورؤية واضحة لحماية وتطوير أعمالك في مصر
              </h2>

              <p className="text-base text-ink-muted leading-relaxed">
                يقدم <strong className="text-navy-900 font-semibold">{SITE_INFO.officeName}</strong> منظومة متكاملة من الخدمات المحاسبية والاستشارات الضريبية والقانونية، تهدف إلى إرساء قواعد مالية وقانونية سليمة للشركات والمؤسسات والأفراد.
              </p>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                نحرص على تمكين أصحاب الأعمال من التفرغ لتطوير وتوسيع أنشطتهم، بينما نتولى نحن إدارة كافة الملفات والالتزامات لدى مصلحة الضرائب المصرية، الهيئة القومية للتأمين الاجتماعي، والهيئة العامة للاستثمار بدقة واحترافية متناهية.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors"
                >
                  <span>اقرأ المزيد عن مجالات تخصصنا</span>
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-bg rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-soft space-y-4">
                <h3 className="text-base font-bold text-navy-900 border-b border-slate-200 pb-3">
                  ركائز العمل الأساسية في المكتب
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>الامتثال التام للقوانين واللوائح التنفيذية والقرارات الوزارية المصرية.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>تطبيق معايير المحاسبة المصرية في إعداد القوائم والدفاتر.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>السرية المطلقة لجميع البيانات والحسابات والمستندات المالية.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span>دعم فني واستشاري دائم للتعامل مع منظومات الفاتورة والإيصال الإلكتروني.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-ink-muted">
                  <span>ساعات الاستقبال: 9 ص - 8 م</span>
                  <a
                    href={`tel:${SITE_INFO.phoneRaw}`}
                    className="font-semibold text-navy-900 hover:text-gold-600 transition-colors"
                    dir="ltr"
                  >
                    {SITE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Services Section */}
      <section className="py-16 sm:py-20 bg-slate-bg border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <SectionTitle
              badge="الخدمات المحاسبية والضريبية"
              title="خدمات مهنية متكاملة لتلبية كافة متطلباتك"
              subtitle="نقدم حلولاً قانونية ومحاسبية تغطي دورة حياة المنشأة من التأسيس وحتى الإقرارات والفحص الدوري."
              className="mb-0"
            />

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors shrink-0 pb-1"
            >
              <span>عرض تفاصيل جميع الخدمات</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          <ServicesGrid variant="compact" />
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. How We Help Clients (Workflow) */}
      <WorkflowSection />

      {/* 6. CTA Section */}
      <CTASection />

      {/* 7. Quick Contact & Inquiry Form */}
      <section className="py-16 sm:py-20 bg-slate-bg border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact info column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <SectionTitle
                badge="تواصل معنا"
                title="هل ترغب في مناقشة تفاصيل نشاطك؟"
                subtitle="يمكنك التواصل مباشرة مع المحاسب القانوني حسام محمد خميس عبر الهاتف أو الواتساب، أو ترك رسالتك وسنعاود الاتصال بك."
              />

              <div className="space-y-4">
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-lg hover:border-navy-900 transition-all group"
                  dir="ltr"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-medium">اتصال مباشر</div>
                    <div className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {SITE_INFO.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-lg hover:border-navy-900 transition-all group"
                  dir="ltr"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-medium">البريد الإلكتروني</div>
                    <div className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {SITE_INFO.email}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
