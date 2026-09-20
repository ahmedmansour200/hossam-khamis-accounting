import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { SERVICES_LIST } from '../../constants/services';
import { SITE_INFO } from '../../constants/siteData';
import type { ContactFormData } from '../../types';
import { Button } from '../ui/Button';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'يرجى كتابة الاسم بالكامل';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'الاسم يجب أن يحتوي على 3 أحرف على الأقل';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'يرجى إدخال رقم الهاتف';
    } else if (!/^[0-9+ ]{8,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }

    if (!formData.service) {
      newErrors.service = 'يرجى اختيار نوع الخدمة المطلوبة';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'يرجى كتابة تفاصيل استفسارك';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const serviceName = SERVICES_LIST.find((s) => s.id === formData.service)?.title || formData.service || 'استشارة عامة';
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله،\nالاسم: ${formData.fullName}\nرقم الهاتف: ${formData.phone}\nالخدمة المطلوبة: ${serviceName}\nالاستفسار: ${formData.message}`
    );
    window.open(`https://wa.me/${SITE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-soft-lg p-6 sm:p-8 lg:p-10">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-navy-900">
            تم استلام رسالتك بنجاح
          </h3>

          <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
            شكراً لتواصلك مع مكتب المحاسب القانوني حسام محمد خميس. سيقوم فريقنا بمراجعة استفسارك والتواصل معك في أقرب وقت عبر الهاتف أو الواتساب.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppSend}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold transition-colors shadow-soft"
            >
              <span>إرسال نسخة مباشرة عبر واتساب</span>
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  service: '',
                  message: '',
                });
              }}
              className="px-5 py-2.5 rounded-lg text-sm text-slate-600 hover:text-navy-900 hover:bg-slate-100 transition-colors"
            >
              إرسال استفسار آخر
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="border-b border-slate-100 pb-4 mb-2">
            <h3 className="text-lg font-bold text-navy-900">
              نموذج الاستفسار وطلب الخدمة
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              املأ البيانات التالية وسيتواصل معك المحاسب القانوني مباشرة لدراسة طلبك.
            </p>
          </div>

          {/* Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                الاسم الكامل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="أحمد محمود علي"
                className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
                  errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-navy-900'
                } focus:outline-none focus:ring-1 focus:ring-navy-900 transition-colors`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                رقم الهاتف / الواتساب <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01012345678"
                dir="ltr"
                className={`w-full px-4 py-2.5 text-sm rounded-lg border text-right ${
                  errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-navy-900'
                } focus:outline-none focus:ring-1 focus:ring-navy-900 transition-colors`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>
          </div>

          {/* Email & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                البريد الإلكتروني <span className="text-xs text-slate-400 font-normal">(اختياري)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                dir="ltr"
                className={`w-full px-4 py-2.5 text-sm rounded-lg border text-right ${
                  errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-navy-900'
                } focus:outline-none focus:ring-1 focus:ring-navy-900 transition-colors`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
                نوع الخدمة المطلوبة <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white ${
                  errors.service ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-navy-900'
                } focus:outline-none focus:ring-1 focus:ring-navy-900 transition-colors`}
              >
                <option value="">-- اختر نوع الخدمة --</option>
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title}
                  </option>
                ))}
                <option value="other-consulting">استشارة محاسبية أو قانونية أخرى</option>
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.service}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-navy-900 mb-1.5">
              تفاصيل الاستفسار <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="اكتب هنا تفاصيل طلبك أو استفسارك وسنقوم بالرد عليك في أسرع وقت..."
              className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
                errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-navy-900'
              } focus:outline-none focus:ring-1 focus:ring-navy-900 transition-colors`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
              icon={<Send className="w-4 h-4" />}
              iconPosition="left"
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال الاستفسار الآن'}
            </Button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>إرسال مباشر عبر واتساب</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
