import React from 'react';
import { Phone, Mail, Clock, Shield } from 'lucide-react';
import { SITE_INFO } from '../../constants/siteData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs sm:text-sm border-b border-navy-850 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Office official status */}
        <div className="flex items-center gap-2 text-slate-200">
          <Shield className="w-3.5 h-3.5 text-gold-500 shrink-0" />
          <span className="font-medium">{SITE_INFO.jurisdiction}</span>
          <span className="text-navy-700 hidden md:inline">|</span>
          <span className="text-slate-400 hidden md:inline">{SITE_INFO.location}</span>
        </div>

        {/* Contact Links & Working Hours */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-gold-500/80 shrink-0" />
            <span>{SITE_INFO.workingHours}</span>
          </div>

          <a
            href={`mailto:${SITE_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-150"
            dir="ltr"
          >
            <span>{SITE_INFO.email}</span>
            <Mail className="w-3.5 h-3.5 text-gold-500/80 shrink-0" />
          </a>

          <a
            href={`tel:${SITE_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold text-white hover:text-gold-400 transition-colors duration-150"
            dir="ltr"
          >
            <span>{SITE_INFO.phone}</span>
            <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
};
