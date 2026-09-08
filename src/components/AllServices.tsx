import React, { useState, useMemo } from 'react';
import { ALL_SERVICES } from '../data/roofingData';
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
  Filter,
} from 'lucide-react';

interface AllServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const AllServices: React.FC<AllServicesProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tile-tin' | 'exterior'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

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
    <section id="all-services" className="py-20 bg-black relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FDE79D] text-xs font-bold tracking-widest uppercase">
            <span>Complete Scope of Capabilities</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Our Complete Roofing & Exterior Services
          </h2>
          <p className="text-neutral-400 text-base">
            From minor tile repairs and leak detection to full roof restorations, repainting, and exterior pressure washing.
          </p>
        </div>

        {/* Tab Selector and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#D4AF37]/20">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/25'
              }`}
            >
              All Services ({ALL_SERVICES.length})
            </button>

            <button
              onClick={() => setActiveTab('tile-tin')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'tile-tin'
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/25'
              }`}
            >
              Tile & Tin Roofing ({tileTinCount})
            </button>

            <button
              onClick={() => setActiveTab('exterior')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'exterior'
                  ? 'bg-crown-gold-gradient text-black font-bold shadow-md shadow-[#D4AF37]/20 border border-[#FDE79D]/40'
                  : 'bg-[#0D0D0D] text-neutral-300 hover:text-white border border-[#D4AF37]/25'
              }`}
            >
              Exterior Cleaning & Maintenance ({exteriorCount})
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all services..."
              className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
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
                  ? 'border-[#D4AF37]/60 shadow-md shadow-[#D4AF37]/10 hover:border-[#D4AF37]'
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
                <button
                  onClick={() => onOpenQuoteModal(service.name)}
                  className="w-full py-2 px-3 rounded-xl bg-[#141414] hover:bg-crown-gold-gradient hover:text-black text-neutral-200 text-xs font-semibold border border-[#D4AF37]/25 hover:border-[#FDE79D]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Quote for this Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#0D0D0D] rounded-xl border border-[#D4AF37]/20">
            <p className="text-neutral-400 text-sm mb-3">No services found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-[#D4AF37] text-xs font-bold underline"
            >
              Reset filters to see all services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
