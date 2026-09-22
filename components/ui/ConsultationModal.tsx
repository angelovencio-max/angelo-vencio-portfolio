'use client';

import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Calendar, Mail, Building, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    service: 'AI Creative Systems',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', brand: '', service: 'AI Creative Systems', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white border border-border rounded-xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-navy"
          >
            {/* Top Accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-teal" />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-muted hover:text-navy rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-light border border-teal-border text-teal-deep text-xs font-mono font-bold mb-3 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>BOOK CONSULTATION</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-navy tracking-tight">
                    BUILD SOMETHING THAT WORKS.
                  </h3>
                  <p className="text-sm text-muted mt-1 font-sans">
                    If you're building an eCommerce brand and need stronger creative, better systems, or a more efficient way to test ideas, let's talk.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-navy mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-muted/60" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-soft-bg border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted/40 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-navy mb-1.5 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted/60" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@yourbrand.com"
                          className="w-full bg-soft-bg border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted/40 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-navy mb-1.5 uppercase tracking-wider">
                        Brand / Company *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 text-muted/60" />
                        <input
                          type="text"
                          required
                          value={formData.brand}
                          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                          placeholder="Brand or Agency Name"
                          className="w-full bg-soft-bg border border-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-navy placeholder:text-muted/40 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-navy mb-1.5 uppercase tracking-wider">
                      Primary Focus Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-soft-bg border border-border rounded-lg px-4 py-2.5 text-sm text-navy focus:outline-none focus:border-teal transition-colors"
                    >
                      <option value="AI Creative Systems">AI Creative Systems & Production</option>
                      <option value="Meta Ads Scaling">Meta Ads & Creative Strategy</option>
                      <option value="Shopify & eCommerce Growth">Shopify & eCommerce Growth</option>
                      <option value="Sales Operations">Sales & Business Development Systems</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-navy mb-1.5 uppercase tracking-wider">
                      Current Challenge / Objective
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you're looking to launch, test, or scale..."
                      className="w-full bg-soft-bg border border-border rounded-lg px-4 py-2.5 text-sm text-navy placeholder:text-muted/40 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-teal text-white font-bold text-xs font-mono tracking-wider hover:bg-teal-deep transition-all shadow-md"
                  >
                    <span>SUBMIT CONSULTATION REQUEST →</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-teal-light border border-teal-border text-teal flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-sans text-navy">Consultation Request Received</h3>
                <p className="text-sm text-muted max-w-md mx-auto font-sans">
                  Thank you, <span className="text-navy font-bold">{formData.name}</span>. I have received your inquiry for <span className="text-navy font-bold">{formData.brand}</span> and will reach out shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg border border-border text-xs font-mono font-bold text-navy hover:bg-soft-bg transition-colors"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
