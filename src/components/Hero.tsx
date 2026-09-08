import React from 'react';
import { ShieldCheck, Star, Phone, ArrowRight, CheckCircle2, Clock, Award, Hammer, SlidersHorizontal } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { CrownLogo } from './CrownLogo';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative overflow-hidden bg-black pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#D4AF37]/25">
      {/* Subtle architectural background texture & ambient gold glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient radial gold glows matching the crown highlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#D4AF37]/15 via-[#A9801C]/5 to-transparent blur-3xl opacity-75"></div>
        <div className="absolute -top-24 right-0 w-96 h-96 bg-[#D4AF37]/8 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black blur-3xl"></div>

        {/* Subtle geometric roof gable vector watermark */}
        <svg
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] text-[#D4AF37] pointer-events-none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="50,15 90,85 10,85" />
          <polygon points="50,28 80,80 20,80" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-6">
            {/* Guarantee / Slogan pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/15 to-[#141414] border border-[#D4AF37]/40 text-[#FDE79D] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>THE CROWN TREATMENT • 10-YEAR WORKMANSHIP WARRANTY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15]">
              We Don’t Just Restore Roofs —{' '}
              <span className="text-crown-gold-gradient block sm:inline">
                We Restore Them Like They’re Our Own.
              </span>
            </h1>

            {/* Core Value Proposition Paragraph (from onboarding form) */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              With hands-on experience from a younger age, quality products, attention to detail and pride in every job,{' '}
              <strong className="text-white font-semibold">Crown Roof Restorations</strong> is built around doing the job properly and putting our name behind the work.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-neutral-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>10-Year Workmanship Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Expert Leak Detection & Repairs</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Tile & Tin Complete Restorations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Free On-Site Assessment & Upfront Quotes</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-book-quote-btn"
                onClick={onOpenQuoteModal}
                className="group px-7 py-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-base tracking-wide shadow-xl shadow-[#D4AF37]/20 border border-[#FDE79D]/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>BOOK A FREE ROOF QUOTE</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl bg-[#0D0D0D] hover:bg-[#1A1A1A] text-white font-bold text-base border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-3 shadow-md group"
              >
                <Phone className="w-5 h-5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
                <span>CALL: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Ideal Customer / Scope Pill */}
            <div className="pt-2">
              <p className="text-xs text-neutral-400 flex flex-wrap items-center gap-1.5">
                <span className="text-[#D4AF37] font-bold uppercase tracking-wider">Serving All Sectors:</span>
                <span className="text-neutral-300">Residential Homeowners</span> •
                <span className="text-neutral-300">Commercial Property Managers</span> •
                <span className="text-neutral-300">Urgent Leak Repairs</span> •
                <span className="text-neutral-300">High-End Architectural Builds</span>
              </p>
            </div>
          </div>

          {/* Right Column: Visual Trust Card & Featured Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold border container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#D4AF37]/45 via-[#A9801C]/25 to-transparent shadow-2xl shadow-black">
                <div className="relative rounded-[14px] bg-[#0D0D0D] p-6 sm:p-8 overflow-hidden border border-[#D4AF37]/20 space-y-6">
                  {/* Top Badge: Official Logo & Google Review proof */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#141414] rounded-xl p-3.5 border border-[#D4AF37]/25">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-black p-1 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 shadow">
                        <img
                          src="/crown-logo.jpg"
                          alt="Official Crown Roof Restoration Logo"
                          className="h-full w-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-white font-extrabold text-sm">{BUSINESS_INFO.rating}</span>
                          <div className="flex text-[#D4AF37]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                            ))}
                          </div>
                        </div>
                        <span className="text-[11px] text-neutral-400">Based on {BUSINESS_INFO.reviewCount} local reviews</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#FDE79D] bg-[#D4AF37]/15 px-2.5 py-1 rounded border border-[#D4AF37]/30 uppercase tracking-wide">
                      Official Seal
                    </span>
                  </div>

                  {/* Hero Visual Image: Interactive Before & After Restoration Slider */}
                  <div className="space-y-2">
                    <BeforeAfterSlider
                      beforeImage="/roof-before.jpg"
                      afterImage="/roof-after.jpg"
                      beforeAlt="Melbourne tile roof before Crown restoration"
                      afterAlt="Melbourne tile roof after Crown high-gloss restoration"
                    />
                    <div className="flex items-center justify-between text-xs px-1">
                      <span className="text-[#FDE79D] font-semibold flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Interactive Before & After</span>
                      </span>
                      <span className="text-neutral-400 font-medium">
                        Tile & Tin Full Rejuvenation
                      </span>
                    </div>
                  </div>

                  {/* Trust Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-[#141414] rounded-xl p-3 border border-[#D4AF37]/20">
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Guarantee</span>
                      </div>
                      <p className="text-sm font-extrabold text-white">10-Year Warranty</p>
                      <p className="text-[11px] text-neutral-400">On all qualified workmanship</p>
                    </div>

                    <div className="bg-[#141414] rounded-xl p-3 border border-[#D4AF37]/20">
                      <div className="flex items-center gap-2 text-[#D4AF37] mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Response</span>
                      </div>
                      <p className="text-sm font-extrabold text-white">Prompt Service</p>
                      <p className="text-[11px] text-neutral-400">Melbourne & surrounds</p>
                    </div>
                  </div>

                  {/* Slogan Banner */}
                  <div className="text-center py-2 border-t border-[#D4AF37]/20">
                    <p className="font-cinzel text-xs font-bold text-[#FDE79D] tracking-[0.2em] uppercase">
                      The Crown Treatment. Every Roof. Every Time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
