import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageSquare, Shield, ArrowLeft } from 'lucide-react';
import { SITE_INFO, NAV_ITEMS } from '../../constants/siteData';
import { SERVICES_LIST } from '../../constants/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-850 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-850">
          {/* Col 1: Office Intro (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-gold-500 shrink-0">
                <Shield className="w-5 h-5 text-gold-500" />
              </div>
              <span className="text-lg font-bold text-white leading-tight">
                {SITE_INFO.officeName}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              حلول محاسبية وضريبية وقانونية متكاملة للشركات والمنشآت الفردية والمهن الحرة في مصر. نلتزم بأعلى معايير الدقة والسرية المهنية طبقاً لمعايير المحاسبة المصرية والقوانين السارية.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold-400">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span>{SITE_INFO.jurisdiction} — {SITE_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Services List (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-r-2 border-gold-500 pr-2.5">
              خدماتنا المهنية
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5 py-1 text-slate-300"
                  >
                    <ArrowLeft className="w-3 h-3 text-gold-500/70 shrink-0" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-r-2 border-gold-500 pr-2.5">
              بيانات التواصل المباشر
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-navy-900/60 border border-navy-800 hover:border-gold-500/50 hover:bg-navy-900 transition-colors group"
                dir="ltr"
              >
                <div className="w-8 h-8 rounded bg-navy-800 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-slate-400">اتصال هاتفي</span>
                  <span className="font-semibold text-white group-hover:text-gold-300 transition-colors">
                    {SITE_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-navy-900/60 border border-navy-800 hover:border-[#25D366]/50 hover:bg-navy-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">واتساب مباشر</span>
                  <span className="font-semibold text-white group-hover:text-[#25D366] transition-colors" dir="ltr">
                    {SITE_INFO.phone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-navy-900/60 border border-navy-800 hover:border-gold-500/50 hover:bg-navy-900 transition-colors group"
                dir="ltr"
              >
                <div className="w-8 h-8 rounded bg-navy-800 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-xs text-slate-400">البريد الإلكتروني</span>
                  <span className="font-semibold text-white group-hover:text-gold-300 transition-colors text-xs truncate max-w-[190px]">
                    {SITE_INFO.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {SITE_INFO.officeName}. جميع الحقوق محفوظة.
          </p>

          <nav className="flex items-center gap-4" aria-label="روابط سريعة">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-gold-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
