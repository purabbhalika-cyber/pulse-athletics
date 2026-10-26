import React, { useState } from 'react';
import { FACILITY_SPECS } from '../data/pulseData';
import { Layers, Wind, ShieldCheck, Thermometer, Radio } from 'lucide-react';

export const FacilitySection: React.FC = () => {
  const [activeZone, setActiveZone] = useState<number>(0);

  const zones = [
    {
      id: 'ZONE 01',
      title: 'THE PIT // BARBELL & METCON',
      sqft: '4,200 SQ FT',
      atmosphere: '18°C // 142 BPM AUDIO',
      specs: [
        '18x Eleiko IWF Certified Competition Barbell Racks',
        'Custom 28mm Olympic Bearing Bars & Polyurethane Bumpers',
        'Shock-absorbing 50mm vulcanized rubber impact floor',
        '8x Concept2 RowErg & Assault AirBike hybrid stations'
      ],
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'ZONE 02',
      title: 'THE ENGINE LAB // AEROBIC MATRIX',
      sqft: '3,100 SQ FT',
      atmosphere: '16°C // HIGH AIR FLOW',
      specs: [
        '24x Concept2 SkiErgs, RowErgs, and BikeErgs networked in real-time',
        'Overhead 75-inch telemetry displays showing team watts and pacing',
        'Assault Fitness Rower Pros and curved manual treadmills',
        'Direct connection to Polar & Garmin ANT+ chest straps'
      ],
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'ZONE 03',
      title: 'BIOMECHANICS & HYPERTROPHY CAVE',
      sqft: '3,800 SQ FT',
      atmosphere: '19°C // PRECISION TENSION',
      specs: [
        'Custom Hammer Strength Ground Base & Iso-Lateral plate loaded units',
        'Dual adjustable pulley columns with custom micro-loading pins',
        'Eleiko dumbbell sets ranging from 5LB to 125LB in 2.5LB increments',
        'Full range of cambered, safety squat, and hex bars'
      ],
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'ZONE 04',
      title: 'THE RECOVERY LAB // THERMAL CONTRAST',
      sqft: '2,600 SQ FT',
      atmosphere: '3°C PLUNGE / 85°C FINNISH SAUNA',
      specs: [
        '3x Commercial-grade titanium chilled plunge baths maintained strictly at 3°C',
        'Twin Finnish dry cedarwood saunas running at 85°C with volcanic rock steam',
        'Hyperice percussion massage and Normatec 3 compression lounge',
        'Filtered electrolyte hydration taps and cold brew station'
      ],
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <section id="facility" className="py-20 lg:py-28 bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.08)] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4FF00]"></span>
              <span className="text-[11px] font-mono-tech tracking-[0.1em] text-[#D4FF00] uppercase font-semibold">
                ARCHITECTURAL BLUEPRINT // DISTRICT 07
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F5] uppercase tracking-tight">
              ENGINEERED <span className="text-[#D4FF00]">INFRASTRUCTURE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8E8E93] max-w-xl mt-2 font-sans">
              13,700 square feet of acoustically decoupled, climate-calibrated training floor. Built without compromises.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono-tech text-[#8E8E93]">
            <span className="flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-[#D4FF00] animate-pulse" />
              HEPA AIR TURNOVER: 12X/HR
            </span>
          </div>
        </div>

        {/* Interactive Zone Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {zones.map((zone, idx) => (
            <button
              key={zone.id}
              onClick={() => setActiveZone(idx)}
              className={`p-4 text-left border transition-all duration-150 ${
                activeZone === idx
                  ? 'bg-[#1A1A1E] border-[#D4FF00] text-white shadow-[0_0_15px_rgba(212,255,0,0.1)]'
                  : 'bg-[#121214] border-[rgba(255,255,255,0.08)] text-[#8E8E93] hover:text-[#F4F4F5] hover:border-[rgba(255,255,255,0.2)]'
              }`}
              style={{ borderRadius: 0 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono-tech uppercase font-bold ${
                  activeZone === idx ? 'text-[#D4FF00]' : 'text-[#8E8E93]'
                }`}>
                  {zone.id}
                </span>
                <span className="text-[10px] font-mono-tech text-[#8E8E93]">
                  {zone.sqft}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#F4F4F5] uppercase truncate">
                {zone.title.split('//')[0]}
              </h3>
            </button>
          ))}
        </div>

        {/* Selected Zone Blueprint Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#121214] border border-[rgba(255,255,255,0.12)] overflow-hidden">
          {/* Media / Image Column (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[340px] bg-black">
            <img
              src={zones[activeZone].image}
              alt={zones[activeZone].title}
              className="w-full h-full object-cover grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121214]/90 hidden lg:block"></div>
            
            {/* Zone Telemetry Stamp */}
            <div className="absolute bottom-4 left-4 bg-[#0B0B0C]/90 backdrop-blur-xs border border-[rgba(255,255,255,0.15)] px-3 py-2">
              <span className="text-[10px] font-mono-tech text-[#D4FF00] uppercase block">
                ENVIRONMENTAL SENSOR
              </span>
              <span className="text-xs font-mono-tech text-white uppercase font-bold">
                {zones[activeZone].atmosphere}
              </span>
            </div>
          </div>

          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#1A1A1E] text-[10px] font-mono-tech text-[#D4FF00] border border-[rgba(255,255,255,0.1)]">
                  {zones[activeZone].id}
                </span>
                <span className="text-xs font-mono-tech text-[#8E8E93]">
                  {zones[activeZone].sqft}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F4F4F5] uppercase mb-4">
                {zones[activeZone].title}
              </h3>

              <div className="space-y-3 mb-6">
                <span className="text-[10px] font-mono-tech text-[#8E8E93] uppercase tracking-wider block">
                  TECHNICAL LOADOUT:
                </span>
                {zones[activeZone].specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#c8c5cc]">
                    <div className="w-1.5 h-1.5 bg-[#D4FF00] mt-1.5 shrink-0"></div>
                    <span className="leading-relaxed">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-xs font-mono-tech text-[#8E8E93]">
              <span className="flex items-center gap-1.5">
                <Thermometer className="w-3.5 h-3.5 text-[#D4FF00]" />
                CALIBRATED CLIMATE
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4FF00]" />
                BIOMETRIC PASS REQUIRED
              </span>
            </div>
          </div>
        </div>

        {/* Hardware Specifications Ticker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {FACILITY_SPECS.map((item, idx) => (
            <div key={idx} className="p-4 bg-[#121214] border border-[rgba(255,255,255,0.06)]">
              <div className="text-[10px] font-mono-tech text-[#D4FF00] uppercase mb-1">
                {item.zone} // {item.metric}
              </div>
              <h4 className="font-display font-bold text-lg text-white uppercase mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-[#8E8E93] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
