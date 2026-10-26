import React, { useEffect } from 'react';
import { TrainingProgram } from '../types';
import { X, Clock, Users, Target, Check, ArrowRight } from 'lucide-react';

interface ProgramModalProps {
  program: TrainingProgram | null;
  onClose: () => void;
  onBookTrial: (programId: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onBookTrial,
}) => {
  useEffect(() => {
    if (!program) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-program-title"
    >
      <div
        className="bg-[#121214] border border-[rgba(255,255,255,0.2)] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
        style={{ borderRadius: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D4FF00]"></span>
            <span className="text-xs font-mono-tech text-[#D4FF00] uppercase tracking-wider font-semibold">
              CURRICULUM SPECIFICATION // {program.zone}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8E8E93] hover:text-[#F4F4F5] hover:bg-[#1A1A1E] transition-colors focus:outline-none focus:border-[#D4FF00]"
            aria-label="Close curriculum modal"
            style={{ borderRadius: 0 }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Top Banner */}
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-6">
            <span className="text-xs font-mono-tech text-[#D4FF00] tracking-wider uppercase block mb-1">
              PROGRAM LEAD: {program.coach}
            </span>
            <h3 
              id="modal-program-title"
              className="font-display font-black text-3xl sm:text-4xl text-[#F4F4F5] uppercase tracking-tight mb-2"
            >
              {program.title}
            </h3>
            <p className="text-sm font-mono-tech text-[#c8c5cc] uppercase tracking-wider">
              {program.tagline}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-[#0B0B0C] border border-[rgba(255,255,255,0.06)] text-xs font-mono-tech">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4FF00]" />
              <div>
                <span className="text-[10px] text-[#8E8E93] block">DURATION</span>
                <span className="text-white font-bold">{program.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D4FF00]" />
              <div>
                <span className="text-[10px] text-[#8E8E93] block">CAPACITY</span>
                <span className="text-white font-bold">{program.capacity}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[#D4FF00]" />
              <div>
                <span className="text-[10px] text-[#8E8E93] block">TARGET ZONE</span>
                <span className="text-white font-bold">{program.targetHR}</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#8E8E93] uppercase tracking-wider mb-2">
              PHYSIOLOGICAL RATIONALE & GOALS:
            </h4>
            <p className="text-sm text-[#c8c5cc] leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Timeline Breakdown */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#8E8E93] uppercase tracking-wider mb-3">
              SESSION TIMELINE STRUCTURE:
            </h4>
            <div className="space-y-2">
              {program.scheduleOverview.map((item, idx) => (
                <div key={idx} className="p-3 bg-[#0B0B0C] border-l-2 border-[#D4FF00] text-xs font-mono-tech text-[#F4F4F5] flex items-center justify-between">
                  <span>{item}</span>
                  <span className="text-[#8E8E93] text-[10px]">PHASE {idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Arsenal */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#8E8E93] uppercase tracking-wider mb-2">
              REQUIRED EQUIPMENT LOADOUT:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {program.equipment.map((eq, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#c8c5cc] p-2 bg-[#0B0B0C]">
                  <Check className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-transparent border border-[rgba(255,255,255,0.2)] text-xs font-mono-tech text-[#F4F4F5] hover:border-white uppercase"
              style={{ borderRadius: 0 }}
            >
              DISMISS
            </button>
            <button
              type="button"
              onClick={() => {
                const id = program.id;
                onClose();
                onBookTrial(id);
              }}
              className="px-8 py-3 bg-[#D4FF00] text-[#0B0B0C] text-xs font-mono-tech font-bold uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 active:translate-y-0.5"
              style={{ borderRadius: 0 }}
            >
              <span>CLAIM TRIAL FOR THIS ZONE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
