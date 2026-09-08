import React, { useState } from 'react';
import { BEFORE_AFTER_PROJECTS } from '../data/roofingData';
import { ShieldCheck, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

interface BeforeAfterGalleryProps {
  onOpenQuoteModal: (projectType?: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [activeView, setActiveView] = useState<'after' | 'before'>('after');

  const currentProject = BEFORE_AFTER_PROJECTS[selectedProjectIndex];

  return (
    <section id="showcase" className="py-20 bg-black relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <span>Workmanship Transformations</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Proven Results: Before & After The Crown Treatment
          </h2>
          <p className="text-neutral-400 text-base">
            Every roof restored with meticulous care, tested materials, and our ironclad 10-year workmanship warranty.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {BEFORE_AFTER_PROJECTS.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => {
                setSelectedProjectIndex(idx);
                setActiveView('after');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedProjectIndex === idx
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/20'
              }`}
            >
              {project.category}
            </button>
          ))}
        </div>

        {/* Showcase Feature Card */}
        <div className="rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/30 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Image View with Before / After Toggle */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] bg-black">
              <img
                src={activeView === 'after' ? currentProject.afterImage : currentProject.beforeImage}
                alt={currentProject.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>

              {/* View Toggle Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center bg-black/90 backdrop-blur-md rounded-xl p-1 border border-[#D4AF37]/40 shadow-lg">
                <button
                  onClick={() => setActiveView('before')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeView === 'before'
                      ? 'bg-white text-black shadow'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  BEFORE
                </button>
                <button
                  onClick={() => setActiveView('after')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeView === 'after'
                      ? 'bg-crown-gold-gradient text-black shadow border border-[#FDE79D]/40'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  AFTER (CROWN FINISH)
                </button>
              </div>

              {/* Roof Type Pill */}
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-lg bg-black/85 border border-[#D4AF37]/30 text-xs font-semibold text-white backdrop-blur-sm">
                  {currentProject.roofType}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-semibold text-[#FDE79D] backdrop-blur-sm">
                  {currentProject.location}
                </span>
              </div>
            </div>

            {/* Description & Case Notes */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
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
                  <div className="p-3.5 rounded-xl bg-black border border-neutral-700">
                    <span className="text-neutral-300 font-bold block mb-1 text-xs uppercase tracking-wide">
                      The Problem:
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{currentProject.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black border border-[#D4AF37]/30">
                    <span className="text-[#D4AF37] font-bold block mb-1 text-xs uppercase tracking-wide">
                      The Crown Solution:
                    </span>
                    <p className="text-neutral-300 leading-relaxed">{currentProject.solution}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <button
                  onClick={() => onOpenQuoteModal(currentProject.category)}
                  className="w-full py-3.5 px-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-bold text-sm shadow-md shadow-[#D4AF37]/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#FDE79D]/40"
                >
                  <span>Request Similar Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-neutral-400">
                  Free assessment & itemized proposal before any commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
