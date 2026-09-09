import React, { useState } from 'react';
import { Star, Phone, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

const HERO_IMAGE_CANDIDATES = [
  '/qwerq (2).jpg',
  '/qwerq.jpg',
  '/hero-roof.jpg',
  '/roof-after.jpg',
];

export const Hero: React.FC<HeroProps> = () => {
  const [candidateIndex, setCandidateIndex] = useState(0);

  const handleImageError = () => {
    if (candidateIndex < HERO_IMAGE_CANDIDATES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    }
  };

  const currentHeroImg = HERO_IMAGE_CANDIDATES[candidateIndex];

  return (
    <section className="relative overflow-hidden bg-black pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#D4AF37]/25">
      {/* Full Hero Background Image with Rich Cinematic Dark Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={currentHeroImg}
          alt="Restored roof by Crown Roof Restorations"
          onError={handleImageError}
          className="w-full h-full object-cover object-center opacity-55 md:opacity-60 scale-105 transition-opacity duration-700"
        />
        {/* Dark directional gradient overlays for pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Guarantee Pill & Rating Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/25 to-black/80 border border-[#D4AF37]/50 text-[#FDE79D] text-xs sm:text-sm font-semibold tracking-wide shadow-lg backdrop-blur-md">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>THE CROWN TREATMENT • 10-YEAR WORKMANSHIP WARRANTY</span>
            </div>

            <a
              href="#reviews"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 border border-[#D4AF37]/35 hover:border-[#D4AF37] text-xs font-semibold text-white backdrop-blur-md shadow cursor-pointer transition-all group"
            >
              <span className="text-[#D4AF37] font-bold">{BUSINESS_INFO.rating}</span>
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-neutral-300 group-hover:text-[#FDE79D] transition-colors">
                5 Google Reviews (100% 5-Star)
              </span>
            </a>
          </div>

          {/* Main Headline */}
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl">
            We Don’t Just Restore Roofs —{' '}
            <span className="text-crown-gold-gradient block sm:inline">
              We Restore Them Like They’re Our Own.
            </span>
          </h1>

          {/* Core Value Proposition Paragraph */}
          <p className="text-neutral-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            With hands-on experience from a younger age, quality products, attention to detail and pride in every job,{' '}
            <strong className="text-white font-semibold">Crown Roof Restorations</strong> is built around doing the job properly and putting our name behind the work.
          </p>

          {/* Key Trust Checkmarks in a 4-pillar grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-sm text-neutral-200 max-w-4xl">
            <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/30 shadow">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-medium">10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/30 shadow">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-medium">Leak Detection & Repairs</span>
            </div>
            <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/30 shadow">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-medium">Tile & Tin Specialists</span>
            </div>
            <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D4AF37]/30 shadow">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span className="font-medium">Free Quote</span>
            </div>
          </div>

          {/* Action Buttons: Primary is Direct Call to Mason */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              id="hero-call-btn"
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="group px-8 py-4.5 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-base sm:text-lg tracking-wide shadow-xl shadow-[#D4AF37]/25 border border-[#FDE79D]/50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-black group-hover:rotate-12 transition-transform" />
              <span>CALL FOR A FREE QUOTE</span>
            </a>

            <a
              id="hero-explore-btn"
              href="#priority-services"
              className="px-6 py-4.5 rounded-xl bg-black/80 hover:bg-[#1A1A1A] text-white font-bold text-base border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-md backdrop-blur-sm group"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Ideal Customer / Scope Pill */}
          <div className="pt-2">
            <p className="text-xs text-neutral-300 flex flex-wrap items-center gap-1.5 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-neutral-800 w-fit">
              <span className="text-[#D4AF37] font-bold uppercase tracking-wider">Serving All Sectors:</span>
              <span className="text-neutral-200">Residential Homeowners</span> •
              <span className="text-neutral-200">Commercial Property Managers</span> •
              <span className="text-neutral-200">Leak Detection & Repairs</span> •
              <span className="text-neutral-200">High-End Architectural Builds</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
