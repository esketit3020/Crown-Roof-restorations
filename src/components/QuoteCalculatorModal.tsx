import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, ArrowRight, AlertTriangle, Home, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, ALL_SERVICES } from '../data/roofingData';
import { CrownLogo } from './CrownLogo';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [roofType, setRoofType] = useState('Concrete Tile');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertyType, setPropertyType] = useState('Residential Home');
  const [urgency, setUrgency] = useState('Standard Inspection');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  // Sync preselected service when opened
  useEffect(() => {
    if (preselectedService) {
      setSelectedServices([preselectedService]);
    } else {
      setSelectedServices(['Full Roof Restorations']);
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  const toggleService = (name: string) => {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  const roofTypes = [
    'Concrete Tile',
    'Terracotta Tile',
    'Tin / Corrugated Iron',
    'Colorbond Metal',
    'Flat Metal / Klip-Lok',
    'Not Sure / Mixed',
  ];

  const propertyTypes = [
    'Residential Home',
    'Commercial Property',
    'Urgent Leak Repair',
    'High-End Build',
  ];

  const urgencyLevels = [
    { label: 'Urgent / Active Leak (Within 24 hrs)', value: 'Urgent Leak', isAlert: true },
    { label: 'Prompt (Within 2-3 days)', value: 'Prompt', isAlert: false },
    { label: 'Standard Inspection (This week)', value: 'Standard Inspection', isAlert: false },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0D0D0D] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-black p-5 sm:p-6 border-b border-[#D4AF37]/20 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <CrownLogo variant="mark" size="md" />
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Free Roof Assessment & Quote</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-tight">
                The Crown Roof Estimate
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-xl bg-[#141414] text-neutral-400 hover:text-white hover:bg-[#1F1F1F] border border-[#D4AF37]/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 text-[#FDE79D] border border-[#D4AF37]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#D4AF37]/10">
                <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
              </div>

              <div className="space-y-2">
                <h4 className="font-cinzel text-2xl font-bold text-white">
                  Assessment Request Received!
                </h4>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName || 'valued homeowner'}</strong>. Our senior roofing inspector will contact you shortly at{' '}
                  <strong className="text-[#FDE79D]">{formData.phone || 'your phone'}</strong> to confirm your free inspection time.
                </p>
              </div>

              {/* Upfront Guarantee summary from FAQ #1 */}
              <div className="bg-black rounded-xl p-4 border border-[#D4AF37]/30 text-left max-w-md mx-auto text-xs space-y-2 text-neutral-300">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  Our Upfront Quote Promise:
                </p>
                <p className="italic text-neutral-400">
                  "Every roof is different, so we provide a free inspection and quote based on the size, condition and work required. Our quotes are upfront and clearly outline what is included, including labour and materials."
                </p>
                <div className="pt-2 text-[11px] text-[#FDE79D] font-medium">
                  ✓ Backed by our 10-Year Workmanship Warranty
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-bold text-sm cursor-pointer border border-[#FDE79D]/40"
                >
                  Return to Website
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#141414] hover:bg-[#1F1F1F] text-white font-semibold text-sm border border-[#D4AF37]/30 hover:border-[#D4AF37]/60"
                >
                  Call Now: {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4 text-xs font-semibold text-neutral-400">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`flex items-center gap-1.5 ${step === 1 ? 'text-[#FDE79D] font-bold' : ''}`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-center text-[10px]">1</span>
                  <span>Roof & Property</span>
                </button>
                <span className="text-[#D4AF37]/40">→</span>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`flex items-center gap-1.5 ${step === 2 ? 'text-[#FDE79D] font-bold' : ''}`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-center text-[10px]">2</span>
                  <span>Services Needed</span>
                </button>
                <span className="text-[#D4AF37]/40">→</span>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className={`flex items-center gap-1.5 ${step === 3 ? 'text-[#FDE79D] font-bold' : ''}`}
                >
                  <span className="w-5 h-5 rounded-full bg-[#141414] border border-[#D4AF37]/30 flex items-center justify-center text-[10px]">3</span>
                  <span>Contact Details</span>
                </button>
              </div>

              {/* STEP 1: Roof & Property */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                      What type of roof do you have?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {roofTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setRoofType(type)}
                          className={`p-3 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                            roofType === type
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#FDE79D] shadow-sm'
                              : 'bg-black border-[#D4AF37]/20 text-neutral-300 hover:border-[#D4AF37]/50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                      Property Category
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {propertyTypes.map((prop) => (
                        <button
                          key={prop}
                          type="button"
                          onClick={() => setPropertyType(prop)}
                          className={`p-3 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                            propertyType === prop
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#FDE79D]'
                              : 'bg-black border-[#D4AF37]/20 text-neutral-300 hover:border-[#D4AF37]/50'
                          }`}
                        >
                          {prop}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 uppercase tracking-wider mb-2">
                      Urgency Level
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {urgencyLevels.map((lvl) => (
                        <button
                          key={lvl.value}
                          type="button"
                          onClick={() => setUrgency(lvl.value)}
                          className={`p-2.5 rounded-xl text-xs text-left border transition-all cursor-pointer ${
                            urgency === lvl.value
                              ? 'bg-crown-gold-gradient text-black font-bold border-[#FDE79D]/40'
                              : 'bg-black border-[#D4AF37]/20 text-neutral-300 hover:border-[#D4AF37]/50'
                          }`}
                        >
                          {lvl.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer border border-[#FDE79D]/40"
                    >
                      <span>Next: Select Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Services Selection */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-neutral-200 uppercase tracking-wider">
                      Select required services (Multiple allowed):
                    </label>
                    <span className="text-[11px] text-[#FDE79D] font-semibold">
                      {selectedServices.length} selected
                    </span>
                  </div>

                  <div className="max-h-60 overflow-y-auto pr-1 space-y-2">
                    {ALL_SERVICES.map((s) => {
                      const isSelected = selectedServices.includes(s.name);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.name)}
                          className={`w-full p-2.5 rounded-xl text-left text-xs border flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                              : 'bg-black border-[#D4AF37]/20 text-neutral-300 hover:border-[#D4AF37]/50'
                          }`}
                        >
                          <div>
                            <span className="font-semibold">{s.name}</span>
                            <span className="text-[10px] text-neutral-400 ml-2">({s.category === 'tile-tin' ? 'Tile & Tin' : 'Exterior'})</span>
                          </div>
                          {isSelected && <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl bg-black border border-[#D4AF37]/20 text-neutral-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer border border-[#FDE79D]/40"
                    >
                      <span>Next: Contact Information</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-black border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0400 000 000"
                        className="w-full bg-black border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-black border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">
                        Property Suburb / Address *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="e.g. Brighton VIC 3186"
                        className="w-full bg-black border border-[#D4AF37]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">
                      Notes or description of roof condition (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Broken tiles along ridge line, roof leaking in master bedroom during heavy rain..."
                      className="w-full bg-black border border-[#D4AF37]/30 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                    ></textarea>
                  </div>

                  {/* Summary badge */}
                  <div className="p-3 bg-black rounded-xl border border-[#D4AF37]/20 text-xs text-neutral-400 space-y-1">
                    <div className="flex justify-between">
                      <span>Roof: <strong className="text-white">{roofType}</strong></span>
                      <span>Category: <strong className="text-white">{propertyType}</strong></span>
                    </div>
                    <div className="text-[11px] text-[#FDE79D]">
                      Warranty: 10-Year Workmanship Guarantee on applicable restorations
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded-xl bg-black border border-[#D4AF37]/20 text-neutral-300 hover:text-white text-xs font-semibold cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl bg-crown-gold-gradient hover:bg-crown-gold-hover text-black font-extrabold text-sm shadow-lg shadow-[#D4AF37]/25 hover:brightness-105 active:scale-95 transition-all cursor-pointer border border-[#FDE79D]/40"
                    >
                      Request Free Assessment & Quote
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
