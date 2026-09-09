import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PriorityServices } from './components/PriorityServices';
import { FullServicesTeaser } from './components/FullServicesTeaser';
import { ServicesPage } from './components/ServicesPage';
import { FounderPage } from './components/FounderPage';
import { WhyCrown } from './components/WhyCrown';
import { MaterialsSection } from './components/MaterialsSection';
import { IdealCustomerSection } from './components/IdealCustomerSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from './data/roofingData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'founder'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('founder') || hash.includes('story') || hash.includes('mason')) {
        return 'founder';
      }
      if (hash.includes('services')) {
        return 'services';
      }
    }
    return 'home';
  });

  // Sync state with browser hash (enabling back/forward button navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('founder') || hash.includes('story') || hash.includes('mason')) {
        setCurrentPage('founder');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.includes('services')) {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'services' | 'founder', sectionId?: string) => {
    if (page === 'founder') {
      setCurrentPage('founder');
      window.location.hash = '#founder';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'services') {
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

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black flex flex-col pb-16 lg:pb-0">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content: Conditional Page Rendering */}
      <main className="flex-grow">
        {currentPage === 'founder' ? (
          /* Dedicated Meet Mason Founder Story Page */
          <FounderPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateToServices={() => handleNavigate('services')}
          />
        ) : currentPage === 'services' ? (
          /* Dedicated Full Services Directory Page */
          <ServicesPage
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : (
          /* Home Page */
          <>
            {/* 1. Hero Section with Core Tagline & Value Proposition */}
            <Hero />

            {/* 2. Top Priority & Most Profitable Services (Aggressive Focus) */}
            <PriorityServices />

            {/* 3. Full Services Preview / Bridge to Dedicated Services Page */}
            <FullServicesTeaser
              onNavigateToServices={() => handleNavigate('services')}
            />

            {/* 4. Why Crown & 10-Year Workmanship Warranty */}
            <WhyCrown
              onNavigateToFounder={() => handleNavigate('founder')}
            />

            {/* 6. Materials, Systems & Specialty Work + Zero Job Exclusions */}
            <MaterialsSection />

            {/* 7. Who We Serve: Ideal Customer Categories */}
            <IdealCustomerSection />

            {/* 8. Full Roof Restoration Showcase / Craftsmanship Proof */}
            <BeforeAfterGallery />

            {/* 9. Verified Customer Reviews (Without Replies) */}
            <CustomerReviewsSection />

            {/* 10. Top 3 Customer Questions & Answers + Professional Assessment Banner */}
            <FAQSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Mobile Floating Quick Direct Call Bar */}
      <aside
        aria-label="Quick call contact"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-[#D4AF37]/35 p-3 flex items-center justify-center shadow-2xl"
      >
        <a
          href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
          className="w-full py-3.5 px-4 rounded-xl bg-crown-gold-gradient text-black font-extrabold text-sm shadow-xl active:scale-95 flex items-center justify-center gap-2.5 border border-[#FDE79D]/40 cursor-pointer"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>CALL FOR FREE QUOTE</span>
        </a>
      </aside>
    </div>
  );
}

