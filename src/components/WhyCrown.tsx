import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Eye, Clock, CheckCircle2, Shield, Wrench, Phone } from 'lucide-react';
import { CrownLogo } from './CrownLogo';
import { BUSINESS_INFO } from '../data/roofingData';

interface WhyCrownProps {
  onOpenQuoteModal?: () => void;
  onNavigateToFounder?: () => void;
}

export const WhyCrown: React.FC<WhyCrownProps> = ({ onNavigateToFounder }) => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '10-Year Workmanship Warranty',
      description:
        'We stand firmly behind our work with an ironclad 10-year workmanship guarantee on full restorations where applicable. Our goal is decades of weather-tight security.',
      highlight: 'Guaranteed Protection',
    },
    {
      icon: HeartHandshake,
      title: 'Treated Like Our Own Roof',
      description:
        'With hands-on experience and true trade pride, we don’t cut corners on bedding mortar, pointing depth, primer coats, or cleanup.',
      highlight: 'Personal Pride',
    },
    {
      icon: Eye,
      title: 'Meticulous Attention to Detail',
      description:
        'From precision ridge line alignment to clean weep hole drainage and lead flashings, every detail is executed with craftsmanship you can inspect up close.',
      highlight: 'Master Craftsmanship',
    },
    {
      icon: Award,
      title: 'Quality Products & Systems',
      description:
        'We select only proven, heavy-gauge materials and high-build flexible roofing membranes engineered specifically to withstand punishing Australian UV and severe storms.',
      highlight: 'Tested Materials',
    },
  ];

  return (
    <section id="why-crown" className="py-20 bg-black relative overflow-hidden border-t border-b border-[#D4AF37]/20">
      {/* Subtle radial glow */}
      <div className="absolute -top-40 right-1/4 w-[550px] h-[550px] bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
              <span>Our Workmanship Standard</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Crown Roof Restorations?
            </h2>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
              {BUSINESS_INFO.whyCrownSummary}
            </p>
            <div className="pt-2">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-[#FDE79D] border-l-2 border-[#D4AF37] pl-4 block">
                {BUSINESS_INFO.slogan}
              </span>
            </div>
          </div>

          {/* 10-Year Seal Callout Card */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl p-6 bg-gradient-to-b from-[#D4AF37]/20 via-[#141414] to-[#0A0A0A] border border-[#D4AF37]/50 text-center shadow-xl shadow-[#D4AF37]/10 space-y-3">
              <div className="w-24 h-24 mx-auto rounded-xl bg-black p-1.5 border border-[#D4AF37]/50 flex items-center justify-center shadow-lg">
                <img
                  src="/crown-logo.jpg"
                  alt="Crown Roof Restoration Official Emblem"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-cinzel text-4xl font-extrabold text-crown-silver-gradient tracking-tight block">
                10 YEAR
              </span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block">
                Workmanship Guarantee
              </span>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Backing our restoration craft with dependable, local accountability on every job we undertake.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-xl p-6 bg-[#0D0D0D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-black border border-[#D4AF37]/30 text-[#D4AF37] group-hover:text-[#FDE79D] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#FDE79D] uppercase tracking-wider bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                      {pillar.highlight}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#FDE79D] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Crown Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center space-y-4">
          <p className="text-neutral-300 text-sm">
            Want to see how we treat your roof? Get a free quote today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm shadow-xl shadow-[#D4AF37]/20 active:scale-95 transition-all cursor-pointer border border-[#FDE79D]/40"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call Mason for a Free Quote</span>
            </a>

            {onNavigateToFounder && (
              <button
                onClick={onNavigateToFounder}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-white font-bold text-sm border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all cursor-pointer shadow-md group"
              >
                <span>Meet Mason — Founder Story</span>
                <span className="text-[#D4AF37] group-hover:translate-x-1 transition-transform">→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
