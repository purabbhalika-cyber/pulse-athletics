import React, { useState, useEffect } from 'react';
import { TRAINERS } from '../data/pulseData';
import { Trainer } from '../types';
import { Award, ArrowRight, X, Quote } from 'lucide-react';

interface TrainersSectionProps {
  onSelectTrainerForTrial: (trainerName: string) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onSelectTrainerForTrial }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  useEffect(() => {
    if (!selectedTrainer) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTrainer(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedTrainer]);

  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.08)] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D4FF00]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.1em] text-[#D4FF00] uppercase font-semibold">
              CADRE OF DIRECTORS // UNCOMPROMISED STANDARDS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F5] uppercase tracking-tight">
            MASTER <span className="text-[#D4FF00]">COACHING ROSTER</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E93] max-w-xl mt-2 font-sans">
            Our directors hold senior CSCS credentials, collegiate track records, and clinical biomechanics degrees. Zero generic cheerleading—only disciplined structural coaching.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-[#121214] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.25)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              style={{ borderRadius: 0 }}
            >
              {/* Electric Lime Hover Indicator Top Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#D4FF00] transition-colors z-20"></div>

              <div>
                {/* Desaturated imagery that shifts to full contrast color on card hover */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-85"></div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 bg-[#0B0B0C] border border-[rgba(255,255,255,0.15)] px-2.5 py-1 text-[10px] font-mono-tech text-[#D4FF00] tracking-wider uppercase font-semibold">
                    {trainer.experience}
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-5">
                  <span className="text-[10px] font-mono-tech text-[#D4FF00] uppercase tracking-wider block mb-1">
                    {trainer.role}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#F4F4F5] uppercase tracking-wide group-hover:text-[#D4FF00] transition-colors">
                    {trainer.name}
                  </h3>
                  
                  <p className="text-xs text-[#8E8E93] mt-2 line-clamp-2 leading-relaxed">
                    {trainer.specialty}
                  </p>

                  {/* Certifications Chip Strip */}
                  <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex flex-wrap gap-1.5">
                    {trainer.certifications.slice(0, 2).map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-[#0B0B0C] border border-[rgba(255,255,255,0.08)] text-[9px] font-mono-tech text-[#c8c5cc] uppercase tracking-wider"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedTrainer(trainer)}
                  className="w-full py-2.5 bg-transparent border border-[rgba(255,255,255,0.15)] text-[#F4F4F5] text-xs font-mono-tech font-bold tracking-wider uppercase hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors flex items-center justify-center gap-1.5 active:translate-y-0.5"
                  style={{ borderRadius: 0 }}
                >
                  <span>INSPECT PROFILE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Bio Modal */}
      {selectedTrainer && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedTrainer(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-trainer-name"
        >
          <div 
            className="bg-[#121214] border border-[rgba(255,255,255,0.2)] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            style={{ borderRadius: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-4 bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between sticky top-0 z-10">
              <span className="text-xs font-mono-tech text-[#D4FF00] uppercase tracking-wider font-semibold">
                COACH DOSSIER // {selectedTrainer.id.toUpperCase()}
              </span>
              <button
                type="button"
                onClick={() => setSelectedTrainer(null)}
                className="p-1 text-[#8E8E93] hover:text-[#F4F4F5] hover:bg-[#1A1A1E] transition-colors"
                aria-label="Close trainer bio modal"
                style={{ borderRadius: 0 }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-28 h-36 shrink-0 bg-black border border-[rgba(255,255,255,0.15)] overflow-hidden">
                  <img
                    src={selectedTrainer.image}
                    alt={selectedTrainer.name}
                    className="w-full h-full object-cover contrast-110"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono-tech text-[#D4FF00] uppercase tracking-wider block">
                    {selectedTrainer.role}
                  </span>
                  <h3 
                    id="modal-trainer-name"
                    className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4F4F5] uppercase tracking-wide"
                  >
                    {selectedTrainer.name}
                  </h3>
                  <div className="text-xs font-mono-tech text-[#8E8E93] uppercase mt-1">
                    EXPERIENCE: {selectedTrainer.experience}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 bg-[#0B0B0C] border-l-2 border-[#D4FF00] flex gap-3">
                <Quote className="w-5 h-5 text-[#D4FF00] shrink-0 opacity-70" />
                <p className="font-sans italic text-sm text-[#e5e1e4]">
                  {selectedTrainer.quote}
                </p>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs font-mono-tech text-[#8E8E93] uppercase tracking-wider mb-2">
                  BIOGRAPHICAL BACKGROUND & METHODOLOGY:
                </h4>
                <p className="text-sm text-[#c8c5cc] leading-relaxed">
                  {selectedTrainer.bio}
                </p>
              </div>

              {/* Certifications list */}
              <div>
                <h4 className="text-xs font-mono-tech text-[#8E8E93] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#D4FF00]" />
                  ACCREDITATIONS & LICENSURE:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTrainer.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#1A1A1E] border border-[rgba(255,255,255,0.1)] text-xs font-mono-tech text-[#F4F4F5]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTrainer(null)}
                  className="px-5 py-2.5 bg-transparent border border-[rgba(255,255,255,0.2)] text-xs font-mono-tech text-[#F4F4F5] hover:border-white uppercase"
                  style={{ borderRadius: 0 }}
                >
                  CLOSE
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const trainerName = selectedTrainer.name;
                    setSelectedTrainer(null);
                    onSelectTrainerForTrial(trainerName);
                  }}
                  className="px-6 py-2.5 bg-[#D4FF00] text-[#0B0B0C] text-xs font-mono-tech font-bold uppercase hover:bg-white transition-colors active:translate-y-0.5"
                  style={{ borderRadius: 0 }}
                >
                  BOOK TRIAL WITH THIS COACH
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
