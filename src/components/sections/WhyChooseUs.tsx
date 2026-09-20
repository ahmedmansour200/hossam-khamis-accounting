import React from 'react';
import { WHY_CHOOSE_US } from '../../constants/siteData';
import { SectionTitle } from '../ui/SectionTitle';
import { IconRenderer } from '../ui/IconRenderer';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-bg border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="مميزات العمل معنا"
          title="لماذا يختار أصحاب الأعمال مكتب حسام محمد خميس؟"
          subtitle="نقدم دعماً مهنياً يجمع بين الإلمام الكامل بالقوانين المصرية والحرص على نجاح واستقرار أعمال عملائنا."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-soft hover:shadow-soft-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5 shrink-0 shadow-soft">
                  <IconRenderer name={item.iconName} className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-navy-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-ink-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-gold-600">
                <span>التزام مهني مستمر</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
