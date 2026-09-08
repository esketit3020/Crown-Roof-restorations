import React from 'react';
import { IDEAL_CUSTOMERS } from '../data/roofingData';
import { Home, Building2, AlertOctagon, Sparkles, Check, ArrowRight } from 'lucide-react';

interface IdealCustomerSectionProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const IdealCustomerSection: React.FC<IdealCustomerSectionProps> = ({ onOpenQuoteModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#D4AF37]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'AlertOctagon':
        return <AlertOctagon className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Home className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="py-20 bg-black border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <span>Tailored For Every Property</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Who We Serve: All Properties, Any Roofing Need
          </h2>
          <p className="text-neutral-400 text-base">
            From private family residences to commercial complexes and urgent roof leaks, our dedicated crew delivers the highest trade standard across every sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IDEAL_CUSTOMERS.map((customer) => (
            <div
              key={customer.id}
              className="rounded-2xl p-6 bg-[#0D0D0D] border border-[#D4AF37]/20 hover:border-[#D4AF37]/55 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-black border border-[#D4AF37]/30 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-[#D4AF37]/60 transition-all">
                  {getIcon(customer.iconName)}
                </div>

                <h3 className="font-cinzel text-lg font-bold text-white mb-1 group-hover:text-[#FDE79D] transition-colors">
                  {customer.title}
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium mb-3">
                  {customer.subtitle}
                </p>

                <p className="text-neutral-400 text-xs leading-relaxed mb-5">
                  {customer.description}
                </p>

                <div className="space-y-2 mb-6 pt-3 border-t border-neutral-800">
                  {customer.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800">
                <button
                  onClick={() => onOpenQuoteModal(customer.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-crown-gold-gradient hover:text-black text-white text-xs font-bold border border-[#D4AF37]/30 hover:border-[#FDE79D]/40 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Inquire for {customer.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
