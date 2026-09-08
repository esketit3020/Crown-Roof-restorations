import React from 'react';
import logoAsset from '../assets/images/crown_roof_logo_1788857875783.jpg';

interface CrownLogoProps {
  variant?: 'full' | 'compact' | 'horizontal' | 'mark';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const CrownLogo: React.FC<CrownLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showText = true,
}) => {
  const logoUrl = logoAsset || '/crown-logo.jpg';

  // Dimension mapping for various placements
  const sizeMap = {
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-32',
  };

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37]/30 via-[#FDE79D]/20 to-[#D4AF37]/30 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden bg-black border border-[#D4AF37]/40 p-2 shadow-2xl">
            <img
              src={logoUrl}
              alt="Crown Roof Restoration Official Logo"
              className="w-full max-w-[320px] sm:max-w-[380px] h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'mark') {
    return (
      <div className={`relative flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
        <img
          src={logoUrl}
          alt="Crown Roof Restoration Crest"
          className="h-full w-auto object-contain rounded-lg drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar and Header)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Logo Badge */}
      <div className={`relative shrink-0 ${sizeMap[size]} overflow-hidden rounded-xl bg-black border border-[#D4AF37]/40 p-1 shadow-lg shadow-black flex items-center justify-center`}>
        <img
          src={logoUrl}
          alt="Crown Roof Restoration"
          className="h-full w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="font-cinzel text-xl sm:text-2xl md:text-2xl font-extrabold tracking-[0.08em] text-crown-silver-gradient drop-shadow-md leading-none">
              CROWN
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="h-[1px] w-3 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            <span className="font-cinzel text-[9px] sm:text-[10px] font-bold tracking-[0.28em] text-[#D4AF37] uppercase leading-none">
              Roof Restoration
            </span>
            <div className="h-[1px] w-3 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
          </div>
        </div>
      )}
    </div>
  );
};
