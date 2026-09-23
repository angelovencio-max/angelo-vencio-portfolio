'use client';

import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/content/site';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const calendarUrl = siteConfig.contact?.calendarUrl || 'https://tidycal.com/avisuals/30min';

  useEffect(() => {
    if (!isOpen) return;

    // Load TidyCal Embed Script dynamically
    const scriptId = 'tidycal-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071A2B]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-2xl z-10 overflow-hidden text-[#071A2B] my-auto flex flex-col max-h-[92vh] h-[760px]"
        >
          {/* Top Teal Accent Bar */}
          <div className="h-1.5 bg-[#08C4D4] w-full shrink-0" />

          {/* Minimal Clean Modal Header */}
          <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between gap-4 shrink-0 bg-white">
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#E6F9FC] border border-[#08C4D4]/30 text-[#08C4D4] text-[11px] font-mono font-bold uppercase tracking-wider">
                <Calendar className="w-3 h-3" />
                <span>BOOK A DISCOVERY CALL</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold font-sans text-[#071A2B] tracking-tight">
                Schedule Your 1-on-1 Consultation
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-[#071A2B] rounded-xl bg-gray-100 transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: TidyCal Booking Embed */}
          <div className="flex-1 w-full bg-white overflow-y-auto relative p-1 sm:p-3">
            <iframe
              src={calendarUrl}
              title="TidyCal Calendar Booking"
              className="w-full h-full min-h-[580px] border-0 rounded-xl"
              allow="camera; microphone; autoplay; clipboard-write; encrypted-media;"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
