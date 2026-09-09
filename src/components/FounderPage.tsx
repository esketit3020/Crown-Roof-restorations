import React from 'react';
import { Phone, Award, ShieldCheck, Hammer, Sparkles, CheckCircle2, ArrowLeft, ArrowRight, HeartHandshake, UserCheck, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface FounderPageProps {
  onNavigateHome: () => void;
  onNavigateToServices?: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({
  onNavigateHome,
  onNavigateToServices,
}) => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Top Breadcrumbs & Back Navigation */}
      <div className="border-b border-[#D4AF37]/20 bg-[#080808]/80 backdrop-blur-md sticky top-[69px] z-30 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 hover:text-[#FDE79D] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-[#D4AF37] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-[#FDE79D] font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Founder & Master Tiler</span>
          </div>
        </div>
      </div>

      {/* Main Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-[#D4AF37]/20">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#FDE79D] text-xs font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Story Behind Crown Roof Restorations</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            Meet Mason — <br className="hidden sm:inline" />
            <span className="text-crown-gold-gradient">
              Founder of Crown Roof Restorations
            </span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            Built on a lifetime of trade passion, hands-on apprenticeship, and an unwavering commitment to treating every customer&apos;s home as if it were our own.
          </p>

          {/* Key Milestones Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/25 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#FDE79D] font-cinzel">12</span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold block mt-1">
                Started on roofs with Dad
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/25 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#FDE79D] font-cinzel">14</span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold block mt-1">
                Began Apprenticeship
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/25 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#FDE79D] font-cinzel">18</span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold block mt-1">
                Founded Crown Roofs
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#0D0D0D] border border-[#D4AF37]/25 shadow-md text-center">
              <span className="block text-2xl sm:text-3xl font-extrabold text-[#FDE79D] font-cinzel">100%</span>
              <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold block mt-1">
                5-Star Google Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Editorial Story Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Story Text (Main Column) */}
            <div className="lg:col-span-8 space-y-8 text-neutral-200 text-base sm:text-lg leading-relaxed">
              {/* Introduction */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/35 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/20 to-transparent pointer-events-none" />
                <p className="font-cinzel text-xl sm:text-2xl text-[#FDE79D] font-bold leading-snug">
                  &ldquo;My name is Mason Perri, founder of Crown Roof Restorations.&rdquo;
                </p>
              </div>

              {/* Paragraph 1 */}
              <p>
                Roofing has been a part of my life for as long as I can remember. My dad is a roof tiler, and from the age of 12, I spent almost every weekend working alongside him. I loved every second of it.
              </p>

              {/* Paragraph 2 */}
              <p>
                It didn’t take long for me to realise that roofing was what I wanted to do. I found a real sense of satisfaction in taking an old, tired-looking roof and restoring it back to life — making it look great, fixing the problems and knowing I had made a real difference to someone’s home.
              </p>

              {/* Paragraph 3 */}
              <div className="pl-5 border-l-2 border-[#D4AF37] my-6 space-y-2">
                <p className="text-white font-medium italic">
                  School was never where I felt I belonged. At 14, I made the decision to leave school so I could begin my roof tiling apprenticeship and pursue the career I knew I wanted. It was one of the best decisions I’ve ever made.
                </p>
              </div>

              {/* Paragraph 4 */}
              <p>
                From there, I dedicated myself to learning the trade, gaining experience and developing my skills. At just 18 years old, I completed my apprenticeship and took the next step by starting my own business — Crown Roof Restorations.
              </p>

              {/* Paragraph 5 */}
              <p>
                I started Crown roof restorations because I wanted to build a roofing business that I could be proud of. A business built around quality workmanship, attention to detail and treating every customer’s home as if it were my own.
              </p>

              {/* Paragraph 6 & 7 */}
              <p>
                I genuinely love what I do, and every roof we restore is another opportunity to take pride in my work and give a customer a roof they can be proud of.
              </p>

              <p className="text-white font-semibold">
                This is more than just a job to me — roofing is what I chose to do, and I’m proud to call it my career.
              </p>

              {/* Pull-Quote Banner: My name. My reputation. My future. */}
              <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-[#1A1406] via-[#0E0E0E] to-black border-2 border-[#D4AF37]/60 shadow-2xl relative">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block">
                    The Crown Guarantee
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FDE79D] tracking-tight">
                    My name. My reputation. My future.
                  </h3>
                  <p className="text-neutral-200 text-base sm:text-lg leading-relaxed pt-2">
                    Crown Roof Restorations is my name, my reputation and my future — and I want every roof we restore to reflect that.
                  </p>
                  <div className="pt-6 border-t border-[#D4AF37]/30 flex items-center justify-between">
                    <div>
                      <span className="font-cinzel font-bold text-white text-lg block">Mason Perri</span>
                      <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase block">
                        Founder | Crown Roof Restorations
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar: Trust Credentials & Direct Mason Contact */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Profile Card */}
              <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/30 shadow-xl space-y-5">
                <div className="space-y-1 pb-4 border-b border-[#D4AF37]/20">
                  <span className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-widest block">
                    Owner-Operated
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white">Mason Perri</h3>
                  <p className="text-xs text-neutral-400">Master Roof Tiler & Business Founder</p>
                </div>

                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Direct phone line with Mason on every job</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>On-site supervision & hands-on workmanship</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>10-Year Workmanship Warranty backed by pride</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>Free on-site roof inspection & honest assessment</span>
                  </div>
                </div>

                {/* Direct Call CTA */}
                <div className="pt-3 space-y-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                    className="w-full py-3.5 px-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm tracking-wide shadow-lg shadow-[#D4AF37]/25 flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#FDE79D]/50 active:scale-95"
                  >
                    <Phone className="w-4 h-4 fill-black" />
                    <span>CALL MASON DIRECTLY</span>
                  </a>
                  <p className="text-[11px] text-center text-neutral-400">
                    Direct line: {BUSINESS_INFO.phone}
                  </p>
                </div>
              </div>

              {/* Company Philosophy Card */}
              <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#D4AF37]/25 shadow-lg space-y-4">
                <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>The Crown Standards</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span><strong>Quality Products Only:</strong> Premium flexible pointing compounds, heat-reflective coatings, and durable valley irons.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span><strong>No Pushy Salesmen:</strong> You speak with a qualified roof tiler who knows the trade inside out.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span><strong>Zero Shortcuts:</strong> Full pressure cleaning, re-bedding where needed, and multi-coat protective sealing.</span>
                  </li>
                </ul>

                {onNavigateToServices && (
                  <button
                    onClick={onNavigateToServices}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] text-white text-xs font-semibold border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#080808] border-t border-[#D4AF37]/25">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
            <HeartHandshake className="w-6 h-6" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Give Your Roof the Crown Treatment?
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto">
            Experience the difference of working with a tradesman who puts his name and future behind every roof. Contact Mason today for a free, honest on-site quote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm tracking-wide shadow-xl shadow-[#D4AF37]/25 border border-[#FDE79D]/50 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>CALL MASON FOR A FREE QUOTE</span>
            </a>

            <button
              onClick={onNavigateHome}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] text-white font-bold text-sm border border-[#D4AF37]/35 hover:border-[#D4AF37] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Return to Homepage</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
