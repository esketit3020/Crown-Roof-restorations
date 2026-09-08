import React from 'react';
import { AlertTriangle, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface EmergencyBannerProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="bg-black border-t border-b border-[#D4AF37]/35 py-12 relative overflow-hidden">
      {/* Ambient gold glow matching logo crown */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left info */}
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#FDE79D] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
              <span>24/7 Rapid Emergency Leak Detection</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              Roof Leaking Right Now? Do Not Wait Until Ceilings Collapse.
            </h3>

            <p className="text-neutral-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Sudden storm damage, cracked valleys, or overflowing box gutters can cause thousands in interior water damage. Our emergency team is equipped to locate the source, stop the ingress, and provide certified permanent repairs.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                24 Hours, 7 Days a Week
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Insurance Claim Ready Reports
              </span>
              <span className="flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#D4AF37]" />
                Emergency Tarping & Sealing
              </span>
            </div>
          </div>

          {/* Right quick call actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              id="emergency-call-now-btn"
              href={`tel:${BUSINESS_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-base tracking-wide shadow-xl shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-3 text-center group border border-[#FDE79D]/50"
            >
              <Phone className="w-5 h-5 text-black animate-bounce" />
              <span>CALL 24/7: {BUSINESS_INFO.emergencyPhone}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal('24/7 Leak Detection & Repairs')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] text-white hover:text-[#FDE79D] font-bold text-sm border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all cursor-pointer"
            >
              Book Urgent Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
