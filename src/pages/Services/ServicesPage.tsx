import React, { useState } from 'react';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { SERVICES_LIST } from '../../constants/services';
import { SITE_INFO } from '../../constants/siteData';
import { IconRenderer } from '../../components/ui/IconRenderer';
import { CTASection } from '../../components/sections/CTASection';

export const ServicesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getFilteredServices = () => {
    if (activeFilter === 'tax') {
      return SERVICES_LIST.filter((s) => ['tax-cards', 'vat-returns', 'income-tax-returns'].includes(s.id));
    }
    if (activeFilter === 'corporate') {
      return SERVICES_LIST.filter((s) => ['company-formation', 'social-insurance'].includes(s.id));
    }
    if (activeFilter === 'consulting') {
      return SERVICES_LIST.filter((s) => ['financial-legal-consulting', 'income-certificates'].includes(s.id));
    }
    return SERVICES_LIST;
  };

  const handleWhatsAppServiceInquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله،\nأود الاستفسار عن خدمة: ${serviceTitle}\nمن مكتب المحاسب القانوني حسام محمد خميس.`
    );
    window.open(`https://wa.me/${SITE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-bg">
      {/* Page Header */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 border-b border-navy-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/20 text-gold-300 text-xs sm:text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-gold-400" />
            <span>خدمات متخصصة ومعتمدة</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            خدماتنا المحاسبية والضريبية والقانونية
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            مجموعة متكاملة من الخدمات المصممة لتلبية متطلبات الشركات، الأنشطة التجارية، والمهن الحرة في مصر وفقاً لأعلى معايير الدقة والشفافية.
          </p>

          {/* Filter / Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-gold-500 text-navy-950 shadow-soft'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              جميع الخدمات ({SERVICES_LIST.length})
            </button>

            <button
              onClick={() => setActiveFilter('tax')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'tax'
                  ? 'bg-gold-500 text-navy-950 shadow-soft'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              الضرائب والإقرارات
            </button>

            <button
              onClick={() => setActiveFilter('corporate')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'corporate'
                  ? 'bg-gold-500 text-navy-950 shadow-soft'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              تأسيس الشركات والتأمينات
            </button>

            <button
              onClick={() => setActiveFilter('consulting')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'consulting'
                  ? 'bg-gold-500 text-navy-950 shadow-soft'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              الاستشارات والشهادات المعتمدة
            </button>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {getFilteredServices().map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Service Header & Icon (4 cols) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-soft border border-navy-850">
                        <IconRenderer name={service.iconName} className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gold-600">
                          الخدمة رقم {index + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Official entities handled */}
                    {service.officialEntities && (
                      <div className="pt-3 border-t border-slate-100">
                        <div className="text-xs font-semibold text-slate-500 mb-2">
                          الجهات الرسمية ذات الصلة:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.officialEntities.map((entity, eIdx) => (
                            <span
                              key={eIdx}
                              className="text-[11px] px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-medium"
                            >
                              {entity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        onClick={() => handleWhatsAppServiceInquiry(service.title)}
                        className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold transition-all shadow-soft active:scale-[0.98]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>طلب استشارة بشأن {service.title}</span>
                      </button>
                    </div>
                  </div>

                  {/* Service Details & Features (8 cols) */}
                  <div className="lg:col-span-8 bg-slate-bg/70 rounded-xl p-6 border border-slate-200/80 space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2 border-r-2 border-gold-500 pr-2">
                        نطاق العمل والإجراءات المنفذة
                      </h3>
                      <p className="text-sm text-ink-primary leading-relaxed">
                        {service.fullDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3 border-r-2 border-gold-500 pr-2">
                        أبرز ما تشمله الخدمة
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2.5 p-2.5 bg-white rounded-lg border border-slate-200/70 text-xs sm:text-sm text-slate-800 shadow-soft-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefit summary banner */}
                    <div className="p-4 rounded-xl bg-navy-900 text-white flex items-center justify-between gap-4">
                      <div className="text-xs sm:text-sm text-slate-200">
                        <span className="font-bold text-gold-400 block sm:inline sm:ml-2">القيمة المضافة:</span>
                        {service.benefitSummary}
                      </div>
                      <a
                        href={`tel:${SITE_INFO.phoneRaw}`}
                        className="text-xs font-semibold text-gold-400 hover:text-white shrink-0 underline"
                        dir="ltr"
                      >
                        {SITE_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
