import React from 'react';
import { MATERIAL_SPECIALTIES, BUSINESS_INFO } from '../data/roofingData';
import { ShieldCheck, Check, Layers, Sparkles, AlertCircle } from 'lucide-react';

export const MaterialsSection: React.FC = () => {
  return (
    <section id="materials" className="py-20 bg-black relative border-t border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <span>Specialty Craft & Durability</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Materials, Systems & Specialty Work
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            {BUSINESS_INFO.materialsStatement}
          </p>
        </div>

        {/* 4 Materials System Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {MATERIAL_SPECIALTIES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-[#0D0D0D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-black border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white mb-2 group-hover:text-[#FDE79D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-neutral-800">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: "Jobs We Do NOT Take: NO" -> Full Capacity & Inclusivity */}
        <div className="rounded-2xl bg-gradient-to-r from-[#D4AF37]/10 via-[#141414] to-[#D4AF37]/10 border border-[#D4AF37]/35 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#D4AF37]/20 text-[#FDE79D] border border-[#D4AF37]/40 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-1">
                Zero Job Exclusions: Tile, Tin, Residential & Commercial
              </h4>
              <p className="text-neutral-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Unlike contractors who reject small repair calls or shy away from complex steep-pitch high-end restorations, Crown Roof Restorations has no job exclusions. If it’s on a roof, we have the hands-on trade experience to do the job properly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs uppercase font-bold text-[#FDE79D] tracking-wider bg-[#D4AF37]/15 px-4 py-2 rounded-xl border border-[#D4AF37]/30">
              100% Comprehensive Coverage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
