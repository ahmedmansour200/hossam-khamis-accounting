import type { ContactInfo, NavItem, WhyChooseUsItem, StepItem } from '../types';

export const SITE_INFO: ContactInfo = {
  officeName: 'مكتب المحاسب القانوني حسام محمد خميس',
  subTitle: 'حلول محاسبية وضريبية وقانونية متكاملة لأعمالك',
  phone: '+20 10 32702440',
  phoneRaw: '+201032702440',
  whatsappNumber: '201032702440',
  whatsappUrl: 'https://wa.me/201032702440',
  email: 'khamishossam46@gmail.com',
  workingHours: 'السبت - الخميس: 9:00 ص - 8:00 م',
  location: 'جمهورية مصر العربية',
  jurisdiction: 'محاسب ومراجع قانوني مقيد',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', path: '/' },
  { label: 'من نحن', path: '/about' },
  { label: 'خدماتنا', path: '/services' },
  { label: 'تواصل معنا', path: '/contact' },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'integrated-solutions',
    title: 'حلول متكاملة',
    description: 'تغطية شاملة للمتطلبات المحاسبية، الضريبية، والتأمينية تحت سقف واحد لتيسير إدارة أعمالك.',
    iconName: 'Layers',
  },
  {
    id: 'accurate-followup',
    title: 'متابعة دقيقة',
    description: 'متابعة مستمرة ومنتظمة لكافة المواعيد القانونية والضريبية لتجنب أي غرامات أو تأخيرات.',
    iconName: 'SearchCheck',
  },
  {
    id: 'specialized-consulting',
    title: 'استشارات متخصصة',
    description: 'رأي مهني وقانوني رصين يستند إلى القوانين واللوائح التنفيذية المعمول بها في جمهورية مصر العربية.',
    iconName: 'Briefcase',
  },
  {
    id: 'fast-response',
    title: 'سرعة الاستجابة',
    description: 'تواصل مباشر وسريع للرد على استفسارات العملاء والتعامل الفوري مع أي مستجدات مالية أو رسمية.',
    iconName: 'Zap',
  },
  {
    id: 'clear-procedures',
    title: 'وضوح الإجراءات',
    description: 'خطوات عمل واضحة وشفافة دون تعقيدات، مع إحاطة العميل بكافة المستندات والتكاليف مسبقاً.',
    iconName: 'FileCheck',
  },
  {
    id: 'client-care',
    title: 'اهتمام باحتياجات العملاء',
    description: 'حلول مخصصة تناسب طبيعة وحجم كل نشاط، من الشركات الناشئة وحتى الكيانات التجارية القائمة.',
    iconName: 'HeartHandshake',
  },
];

export const WORKFLOW_STEPS: StepItem[] = [
  {
    stepNumber: '01',
    title: 'التواصل ودراسة الموقف',
    description: 'نستمع لاحتياجاتك ونفحص المستندات والوضع المالي أو القانوني للنشاط بدقة لتحديد الإجراء المناسب.',
  },
  {
    stepNumber: '02',
    title: 'وضع خطة العمل المالي والضريبي',
    description: 'صياغة خطة عمل واضحة وتحديد المتطلبات والمواعيد القانونية والضريبية بدقة واحترافية.',
  },
  {
    stepNumber: '03',
    title: 'التنفيذ والمتابعة لدى الجهات الرسمية',
    description: 'إنهاء الإجراءات لدى مصلحة الضرائب، التأمينات الاجتماعية، أو مكاتب السجل التجاري والهيئة العامة للاستثمار.',
  },
  {
    stepNumber: '04',
    title: 'التسليم والمتابعة الدورية',
    description: 'تسليم المستندات والشهادات الرسمية مع توفير إشراف ومتابعة محاسبية مستمرة لضمان الاستقرار المالي.',
  },
];
