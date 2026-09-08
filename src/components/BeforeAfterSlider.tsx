import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Roof before restoration',
  afterAlt = 'Roof after Crown restoration',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Interactive Slider Container */}
      <div
        id="before-after-slider-container"
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Interactive roof restoration before and after comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setIsDragging(false)}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl select-none touch-none cursor-ew-resize border border-[#D4AF37]/35 shadow-2xl bg-black focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      >
        {/* Underlayer: BEFORE Image (Full width background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={beforeImage}
            alt={beforeAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
          {/* Subtle dark gradient overlay to ensure text badges pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Overlayer: AFTER Image (Clipped dynamically based on slider position) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={afterImage}
            alt={afterAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Visual Labels */}
        {/* BEFORE Label on the Right/Under */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-3 py-1.5 rounded-lg bg-black/85 text-neutral-300 font-extrabold text-xs tracking-wider border border-neutral-700 shadow-lg backdrop-blur-md">
            BEFORE
          </span>
        </div>

        {/* AFTER Label on the Left/Over */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-crown-gold-gradient text-black font-extrabold text-xs tracking-wider border border-[#FDE79D]/50 shadow-lg backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>AFTER (THE CROWN FINISH)</span>
          </span>
        </div>

        {/* Vertical Divider Line & Draggable Gold Handle */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none -translate-x-1/2 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical gold glowing dividing line */}
          <div className="w-[3px] h-full bg-gradient-to-b from-[#FDE79D] via-[#D4AF37] to-[#8C6D1F] shadow-[0_0_12px_rgba(212,175,55,0.7)]" />

          {/* Central Handle Button */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-crown-gold-gradient text-black border-2 border-white shadow-[0_4px_20px_rgba(0,0,0,0.8)] transition-transform duration-100 ${
              isDragging ? 'scale-110 shadow-[0_0_20px_rgba(212,175,55,0.9)]' : 'hover:scale-105'
            }`}
          >
            <ChevronsLeftRight className="w-5 h-5 text-black" />
          </div>

          {/* Floating "Drag" instruction helper on hover/idle */}
          {!isDragging && (
            <div className="absolute bottom-4 -translate-x-1/2 left-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-black/90 text-[#FDE79D] border border-[#D4AF37]/50 text-[10px] font-bold uppercase tracking-widest shadow backdrop-blur-sm pointer-events-none animate-pulse">
              Drag Slider
            </div>
          )}
        </div>
      </div>

      {/* Interactive Controls & Preset Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        {/* Quick View Presets */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setSliderPosition(0)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              sliderPosition === 0
                ? 'bg-white text-black shadow'
                : 'bg-[#141414] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            100% Before
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(50)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              sliderPosition === 50
                ? 'bg-[#D4AF37] text-black shadow font-extrabold'
                : 'bg-[#141414] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            50/50 Split
          </button>
          <button
            type="button"
            onClick={() => setSliderPosition(100)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              sliderPosition === 100
                ? 'bg-crown-gold-gradient text-black shadow border border-[#FDE79D]/40'
                : 'bg-[#141414] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            100% After
          </button>
        </div>

        {/* Current Position Percentage Readout */}
        <div className="text-xs text-neutral-400 flex items-center gap-2">
          <span className="font-mono text-[11px] text-neutral-300">
            {Math.round(sliderPosition)}% After / {100 - Math.round(sliderPosition)}% Before
          </span>
        </div>
      </div>
    </div>
  );
};
