import React from 'react';
import { Shield, CheckCircle2, Scale, BookOpen, UserCheck, ArrowLeft, Phone } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteData';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { CTASection } from '../../components/sections/CTASection';
import { Button } from '../../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-bg">
      {/* Page Header */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 border-b border-navy-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/20 text-gold-300 text-xs sm:text-sm font-medium mb-4">
            <Shield className="w-4 h-4 text-gold-400" />
            <span>نبذة عن المكتب والرسالة المهنية</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            عن مكتب المحاسب القانوني حسام محمد خميس
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            صرح مهني متكامل في مجال المحاسبة القانونية، الضرائب، والاستشارات القانونية والمالية في مصر، يهدف إلى دعم استدامة أعمالكم وحمايتها من أي مخاطر مالية أو قانونية.
          </p>
        </div>
      </section>

      {/* Main Introduction Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionTitle
                badge="الرؤية والنهج"
                title="شريكك المهني الموثوق في عالم المال والضرائب"
                subtitle="نعمل وفق منهجية محاسبية دقيقة تجمع بين الفهم العميق للتشريعات والقوانين المصرية والخبرة التطبيقية في إنهاء كافة المعاملات لدى مصلحة الضرائب والجهات الرسمية."
              />

              <div className="space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                <p>
                  تأسس <strong className="text-navy-900 font-semibold">{SITE_INFO.officeName}</strong> ليقدم نموذجاً فريداً من الخدمات المحاسبية والاستشارية التي تجمع بين النزاهة المطلقة والدقة الاحترافية. نؤمن بأن المحاسب القانوني ليس مجرد مراجع للأرقام، بل هو مستشار استراتيجي يحمي المنشأة من الأخطاء والتقديرات الجزافية ويوجهها نحو الاستغلال الأمثل للفرص الاستثمارية والقانونية.
                </p>
                <p>
                  نتعامل يومياً مع مأموريات الضرائب المختلفة، الهيئة العامة للاستثمار والمناطق الحرة، الهيئة القومية للتأمين الاجتماعي، ومكاتب السجل التجاري، مما يمكننا من إنجاز كافة المعاملات المعقدة بسلاسة ووفق صحيح القانون.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowLeft className="w-4 h-4" />}
                  iconPosition="left"
                >
                  تواصل لحجز موعد استشارة
                </Button>

                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-navy-900 font-semibold hover:text-gold-600 transition-colors text-sm"
                  dir="ltr"
                >
                  <span>{SITE_INFO.phone}</span>
                  <Phone className="w-4 h-4 text-gold-500" />
                </a>
              </div>
            </div>

            {/* Strategic Pillars Card */}
            <div className="lg:col-span-5">
              <div className="bg-navy-900 text-white rounded-2xl p-8 border border-navy-800 shadow-soft-xl space-y-6">
                <div className="flex items-center gap-3 border-b border-navy-800 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center border border-navy-700">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">الاعتماد والالتزام المهني</h3>
                    <p className="text-xs text-slate-400">{SITE_INFO.jurisdiction}</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-navy-800">
                    <div className="font-bold text-gold-400 mb-1">الرسالة المهنية:</div>
                    <p className="text-slate-300 leading-relaxed">
                      تقديم خدمات محاسبية وضريبية وقانونية وفق أرفع المعايير المهنية لتجنيب عملائنا أي نزاعات أو غرامات وضمان استقرارهم المالي.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-navy-800">
                    <div className="font-bold text-gold-400 mb-1">الرؤية المستقبلية:</div>
                    <p className="text-slate-300 leading-relaxed">
                      أن نكون المرجع الأول والشريك الاستشاري الأكثر موثوقية للشركات والمشروعات التجارية والمهنية في مصر.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-950/70 border border-navy-800">
                    <div className="font-bold text-gold-400 mb-1">المعايير المعتمدة:</div>
                    <p className="text-slate-300 leading-relaxed">
                      معايير المحاسبة المصرية (EAS)، قانون الضرائب على الدخل، قانون الضريبة على القيمة المضافة، وقانون التأمينات الاجتماعية الموحد.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Areas of Expertise */}
      <section className="py-16 sm:py-20 bg-slate-bg border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="مجالات الاختصاص"
            title="محاور الخبرة والتخصص المهني"
            subtitle="نغطي كافة الجوانب المالية والقانونية التي تحتاجها المنشأة لضمان الامتثال والنمو المستمر."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4 border border-navy-100">
                <BookOpen className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">الضرائب والمحاسبة القانونية</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                إعداد ومراجعة الإقرارات الضريبية السنوية والشهرية، مسك الدفاتر المحاسبية، وتطبيق منظومة الفاتورة والإيصال الإلكتروني.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4 border border-navy-100">
                <Scale className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">تأسيس الشركات والكيانات</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                اختيار الشكل القانوني الأنسب للمشروع، صياغة عقود التأسيس، واستخراج السجل التجاري والبطاقة الضريبية وتراخيص مزاولة النشاط.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-900 flex items-center justify-center mb-4 border border-navy-100">
                <Shield className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">التأمينات والنزاعات الضريبية</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                تسوية الملفات التأمينية، التمثيل أمام لجان الفحص والطعن الضريبي، وإعداد المذكرات والدفوع القانونية والمحاسبية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Trust & Confidentiality Charter */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white rounded-2xl p-8 sm:p-12 border border-navy-800 shadow-soft-xl space-y-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/25 text-gold-300 text-xs font-semibold">
                <UserCheck className="w-4 h-4 text-gold-400" />
                <span>ميثاق الشرف والسرية المهنية</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                التزامنا الصارم بالسرية وأخلاقيات المهنة
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                ندرك في مكتب المحاسب القانوني حسام محمد خميس حساسية وأهمية البيانات المالية لكل عميل، ولذلك نلتزم بأعلى درجات السرية والأمان في تداول وحفظ المستندات.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-navy-800">
              <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white">سرية تامة للمعلومات</div>
                <p className="text-xs text-slate-400">حماية تامة لكافة القوائم والبيانات الحسابية للعملاء.</p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white">نزاهة وشفافية</div>
                <p className="text-xs text-slate-400">توضيح كافة الخطوات والالتزامات المالية والقانونية بوضوح تام.</p>
              </div>

              <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800 text-center space-y-2">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white">دقة في المواعيد</div>
                <p className="text-xs text-slate-400">الالتزام الصارم بتقديم الإقرارات في مواعيدها القانونية المحددة.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};
