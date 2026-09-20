import React from 'react';
import {
  Building2,
  ShieldCheck,
  CreditCard,
  Receipt,
  FileText,
  Scale,
  BadgeCheck,
  Layers,
  SearchCheck,
  Briefcase,
  Zap,
  FileCheck,
  HeartHandshake,
  type LucideProps,
} from 'lucide-react';

interface IconRendererProps extends LucideProps {
  name: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Building2':
      return <Building2 {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'CreditCard':
      return <CreditCard {...props} />;
    case 'Receipt':
      return <Receipt {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'Scale':
      return <Scale {...props} />;
    case 'BadgeCheck':
      return <BadgeCheck {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'SearchCheck':
      return <SearchCheck {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'FileCheck':
      return <FileCheck {...props} />;
    case 'HeartHandshake':
      return <HeartHandshake {...props} />;
    default:
      return <FileText {...props} />;
  }
};
