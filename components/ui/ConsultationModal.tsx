'use client';

import React, { useEffect } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
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
          className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-2xl z-10 overflow-hidden text-[#071A2B] my-auto flex flex-col max-h-[92vh] h-[780px]"
        >
          {/* Top Teal Accent Bar */}
          <div className="h-1.5 bg-[#08C4D4] w-full shrink-0" />

          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-gray-100 flex items-center justify-between gap-4 shrink-0 bg-white">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E6F9FC] border border-[#08C4D4]/30 text-[#08C4D4] text-xs font-mono font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK A DISCOVERY CALL</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-sans text-[#071A2B] tracking-tight">
                Schedule Your 1-on-1 Consultation
              </h3>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:text-[#08C4D4] hover:border-[#08C4D4] transition-colors"
              >
                <span>Open in new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-[#071A2B] rounded-xl bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: TidyCal Interactive Calendar Embed */}
          <div className="flex-1 w-full bg-white overflow-y-auto relative p-2 sm:p-4">
            {/* Official TidyCal Embed Container */}
            <div className="tidycal-embed" data-path="avisuals/30min" />

            {/* Fallback iframe for instant loading across all environments */}
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
