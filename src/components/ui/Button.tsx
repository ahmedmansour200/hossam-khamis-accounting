import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'right' | 'left';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  ariaLabel,
  icon,
  iconPosition = 'left', // in RTL, left icon appears at the end of the text
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-3.5 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 gap-2',
    lg: 'text-base sm:text-lg px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-navy-900 hover:bg-navy-850 text-white shadow-soft hover:shadow-soft-lg focus-visible:ring-navy-900 border border-navy-800',
    gold: 'bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold shadow-soft hover:shadow-gold-glow focus-visible:ring-gold-500 border border-gold-400',
    outline: 'bg-transparent hover:bg-navy-50 text-navy-900 border-2 border-navy-900/20 hover:border-navy-900/50 focus-visible:ring-navy-900',
    white: 'bg-white hover:bg-slate-50 text-navy-900 shadow-soft hover:shadow-soft-lg border border-slate-200 focus-visible:ring-white',
    ghost: 'bg-transparent hover:bg-navy-100/50 text-navy-900 focus-visible:ring-navy-900',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
