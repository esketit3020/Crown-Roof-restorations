import React from 'react';
import { CrownLogo } from './CrownLogo';
import { BUSINESS_INFO, ALL_SERVICES, TOP_PRIORITY_SERVICES } from '../data/roofingData';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Award, ArrowRight, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'services', sectionId?: string) => void;
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const tileTinServices = ALL_SERVICES.filter((s) => s.category === 'tile-tin').slice(0, 7);
  const exteriorServices = ALL_SERVICES.filter((s) => s.category === 'exterior');

  const handleNavigate = (page: 'home' | 'services', sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-neutral-400 border-t border-[#D4AF37]/25 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer: Brand, Value Proposition & Warranty Seal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#D4AF37]/20">
          {/* Brand & Slogan */}
          <div className="lg:col-span-5 space-y-5">
            <button
              onClick={() => handleNavigate('home', 'hero')}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <CrownLogo variant="horizontal" size="lg" />
            </button>

            <p className="text-neutral-300 text-sm leading-relaxed max-w-md">
              {BUSINESS_INFO.coreValueProposition}
            </p>

            <div className="pt-1">
              <p className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#FDE79D]">
                {BUSINESS_INFO.slogan}
              </p>
            </div>

            {/* 10-Year Warranty Badge in Footer */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/35 shadow-md">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">
                  10-Year Workmanship Warranty
                </span>
                <span className="text-[11px] text-neutral-400 block">
                  Backed by quality products & pride in every job
                </span>
              </div>
            </div>

            {/* Social Connection Link */}
            <div className="pt-1">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-white hover:text-[#FDE79D] border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all text-xs font-semibold shadow-md group"
              >
                <Facebook className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" />
                <span>Follow Crown on Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links & Services Directory */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: Priority Services */}
            <div className="space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-[#D4AF37]/35 pb-2">
                Top Priority Services
              </h4>
              <ul className="space-y-2.5 text-xs">
                {TOP_PRIORITY_SERVICES.map((s) => (
                  <li key={s.id}>
                    <a
                      href="#priority-services"
                      className="text-left text-neutral-300 hover:text-[#FDE79D] transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                      <span>{s.name}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#materials" className="text-neutral-400 hover:text-[#FDE79D] flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    <span>Materials & Systems</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-neutral-400 hover:text-[#FDE79D] flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                    <span>Top Customer FAQs</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Tile & Tin Roofing */}
            <div className="space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-[#D4AF37]/35 pb-2">
                Tile & Tin Roofing
              </h4>
              <ul className="space-y-2 text-xs">
                {tileTinServices.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => handleNavigate('services')}
                      className="text-left text-neutral-400 hover:text-[#FDE79D] transition-colors cursor-pointer"
                    >
                      {s.name}
                    </button>
                  </li>
                ))}
                <li className="pt-1">
                  <button
                    onClick={() => handleNavigate('services')}
                    className="text-left text-[#FDE79D] hover:underline font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>View Full Services Directory</span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37]" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Emergency */}
            <div className="space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-[#D4AF37]/35 pb-2">
                Direct Contact
              </h4>
              <div className="space-y-3 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2.5 text-white hover:text-[#FDE79D] font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>

                <div className="flex items-center gap-2.5 text-[#FDE79D] font-medium">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Prompt Melbourne-Wide Service</span>
                </div>

                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-[#FDE79D] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="truncate">{BUSINESS_INFO.email}</span>
                </a>

                <div className="flex items-center gap-2.5 text-neutral-300">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>

                <a
                  href={BUSINESS_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-[#FDE79D] transition-colors group pt-1"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Facebook Profile</span>
                </a>

                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className="w-full py-3 px-3 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-xs shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 border border-[#FDE79D]/40"
                  >
                    <Phone className="w-3.5 h-3.5 fill-black" />
                    <span>CALL FOR A FREE QUOTE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Crown Roof Restorations. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span>Tile & Tin Specialists</span>
            <span>Residential & Commercial</span>
            <span>10-Year Workmanship Warranty</span>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#1877F2] transition-colors"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
              <span>Facebook</span>
            </a>
            <a href="#root" className="text-[#D4AF37] hover:underline">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
