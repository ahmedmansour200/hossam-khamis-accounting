import React from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'right' | 'center';
  lightText?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'right',
  lightText = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-right max-w-2xl'
      } ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3.5 ${
          lightText
            ? 'bg-gold-500/15 text-gold-300 border border-gold-400/20'
            : 'bg-navy-900/5 text-navy-900 border border-navy-900/10'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug sm:leading-tight ${
          lightText ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
            lightText ? 'text-slate-300' : 'text-ink-muted'
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Subtle decorative line under title */}
      <div
        className={`mt-4 h-1 w-12 rounded-full bg-gold-500 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};
