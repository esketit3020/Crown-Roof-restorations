import React, { useState, useMemo, useEffect } from 'react';
import { ALL_SERVICES, BUSINESS_INFO } from '../data/roofingData';
import { ServiceItem } from '../types';
import {
  Crown,
  Hammer,
  Droplets,
  Paintbrush,
  Layers,
  Shield,
  Grid,
  Zap,
  Flame,
  Wind,
  Compass,
  Home,
  FileCheck,
  Clock,
  Layout,
  RotateCw,
  Waves,
  ArrowDownCircle,
  Sun,
  Sparkles,
  Gauge,
  Truck,
  CheckCircle2,
  Search,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  CheckCircle,
  Phone,
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
  onNavigateHome: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tile-tin' | 'exterior'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const getIcon = (iconName: string) => {
    const iconProps = { className: 'w-5 h-5 text-[#D4AF37] shrink-0' };
    switch (iconName) {
      case 'Crown':
        return <Crown {...iconProps} />;
      case 'Hammer':
        return <Hammer {...iconProps} />;
      case 'Droplets':
        return <Droplets {...iconProps} />;
      case 'Paintbrush':
        return <Paintbrush {...iconProps} />;
      case 'Layers':
        return <Layers {...iconProps} />;
      case 'Shield':
        return <Shield {...iconProps} />;
      case 'Grid':
        return <Grid {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      case 'Flame':
        return <Flame {...iconProps} />;
      case 'Wind':
        return <Wind {...iconProps} />;
      case 'Compass':
        return <Compass {...iconProps} />;
      case 'Home':
        return <Home {...iconProps} />;
      case 'FileCheck':
        return <FileCheck {...iconProps} />;
      case 'Clock':
        return <Clock {...iconProps} />;
      case 'Layout':
        return <Layout {...iconProps} />;
      case 'RotateCw':
        return <RotateCw {...iconProps} />;
      case 'Waves':
        return <Waves {...iconProps} />;
      case 'ArrowDownCircle':
        return <ArrowDownCircle {...iconProps} />;
      case 'Sun':
        return <Sun {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      case 'Gauge':
        return <Gauge {...iconProps} />;
      case 'Truck':
        return <Truck {...iconProps} />;
      default:
        return <CheckCircle2 {...iconProps} />;
    }
  };

  const filteredServices = useMemo(() => {
    return ALL_SERVICES.filter((service) => {
      const matchesTab = activeTab === 'all' || service.category === activeTab;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const tileTinCount = ALL_SERVICES.filter((s) => s.category === 'tile-tin').length;
  const exteriorCount = ALL_SERVICES.filter((s) => s.category === 'exterior').length;

  return (
    <div className="bg-black text-white min-h-screen pb-24">
      {/* Top Breadcrumb Header Bar */}
      <div className="border-b border-[#D4AF37]/20 bg-[#0A0A0A] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center gap-2 text-xs text-neutral-400">
            <button
              onClick={onNavigateHome}
              className="text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Home</span>
            </button>
            <span className="text-neutral-600">/</span>
            <span className="text-[#FDE79D] font-semibold">Full Services Directory</span>
          </nav>

          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-[#FDE79D] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Page Hero Banner */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-[#D4AF37]/20 bg-gradient-to-b from-black via-[#0D0D0D] to-black">
        {/* Subtle Ambient Radial Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#D4AF37]/15 to-transparent blur-3xl pointer-events-none opacity-60"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Complete Scope of Capabilities & Certified Solutions</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Full Services Directory
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every roofing repair, full tile and tin restoration, expert leak detection, repointing, guttering, and exterior pressure washing service we deliver across Melbourne.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-300">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black border border-[#D4AF37]/30">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>10-Year Workmanship Warranty</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black border border-[#D4AF37]/30">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Zero Job Exclusions</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black border border-[#D4AF37]/30">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Upfront Itemized Pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Listing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#D4AF37]/20">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/25'
              }`}
            >
              All Services
            </button>

            <button
              onClick={() => setActiveTab('tile-tin')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'tile-tin'
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/25'
              }`}
            >
              Tile & Tin Roofing
            </button>

            <button
              onClick={() => setActiveTab('exterior')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'exterior'
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/25'
              }`}
            >
              Exterior Cleaning & Maintenance
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, issue, or keyword..."
              className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl pl-9 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-xl p-5 bg-[#0D0D0D] border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                service.isPriority
                  ? 'border-[#D4AF37]/60 shadow-lg shadow-[#D4AF37]/10 hover:border-[#D4AF37]'
                  : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-black border border-[#D4AF37]/30 group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  {service.isPriority ? (
                    <span className="text-[10px] font-bold text-[#FDE79D] bg-[#D4AF37]/15 px-2 py-0.5 rounded border border-[#D4AF37]/35 uppercase tracking-wider">
                      Priority Focus
                    </span>
                  ) : (
                    <span className="text-[10px] text-neutral-400 bg-[#141414] px-2 py-0.5 rounded border border-neutral-800">
                      {service.category === 'tile-tin' ? 'Tile & Tin' : 'Exterior'}
                    </span>
                  )}
                </div>

                {/* Service Name */}
                <h3 className="font-cinzel text-base font-bold text-white mb-1 group-hover:text-[#FDE79D] transition-colors">
                  {service.name}
                </h3>

                {/* Tagline */}
                {service.tagline && (
                  <p className="text-[11px] text-[#D4AF37] font-medium mb-2 italic">
                    {service.tagline}
                  </p>
                )}

                {/* Description */}
                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                {service.details && (
                  <div className="space-y-1.5 mb-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></span>
                        <span className="truncate">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-neutral-800 mt-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#141414] hover:bg-crown-gold-gradient hover:text-black text-neutral-200 text-xs font-semibold border border-[#D4AF37]/25 hover:border-[#FDE79D]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Call to Book</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#0D0D0D] rounded-xl border border-[#D4AF37]/20 space-y-3">
            <p className="text-neutral-400 text-sm">No services found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-[#D4AF37] text-xs font-bold underline cursor-pointer"
            >
              Reset filters to see all services
            </button>
          </div>
        )}

        {/* Bottom Assessment & Consultation Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#D4AF37]/15 via-[#141414] to-[#D4AF37]/15 border border-[#D4AF37]/45 p-8 text-center shadow-xl space-y-4">
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
            Need Multiple Services or a Combined Package?
          </h3>
          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We routinely combine tile repointing, high-pressure washing, ridge cap rebedding, and exterior repainting into a unified, discounted restoration package. Contact our team for an itemized breakdown.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm shadow-xl shadow-[#D4AF37]/20 active:scale-95 transition-all flex items-center justify-center gap-2 border border-[#FDE79D]/40"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call Mason for Free Roof Assessment</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
