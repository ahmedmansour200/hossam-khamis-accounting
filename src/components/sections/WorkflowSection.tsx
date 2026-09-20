import React from 'react';
import { WORKFLOW_STEPS } from '../../constants/siteData';
import { SectionTitle } from '../ui/SectionTitle';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="منهجية العمل"
          title="كيف نساعد عملاءنا خطوة بخطوة؟"
          subtitle="خطوات عمل واضحة ومنظمة تضمن إنهاء معاملاتك بكفاءة ودون أي تعقيدات إدارية أو ضريبية."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 relative">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="relative bg-slate-bg rounded-xl p-6 border border-slate-200/80 flex flex-col justify-between group hover:border-navy-800/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-gold-500 font-mono">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-navy-900/5 text-navy-900">
                    المرحلة {index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center text-xs text-slate-400">
                <span>إشراف مباشر ومتابعة دورية</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
