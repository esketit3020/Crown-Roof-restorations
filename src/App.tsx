import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PriorityServices } from './components/PriorityServices';
import { FullServicesTeaser } from './components/FullServicesTeaser';
import { ServicesPage } from './components/ServicesPage';
import { WhyCrown } from './components/WhyCrown';
import { MaterialsSection } from './components/MaterialsSection';
import { IdealCustomerSection } from './components/IdealCustomerSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from './data/roofingData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services'>(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('services')) {
      return 'services';
    }
    return 'home';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Sync state with browser hash (enabling back/forward button navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('services')) {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'services', sectionId?: string) => {
    if (page === 'services') {
      setCurrentPage('services');
      window.location.hash = '#services';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (sectionId) {
        window.location.hash = `#${sectionId}`;
        setTimeout(() => {
          const target = document.getElementById(sectionId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content: Conditional Page Rendering */}
      <main className="flex-grow">
        {currentPage === 'services' ? (
          /* Dedicated Full Services Directory Page */
          <ServicesPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          /* Home Page */
          <>
            {/* 1. Hero Section with Core Tagline & Value Proposition */}
            <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

            {/* 2. Top Priority & Most Profitable Services (Aggressive Focus) */}
            <PriorityServices onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 3. Full Services Preview / Bridge to Dedicated Services Page */}
            <FullServicesTeaser
              onNavigateToServices={() => handleNavigate('services')}
              onOpenQuoteModal={handleOpenQuoteModal}
            />

            {/* 4. Why Crown & 10-Year Workmanship Warranty */}
            <WhyCrown onOpenQuoteModal={() => handleOpenQuoteModal()} />

            {/* 6. Materials, Systems & Specialty Work + Zero Job Exclusions */}
            <MaterialsSection />

            {/* 7. Who We Serve: Ideal Customer Categories */}
            <IdealCustomerSection onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 8. Before & After Showcase / Craftsmanship Proof */}
            <BeforeAfterGallery onOpenQuoteModal={handleOpenQuoteModal} />

            {/* 9. Top 3 Customer Questions & Answers + Professional Assessment Banner */}
            <FAQSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Interactive Free Roof Assessment & Quote Modal */}
      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedService={preselectedService}
      />

      {/* Mobile Floating Quick Call / Quote Bar */}
      <aside
        aria-label="Quick contact"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-[#D4AF37]/35 p-2.5 flex items-center justify-between gap-2 shadow-2xl"
      >
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#0D0D0D] text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-[#D4AF37]/30 active:scale-95 hover:border-[#D4AF37]"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Call {BUSINESS_INFO.phone}</span>
        </a>
        <button
          onClick={() => handleOpenQuoteModal()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-crown-gold-gradient text-black font-extrabold text-xs shadow-md active:scale-95 flex items-center justify-center gap-1.5 border border-[#FDE79D]/40"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Free Roof Quote</span>
        </button>
      </aside>
    </div>
  );
}
