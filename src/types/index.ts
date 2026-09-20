export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'Building2' | 'ShieldCheck' | 'CreditCard' | 'Receipt' | 'FileText' | 'Scale' | 'BadgeCheck';
  features: string[];
  benefitSummary: string;
  officialEntities?: string[];
}

export interface ContactInfo {
  officeName: string;
  subTitle: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  workingHours: string;
  location: string;
  jurisdiction: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Layers' | 'SearchCheck' | 'Briefcase' | 'Zap' | 'FileCheck' | 'HeartHandshake';
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
}
