import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/pulseData';
import { PricingPlan } from '../types';
import { Check, Zap, Info, ArrowRight } from 'lucide-react';

interface MembershipSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="memberships" className="py-20 lg:py-28 bg-[#0E0E10] border-b border-[rgba(255,255,255,0.08)] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D4FF00]"></span>
            <span className="text-[11px] font-mono-tech tracking-[0.1em] text-[#D4FF00] uppercase font-semibold">
              MEMBERSHIP TIERS // SAMPLE PRICING ARCHITECTURE
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F5] uppercase tracking-tight">
            COMMITTED <span className="text-[#D4FF00]">PERFORMANCE</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8E8E93] mt-3 font-sans max-w-2xl mx-auto">
            Transparent, zero-contract athletic memberships. Choose between flexible monthly passes or full facility immersion.
          </p>

          {/* Demo Notice Badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-[#121214] border border-[rgba(255,255,255,0.12)] text-[11px] font-mono-tech text-[#8E8E93]">
            <Info className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>DEMO SHOWCASE: Pricing and memberships represent sample prototype data.</span>
          </div>

          {/* Billing Cycle Switch */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#121214] border border-[rgba(255,255,255,0.12)]">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs font-mono-tech tracking-wider uppercase transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#D4FF00] text-[#0B0B0C] font-bold'
                  : 'text-[#8E8E93] hover:text-[#F4F4F5]'
              }`}
              style={{ borderRadius: 0 }}
            >
              BILLED MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 text-xs font-mono-tech tracking-wider uppercase transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[#D4FF00] text-[#0B0B0C] font-bold'
                  : 'text-[#8E8E93] hover:text-[#F4F4F5]'
              }`}
              style={{ borderRadius: 0 }}
            >
              <span>BILLED ANNUALLY</span>
              <span className={`text-[9px] px-1.5 py-0.5 uppercase font-bold ${
                billingCycle === 'annual' ? 'bg-[#0B0B0C] text-[#D4FF00]' : 'bg-[rgba(212,255,0,0.15)] text-[#D4FF00]'
              }`}>
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`bg-[#121214] flex flex-col justify-between transition-all duration-300 relative group ${
                  isPopular
                    ? 'border-2 border-[#D4FF00] md:-translate-y-2 shadow-[0_0_35px_rgba(212,255,0,0.08)]'
                    : 'border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.25)]'
                }`}
                style={{ borderRadius: 0 }}
              >
                {/* Popular Flag Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4FF00] text-[#0B0B0C] px-3 py-0.5 text-[10px] font-mono-tech font-bold uppercase tracking-widest flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" />
                    <span>{plan.tierTag}</span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Top Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      {!isPopular && plan.tierTag && (
                        <span className="text-[10px] font-mono-tech text-[#8E8E93] tracking-widest uppercase block mb-1">
                          {plan.tierTag}
                        </span>
                      )}
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F4F4F5] uppercase tracking-wide">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#8E8E93] leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="p-4 bg-[#0B0B0C] border border-[rgba(255,255,255,0.06)] mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-mono-tech text-[#8E8E93]">$</span>
                      <span className="font-display font-black text-5xl text-[#F4F4F5] tracking-tight">
                        {price}
                      </span>
                      <span className="text-xs font-mono-tech text-[#8E8E93] ml-1">
                        / MONTH
                      </span>
                    </div>
                    <div className="text-[10px] font-mono-tech text-[#8E8E93] mt-1 uppercase">
                      {billingCycle === 'annual' ? 'BILLED $ ' + (price * 12) + ' PER YEAR (SAMPLE RATE)' : 'MONTH-TO-MONTH NO CONTRACT'}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3.5">
                    <span className="text-[10px] font-mono-tech text-[#8E8E93] tracking-wider uppercase block">
                      INCLUDED PRIVILEGES:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#c8c5cc]">
                        <div className="w-4 h-4 shrink-0 bg-[rgba(212,255,0,0.1)] border border-[#D4FF00] flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-[#D4FF00]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 text-xs font-mono-tech font-bold tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[#D4FF00] text-[#0B0B0C] hover:bg-[#F4F4F5]'
                        : 'bg-transparent border border-[rgba(255,255,255,0.2)] text-[#F4F4F5] hover:border-[#D4FF00] hover:text-[#D4FF00] hover:bg-[rgba(212,255,0,0.05)]'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Membership Policies Footnote */}
        <div className="mt-12 p-6 bg-[#121214] border border-[rgba(255,255,255,0.06)] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono-tech text-[#8E8E93]">
          <div>
            <span className="text-[#D4FF00] uppercase block mb-1 font-semibold">FREEZE PRIVILEGES</span>
            <p>Freeze your membership for up to 60 consecutive days per calendar year with zero reactivation fees.</p>
          </div>
          <div>
            <span className="text-[#D4FF00] uppercase block mb-1 font-semibold">24/7 ACCESS KEYCARD</span>
            <p>Keycards are encrypted with two-factor biometric scans. Replacement passes issued within 12 hours.</p>
          </div>
          <div>
            <span className="text-[#D4FF00] uppercase block mb-1 font-semibold">TRIAL GUARANTEE</span>
            <p>All newcomers receive a 100% complimentary first session pass to experience our coaching standard.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
