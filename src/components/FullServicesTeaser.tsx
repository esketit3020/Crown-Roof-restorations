import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Layers, Droplets, Paintbrush, Hammer, Phone } from 'lucide-react';
import { ALL_SERVICES, BUSINESS_INFO } from '../data/roofingData';

interface FullServicesTeaserProps {
  onNavigateToServices: () => void;
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const FullServicesTeaser: React.FC<FullServicesTeaserProps> = ({
  onNavigateToServices,
}) => {
  const tileTinCount = ALL_SERVICES.filter((s) => s.category === 'tile-tin').length;
  const exteriorCount = ALL_SERVICES.filter((s) => s.category === 'exterior').length;

  const sampleCapabilities = [
    { title: 'Tile & Tin Roof Restorations', category: 'Tile & Tin' },
    { title: 'Comprehensive Leak Detection & Repairs', category: 'Priority' },
    { title: 'Flexible Pointing & Rebedding', category: 'Tile & Tin' },
    { title: 'Valley Iron & Flashing Renewals', category: 'Tile & Tin' },
    { title: 'High-Pressure Roof Cleaning', category: 'Exterior' },
    { title: 'Gutter Guard & Downpipe Repairs', category: 'Exterior' },
    { title: 'Solar Panel Gentle Washing', category: 'Exterior' },
    { title: 'Full Exterior Pressure Washing', category: 'Exterior' },
  ];

  return (
    <section className="py-16 bg-black relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0D0D0D] via-black to-[#0D0D0D] border border-[#D4AF37]/35 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Radial Gold Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Headline & Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Complete Catalog of Certified Solutions</span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                Explore Our Full Services Directory On Our Dedicated Services Page
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Looking for a specific repair, flashing adjustment, or exterior wash? We provide comprehensive tile & tin roofing solutions and exterior property maintenance services with zero exclusions.
              </p>

              {/* Badges / Stats */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                <div className="px-3 py-1.5 rounded-lg bg-black border border-[#D4AF37]/25 text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>10-Year Workmanship Warranty</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-black border border-[#D4AF37]/25 text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Residential & Commercial</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onNavigateToServices}
                  className="px-6 py-3.5 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm shadow-md shadow-[#D4AF37]/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#FDE79D]/40"
                >
                  <span>View Full Services Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-3.5 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] text-white font-bold text-sm border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Directory Quick Previews */}
            <div className="lg:col-span-5 bg-black/70 rounded-xl p-5 border border-[#D4AF37]/25 backdrop-blur-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-bold text-[#FDE79D] uppercase tracking-wider">
                  Popular Service Categories
                </span>
                <button
                  onClick={onNavigateToServices}
                  className="text-[11px] text-[#D4AF37] hover:underline font-semibold cursor-pointer"
                >
                  See All Services →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {sampleCapabilities.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={onNavigateToServices}
                    className="p-2.5 rounded-lg bg-[#0D0D0D] border border-neutral-800 hover:border-[#D4AF37]/40 text-left transition-all group flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-neutral-300 group-hover:text-white font-medium truncate">
                      {item.title}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                  </button>
                ))}
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={onNavigateToServices}
                  className="text-xs text-neutral-400 hover:text-[#FDE79D] transition-colors cursor-pointer"
                >
                  Explore all specialist roofing & exterior services on the full services page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
