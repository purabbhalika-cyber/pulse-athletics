import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: (prefilledProgram?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROGRAMS', href: '#programs' },
    { name: 'SCHEDULE', href: '#schedule' },
    { name: 'TRAINERS', href: '#trainers' },
    { name: 'MEMBERSHIPS', href: '#memberships' },
    { name: 'FACILITY', href: '#facility' },
    { name: 'TRIAL PASS', href: '#trial' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Telemetry Ticker Bar */}
      <div className="bg-[#0E0E10] border-b border-[rgba(255,255,255,0.08)] py-1.5 px-4 sm:px-8 text-[11px] font-mono-tech tracking-wider text-[#8E8E93] flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#F4F4F5]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#D4FF00] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-[#D4FF00]"></span>
            </span>
            <span className="text-[#D4FF00] font-semibold">STUDIO LIVE</span>
          </span>
          <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">|</span>
          <span className="hidden sm:inline">DISTRICT 07 // 404 KINETIC WAY</span>
          <span className="hidden md:inline text-[rgba(255,255,255,0.2)]">|</span>
          <span className="hidden md:inline">CAPACITY: 72% OPTIMAL</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-[#8E8E93]">24/7 BIOMETRIC ENTRY</span>
          <a 
            href="#trial" 
            onClick={(e) => handleNavClick(e, '#trial')}
            className="text-[#D4FF00] hover:text-white transition-colors flex items-center gap-1 font-medium underline underline-offset-2"
          >
            FIRST VISIT FREE
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 border-b ${
          isScrolled 
            ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-[rgba(255,255,255,0.12)] shadow-xl' 
            : 'bg-[#0B0B0C] border-[rgba(255,255,255,0.08)]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#121214] border border-[rgba(255,255,255,0.15)] group-hover:border-[#D4FF00] flex items-center justify-center transition-colors">
              <Activity className="w-5 h-5 text-[#D4FF00] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#F4F4F5] uppercase">
                  PULSE
                </span>
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#D4FF00] uppercase">
                  ATHLETICS
                </span>
              </div>
              <span className="text-[9px] font-mono-tech tracking-[0.2em] text-[#8E8E93] -mt-1 uppercase">
                High Performance Lab
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[13px] font-medium tracking-[0.06em] text-[#8E8E93] hover:text-[#D4FF00] transition-colors py-2 relative group uppercase font-sans"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4FF00] group-hover:w-full transition-all duration-150"></span>
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenTrial()}
              className="px-6 py-3 bg-[#D4FF00] text-[#0B0B0C] text-[13px] font-semibold tracking-[0.06em] uppercase transition-colors duration-150 hover:bg-[#F4F4F5] active:translate-y-0.5"
              style={{ borderRadius: 0 }}
            >
              CLAIM TRIAL SESSION
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => onOpenTrial()}
              className="px-3 py-2 bg-[#D4FF00] text-[#0B0B0C] text-[11px] font-bold tracking-wider uppercase active:translate-y-0.5"
              style={{ borderRadius: 0 }}
            >
              TRIAL
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 bg-[#121214] border border-[rgba(255,255,255,0.12)] text-[#F4F4F5] hover:text-[#D4FF00] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              style={{ borderRadius: 0 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-[#0B0B0C] border-b border-[rgba(255,255,255,0.15)] px-5 py-6 space-y-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-sm font-semibold tracking-wider text-[#F4F4F5] hover:bg-[#121214] hover:text-[#D4FF00] border-l-2 border-transparent hover:border-[#D4FF00] transition-colors uppercase font-display"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full py-3.5 bg-[#D4FF00] text-[#0B0B0C] text-sm font-bold tracking-wider uppercase text-center active:translate-y-0.5"
                style={{ borderRadius: 0 }}
              >
                CLAIM FREE TRIAL SESSION
              </button>
              <div className="text-[11px] text-[#8E8E93] font-mono-tech text-center pt-2">
                DISTRICT 07 // 404 KINETIC WAY • 24/7 ACCESS
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
