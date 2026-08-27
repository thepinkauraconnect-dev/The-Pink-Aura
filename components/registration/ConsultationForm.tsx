'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Grid, MessageSquare, AlertCircle, ArrowRight, Flower2 } from 'lucide-react';
import { registerLead } from '@/app/actions/registerLead';
import { SERVICE_CATEGORIES } from '@/data/services';

const CATEGORY_OPTIONS = [
  ...SERVICE_CATEGORIES.map((c) => ({ value: c.title, label: c.title })),
  { value: 'Other / Not Sure', label: 'Other / Personalized Recommendation' },
];

export default function ConsultationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: '',
    requirement: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const treatmentParam = searchParams.get('treatment');
    const reqParam = searchParams.get('requirement');

    if (categoryParam || treatmentParam || reqParam) {
      let matchedCategory = '';
      if (categoryParam) {
        const found = CATEGORY_OPTIONS.find(
          (opt) =>
            opt.value.toLowerCase() === categoryParam.toLowerCase() ||
            opt.value.toLowerCase().includes(categoryParam.toLowerCase()) ||
            categoryParam.toLowerCase().includes(opt.value.toLowerCase())
        );
        if (found) {
          matchedCategory = found.value;
        }
      }

      let requirementText = reqParam || '';
      if (!requirementText && treatmentParam) {
        requirementText = `Enquiry for: ${treatmentParam}${matchedCategory ? ` (${matchedCategory})` : ''}`;
      } else if (!requirementText && matchedCategory) {
        requirementText = `Enquiry for: ${matchedCategory}`;
      }

      setFormData((prev) => ({
        ...prev,
        category: matchedCategory || prev.category,
        requirement: requirementText || prev.requirement,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Full name is required (minimum 2 characters).';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Valid phone number is required.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email address is required.';
    }
    if (!formData.category) {
      newErrors.category = 'Please select a service category.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await registerLead(formData);
      if (result.success) {
        router.push('/register/success');
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors({ general: result.message });
        }
      }
    } catch (err) {
      setErrors({ general: 'Something went wrong. Please try again or call us.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto clay-card bg-white/95 backdrop-blur-2xl rounded-4xl p-7 sm:p-10 shadow-clay-lg relative overflow-hidden">
      {/* Decorative Aura Accent */}
      <div className="absolute -top-24 -right-24 w-56 h-56 bg-aura-300/30 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full clay-badge text-aura-700 text-xs font-extrabold uppercase tracking-widest mb-3">
          <Flower2 className="w-3.5 h-3.5 text-aura-600" />
          <span>Personalized Consultation</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
          Begin Your Pink Aura Journey
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-muted mt-2 font-light max-w-md mx-auto leading-relaxed">
          Share your details below to receive a personalized aesthetic & wellness consultation plan from our specialists.
        </p>
      </div>

      {errors.general && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 shadow-sm"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errors.general}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden Honeypot Field */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
            Full Name <span className="text-aura-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-aura-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="e.g. Ananya Sharma"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-11 pr-4 py-3.5 clay-input text-sm font-medium text-charcoal placeholder-charcoal-soft focus:outline-none ${
                errors.name ? 'border-red-300 ring-2 ring-red-100' : ''
              }`}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Contact Grid: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
              Phone Number <span className="text-aura-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-aura-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3.5 clay-input text-sm font-medium text-charcoal placeholder-charcoal-soft focus:outline-none ${
                  errors.phone ? 'border-red-300 ring-2 ring-red-100' : ''
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
              Email Address <span className="text-aura-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-aura-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="ananya@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3.5 clay-input text-sm font-medium text-charcoal placeholder-charcoal-soft focus:outline-none ${
                  errors.email ? 'border-red-300 ring-2 ring-red-100' : ''
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Service Category Selection */}
        <div>
          <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
            Interested Service Category <span className="text-aura-600">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-aura-400">
              <Grid className="w-4 h-4" />
            </div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full pl-11 pr-10 py-3.5 clay-input text-sm font-medium text-charcoal focus:outline-none appearance-none ${
                errors.category ? 'border-red-300 ring-2 ring-red-100' : ''
              }`}
            >
              <option value="">Select a category of interest...</option>
              {CATEGORY_OPTIONS.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.category}</span>
            </p>
          )}
        </div>

        {/* Requirement / Message */}
        <div>
          <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
            Tell us a little about what you're looking for
          </label>
          <div className="relative">
            <div className="absolute top-4 left-4 pointer-events-none text-aura-400">
              <MessageSquare className="w-4 h-4" />
            </div>
            <textarea
              name="requirement"
              rows={3}
              placeholder="e.g. I am interested in skin rejuvenation & hyperpigmentation treatment for an upcoming event..."
              value={formData.requirement}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3.5 clay-input text-sm font-medium text-charcoal placeholder-charcoal-soft focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Privacy Notice */}
        <p className="text-[11px] text-charcoal-muted text-center font-light leading-relaxed">
          By submitting this form, you agree to be contacted by Pink Aura regarding your consultation inquiry. Your information remains strictly private.
        </p>

        {/* Primary Submit Clay Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="clay-btn-primary w-full py-4 px-8 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Registering Your Consultation...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Begin My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
}
