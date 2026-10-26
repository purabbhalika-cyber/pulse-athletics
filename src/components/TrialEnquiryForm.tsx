import React, { useState, useEffect, useRef } from 'react';
import { TRAINING_PROGRAMS } from '../data/pulseData';
import { TrialEnquiryData, GeneratedPass } from '../types';
import { Check, AlertCircle, ArrowRight, QrCode, Download, RefreshCw, Sparkles, CheckCircle2, FileText, Copy } from 'lucide-react';

interface TrialEnquiryFormProps {
  initialProgramId?: string;
  initialTimeSlot?: string;
  initialPlanName?: string;
  actionKey?: number;
}

export const TrialEnquiryForm: React.FC<TrialEnquiryFormProps> = ({
  initialProgramId,
  initialTimeSlot,
  initialPlanName,
  actionKey,
}) => {
  const [formData, setFormData] = useState<TrialEnquiryData>({
    fullName: '',
    email: '',
    phone: '',
    programId: initialProgramId || 'prog-strength-metcon',
    preferredTime: initialTimeSlot || '06:00 - 09:00 (MORNING PEAK)',
    fitnessLevel: 'INTERMEDIATE',
    goals: initialPlanName ? `Inquiring about ${initialPlanName} tier.` : '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [generatedPass, setGeneratedPass] = useState<GeneratedPass | null>(null);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(null);
  const [formValidationNotice, setFormValidationNotice] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const submitTimerRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);

  // Sync initial props and reset pass on external trigger
  useEffect(() => {
    if (initialProgramId) {
      setFormData((prev) => ({ ...prev, programId: initialProgramId }));
    }
    if (initialTimeSlot) {
      setFormData((prev) => ({ ...prev, preferredTime: initialTimeSlot }));
    }
    if (initialPlanName) {
      setFormData((prev) => ({ ...prev, goals: `Inquiring about ${initialPlanName} tier.` }));
    }
    // Always clear generated pass when a new booking action was clicked so the form is visible
    if (actionKey) {
      setGeneratedPass(null);
      setFormValidationNotice(null);
    }
  }, [initialProgramId, initialTimeSlot, initialPlanName, actionKey]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full legal name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for pass confirmation.';
    } else if (phoneDigits.length < 7) {
      newErrors.phone = 'Please provide a valid contact number (min 7 digits).';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must acknowledge the studio guidelines & safety protocols.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setFormValidationNotice('Please resolve the highlighted requirements above to proceed.');
      // Scroll to the first error field gently
      const firstErrorKey = Object.keys(newErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorKey}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }

    setFormValidationNotice(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate concurrent submissions
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitProgress(15);

    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (submitTimerRef.current) clearTimeout(submitTimerRef.current);

    progressIntervalRef.current = window.setInterval(() => {
      setSubmitProgress((prev) => {
        if (prev >= 90) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          return 90;
        }
        return prev + 25;
      });
    }, 150);

    submitTimerRef.current = window.setTimeout(() => {
      try {
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        setSubmitProgress(100);

        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const selectedProg = TRAINING_PROGRAMS.find((p) => p.id === formData.programId);

        const pass: GeneratedPass = {
          passId: `PLS-${randomNum}-D7`,
          fullName: formData.fullName.toUpperCase().trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          programTitle: selectedProg ? selectedProg.title : 'HYBRID STRENGTH & METCON',
          preferredTime: formData.preferredTime,
          fitnessLevel: formData.fitnessLevel,
          issuedAt: new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
          expiresInDays: 7,
        };

        setGeneratedPass(pass);
        setSaveSuccessMessage(null);
      } catch (err) {
        console.error('Error generating pass:', err);
        setFormValidationNotice('An unexpected error occurred. Please try submitting again.');
      } finally {
        setIsSubmitting(false);
      }
    }, 900);
  };

  const handleReset = () => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    setIsSubmitting(false);
    setGeneratedPass(null);
    setSaveSuccessMessage(null);
    setFormValidationNotice(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      programId: 'prog-strength-metcon',
      preferredTime: '06:00 - 09:00 (MORNING PEAK)',
      fitnessLevel: 'INTERMEDIATE',
      goals: '',
      agreeTerms: false,
    });
    setErrors({});
  };

  // Safe Print and Save handler that will NEVER freeze or crash if iframe sandboxes print
  const handlePrintOrSavePass = () => {
    if (!generatedPass) return;

    let printAttempted = false;
    try {
      if (typeof window !== 'undefined' && typeof window.print === 'function') {
        window.print();
        printAttempted = true;
      }
    } catch (e) {
      console.warn('Browser print dialog could not be opened in current frame, triggering direct file save:', e);
    }

    // Always create a clean client-side text pass download so the user has the pass reliably
    try {
      const passContent = `
========================================
PULSE ATHLETICS // ACCESS PASS
DISTRICT 07 // 404 KINETIC WAY
========================================
PASS ID:       ${generatedPass.passId}
ATHLETE:       ${generatedPass.fullName}
EMAIL:         ${generatedPass.email}
PHONE:         ${generatedPass.phone}
PROGRAM:       ${generatedPass.programTitle}
TIME WINDOW:   ${generatedPass.preferredTime}
LEVEL:         ${generatedPass.fitnessLevel}
ISSUED:        ${generatedPass.issuedAt}
VALIDITY:      7 DAYS FROM ISSUE

INSTRUCTIONS:
1. Arrive 15 minutes prior for biometric keycard calibration.
2. Cold plunge & sauna access included in Zone 04 Recovery Lab.
3. Bring training footwear and water vessel.
========================================
(Simulated Demo Trial Pass - Pulse Athletics)
`.trim();

      const blob = new Blob([passContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${generatedPass.passId}_Pulse_Athletics_Pass.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setSaveSuccessMessage(
        printAttempted
          ? 'PRINT DIALOG INVOKED & PASS DOWNLOADED.'
          : 'PASS FILE DOWNLOADED & SAVED TO DEVICE.'
      );
    } catch (err) {
      console.error('Download error:', err);
      setSaveSuccessMessage('PASS DETAILS READY: ' + generatedPass.passId);
    }
  };

  const selectedProgram = TRAINING_PROGRAMS.find((p) => p.id === formData.programId);

  // Standard predefined time windows
  const standardTimeWindows = [
    '06:00 - 09:00 (MORNING PEAK)',
    '12:00 - 14:00 (MIDDAY METCON)',
    '17:00 - 20:00 (EVENING INTENSITY)',
    '20:00 - 22:30 (LATE NIGHT RECOVERY)',
  ];

  const isCustomTimeSlot = formData.preferredTime && !standardTimeWindows.includes(formData.preferredTime);

  return (
    <section id="trial" className="py-20 lg:py-28 bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.08)] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D4FF00]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.1em] text-[#D4FF00] uppercase font-semibold">
              ATHLETE ONBOARDING // FIRST SESSION COMPLIMENTARY
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F5] uppercase tracking-tight">
            CLAIM YOUR <span className="text-[#D4FF00]">TRIAL PASS</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E93] mt-2 font-sans">
            Experience our coaching standards, Olympic barbell rigs, and recovery plunge labs firsthand. Complete the onboarding dossier below to generate your simulated digital access pass.
          </p>

          <div className="mt-4 p-3 bg-[#121214] border border-[rgba(255,255,255,0.1)] text-xs font-mono-tech text-[#8E8E93] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#D4FF00] shrink-0" />
            <span>
              DEMO NOTICE: All passes and enquiries are simulated client-side for demonstration. No commercial booking is charged or transmitted to external servers.
            </span>
          </div>
        </div>

        {/* Generated Digital Pass Success State */}
        {generatedPass ? (
          <div className="max-w-3xl mx-auto bg-[#121214] border-2 border-[#D4FF00] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(212,255,0,0.12)]">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4FF00]"></div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-[rgba(255,255,255,0.1)] gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-[#D4FF00]" />
                  <span className="text-xs font-mono-tech text-[#D4FF00] font-bold tracking-wider uppercase">
                    SIMULATED PASS GENERATED // ACCESS ACTIVE
                  </span>
                </div>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F4F4F5] uppercase tracking-tight">
                  PULSE ATHLETICS PASS
                </h3>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono-tech text-[#8E8E93] block uppercase">
                  PASS CODE
                </span>
                <span className="font-mono-tech font-extrabold text-xl text-[#D4FF00] tracking-wider">
                  {generatedPass.passId}
                </span>
              </div>
            </div>

            {/* Pass Body Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-[rgba(255,255,255,0.1)]">
              <div>
                <span className="text-[10px] font-mono-tech text-[#8E8E93] uppercase block mb-1">
                  REGISTERED ATHLETE
                </span>
                <span className="font-display font-bold text-xl text-[#F4F4F5] block">
                  {generatedPass.fullName}
                </span>
                <span className="text-xs font-mono-tech text-[#8E8E93] block mt-1">
                  {generatedPass.email}
                </span>
                <span className="text-xs font-mono-tech text-[#8E8E93] block">
                  {generatedPass.phone}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono-tech text-[#8E8E93] uppercase block mb-1">
                  ZONE & PROGRAM
                </span>
                <span className="font-display font-bold text-lg text-[#D4FF00] block leading-tight">
                  {generatedPass.programTitle}
                </span>
                <span className="text-xs font-mono-tech text-[#F4F4F5] block mt-1">
                  WINDOW: {generatedPass.preferredTime}
                </span>
                <span className="text-xs font-mono-tech text-[#8E8E93] block">
                  LEVEL: {generatedPass.fitnessLevel}
                </span>
              </div>

              <div className="flex flex-col items-start md:items-end justify-center">
                <div className="p-2 bg-white text-black border border-white">
                  <QrCode className="w-20 h-20" />
                </div>
                <span className="text-[9px] font-mono-tech text-[#8E8E93] mt-1 uppercase">
                  SCAN FOR DISTRICT 07 ENTRY
                </span>
              </div>
            </div>

            {/* Verification Checklist */}
            <div className="py-6 space-y-2 text-xs font-mono-tech text-[#c8c5cc]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4FF00]" />
                <span>Arrive 15 minutes prior for your physical biometric keycard calibration.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4FF00]" />
                <span>Complimentary access to the 3°C Cold Plunge & Finnish Sauna included after your session.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4FF00]" />
                <span>Valid for {generatedPass.expiresInDays} days from issue date ({generatedPass.issuedAt}).</span>
              </div>
            </div>

            {/* Feedback message if downloaded or printed */}
            {saveSuccessMessage && (
              <div className="mb-4 p-3 bg-[#0B0B0C] border border-[#D4FF00] flex items-center gap-2 text-xs font-mono-tech text-[#D4FF00]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{saveSuccessMessage}</span>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={handlePrintOrSavePass}
                className="flex-1 py-3 px-6 bg-[#D4FF00] text-[#0B0B0C] text-xs font-mono-tech font-bold uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 active:translate-y-0.5"
                style={{ borderRadius: 0 }}
              >
                <Download className="w-4 h-4" />
                <span>PRINT / SAVE PASS (.TXT)</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="py-3 px-6 bg-transparent border border-[rgba(255,255,255,0.2)] text-[#F4F4F5] text-xs font-mono-tech font-bold uppercase hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors flex items-center justify-center gap-2"
                style={{ borderRadius: 0 }}
              >
                <RefreshCw className="w-4 h-4" />
                <span>BOOK ANOTHER ENQUIRY</span>
              </button>
            </div>
          </div>
        ) : (
          /* The Form View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Container (7 cols) */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="lg:col-span-7 bg-[#121214] border border-[rgba(255,255,255,0.1)] p-6 sm:p-8 space-y-6"
              style={{ borderRadius: 0 }}
              noValidate
            >
              <div className="border-b border-[rgba(255,255,255,0.08)] pb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[#F4F4F5] uppercase tracking-wide">
                    ATHLETE TRIAL DOSSIER
                  </h3>
                  <span className="text-xs font-mono-tech text-[#8E8E93]">
                    All fields marked with an asterisk (*) are mandatory.
                  </span>
                </div>
                {formData.goals && (
                  <span className="text-[10px] font-mono-tech px-2.5 py-1 bg-[#1A1A1E] text-[#D4FF00] border border-[rgba(255,255,255,0.1)]">
                    PRE-CONFIGURED SELECTION
                  </span>
                )}
              </div>

              {/* Full Name Input */}
              <div>
                <label 
                  htmlFor="fullName"
                  className="block text-[11px] font-mono-tech uppercase text-[#8E8E93] mb-1.5 tracking-wider"
                >
                  FULL LEGAL NAME *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    if (formValidationNotice) setFormValidationNotice(null);
                  }}
                  placeholder="e.g. Alex Thorne"
                  className={`w-full px-4 py-3 bg-[#0B0B0C] border text-[#F4F4F5] placeholder-[#8E8E93] text-sm font-sans focus:outline-none transition-colors ${
                    errors.fullName
                      ? 'border-[#ffb4ab] focus:border-[#ffb4ab]'
                      : 'border-[rgba(255,255,255,0.12)] focus:border-[#D4FF00]'
                  }`}
                  style={{ borderRadius: 0 }}
                />
                {errors.fullName && (
                  <p className="text-[11px] font-mono-tech text-[#ffb4ab] mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Contact Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-[11px] font-mono-tech uppercase text-[#8E8E93] mb-1.5 tracking-wider"
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                      if (formValidationNotice) setFormValidationNotice(null);
                    }}
                    placeholder="alex@performance.com"
                    className={`w-full px-4 py-3 bg-[#0B0B0C] border text-[#F4F4F5] placeholder-[#8E8E93] text-sm font-sans focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-[#ffb4ab] focus:border-[#ffb4ab]'
                        : 'border-[rgba(255,255,255,0.12)] focus:border-[#D4FF00]'
                    }`}
                    style={{ borderRadius: 0 }}
                  />
                  {errors.email && (
                    <p className="text-[11px] font-mono-tech text-[#ffb4ab] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="phone"
                    className="block text-[11px] font-mono-tech uppercase text-[#8E8E93] mb-1.5 tracking-wider"
                  >
                    PHONE NUMBER *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                      if (formValidationNotice) setFormValidationNotice(null);
                    }}
                    placeholder="+1 (555) 019-2831"
                    className={`w-full px-4 py-3 bg-[#0B0B0C] border text-[#F4F4F5] placeholder-[#8E8E93] text-sm font-sans focus:outline-none transition-colors ${
                      errors.phone
                        ? 'border-[#ffb4ab] focus:border-[#ffb4ab]'
                        : 'border-[rgba(255,255,255,0.12)] focus:border-[#D4FF00]'
                    }`}
                    style={{ borderRadius: 0 }}
                  />
                  {errors.phone && (
                    <p className="text-[11px] font-mono-tech text-[#ffb4ab] mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Training Program Select */}
              <div>
                <label className="block text-[11px] font-mono-tech uppercase text-[#8E8E93] mb-1.5 tracking-wider">
                  SELECT TARGET PROGRAM / ZONE *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TRAINING_PROGRAMS.map((program) => {
                    const isSelected = formData.programId === program.id;
                    return (
                      <button
                        type="button"
                        key={program.id}
                        onClick={() => {
                          setFormData({ ...formData, programId: program.id });
                          if (formValidationNotice) setFormValidationNotice(null);
                        }}
                        className={`p-3 text-left border transition-all ${
                          isSelected
                            ? 'bg-[#1A1A1E] border-[#D4FF00] text-[#D4FF00]'
                            : 'bg-[#0B0B0C] border-[rgba(255,255,255,0.12)] text-[#8E8E93] hover:text-[#F4F4F5] hover:border-[rgba(255,255,255,0.25)]'
                        }`}
                        style={{ borderRadius: 0 }}
                      >
                        <div className="flex justify-between items-center text-[10px] font-mono-tech mb-1">
                          <span className="font-semibold">{program.zone}</span>
                          <span className="text-[#8E8E93]">{program.duration}</span>
                        </div>
                        <span className="font-display font-bold text-sm text-[#F4F4F5] block truncate">
                          {program.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Window & Fitness Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label 
                      htmlFor="preferredTime"
                      className="block text-[11px] font-mono-tech uppercase text-[#8E8E93] tracking-wider"
                    >
                      PREFERRED TIME WINDOW *
                    </label>
                    {isCustomTimeSlot && (
                      <span className="text-[9px] font-mono-tech text-[#D4FF00] uppercase font-bold">
                        CLASS TIME PRE-SET
                      </span>
                    )}
                  </div>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0B0C] border border-[rgba(255,255,255,0.12)] text-[#F4F4F5] text-xs font-mono-tech uppercase focus:outline-none focus:border-[#D4FF00]"
                    style={{ borderRadius: 0 }}
                  >
                    {/* Include custom specific schedule time if chosen */}
                    {isCustomTimeSlot && (
                      <option value={formData.preferredTime}>
                        RESERVED: {formData.preferredTime}
                      </option>
                    )}
                    <option value="06:00 - 09:00 (MORNING PEAK)">06:00 - 09:00 (MORNING PEAK)</option>
                    <option value="12:00 - 14:00 (MIDDAY METCON)">12:00 - 14:00 (MIDDAY METCON)</option>
                    <option value="17:00 - 20:00 (EVENING INTENSITY)">17:00 - 20:00 (EVENING INTENSITY)</option>
                    <option value="20:00 - 22:30 (LATE NIGHT RECOVERY)">20:00 - 22:30 (LATE NIGHT RECOVERY)</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="fitnessLevel"
                    className="block text-[11px] font-mono-tech uppercase text-[#8E8E93] mb-1.5 tracking-wider"
                  >
                    CURRENT ATHLETIC LEVEL *
                  </label>
                  <select
                    id="fitnessLevel"
                    name="fitnessLevel"
                    value={formData.fitnessLevel}
                    onChange={(e) => setFormData({ ...formData, fitnessLevel: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0B0B0C] border border-[rgba(255,255,255,0.12)] text-[#F4F4F5] text-xs font-mono-tech uppercase focus:outline-none focus:border-[#D4FF00]"
                    style={{ borderRadius: 0 }}
                  >
                    <option value="NOVICE (LESS THAN 1 YR)">NOVICE // FOUNDATION</option>
                    <option value="INTERMEDIATE">INTERMEDIATE // 2-4 YRS CONSISTENT</option>
                    <option value="COMPETITIVE ATHLETE">COMPETITIVE // 5+ YRS METCON / BARBELL</option>
                  </select>
                </div>
              </div>

              {/* Goals or Injuries */}
              <div>
                <label 
                  htmlFor="goals"
                  className="block text-[11px] font-mono-tech uppercase text-[#8E8E93] mb-1.5 tracking-wider"
                >
                  TRAINING OBJECTIVES OR INJURY NOTES (OPTIONAL)
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={2}
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  placeholder="e.g. Seeking to improve aerobic capacity on Concept2; past left rotator cuff sensitivity."
                  className="w-full px-4 py-2.5 bg-[#0B0B0C] border border-[rgba(255,255,255,0.12)] text-[#F4F4F5] placeholder-[#8E8E93] text-sm font-sans focus:outline-none focus:border-[#D4FF00]"
                  style={{ borderRadius: 0 }}
                />
              </div>

              {/* Checkbox: Fully clickable label + input supporting clicking text and box */}
              <div>
                <label 
                  htmlFor="agreeTerms"
                  className="flex items-start gap-3 cursor-pointer group select-none"
                >
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => {
                      setFormData({ ...formData, agreeTerms: e.target.checked });
                      if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: '' });
                      if (formValidationNotice) setFormValidationNotice(null);
                    }}
                    className="sr-only"
                  />
                  <div
                    className={`w-[18px] h-[18px] shrink-0 border mt-0.5 flex items-center justify-center transition-all ${
                      formData.agreeTerms
                        ? 'bg-[#D4FF00] border-[#D4FF00]'
                        : 'bg-[#0B0B0C] border-[rgba(255,255,255,0.2)] group-hover:border-[#D4FF00]'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    {formData.agreeTerms && <Check className="w-3.5 h-3.5 text-[#0B0B0C] stroke-[3]" />}
                  </div>
                  <span className="text-xs text-[#c8c5cc] leading-normal font-sans group-hover:text-white transition-colors">
                    I agree to the athlete safety protocols, biometric access rules, and acknowledge that this pass request is an interactive simulated demonstration. *
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="text-[11px] font-mono-tech text-[#ffb4ab] mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.agreeTerms}
                  </p>
                )}
              </div>

              {/* Validation Warning Banner right above the submit button if errors exist */}
              {formValidationNotice && (
                <div className="p-3 bg-[rgba(255,180,171,0.08)] border border-[#ffb4ab] flex items-center gap-2 text-xs font-mono-tech text-[#ffb4ab]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formValidationNotice}</span>
                </div>
              )}

              {/* Submission Button & Loading State */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#D4FF00] text-[#0B0B0C] text-sm font-bold tracking-[0.06em] uppercase hover:bg-[#F4F4F5] transition-all duration-150 flex items-center justify-center gap-2 disabled:opacity-50 active:translate-y-0.5"
                  style={{ borderRadius: 0 }}
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-4 h-4 animate-spin text-[#0B0B0C]" />
                      <span>ENCRYPTING BIOMETRIC PASS... {submitProgress}%</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT & GENERATE TRIAL PASS</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Progress bar during submit */}
              {isSubmitting && (
                <div className="w-full h-1 bg-[#0B0B0C] overflow-hidden">
                  <div
                    className="h-full bg-[#D4FF00] transition-all duration-200"
                    style={{ width: `${submitProgress}%` }}
                  ></div>
                </div>
              )}
            </form>

            {/* Right Information Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Selected Program Summary Card */}
              {selectedProgram && (
                <div className="bg-[#121214] border border-[rgba(255,255,255,0.08)] p-6">
                  <span className="text-[10px] font-mono-tech text-[#D4FF00] uppercase block mb-1">
                    TARGET PROTOCOL PREVIEW
                  </span>
                  <h4 className="font-display font-extrabold text-2xl text-[#F4F4F5] uppercase mb-2">
                    {selectedProgram.title}
                  </h4>
                  <p className="text-xs text-[#8E8E93] leading-relaxed mb-4">
                    {selectedProgram.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech text-[#c8c5cc] pt-4 border-t border-[rgba(255,255,255,0.06)]">
                    <div>
                      <span className="text-[10px] text-[#8E8E93] block">DURATION</span>
                      <span className="font-bold text-white">{selectedProgram.duration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8E8E93] block">ZONE</span>
                      <span className="font-bold text-[#D4FF00]">{selectedProgram.zone}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8E8E93] block">TARGET HR</span>
                      <span className="font-bold text-white">{selectedProgram.targetHR}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8E8E93] block">COACH LEAD</span>
                      <span className="font-bold text-white">{selectedProgram.coach}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Trial Experience Protocol Box */}
              <div className="bg-[#121214] border border-[rgba(255,255,255,0.08)] p-6 space-y-4">
                <h4 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
                  <span>WHAT YOUR TRIAL INCLUDES:</span>
                </h4>
                <div className="space-y-2.5 text-xs font-mono-tech text-[#8E8E93]">
                  <div className="flex items-start gap-2 text-[#c8c5cc]">
                    <div className="w-1.5 h-1.5 bg-[#D4FF00] mt-1 shrink-0"></div>
                    <span>Full coach-directed 50-60 minute structured training session</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#c8c5cc]">
                    <div className="w-1.5 h-1.5 bg-[#D4FF00] mt-1 shrink-0"></div>
                    <span>Heart rate telemetry monitor loaned for duration of session</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#c8c5cc]">
                    <div className="w-1.5 h-1.5 bg-[#D4FF00] mt-1 shrink-0"></div>
                    <span>Cold plunge & sauna access in the Zone 04 Recovery Lab</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#c8c5cc]">
                    <div className="w-1.5 h-1.5 bg-[#D4FF00] mt-1 shrink-0"></div>
                    <span>InBody 570 body composition analysis baseline scan</span>
                  </div>
                </div>
              </div>

              {/* Studio Address Telemetry */}
              <div className="p-4 bg-[#0E0E10] border border-[rgba(255,255,255,0.06)] text-xs font-mono-tech text-[#8E8E93]">
                <div className="text-[#D4FF00] uppercase font-semibold mb-1">
                  LOCATION & ARRIVAL:
                </div>
                <p>Pulse Athletics // District 07</p>
                <p>404 Kinetic Way, Industrial Loft Tier</p>
                <p className="mt-2 text-[10px] text-[#8E8E93]">
                  * Dedicated underground athlete parking available. Check in at Biometric Security Terminal A.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
