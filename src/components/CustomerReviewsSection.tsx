import React, { useState } from 'react';
import { Star, ShieldCheck, Heart, CheckCircle2, ArrowRight, Phone, MessageSquareQuote, ThumbsUp } from 'lucide-react';
import { CUSTOMER_REVIEWS, BUSINESS_INFO } from '../data/roofingData';

interface CustomerReviewsSectionProps {
  onOpenQuoteModal?: () => void;
}

export const CustomerReviewsSection: React.FC<CustomerReviewsSectionProps> = () => {
  const [filter, setFilter] = useState<'all' | 'restorations' | 'gutters'>('all');

  const filteredReviews = CUSTOMER_REVIEWS.filter((review) => {
    if (filter === 'restorations') {
      return review.serviceMentioned?.toLowerCase().includes('roof');
    }
    if (filter === 'gutters') {
      return review.serviceMentioned?.toLowerCase().includes('gutter');
    }
    return true;
  });

  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-[#080808] border-b border-[#D4AF37]/20">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge and Trust Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold uppercase tracking-wider">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Verified Customer Experiences</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Real Reviews from{' '}
              <span className="text-crown-gold-gradient">Melbourne Homeowners</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Read genuine customer feedback for Mason and the team at Crown Roof Restorations.
              Hands-on workmanship, transparent upfront pricing, and unmatched attention to detail.
            </p>
          </div>

          {/* Aggregate Rating Box */}
          <div className="shrink-0 bg-black/80 border border-[#D4AF37]/35 rounded-2xl p-4 sm:p-5 flex items-center gap-5 backdrop-blur-md shadow-xl">
            <div className="text-center border-r border-[#D4AF37]/25 pr-5">
              <span className="text-3xl sm:text-4xl font-extrabold text-white leading-none block">
                {BUSINESS_INFO.rating}
              </span>
              <div className="flex text-[#D4AF37] justify-center mt-1.5 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-[11px] text-neutral-400 mt-1 block">Google Rating</span>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% 5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Owner-Operated Quality</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>10-Year Workmanship Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#D4AF37] text-black shadow-md'
                : 'bg-black/60 text-neutral-300 hover:text-white border border-neutral-800'
            }`}
          >
            All Reviews ({CUSTOMER_REVIEWS.length})
          </button>
          <button
            onClick={() => setFilter('restorations')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'restorations'
                ? 'bg-[#D4AF37] text-black shadow-md'
                : 'bg-black/60 text-neutral-300 hover:text-white border border-neutral-800'
            }`}
          >
            Roof Restorations
          </button>
          <button
            onClick={() => setFilter('gutters')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'gutters'
                ? 'bg-[#D4AF37] text-black shadow-md'
                : 'bg-black/60 text-neutral-300 hover:text-white border border-neutral-800'
            }`}
          >
            Gutters & Maintenance
          </button>
        </div>

        {/* Reviews Grid (without replies as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const initial = review.author.charAt(0);
            return (
              <div
                key={review.id}
                className="bg-[#0F0F0F] rounded-2xl p-6 border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar Circle with Gold border */}
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8C6B14] p-0.5 shrink-0 shadow-md">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white font-bold text-base">
                          {initial}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-[#FDE79D] transition-colors">
                            {review.author}
                          </h4>
                        </div>
                        <p className="text-[11px] text-neutral-400">
                          {review.reviewCount}
                          {review.date && (
                            <>
                              <span className="mx-1">•</span>
                              <span>{review.date}</span>
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Badge if Local Guide or Verified */}
                    {review.badge && (
                      <span className="text-[10px] font-semibold text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/30">
                        {review.badge}
                      </span>
                    )}
                  </div>

                  {/* Rating Stars & Highlights */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-[#D4AF37] gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                      ))}
                    </div>

                    {review.highlight && (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        ✓ {review.highlight}
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-neutral-200 text-sm leading-relaxed whitespace-pre-line">
                    "{review.content}"
                  </p>
                </div>

                {/* Footer details: Service Tag and Likes */}
                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <span className="text-[#D4AF37] font-medium text-[11px] bg-[#D4AF37]/10 px-2 py-0.5 rounded">
                    {review.serviceMentioned || 'Roof Service'}
                  </span>

                  {review.likesCount && review.likesCount > 0 && (
                    <div className="flex items-center gap-1 text-neutral-300 text-xs bg-neutral-900 px-2 py-1 rounded-full border border-neutral-800">
                      <span className="text-rose-500 text-xs">❤️</span>
                      <span>{review.likesCount}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121212] via-black to-[#121212] border border-[#D4AF37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
              Ready for Your Roof to Look Brand New?
            </h3>
            <p className="text-neutral-400 text-sm max-w-xl">
              Mason provides free on-site inspections, upfront itemised quotes, and our 10-Year Workmanship Warranty.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="px-7 py-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm tracking-wide shadow-xl shadow-[#D4AF37]/20 flex items-center gap-2 cursor-pointer transition-all active:scale-95 border border-[#FDE79D]/40"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>CALL MASON FOR A QUOTE: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
