import React, { useState } from 'react';
import { TRAINING_PROGRAMS } from '../data/pulseData';
import { TrainingProgram } from '../types';
import { ArrowRight, Clock, Users, Target, Activity, Check } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgramForTrial: (programId: string) => void;
  onOpenCurriculumModal: (program: TrainingProgram) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramForTrial,
  onOpenCurriculumModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'ZONE 01' | 'ZONE 02' | 'ZONE 03' | 'ZONE 04'>('ALL');

  const filteredPrograms = activeFilter === 'ALL'
    ? TRAINING_PROGRAMS
    : TRAINING_PROGRAMS.filter((p) => p.zone === activeFilter);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.08)] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4FF00]"></span>
              <span className="text-[11px] font-mono-tech tracking-[0.1em] text-[#D4FF00] uppercase font-semibold">
                TRAINING PROTOCOLS // 4 ZONES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F5] uppercase tracking-tight">
              PRECISION <span className="text-[#D4FF00]">PROGRAMMING</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8E8E93] max-w-xl mt-2 font-sans">
              Every training session is biomechanically structured to target distinct physiological pathways—from explosive anaerobic ATP-PC power to cellular recovery.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'ALL', label: 'ALL ZONES' },
              { id: 'ZONE 01', label: 'ZONE 01 // METCON' },
              { id: 'ZONE 02', label: 'ZONE 02 // ENGINE' },
              { id: 'ZONE 03', label: 'ZONE 03 // HYPERTROPHY' },
              { id: 'ZONE 04', label: 'ZONE 04 // RECOVERY' },
            ].map((chip) => {
              const isActive = activeFilter === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => setActiveFilter(chip.id as any)}
                  className={`px-3 py-1.5 text-[11px] font-mono-tech tracking-wider uppercase transition-all duration-150 ${
                    isActive
                      ? 'bg-[rgba(212,255,0,0.12)] text-[#D4FF00] border border-[#D4FF00]'
                      : 'bg-[#121214] text-[#8E8E93] border border-[rgba(255,255,255,0.08)] hover:text-[#F4F4F5] hover:border-[rgba(255,255,255,0.2)]'
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#121214] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.25)] transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
              style={{ borderRadius: 0 }}
            >
              {/* Optional Top Edge Accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#D4FF00] transition-colors"></div>

              <div>
                {/* Image Header with Zone Badge */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-90"></div>

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-[#0B0B0C] border border-[rgba(255,255,255,0.15)] text-[10px] font-mono-tech font-bold text-[#D4FF00] tracking-wider uppercase">
                      {program.zone}
                    </span>
                    <span className="px-2 py-0.5 bg-[#0B0B0C]/80 backdrop-blur-xs text-[10px] font-mono-tech text-[#8E8E93] uppercase">
                      LEAD: {program.coach}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono-tech text-[#c8c5cc]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#D4FF00]" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#D4FF00]" />
                      <span>CAP: {program.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#D4FF00]" />
                      <span>{program.targetHR}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-[#F4F4F5] uppercase tracking-wide group-hover:text-[#D4FF00] transition-colors mb-2">
                    {program.title}
                  </h3>
                  <p className="text-xs font-mono-tech text-[#D4FF00] uppercase tracking-wider mb-3">
                    {program.tagline}
                  </p>
                  <p className="text-sm text-[#8E8E93] leading-relaxed line-clamp-3 mb-6">
                    {program.description}
                  </p>

                  {/* Studio Heart Rate / Effort Meter Component (as specified in doc) */}
                  <div className="mb-6 p-3 bg-[#0B0B0C] border border-[rgba(255,255,255,0.06)]">
                    <div className="flex justify-between items-center text-[10px] font-mono-tech mb-2">
                      <span className="text-[#8E8E93] uppercase flex items-center gap-1">
                        <Activity className="w-3 h-3 text-[#D4FF00]" />
                        INTENSITY EFFORT COEFFICIENT
                      </span>
                      <span className="text-[#D4FF00] font-semibold">
                        LEVEL {program.intensityLevel}/5 [{program.intensityLevel === 5 ? 'MAX THRESHOLD' : program.intensityLevel === 4 ? 'HIGH OUTPUT' : 'MODERATE / RECOVERY'}]
                      </span>
                    </div>
                    {/* Hairline segment bar graphs with active fill utilizing solid #D4FF00 */}
                    <div className="grid grid-cols-5 gap-1.5 h-2">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`h-full transition-all duration-300 ${
                            level <= program.intensityLevel
                              ? 'bg-[#D4FF00]'
                              : 'bg-[rgba(255,255,255,0.08)]'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono-tech tracking-wider text-[#8E8E93] uppercase block mb-2">
                      KEY STIMULI & FOCUS:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {program.focusAreas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-[#c8c5cc]">
                          <Check className="w-3 h-3 text-[#D4FF00] shrink-0" />
                          <span className="truncate">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-0 border-t border-[rgba(255,255,255,0.06)] mt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenCurriculumModal(program)}
                  className="flex-1 py-3 px-4 bg-transparent border border-[rgba(255,255,255,0.15)] text-[#F4F4F5] text-xs font-semibold tracking-wider uppercase hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors text-center"
                  style={{ borderRadius: 0 }}
                >
                  VIEW CURRICULUM
                </button>
                <button
                  onClick={() => onSelectProgramForTrial(program.id)}
                  className="flex-1 py-3 px-4 bg-[#D4FF00] text-[#0B0B0C] text-xs font-bold tracking-wider uppercase hover:bg-[#F4F4F5] transition-colors flex items-center justify-center gap-1.5"
                  style={{ borderRadius: 0 }}
                >
                  <span>BOOK TRIAL IN ZONE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
