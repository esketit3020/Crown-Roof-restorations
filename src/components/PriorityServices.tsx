import React from 'react';
import { TOP_PRIORITY_SERVICES } from '../data/roofingData';
import { ArrowRight, CheckCircle, ShieldCheck, Wrench, AlertTriangle, Sparkles, Clock, Phone } from 'lucide-react';

interface PriorityServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const PriorityServices: React.FC<PriorityServicesProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />;
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-[#D4AF37]" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-7 h-7 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="priority-services" className="py-20 bg-black relative border-t border-[#D4AF37]/20">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.03] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <span>Specialized Core Focus</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-4xl font-bold text-white tracking-tight">
            Top Priority Roofing Solutions
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Built around doing the job properly and putting our name behind the work. Here is how we deliver lasting protection for your property.
          </p>
        </div>

        {/* 3 Featured Priority Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TOP_PRIORITY_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`relative rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                index === 0
                  ? 'bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-[#D4AF37]/70 shadow-2xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/50'
                  : 'bg-[#0D0D0D] border-[#D4AF37]/25 hover:border-[#D4AF37]/50 shadow-lg'
              }`}
            >
              {/* Highlight ribbon for Top Priority #1 */}
              {index === 0 && (
                <div className="absolute -top-3.5 left-6 bg-crown-gold-gradient text-black font-extrabold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#FDE79D]/50">
                  <Sparkles className="w-3.5 h-3.5 fill-black" />
                  <span>Most Popular Rejuvenation</span>
                </div>
              )}

              {index === 2 && (
                <div className="absolute -top-3.5 left-6 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#FDE79D] font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24/7 Rapid Response</span>
                </div>
              )}

              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between gap-4 mb-5 pt-1">
                  <div className="p-3.5 rounded-xl bg-black border border-[#D4AF37]/30 shadow-inner">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-[#FDE79D] bg-[#141414] px-2.5 py-1 rounded-md border border-[#D4AF37]/20">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 leading-snug">
                  {service.name}
                </h3>

                {/* Tagline */}
                <p className="text-[#D4AF37] text-xs font-medium mb-4 italic">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6 pt-2 border-t border-neutral-800">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with CTA */}
              <div className="pt-4 border-t border-neutral-800 mt-auto space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <span>Materials:</span>
                  <span className="text-white font-medium">{service.materials}</span>
                </div>

                <button
                  id={`priority-quote-${service.id}`}
                  onClick={() => onOpenQuoteModal(service.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    index === 0
                      ? 'bg-crown-gold-gradient hover:bg-crown-gold-hover text-black shadow-md shadow-[#D4AF37]/20 active:scale-[0.98] border border-[#FDE79D]/40'
                      : 'bg-[#141414] hover:bg-[#1F1F1F] text-white hover:text-[#FDE79D] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60'
                  }`}
                >
                  <span>Request Assessment & Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Priority section: "Why replace when you can restore?" */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D] border border-[#D4AF37]/35 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              Do You Need a Full Roof Replacement, Or Can Your Roof Be Restored?
            </h4>
            <p className="text-neutral-300 text-sm max-w-2xl">
              In many cases, an older or tired-looking roof can be restored rather than completely replaced, saving you thousands of dollars. We inspect the roof and explain what work is actually required, so you can make an informed decision.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('Roof Inspection / Assessment')}
            className="shrink-0 px-6 py-3 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-bold text-sm transition-all shadow-md whitespace-nowrap cursor-pointer border border-[#FDE79D]/40"
          >
            Get Free Roof Inspection
          </button>
        </div>
      </div>
    </section>
  );
};
