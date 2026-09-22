import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allWorksData, WorkItem, caseStudies, CaseStudy } from '@/content/projects';
import { PlaceholderBadge } from '@/components/ui/PlaceholderBadge';
import { CaseStudyDetailModal } from '@/components/ui/CaseStudyDetailModal';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import {
  ImageIcon,
  MessageSquareQuote,
  Layers,
  ArrowRight,
  Filter,
  Play,
  Sparkles,
  ChevronLeft
} from 'lucide-react';

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const categories = [
    { id: 'ALL', label: 'All Works' },
    { id: 'VIDEO WORKS', label: 'Video Works' },
    { id: 'GRAPHICS & CREATIVES', label: 'Graphics & Creatives' },
    { id: 'CASE STUDIES', label: 'Case Studies' },
    { id: 'TESTIMONIALS', label: 'Testimonials' },
  ];

  const filteredItems = allWorksData.filter((item) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'VIDEO WORKS') return item.category === 'video';
    if (activeFilter === 'GRAPHICS & CREATIVES') return item.category === 'graphics';
    if (activeFilter === 'CASE STUDIES') return item.category === 'case-study';
    if (activeFilter === 'TESTIMONIALS') return item.category === 'testimonial';
    return true;
  });

  return (
    <div className="bg-[#FFFFFF] text-[#071A2B] font-sans antialiased pt-24 pb-24 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#F7F9FA] border-b border-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#08C4D4] hover:text-[#00AEBE] transition-colors mb-6 uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="font-mono text-xs font-bold text-[#08C4D4] tracking-widest uppercase mb-2">
            COMPLETE PORTFOLIO CATALOG
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071A2B] tracking-tight leading-tight uppercase">
            CREATIVE PRODUCTION &amp; WORKS
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl leading-relaxed">
            Explore Angelo Vencio&apos;s full repository of direct-response video ad reels, graphic creative suites, strategic case studies, and client endorsements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full md:w-auto">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2 flex items-center gap-1.5 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filter By:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                  activeFilter === cat.id
                    ? 'bg-[#071A2B] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-gray-400">
            Showing <span className="font-bold text-[#071A2B]">{filteredItems.length}</span> project assets
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredItems.map((item) => {
            const matchedCs = caseStudies.find(
              (cs) => cs.title.toLowerCase().includes(item.client.toLowerCase()) || cs.client.toLowerCase().includes(item.client.toLowerCase())
            );

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#08C4D4] transition-all shadow-xs hover:shadow-md flex flex-col overflow-hidden group"
              >
                {/* Media Preview Container */}
                <div className="relative aspect-video bg-gray-100 flex items-center justify-center p-6 text-center border-b border-gray-100 overflow-hidden">
                  {item.category === 'video' && (
                    <div className="absolute inset-0 bg-[#071A2B]/10 group-hover:bg-[#071A2B]/20 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#08C4D4] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-1" />
                      </div>
                    </div>
                  )}

                  {item.category === 'testimonial' ? (
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                      <MessageSquareQuote className="w-8 h-8 text-[#08C4D4]" />
                      <span className="text-xs font-bold text-[#071A2B] font-mono tracking-wider">
                        {item.client}
                      </span>
                    </div>
                  ) : item.category === 'graphics' ? (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <ImageIcon className="w-8 h-8 text-[#08C4D4]" />
                      <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                        Graphics &amp; Creatives
                      </span>
                    </div>
                  ) : item.category === 'case-study' ? (
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Layers className="w-8 h-8 text-[#08C4D4]" />
                      <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
                        Growth Case Study
                      </span>
                    </div>
                  ) : null}

                  {/* Placeholder Badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <PlaceholderBadge text={item.placeholderText} variant="cyan" />
                  </div>

                  {item.videoDuration && (
                    <span className="absolute top-3 right-3 px-2 py-1 rounded bg-[#071A2B]/80 text-white font-mono text-[10px] font-bold">
                      {item.videoDuration}
                    </span>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#08C4D4] px-2 py-0.5 rounded bg-[#E6F9FC]">
                        {item.category.replace('-', ' ')}
                      </span>
                      <span className="text-xs font-bold text-gray-400 font-mono">
                        {item.client}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-black text-[#071A2B] group-hover:text-[#08C4D4] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>

                    {item.testimonialQuote && (
                      <div className="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs italic text-gray-700 font-sans">
                        &ldquo;{item.testimonialQuote}&rdquo;
                        <div className="not-italic font-bold text-[11px] text-[#071A2B] mt-1 font-mono">
                          — {item.testimonialAuthor}, {item.testimonialRole}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Link */}
                  {matchedCs ? (
                    <button
                      onClick={() => setSelectedCaseStudy(matchedCs)}
                      className="inline-flex items-center justify-between text-xs font-bold text-[#08C4D4] group-hover:text-[#00AEBE] transition-colors pt-3 border-t border-gray-100 w-full"
                    >
                      <span>View Detailed Case Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400">
                      <span>Ready for Media Swap</span>
                      <Sparkles className="w-3 h-3 text-[#08C4D4]" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#071A2B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-gray-800">
          <div>
            <span className="text-xs font-mono font-bold text-[#08C4D4] uppercase tracking-widest">
              WANT TO SEE MORE OR BUILD YOUR SYSTEM?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1 font-sans">
              READY TO LAUNCH &amp; SCALE WINNING ADS?
            </h2>
            <p className="text-sm text-gray-300 mt-2 max-w-xl font-sans">
              Book a 1-on-1 strategic consultation with Angelo Vencio to evaluate your current creative operations.
            </p>
          </div>
          <button
            onClick={() => setConsultationModalOpen(true)}
            className="px-8 py-4 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold hover:bg-[#00AEBE] transition-all shadow-lg shrink-0"
          >
            Book a Consultation →
          </button>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <CaseStudyDetailModal
        caseStudy={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}
