import React, { useState } from 'react';
import { Activity, ArrowRight, CheckCircle2, AlertTriangle, X, Shield, Lock, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');
  const [activePolicy, setActivePolicy] = useState<{ title: string; content: string[] } | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail.trim()) {
      setNewsletterError('Email address is required.');
      return;
    }
    if (!emailRegex.test(newsletterEmail.trim())) {
      setNewsletterError('Please provide a valid email format.');
      return;
    }
    setNewsletterError('');
    setIsSubscribed(true);
    setNewsletterEmail('');
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const policyData = {
    terms: {
      title: 'TERMS OF ATHLETE PARTICIPATION',
      content: [
        '1. PHYSICAL READINESS: All athletes must complete biometric screening and safety clearance prior to loaded barbell work.',
        '2. ZERO DROP ZONE: Bumper plates and barbells are strictly regulated. Dropping empty barbells or dumbbells is prohibited.',
        '3. TIMELINESS: Coached studio doors lock precisely 5 minutes past scheduled start times to preserve warmup integrity.',
        '4. DEMO NOTICE: Pulse Athletics is a portfolio prototype application. No actual membership billing occurs.'
      ]
    },
    privacy: {
      title: 'BIOMETRIC DATA & PRIVACY PROTOCOL',
      content: [
        '1. LOCAL ENCRYPTION: All telemetry and trial pass enquiries are processed client-side for demonstration.',
        '2. ZERO TRACKING TELEMETRY: No third-party ad trackers, tracking cookies, or commercial marketing brokers are utilized.',
        '3. DATA RETENTION: Form submissions reside within local browser memory and are purged on page reload.',
        '4. SECURE ACCESS: Biometric keycards in production are salted with SHA-256 cryptographic hashes.'
      ]
    },
    security: {
      title: 'FACILITY SECURITY & KEYCARD POLICY',
      content: [
        '1. 24/7 ACCESS GATES: Entry portals in District 07 are monitored via high-resolution encrypted CCTV for athlete safety.',
        '2. KEYCARD INTEGRITY: Sharing keycards or granting tailgating access to unregistered individuals results in immediate revocation.',
        '3. EMERGENCY OVERRIDE: Panic portals and automated external defibrillators (AEDs) are stationed in Zone 01 and Zone 04.',
        '4. PROTOTYPE ENVIRONMENT: All security features depicted represent simulated facility architectural specifications.'
      ]
    }
  };

  return (
    <footer className="bg-[#0B0B0C] border-t border-[rgba(255,255,255,0.08)] relative z-10 text-[#F4F4F5]">
      {/* Top Banner Bar */}
      <div className="border-b border-[rgba(255,255,255,0.08)] py-8 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#121214] border border-[rgba(255,255,255,0.15)] flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#D4FF00]" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight uppercase">
                PULSE ATHLETICS
              </span>
              <span className="text-[10px] font-mono-tech text-[#8E8E93] tracking-widest block uppercase">
                URBAN STRENGTH & HIGH PERFORMANCE FACILITY
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech text-[#8E8E93]">
            <span className="px-2.5 py-1 bg-[#121214] border border-[rgba(255,255,255,0.1)] text-[#D4FF00]">
              STATUS: OPEN 24/7/365
            </span>
            <span>DISTRICT 07 // 404 KINETIC WAY</span>
            <span className="text-[#8E8E93]">•</span>
            <span>TEL: (555) 019-7850 (DEMO)</span>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wider">
              FACILITY PHILOSOPHY
            </h4>
            <p className="text-xs text-[#8E8E93] leading-relaxed max-w-sm">
              We reject the softened vanity of commercial gyms. Pulse Athletics is engineered for athletes who treat strength, work capacity, and systemic recovery as an unrelenting science.
            </p>
            <div className="pt-2 text-[11px] font-mono-tech text-[#c8c5cc] space-y-1">
              <div>// ELEIKO IWF COMPETITION EQUIPMENT</div>
              <div>// MEDICAL-GRADE 3°C CONTRAST PLUNGE</div>
              <div>// BIOMETRIC TELEMETRY & ANT+ TRACKING</div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-[#D4FF00] uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono-tech">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#programs')}
                  className="text-[#8E8E93] hover:text-[#D4FF00] transition-colors uppercase"
                >
                  Training Zones
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#schedule')}
                  className="text-[#8E8E93] hover:text-[#D4FF00] transition-colors uppercase"
                >
                  Class Timetable
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#trainers')}
                  className="text-[#8E8E93] hover:text-[#D4FF00] transition-colors uppercase"
                >
                  Coaching Cadre
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#memberships')}
                  className="text-[#8E8E93] hover:text-[#D4FF00] transition-colors uppercase"
                >
                  Membership Tiers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#facility')}
                  className="text-[#8E8E93] hover:text-[#D4FF00] transition-colors uppercase"
                >
                  Facility Specs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('#trial')}
                  className="text-[#D4FF00] hover:text-white transition-colors uppercase font-bold"
                >
                  Claim Trial Pass
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-[#D4FF00] uppercase tracking-wider">
              OPERATING PROTOCOLS
            </h4>
            <div className="text-xs font-mono-tech text-[#8E8E93] space-y-2">
              <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-1.5">
                <span>MEMBERS BIOMETRIC</span>
                <span className="text-white font-bold">24 HOURS / 7 DAYS</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-1.5">
                <span>COACHED SESSIONS</span>
                <span className="text-white">06:00 - 21:00 DAILY</span>
              </div>
              <div className="flex justify-between border-b border-[rgba(255,255,255,0.06)] pb-1.5">
                <span>RECOVERY LAB SPA</span>
                <span className="text-white">06:00 - 23:00 DAILY</span>
              </div>
              <div className="flex justify-between pb-1.5">
                <span>STAFF ONBOARDING</span>
                <span className="text-white">08:00 - 20:00 DAILY</span>
              </div>
            </div>
          </div>

          {/* Col 4: Dispatch Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-[#D4FF00] uppercase tracking-wider">
              TELEMETRY DISPATCH
            </h4>
            <p className="text-xs text-[#8E8E93] leading-relaxed">
              Weekly biomechanical insights, ergometer pacing charts, and class waitlist notifications.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#121214] border border-[#D4FF00] flex items-center gap-2 text-xs font-mono-tech text-[#D4FF00]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>SUBSCRIBED TO DISPATCH TELEMETRY.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
                <div className="flex">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    placeholder="athlete@domain.com"
                    className="flex-1 px-3 py-2 bg-[#121214] border border-[rgba(255,255,255,0.12)] text-xs text-[#F4F4F5] placeholder-[#8E8E93] focus:outline-none focus:border-[#D4FF00]"
                    style={{ borderRadius: 0 }}
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-[#D4FF00] text-[#0B0B0C] hover:bg-white transition-colors"
                    aria-label="Subscribe to newsletter"
                    style={{ borderRadius: 0 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="text-[10px] font-mono-tech text-[#ffb4ab]">
                    {newsletterError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Clear Demo Disclaimer Banner */}
        <div className="mt-12 p-4 bg-[#121214] border border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-start sm:items-center gap-3 text-xs font-mono-tech text-[#8E8E93]">
          <AlertTriangle className="w-4 h-4 text-[#D4FF00] shrink-0" />
          <div className="leading-relaxed">
            <strong className="text-white">DEMONSTRATION PROTOTYPE:</strong> Pulse Athletics is a portfolio concept interface. All schedules, coach bios, memberships, and trial forms are simulated demo fixtures and do not transmit data to an external commercial backend.
          </div>
        </div>

        {/* Bottom Copyright & Telemetry Stamp with fully interactive policy triggers */}
        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#8E8E93] gap-4">
          <div>
            © {new Date().getFullYear()} PULSE ATHLETICS // ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setActivePolicy(policyData.terms)}
              className="hover:text-white transition-colors uppercase"
            >
              TERMS OF ATHLETE PARTICIPATION
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActivePolicy(policyData.privacy)}
              className="hover:text-white transition-colors uppercase"
            >
              PRIVACY PROTOCOL
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActivePolicy(policyData.security)}
              className="hover:text-white transition-colors uppercase"
            >
              SECURITY POLICY
            </button>
          </div>
        </div>
      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActivePolicy(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-[#121214] border border-[rgba(255,255,255,0.2)] max-w-lg w-full p-6 relative shadow-2xl"
            style={{ borderRadius: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.1)] pb-3 mb-4">
              <span className="text-xs font-mono-tech text-[#D4FF00] uppercase font-semibold">
                {activePolicy.title}
              </span>
              <button
                type="button"
                onClick={() => setActivePolicy(null)}
                className="p-1 text-[#8E8E93] hover:text-white hover:bg-[#1A1A1E]"
                aria-label="Close policy modal"
                style={{ borderRadius: 0 }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {activePolicy.content.map((point, idx) => (
                <p key={idx} className="text-xs text-[#c8c5cc] font-mono-tech leading-relaxed">
                  {point}
                </p>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActivePolicy(null)}
              className="w-full py-2.5 bg-[#D4FF00] text-[#0B0B0C] text-xs font-mono-tech font-bold uppercase hover:bg-white transition-colors"
              style={{ borderRadius: 0 }}
            >
              ACKNOWLEDGE & CLOSE
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
