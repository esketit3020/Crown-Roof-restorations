import React, { useState, useEffect } from 'react';
import { Phone, ShieldCheck, Clock, Menu, X, ArrowRight, Facebook } from 'lucide-react';
import { CrownLogo } from './CrownLogo';
import { BUSINESS_INFO } from '../data/roofingData';

interface NavbarProps {
  currentPage?: 'home' | 'services' | 'founder';
  onNavigate?: (page: 'home' | 'services' | 'founder', sectionId?: string) => void;
  onOpenQuoteModal?: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: 'home' | 'services' | 'founder', sectionId?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', page: 'home' as const, sectionId: 'hero' },
    { name: 'Founder Story', page: 'founder' as const },
    { name: 'Priority Services', page: 'home' as const, sectionId: 'priority-services' },
    { name: 'Full Services', page: 'services' as const, isHighlight: true },
    { name: 'Why Crown', page: 'home' as const, sectionId: 'why-crown' },
    { name: 'Materials', page: 'home' as const, sectionId: 'materials' },
    { name: 'Full Roof Restoration', page: 'home' as const, sectionId: 'showcase' },
    { name: 'Reviews', page: 'home' as const, sectionId: 'reviews' },
    { name: 'FAQs', page: 'home' as const, sectionId: 'faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Emergency & Trust Announcement Bar */}
      <div className="bg-black border-b border-[#D4AF37]/25 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Quality Roofing & Leak Detection callout */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#FDE79D] border border-[#D4AF37]/40 font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              LEAK DETECTION & REPAIRS
            </span>
            <span className="hidden sm:inline text-neutral-300 text-[11px]">
              Prompt inspections & repairs across Melbourne and surrounding suburbs
            </span>
          </div>

          {/* Right: Workmanship Warranty, Facebook & Call */}
          <div className="flex items-center gap-4 text-neutral-200">
            <div className="hidden md:flex items-center gap-1.5 text-[#FDE79D]">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-medium">10-Year Workmanship Warranty</span>
            </div>
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-[#1877F2] font-semibold transition-colors group"
              title="Follow Crown Roof Restorations on Facebook"
            >
              <Facebook className="w-3.5 h-3.5 text-[#1877F2] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs">Facebook</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FDE79D] font-semibold transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-12 transition-transform" />
              <span>Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md border-[#D4AF37]/25 shadow-xl shadow-black py-3'
            : 'bg-black border-[#D4AF37]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo - Returns to Home */}
          <button
            onClick={(e) => handleLinkClick(e, 'home', 'hero')}
            className="flex items-center gap-2 group cursor-pointer text-left"
          >
            <CrownLogo variant="horizontal" size="md" />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isPageActive =
                (link.page === 'services' && currentPage === 'services') ||
                (link.page === 'founder' && currentPage === 'founder') ||
                (link.page === 'home' && currentPage === 'home' && link.name === 'Home');

              return (
                <button
                  key={link.name}
                  onClick={(e) => handleLinkClick(e, link.page, link.sectionId)}
                  className={`py-1 transition-all cursor-pointer relative text-xs xl:text-sm ${
                    link.page === 'services'
                      ? currentPage === 'services'
                        ? 'bg-crown-gold-gradient text-black font-extrabold px-3 py-1.5 rounded-lg shadow-sm border border-[#FDE79D]/40'
                        : 'text-[#FDE79D] font-bold px-3 py-1.5 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/25'
                      : link.page === 'founder'
                      ? currentPage === 'founder'
                        ? 'text-[#FDE79D] font-bold border-b-2 border-[#D4AF37]'
                        : 'text-neutral-300 hover:text-[#FDE79D]'
                      : isPageActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-300 hover:text-[#FDE79D]'
                  }`}
                >
                  <span>{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex flex-col text-right pr-2 group"
            >
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider group-hover:text-[#FDE79D]">
                Direct Line
              </span>
              <span className="text-sm font-extrabold text-white group-hover:text-[#FDE79D]">
                {BUSINESS_INFO.phone}
              </span>
            </a>

            <a
              id="nav-call-btn"
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="relative group overflow-hidden rounded-xl px-5 py-2.5 bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-xs sm:text-sm tracking-wider shadow-lg shadow-[#D4AF37]/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-[#FDE79D]/40"
            >
              <Phone className="w-4 h-4 fill-black group-hover:rotate-12 transition-transform" />
              <span>CALL</span>
            </a>

            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-white hover:text-[#1877F2] border border-[#D4AF37]/30 hover:border-[#1877F2]/50 shadow transition-all group"
              title="Follow Crown Roof Restorations on Facebook"
              aria-label="Follow Crown Roof Restorations on Facebook"
            >
              <Facebook className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="sm:hidden text-xs px-3 py-1.5 bg-crown-gold-gradient text-black font-extrabold rounded-lg shadow flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141414] border border-[#D4AF37]/30 text-white hover:text-[#FDE79D]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-[#D4AF37]/25 px-4 pt-3 pb-6 space-y-2 mt-3 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleLinkClick(e, link.page, link.sectionId)}
                className={`w-full text-left py-2.5 px-3 rounded-lg font-medium text-xs sm:text-sm flex items-center justify-between transition-colors ${
                  link.page === 'services' && currentPage === 'services'
                    ? 'bg-crown-gold-gradient text-black font-bold'
                    : link.page === 'founder' && currentPage === 'founder'
                    ? 'bg-[#D4AF37]/20 text-[#FDE79D] font-bold border border-[#D4AF37]/40'
                    : link.page === 'services'
                    ? 'text-[#FDE79D] bg-[#D4AF37]/15 border border-[#D4AF37]/30'
                    : 'text-neutral-200 hover:text-[#FDE79D] hover:bg-[#141414]'
                }`}
              >
                <span>{link.name}</span>
                {(link.page === 'services' || link.page === 'founder') && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-crown-gold-gradient text-black font-extrabold rounded-xl text-center text-xs sm:text-sm tracking-wider uppercase shadow-md shadow-[#D4AF37]/20 flex items-center justify-center gap-2 border border-[#FDE79D]/40"
              >
                <Phone className="w-4 h-4 fill-black" />
                <span>CALL MASON</span>
              </a>

              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#141414] text-white hover:text-[#1877F2] font-semibold text-xs flex items-center justify-center gap-2 border border-[#D4AF37]/30 transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>Follow Crown on Facebook</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
