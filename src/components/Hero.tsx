import React from 'react';
import { ArrowRight, Flame, Shield, Zap, Compass } from 'lucide-react';

interface HeroProps {
  onOpenTrial: () => void;
  onExplorePrograms: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onExplorePrograms }) => {
  return (
    <section className="relative bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.08)] overflow-hidden">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      {/* Decorative High-Voltage Ambience Glow */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#D4FF00]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-20 relative z-10">
        {/* Top Telemetry / Status Pill */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121214] border border-[rgba(255,255,255,0.12)]">
            <span className="w-2 h-2 bg-[#D4FF00]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.1em] text-[#D4FF00] uppercase font-semibold">
              KINETIC PERFORMANCE FACILITY // DISTRICT 07
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono-tech text-[#8E8E93] tracking-wider uppercase px-2 py-1">
            <span>[ SYSTEM ID: PULSE-2026 ]</span>
          </div>
        </div>

        {/* Monolithic Main Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Monolithic Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-display font-extrabold text-[54px] sm:text-[76px] lg:text-[96px] leading-[0.92] tracking-tight uppercase text-[#F4F4F5] mb-6">
              <span>UNCOMPROMISING</span>
              <br />
              <span className="text-[#D4FF00] drop-shadow-[0_0_25px_rgba(212,255,0,0.2)]">
                STRENGTH.
              </span>
              <br />
              <span className="text-white">PRECISION DRIVE.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#c8c5cc] max-w-[540px] leading-relaxed mb-8">
              Pulse Athletics is an elite urban training ground engineered for dedicated athletes. 
              We fuse Olympic barbell kinematics, calibrated ergo intervals, and thermal contrast recovery 
              into an uncompromising daily discipline.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenTrial}
                className="px-8 py-4 bg-[#D4FF00] text-[#0B0B0C] font-sans text-sm font-bold tracking-[0.05em] uppercase transition-all duration-150 hover:bg-[#F4F4F5] flex items-center justify-center gap-3 active:translate-y-0.5"
                style={{ borderRadius: 0 }}
              >
                <span>BOOK TRIAL SESSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="px-8 py-4 bg-transparent border border-[rgba(255,255,255,0.2)] text-[#F4F4F5] font-sans text-sm font-bold tracking-[0.05em] uppercase transition-all duration-150 hover:border-[#D4FF00] hover:text-[#D4FF00] flex items-center justify-center gap-2"
                style={{ borderRadius: 0 }}
              >
                <span>EXPLORE 4 ZONES</span>
                <Compass className="w-4 h-4" />
              </button>
            </div>

            {/* Micro Feature Bullet Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4FF00] shrink-0" />
                <span className="text-[11px] font-mono-tech tracking-wider text-[#8E8E93] uppercase">
                  ELEIKO COMPETITION SPEC
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#D4FF00] shrink-0" />
                <span className="text-[11px] font-mono-tech tracking-wider text-[#8E8E93] uppercase">
                  VO2 MAX ERG MATRIX
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#D4FF00] shrink-0" />
                <span className="text-[11px] font-mono-tech tracking-wider text-[#8E8E93] uppercase">
                  3°C CONTRAST PLUNGE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Contrast Visual Media Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Visual Container with Sharp Hairline Borders & HUD Accents */}
            <div className="relative bg-[#121214] border border-[rgba(255,255,255,0.12)] p-2">
              {/* Corner crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4FF00] z-20"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4FF00] z-20"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4FF00] z-20"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4FF00] z-20"></div>

              {/* Main Image Frame with contrast gradient */}
              <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=85"
                  alt="Pulse Athletics athlete training on ergo engine"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Live Session Telemetry Overlay HUD */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                  <div className="bg-[#0B0B0C]/85 backdrop-blur-sm border border-[rgba(255,255,255,0.15)] px-3 py-1.5">
                    <span className="text-[10px] font-mono-tech tracking-wider text-[#D4FF00] uppercase block">
                      ZONE 01 ACTIVE NOW
                    </span>
                    <span className="font-display font-bold text-lg text-white leading-tight uppercase">
                      HYBRID METCON 06:00
                    </span>
                  </div>

                  <div className="bg-[#0B0B0C]/85 backdrop-blur-sm border border-[#D4FF00]/40 px-3 py-1.5 text-right">
                    <span className="text-[10px] font-mono-tech tracking-wider text-[#8E8E93] uppercase block">
                      HEART RATE TARGET
                    </span>
                    <span className="font-display font-extrabold text-xl text-[#D4FF00] leading-tight">
                      168 BPM
                    </span>
                  </div>
                </div>

                {/* Bottom HUD Bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#121214]/90 backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-3">
                  <div className="flex justify-between items-center mb-1.5 text-[11px] font-mono-tech">
                    <span className="text-[#8E8E93] uppercase">EFFORT COEFFICIENT</span>
                    <span className="text-[#D4FF00] font-semibold">92% ZONE 4 THRESHOLD</span>
                  </div>
                  {/* Segmented Hairline Bar */}
                  <div className="grid grid-cols-10 gap-1 h-1.5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx) => (
                      <div
                        key={idx}
                        className={`h-full ${
                          idx <= 9 ? 'bg-[#D4FF00]' : 'bg-[rgba(255,255,255,0.1)]'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Telemetry Stat-Mono Ticker Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-l border-[rgba(255,255,255,0.12)] pl-4">
            <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#F4F4F5] tracking-tight block leading-none">
              04 <span className="text-[#D4FF00] text-3xl">ZONES</span>
            </span>
            <span className="text-[11px] font-mono-tech tracking-wider text-[#8E8E93] uppercase mt-2 block">
              Strength, Engine, Hypertrophy, Recovery
            </span>
          </div>

          <div className="border-l border-[rgba(255,255,255,0.12)] pl-4">
            <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#D4FF00] tracking-tight block leading-none">
              24/7
            </span>
            <span className="text-[11px] font-mono-tech tracking-wider text-[#8E8E93] uppercase mt-2 block">
              Biometric Keycard Architecture
            </span>
          </div>

          <div className="border-l border-[rgba(255,255,255,0.12)] pl-4">
            <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#F4F4F5] tracking-tight block leading-none">
              160+ <span className="text-[#8E8E93] text-2xl font-bold">BPM</span>
            </span>
            <span className="text-[11px] font-mono-tech tracking-wider text-[#8E8E93] uppercase mt-2 block">
              High-Threshold Anaerobic Peaks
            </span>
          </div>

          <div className="border-l border-[rgba(255,255,255,0.12)] pl-4">
            <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#F4F4F5] tracking-tight block leading-none">
              12 <span className="text-[#D4FF00] text-3xl">COACHES</span>
            </span>
            <span className="text-[11px] font-mono-tech tracking-wider text-[#8E8E93] uppercase mt-2 block">
              Certified Olympic & CSCS Directors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
