import React, { useState } from 'react';
import { TOP_CUSTOMER_QUESTIONS, BUSINESS_INFO } from '../data/roofingData';
import { ChevronDown, HelpCircle, Phone, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenQuoteModal?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = () => {
  // First item open by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2', 'faq-3']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-black relative border-t border-[#D4AF37]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <span>Honest & Upfront Answers</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Top Customer Questions
          </h2>
          <p className="text-neutral-400 text-base">
            Straightforward answers to the most common questions clients ask when calling for a roof assessment.
          </p>
        </div>

        {/* 3 Core FAQ Items with exact answers */}
        <div className="space-y-4 mb-14">
          {TOP_CUSTOMER_QUESTIONS.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141414] border-[#D4AF37]/50 shadow-lg shadow-black/40'
                    : 'bg-[#0D0D0D] border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#FDE79D] font-bold text-sm flex items-center justify-center shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="font-cinzel text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-crown-gold-gradient text-black shadow' : 'bg-[#171717] text-neutral-400 border border-[#D4AF37]/20'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-neutral-800 text-neutral-300 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>{faq.answer}</p>
                    {faq.tip && (
                      <div className="flex items-start gap-2 text-xs text-[#FDE79D] bg-[#D4AF37]/10 p-3 rounded-xl border border-[#D4AF37]/30">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{faq.tip}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt from onboarding form: "Not sure what your roof needs? Contact Crown Roof Restorations today" */}
        <div className="rounded-2xl bg-gradient-to-r from-[#D4AF37]/15 via-[#141414] to-[#D4AF37]/15 border border-[#D4AF37]/45 p-8 text-center shadow-xl space-y-4">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
            Not Sure What Your Roof Needs?
          </h3>
          <p className="text-neutral-300 text-base max-w-xl mx-auto leading-relaxed">
            Contact <strong className="text-white">Crown Roof Restorations</strong> today for a free quote. We will assess your roof and provide clear, honest advice on what is actually required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm shadow-xl shadow-[#D4AF37]/25 active:scale-95 transition-all flex items-center justify-center gap-2 border border-[#FDE79D]/40 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call Mason for a Free Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
