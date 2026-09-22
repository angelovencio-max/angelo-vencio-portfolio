'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, Sparkles, Target, Zap, AlertTriangle } from 'lucide-react';
import { CaseStudy } from '@/content/projects';
import { PlaceholderBadge } from './PlaceholderBadge';

interface CaseStudyDetailModalProps {
  caseStudy: CaseStudy | null;
  isOpen?: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  caseStudy,
  isOpen = true,
  onClose,
  onOpenConsultation,
}) => {
  if (!caseStudy || !isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071A2B]/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 sm:p-10 z-10 my-auto max-h-[90vh] overflow-y-auto text-[#071A2B]"
        >
          {/* Top Accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#08C4D4] rounded-t-2xl" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#071A2B] rounded-lg bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4 border-b border-gray-100 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#E6F9FC] border border-[#08C4D4]/30 text-[#08C4D4] font-mono text-xs font-bold uppercase">
                  CASE STUDY {caseStudy.number}
                </span>
                <span className="px-2.5 py-1 rounded bg-gray-100 border border-gray-200 text-[#071A2B] font-mono text-xs font-semibold">
                  {caseStudy.client}
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-black text-[#071A2B] tracking-tight">
                {caseStudy.title}
              </h2>

              <p className="font-mono text-xs text-[#08C4D4] font-bold tracking-wider uppercase">
                {caseStudy.category}
              </p>

              <p className="text-base text-gray-600 font-sans leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* Grid of Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Challenge */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[#071A2B] font-bold uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#08C4D4]" />
                  <span>THE CHALLENGE</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Objective */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[#071A2B] font-bold uppercase">
                  <Target className="w-3.5 h-3.5 text-[#08C4D4]" />
                  <span>THE OBJECTIVE</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {caseStudy.objective}
                </p>
              </div>

              {/* Strategy */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 space-y-2 md:col-span-2">
                <div className="flex items-center gap-2 font-mono text-xs text-[#071A2B] font-bold uppercase">
                  <Zap className="w-3.5 h-3.5 text-[#08C4D4]" />
                  <span>THE STRATEGY</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-sans">
                  {caseStudy.strategy}
                </p>
              </div>

            </div>

            {/* What I Did */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#071A2B] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#08C4D4]" />
                <span>WHAT I DID</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.whatIDid.map((item, i) => (
                  <div key={i} className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-xs text-[#071A2B] flex items-start gap-2 font-sans">
                    <span className="text-[#08C4D4] font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Step Process */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#071A2B] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#08C4D4]" />
                <span>THE SYSTEM &amp; PROCESS</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.systemProcess.map((proc) => (
                  <div key={proc.step} className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#08C4D4] px-2 py-0.5 rounded bg-[#E6F9FC] border border-[#08C4D4]/30">
                      STEP {proc.step}
                    </span>
                    <h5 className="font-sans text-sm font-bold text-[#071A2B]">{proc.title}</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{proc.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Selected Work */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <span className="font-mono text-xs font-bold text-[#071A2B] uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#08C4D4]" />
                  <span>RESULTS &amp; VERIFIABLE PROOF</span>
                </span>
                <span className="font-mono text-[10px] text-gray-400">PORTFOLIO CONTEXT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseStudy.results.map((res, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-gray-200 text-center space-y-1">
                    <PlaceholderBadge type="result" text={res.metric} className="mx-auto text-[11px]" />
                    <div className="text-[10px] font-mono text-[#071A2B] font-bold uppercase">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="p-5 rounded-xl bg-[#E6F9FC] border border-[#08C4D4]/30 text-[#071A2B] space-y-1">
              <div className="font-mono text-[10px] font-bold text-[#08C4D4] uppercase tracking-wider">
                KEY TAKEAWAY
              </div>
              <p className="font-sans text-base font-semibold italic text-[#071A2B]">
                &ldquo;{caseStudy.keyTakeaway}&rdquo;
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
              {onOpenConsultation && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold tracking-wider hover:bg-[#00AEBE] transition-all"
                >
                  BOOK A CONSULTATION ABOUT THIS SYSTEM →
                </button>
              )}
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-200 font-sans text-xs font-bold text-[#071A2B] hover:bg-gray-100 transition-colors"
              >
                CLOSE WINDOW
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
