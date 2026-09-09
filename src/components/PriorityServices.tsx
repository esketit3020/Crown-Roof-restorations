import React from 'react';
import { TOP_PRIORITY_SERVICES, BUSINESS_INFO } from '../data/roofingData';
import { PRIORITY_SERVICE_IMAGES } from '../data/priorityImages';
import { CheckCircle, ShieldCheck, Wrench, AlertTriangle, Sparkles, Clock, Phone } from 'lucide-react';

interface PriorityServicesProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const PriorityServices: React.FC<PriorityServicesProps> = () => {
  const getServiceImage = (serviceId: string, defaultFallback?: string) => {
    if (PRIORITY_SERVICE_IMAGES[serviceId]) {
      return PRIORITY_SERVICE_IMAGES[serviceId];
    }
    return defaultFallback || '/priority-restoration.jpg';
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#D4AF37]" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="priority-services" className="py-20 bg-black relative border-t border-[#D4AF37]/20">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.03] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <span>Our Core Services</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Priority Roofing Services
          </h2>
          <p className="text-neutral-400 text-base">
            Expert restorations, repairs, and leak detection done right the first time.
          </p>
        </div>

        {/* 3 Featured Priority Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TOP_PRIORITY_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between border ${
                index === 0
                  ? 'bg-gradient-to-b from-[#141414] to-[#0A0A0A] border-[#D4AF37]/70 shadow-2xl shadow-[#D4AF37]/10 ring-1 ring-[#D4AF37]/50'
                  : 'bg-[#0D0D0D] border-[#D4AF37]/25 hover:border-[#D4AF37]/50 shadow-lg'
              }`}
            >
              {/* Service Visual Image Header */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900 border-b border-[#D4AF37]/20">
                <img
                  src={getServiceImage(service.id, service.imageUrl)}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-black/25 to-black/40 pointer-events-none" />

                {index === 2 && (
                  <div className="absolute top-3.5 right-3.5 z-10 bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 text-[#FDE79D] font-bold text-[11px] uppercase tracking-wider py-1 px-3 rounded-full shadow-sm flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Prompt Response</span>
                  </div>
                )}

                {/* Floating Icon badge overlapping image bottom */}
                <div className="absolute -bottom-3 left-6 z-10 p-2.5 rounded-xl bg-[#141414] border border-[#D4AF37]/50 shadow-xl">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 pt-7 flex flex-col flex-1 justify-between">
                <div>
                  {/* Service Title */}
                  <h3 className="font-cinzel text-xl font-bold text-white mb-1.5 leading-snug">
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
                  <div className="space-y-2.5 mb-6 pt-3 border-t border-neutral-800">
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

                  <a
                    id={`priority-call-${service.id}`}
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      index === 0
                        ? 'bg-crown-gold-gradient hover:bg-crown-gold-hover text-black shadow-md shadow-[#D4AF37]/20 active:scale-[0.98] border border-[#FDE79D]/40'
                        : 'bg-[#141414] hover:bg-crown-gold-gradient hover:text-black text-white border border-[#D4AF37]/30 hover:border-[#FDE79D]/40'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call to Book</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Priority section: "Why replace when you can restore?" */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0D0D0D] via-[#171717] to-[#0D0D0D] border border-[#D4AF37]/35 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              Restore or Replace? Save Thousands with a Restoration.
            </h4>
            <p className="text-neutral-300 text-sm max-w-2xl">
              Most weathered roofs do not need a full rebuild. We inspect your roof and give you honest, upfront advice on what is actually needed.
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
            className="shrink-0 px-7 py-3.5 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm transition-all shadow-lg whitespace-nowrap cursor-pointer border border-[#FDE79D]/40 flex items-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>Call Mason</span>
          </a>
        </div>
      </div>
    </section>
  );
};
