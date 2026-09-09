import React, { useState } from 'react';
import { BEFORE_AFTER_PROJECTS, BUSINESS_INFO } from '../data/roofingData';
import { ShieldCheck, ArrowRight, Sparkles, SlidersHorizontal, Phone } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface BeforeAfterGalleryProps {
  onOpenQuoteModal?: (projectType?: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = BEFORE_AFTER_PROJECTS[selectedProjectIndex];

  return (
    <section id="showcase" className="py-20 bg-black relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Comparison Showcase</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Proven Results: Before & After The Crown Treatment
          </h2>
          <p className="text-neutral-400 text-base">
            Drag the gold slider handle horizontally to reveal the transformative power of our complete roof restoration systems.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {BEFORE_AFTER_PROJECTS.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedProjectIndex === idx
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/20'
              }`}
            >
              {idx === 0 && <Sparkles className="w-3.5 h-3.5 fill-current" />}
              <span>{project.category}</span>
            </button>
          ))}
        </div>

        {/* Showcase Feature Card */}
        <div className="rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/30 overflow-hidden shadow-2xl p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Image View with Interactive Before/After Slider */}
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                key={currentProject.id}
                beforeImage={currentProject.beforeImage}
                afterImage={currentProject.afterImage}
                beforeAlt={`${currentProject.title} Before`}
                afterAlt={`${currentProject.title} After`}
              />

              {/* Roof Type & Location Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-3">
                <span className="px-3 py-1 rounded-lg bg-black border border-[#D4AF37]/30 text-xs font-semibold text-white">
                  {currentProject.roofType}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-semibold text-[#FDE79D]">
                  {currentProject.location}
                </span>
                <span className="text-[11px] text-neutral-400 italic">
                  Drag slider left or right to compare
                </span>
              </div>
            </div>

            {/* Description & Case Notes */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{currentProject.warranty}</span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
                  {currentProject.title}
                </h3>

                {/* Problem vs Solution breakdown */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-black border border-neutral-800">
                    <span className="text-neutral-400 font-bold block mb-1 text-xs uppercase tracking-wide">
                      The Problem:
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{currentProject.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black border border-[#D4AF37]/35">
                    <span className="text-[#D4AF37] font-bold block mb-1 text-xs uppercase tracking-wide">
                      The Crown Solution:
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{currentProject.solution}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-neutral-800 space-y-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-3.5 px-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm shadow-md shadow-[#D4AF37]/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#FDE79D]/40"
                >
                  <Phone className="w-4 h-4 fill-black" />
                  <span>Call Mason For A Free Roof Quote: {BUSINESS_INFO.phone}</span>
                </a>
                <p className="text-[11px] text-center text-neutral-400">
                  Direct phone call with Mason — get instant advice or schedule a free on-site roof inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
