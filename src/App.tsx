import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { TrainersSection } from './components/TrainersSection';
import { MembershipSection } from './components/MembershipSection';
import { FacilitySection } from './components/FacilitySection';
import { TrialEnquiryForm } from './components/TrialEnquiryForm';
import { ProgramModal } from './components/ProgramModal';
import { Footer } from './components/Footer';
import { TrainingProgram, ClassSession, PricingPlan } from './types';

export default function App() {
  const [modalProgram, setModalProgram] = useState<TrainingProgram | null>(null);
  const [trialPrefill, setTrialPrefill] = useState<{
    programId?: string;
    timeSlot?: string;
    planName?: string;
    actionKey?: number;
  }>({});

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTrial = (prefilledProgram?: string) => {
    setTrialPrefill((prev) => ({
      ...prev,
      programId: prefilledProgram || prev.programId || 'prog-strength-metcon',
      actionKey: Date.now(),
    }));
    scrollToSection('trial');
  };

  const handleSelectProgramForTrial = (programId: string) => {
    setTrialPrefill((prev) => ({
      ...prev,
      programId,
      actionKey: Date.now(),
    }));
    scrollToSection('trial');
  };

  const handleReserveClass = (session: ClassSession) => {
    const mappedProgramId = session.zone === 'ZONE 01' 
      ? 'prog-strength-metcon' 
      : session.zone === 'ZONE 02'
      ? 'prog-endurance-engine'
      : session.zone === 'ZONE 03'
      ? 'prog-hypertrophy'
      : 'prog-recovery-lab';

    const formattedTime = `${session.time} ${session.period} (${session.day} - ${session.title})`;
    setTrialPrefill({
      programId: mappedProgramId,
      timeSlot: formattedTime,
      actionKey: Date.now(),
    });
    scrollToSection('trial');
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setTrialPrefill((prev) => ({
      ...prev,
      planName: plan.name,
      actionKey: Date.now(),
    }));
    scrollToSection('trial');
  };

  const handleSelectTrainerForTrial = (trainerName: string) => {
    setTrialPrefill((prev) => ({
      ...prev,
      planName: `Coaching with ${trainerName}`,
      actionKey: Date.now(),
    }));
    scrollToSection('trial');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F4F4F5] flex flex-col selection:bg-[#D4FF00] selection:text-[#0B0B0C]">
      {/* Navigation */}
      <Navbar onOpenTrial={handleOpenTrial} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenTrial={() => handleOpenTrial()}
          onExplorePrograms={() => scrollToSection('programs')}
        />

        {/* Training Programs */}
        <ProgramsSection
          onSelectProgramForTrial={handleSelectProgramForTrial}
          onOpenCurriculumModal={(program) => setModalProgram(program)}
        />

        {/* Live Class Schedule Slots */}
        <ScheduleSection onReserveClass={handleReserveClass} />

        {/* Master Coaches Roster */}
        <TrainersSection onSelectTrainerForTrial={handleSelectTrainerForTrial} />

        {/* Membership Tiers & Sample Pricing */}
        <MembershipSection onSelectPlan={handleSelectPlan} />

        {/* Facility Blueprint & Hardware Telemetry */}
        <FacilitySection />

        {/* Functional Trial Pass Enquiry Form */}
        <TrialEnquiryForm
          initialProgramId={trialPrefill.programId}
          initialTimeSlot={trialPrefill.timeSlot}
          initialPlanName={trialPrefill.planName}
          actionKey={trialPrefill.actionKey}
        />
      </main>

      {/* Program Curriculum Detail Modal */}
      <ProgramModal
        program={modalProgram}
        onClose={() => setModalProgram(null)}
        onBookTrial={(programId) => {
          setModalProgram(null);
          handleSelectProgramForTrial(programId);
        }}
      />

      {/* Editorial Brutalist Footer */}
      <Footer />
    </div>
  );
}
