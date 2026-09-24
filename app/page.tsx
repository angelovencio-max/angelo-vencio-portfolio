'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteConfig, aboutContent } from '@/content/site';
import { caseStudies, CaseStudy, testimonials } from '@/content/projects';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { CaseStudyDetailModal } from '@/components/ui/CaseStudyDetailModal';
import {
  Sparkles,
  Megaphone,
  Cpu,
  TrendingUp,
  ShoppingCart,
  Lightbulb,
  Video,
  Users,
  Target,
  Zap,
  Clock,
  ImageIcon,
  Star,
  Quote,
  AlertCircle,
  TrendingDown,
  HelpCircle,
  Repeat
} from 'lucide-react';

export default function HomePage() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const navigate = useNavigate();

  const scrollToAnchor = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FFFFFF] text-[#071A2B] font-sans antialiased overflow-x-hidden">
      
      {/* ==================================================
          SECTION 01 — HERO (#hero)
      ================================================== */}
      <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FFFFFF] overflow-hidden border-b border-gray-100">
        
        {/* Soft Light Cyan Polygon Backdrop Behind Photo */}
        <div 
          className="absolute top-0 right-0 w-[55%] h-full bg-[#E6F9FC] pointer-events-none hidden lg:block" 
          style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* 2-Liner Hook */}
              <div className="space-y-4">
                <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] xl:text-[3.5rem] font-black text-[#071A2B] tracking-tight leading-[1.08]">
                  <span className="block whitespace-nowrap">{siteConfig.hero.hookHeadline}</span>
                  <span className="text-[#08C4D4] block whitespace-nowrap">{siteConfig.hero.hookHeadlineAccent || "But Not More Sales?"}</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 font-sans max-w-xl leading-relaxed font-medium">
                  {siteConfig.hero.supportingCopy}
                </p>
              </div>

              {/* Simple Google Certification Badge */}
              <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 w-fit">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <div className="text-xs">
                  <span className="font-bold text-[#071A2B]">{siteConfig.hero.googleCert}</span>
                  {siteConfig.hero.googleCertId ? (
                    <span className="text-gray-400 font-mono text-[11px] ml-2">| {siteConfig.hero.googleCertId}</span>
                  ) : null}
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => setConsultationModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold hover:bg-[#00AEBE] transition-all shadow-sm"
                >
                  <span>{siteConfig.hero.primaryCta}</span>
                </button>

                <button
                  onClick={() => scrollToAnchor('challenge')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gray-100 text-[#071A2B] font-sans text-xs font-bold hover:bg-gray-200 transition-all border border-gray-200"
                >
                  <span>{siteConfig.hero.secondaryCta}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Expanded Cinema Widescreen Media Container (7 cols) */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
              <div className="relative w-full aspect-video sm:aspect-[16/10] lg:aspect-[16/9] min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] xl:min-h-[540px] rounded-3xl bg-[#071A2B] overflow-hidden border-4 border-white shadow-2xl group">
                <img
                  src={siteConfig.hero.image || "/images/hero-portrait.png"}
                  alt="Featured Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 02 — PAIN / CHALLENGE (#challenge)
          Story Flow: PAIN → SOLUTION → PROOF → PROCESS → CTA
      ================================================== */}
      <section id="challenge" className="py-24 bg-[#F7F9FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase">
              The Challenge
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#071A2B] tracking-tight uppercase leading-tight">
              Spending on ads but still can’t find a winning creative?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-sans max-w-xl mx-auto">
              Most DTC brands don&apos;t fail because of their product — they get stuck in an endless loop of unorganized creative testing.
            </p>
          </div>

          {/* 3 Core Pain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4 hover:border-[#08C4D4] transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center font-bold">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-black text-[#071A2B] leading-snug">
                Wasted Ad Spend
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans font-medium">
                Too much budget goes into ads that don’t convert.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4 hover:border-[#08C4D4] transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-black text-[#071A2B] leading-snug">
                Unfocused Production
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans font-medium">
                Too many creatives are made without knowing what to test.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4 hover:border-[#08C4D4] transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#08C4D4] flex items-center justify-center font-bold">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-xl font-black text-[#071A2B] leading-snug">
                No Scaling System
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans font-medium">
                And there’s no clear system for finding the next winner.
              </p>
            </div>

          </div>

          {/* Solution Transition Banner */}
          <div className="bg-[#071A2B] text-white rounded-3xl p-8 sm:p-10 border border-[#08C4D4]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="font-mono text-xs sm:text-sm font-bold text-[#08C4D4] uppercase tracking-widest flex items-center gap-2">
                <Repeat className="w-4 h-4" />
                <span>THE SYSTEM SOLUTION</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug max-w-2xl font-sans">
                I help build creative systems that help brands launch, test, and iterate faster.
              </h3>
            </div>

            <button
              onClick={() => scrollToAnchor('capabilities')}
              className="px-6 py-3.5 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold hover:bg-[#00AEBE] transition-all shrink-0 shadow-md"
            >
              See How The System Works →
            </button>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 03 — SOLUTION / CAPABILITIES (#capabilities)
          Story Flow: PAIN → SOLUTION → PROOF → PROCESS → CTA
      ================================================== */}
      <section id="capabilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase">
              THE SOLUTION
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071A2B] tracking-tight uppercase leading-tight">
              {siteConfig.howIHelp.headline}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
              {siteConfig.howIHelp.copy}
            </p>
            <button
              onClick={() => navigate('/works')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold hover:bg-[#00AEBE] transition-all shadow-sm"
            >
              <span>View All Production Works →</span>
            </button>
          </div>

          {/* Right Capabilities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-xs hover:border-[#08C4D4]/50 transition-colors">
              <Lightbulb className="w-6 h-6 text-[#08C4D4]" />
              <h3 className="font-sans text-base font-bold text-[#071A2B]">AI Creative Systems</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Automate content creation and ad testing with AI.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-xs hover:border-[#08C4D4]/50 transition-colors">
              <Target className="w-6 h-6 text-[#08C4D4]" />
              <h3 className="font-sans text-base font-bold text-[#071A2B]">Creative Strategy</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Build campaigns that capture attention and convert.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-xs hover:border-[#08C4D4]/50 transition-colors">
              <ShoppingCart className="w-6 h-6 text-[#08C4D4]" />
              <h3 className="font-sans text-base font-bold text-[#071A2B]">eCommerce Growth</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Optimize your store, products, and customer journey.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-xs hover:border-[#08C4D4]/50 transition-colors">
              <Megaphone className="w-6 h-6 text-[#08C4D4]" />
              <h3 className="font-sans text-base font-bold text-[#071A2B]">Meta Ads</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Scale with data-driven ads and creative testing.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-xs hover:border-[#08C4D4]/50 transition-colors">
              <Video className="w-6 h-6 text-[#08C4D4]" />
              <h3 className="font-sans text-base font-bold text-[#071A2B]">Content Systems</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Streamline content production and distribution.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 space-y-3 shadow-xs hover:border-[#08C4D4]/50 transition-colors">
              <Users className="w-6 h-6 text-[#08C4D4]" />
              <h3 className="font-sans text-base font-bold text-[#071A2B]">Sales &amp; Business Development</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Turn opportunities into revenue with proven systems.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 04 — PROOF (#case-studies & #testimonials)
          Story Flow: PAIN → SOLUTION → PROOF → PROCESS → CTA
      ================================================== */}
      <section id="case-studies" className="py-24 bg-[#F7F9FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part 1: Worked With Brands & Clients */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase">
                {siteConfig.brandsSection.eyebrow}
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071A2B] tracking-tight uppercase">
                {siteConfig.brandsSection.headline}
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {siteConfig.brandLogos.map((brand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col items-center justify-center text-center space-y-2 hover:border-[#08C4D4] transition-all min-h-[150px]"
                >
                  {brand.logo ? (
                    <div className="h-12 w-full flex items-center justify-center shrink-0 mb-1">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-12 max-w-[85%] object-contain"
                      />
                    </div>
                  ) : null}
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#071A2B] uppercase tracking-wider leading-snug">
                    {brand.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-sans font-medium">
                    {brand.category}
                  </div>
                </div>
              ))}

              {/* Additional Slot */}
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-5 sm:p-6 flex flex-col items-center justify-center text-center space-y-2 min-h-[150px]">
                <div className="font-mono text-xs sm:text-sm font-bold text-[#08C4D4] uppercase tracking-wider leading-snug">
                  YOUR BRAND HERE
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-sans font-medium">
                  Growth &amp; Creative System
                </div>
                <button
                  onClick={() => setConsultationModalOpen(true)}
                  className="text-[10px] sm:text-xs font-bold text-[#08C4D4] hover:underline pt-1"
                >
                  Partner With Angelo →
                </button>
              </div>
            </div>
          </div>

          {/* Part 2: Featured Case Studies */}
          <div className="space-y-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
              <div>
                <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase mb-1">
                  FEATURED CASE BREAKDOWNS
                </div>
                <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071A2B] tracking-tight uppercase">
                  CASE STUDIES
                </h2>
              </div>

              <button
                onClick={() => navigate('/works')}
                className="inline-flex items-center gap-2 font-sans text-xs font-bold text-[#08C4D4] hover:text-[#00AEBE] transition-colors"
              >
                <span>View all works →</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/9] bg-gray-100 overflow-hidden relative">
                      {!cs.isPlaceholderImage ? (
                        <img
                          src={cs.image}
                          alt={cs.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-soft-bg border border-dashed border-gray-200 flex flex-col items-center justify-center p-4 text-center">
                          <ImageIcon className="w-6 h-6 text-[#08C4D4] mb-1 opacity-70" />
                          <span className="text-xs font-mono text-[#08C4D4] font-bold">{cs.title}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-3">
                      <div className="font-mono text-[10px] font-bold text-[#08C4D4] tracking-wider uppercase">
                        {cs.category}
                      </div>

                      <h3 className="font-sans text-lg font-extrabold text-[#071A2B] group-hover:text-[#08C4D4] transition-colors tracking-tight">
                        {cs.title}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                        {cs.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <button
                      onClick={() => setSelectedCaseStudy(cs)}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-[#08C4D4] hover:text-[#00AEBE] transition-colors"
                    >
                      <span>View Details →</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part 3: Testimonials */}
          <div id="testimonials" className="space-y-8 pt-8 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase">
                CLIENT REVIEWS &amp; ENDORSEMENTS
              </div>
              <h3 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-[#071A2B] tracking-tight uppercase">
                WHAT FOUNDERS &amp; OPERATORS SAY
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                Feedback from brands, agencies, and business partners who rely on Angelo for creative strategy and growth execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#08C4D4] transition-all shadow-xs flex flex-col justify-between space-y-6 relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#08C4D4] bg-[#E6F9FC] px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t.highlightTag}
                      </span>
                    </div>

                    <div className="relative">
                      <Quote className="w-8 h-8 text-gray-200 absolute -top-3 -left-2 pointer-events-none" />
                      <p className="text-sm sm:text-base text-[#071A2B] font-sans leading-relaxed relative z-10 pl-4 font-medium">
                        {t.quote}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#071A2B] text-[#08C4D4] flex items-center justify-center font-mono text-xs font-bold shrink-0 overflow-hidden">
                        {t.avatar ? (
                          <img src={t.avatar} alt={t.client} className="w-full h-full object-cover" />
                        ) : (
                          t.client.substring(0, 2).toUpperCase()
                        )}
                      </div>
                      <div>
                        <div className="font-sans text-xs font-extrabold text-[#071A2B]">
                          {t.author}
                        </div>
                        <div className="text-[11px] text-gray-400 font-mono">
                          {t.client} • {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 05 — PROCESS & RESULTS (#process)
          Story Flow: PAIN → SOLUTION → PROOF → PROCESS → CTA
      ================================================== */}
      <section id="process" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Part A: Sustainable Growth Pillars */}
          <div className="bg-[#071A2B] rounded-3xl p-8 sm:p-12 text-white border border-gray-800 shadow-xl space-y-8">
            <div className="border-b border-gray-800 pb-4 text-center md:text-left">
              <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] uppercase tracking-widest mb-1">
                THE PROCESS &amp; SYSTEM
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                {siteConfig.advantageStrip.headline}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#08C4D4]">
                  <Target className="w-6 h-6" />
                </div>
                <div className="font-sans text-[11px] sm:text-xs font-bold text-gray-200 uppercase tracking-wider">
                  EXPERIENCE ACROSS MULTIPLE INDUSTRIES
                </div>
              </div>

              <div className="space-y-2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#08C4D4]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="font-sans text-[11px] sm:text-xs font-bold text-gray-200 uppercase tracking-wider">
                  AI-POWERED STRATEGIES &amp; AUTOMATION
                </div>
              </div>

              <div className="space-y-2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#08C4D4]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="font-sans text-[11px] sm:text-xs font-bold text-gray-200 uppercase tracking-wider">
                  PROVEN MARKETING &amp; SALES SYSTEMS
                </div>
              </div>

              <div className="space-y-2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-[#08C4D4]">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="font-sans text-[11px] sm:text-xs font-bold text-gray-200 uppercase tracking-wider">
                  BUILT FOR LONG-TERM SCALE
                </div>
              </div>
            </div>
          </div>

          {/* Part B: The Result Outcomes */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase">
                {siteConfig.theResult.eyebrow}
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071A2B] tracking-tight uppercase">
                {siteConfig.theResult.headline}
              </h2>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-sans">
                {siteConfig.theResult.copy}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.theResult.outcomes.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F7F9FA] border border-gray-200 rounded-2xl p-6 space-y-4 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E6F9FC] text-[#08C4D4] flex items-center justify-center font-bold">
                    {item.icon === 'Clock' && <Clock className="w-5 h-5" />}
                    {item.icon === 'TrendingUp' && <TrendingUp className="w-5 h-5" />}
                    {item.icon === 'Users' && <Users className="w-5 h-5" />}
                    {item.icon === 'Zap' && <Zap className="w-5 h-5" />}
                  </div>
                  <h3 className="font-sans text-base font-extrabold text-[#071A2B]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 06 — ABOUT ANGELO VENCIO (#about)
      ================================================== */}
      <section id="about" className="py-24 bg-[#F7F9FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl bg-gray-100 overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={aboutContent.image}
                  alt="Angelo Vencio"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase">
                STRATEGIC OPERATOR
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071A2B] tracking-tight uppercase">
                ABOUT ANGELO VENCIO
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
                <p>
                  Angelo Vencio helps growth-minded eCommerce brands and digital businesses build modern, AI-enhanced creative systems.
                </p>
                <p>
                  With experience spanning video editing, visual design, sales development, and performance ad execution, Angelo brings a unique multidisciplinary perspective to every project.
                </p>
                <p>
                  Instead of offering generic single-off design deliverables, Angelo builds repeatable workflows and creative assets that empower DTC founders to scale predictably.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setConsultationModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold hover:bg-[#00AEBE] transition-all shadow-sm"
                >
                  Work With Angelo →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 07 — CTA (#contact)
          Story Flow: PAIN → SOLUTION → PROOF → PROCESS → CTA
      ================================================== */}
      <section id="contact" className="py-24 bg-[#071A2B] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="font-mono text-sm sm:text-base font-bold text-[#08C4D4] tracking-widest uppercase">
            BUILD YOUR CREATIVE SYSTEM
          </div>

          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            READY TO LAUNCH, TEST, AND FIND WINNING ADS FASTER?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Schedule a strategic consultation with Angelo Vencio to identify bottlenecks in your creative production and build a high-velocity ad testing framework.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setConsultationModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#08C4D4] text-white font-sans text-xs sm:text-sm font-bold hover:bg-[#00AEBE] transition-all shadow-lg"
            >
              Book a Consultation →
            </button>
          </div>

        </div>
      </section>

      {/* Detail Modal */}
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
