import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import type { ServiceItem } from '../../types';
import { IconRenderer } from '../ui/IconRenderer';

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'compact' | 'detailed';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = 'compact',
}) => {
  return (
    <article
      id={service.id}
      className="group bg-white rounded-xl border border-slate-200/90 hover:border-navy-800/30 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg relative"
    >
      <div>
        {/* Card Header: Icon & Category Indicator */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-navy-900 text-navy-900 group-hover:text-gold-400 transition-all duration-300 flex items-center justify-center shrink-0 border border-navy-100 group-hover:border-navy-800">
            <IconRenderer name={service.iconName} className="w-6 h-6" />
          </div>

          <span className="text-[11px] font-medium text-slate-400 group-hover:text-gold-600 transition-colors">
            خدمة معتمدة
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2.5 group-hover:text-navy-800 transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-ink-muted leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Key Features (Preview in compact, full in detailed) */}
        <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
          {(variant === 'compact' ? service.features.slice(0, 3) : service.features).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
              <span className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: CTA Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors"
          aria-label={`تفاصيل خدمة ${service.title}`}
        >
          <span>التفاصيل وطلب الخدمة</span>
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
