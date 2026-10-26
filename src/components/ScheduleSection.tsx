import React, { useState } from 'react';
import { CLASS_SCHEDULES } from '../data/pulseData';
import { ClassSession } from '../types';
import { Calendar, Filter, UserCheck, Flame, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ScheduleSectionProps {
  onReserveClass: (session: ClassSession) => void;
}

interface WorkoutSessionCardProps {
  session: ClassSession;
  hasJoined: boolean;
  onReserve: (session: ClassSession) => void;
}

const WorkoutSessionCard: React.FC<WorkoutSessionCardProps> = ({
  session,
  hasJoined,
  onReserve,
}) => {
  const isFull = session.spotsLeft === 0;
  const isLow = session.spotsLeft > 0 && session.spotsLeft <= 3;

  return (
    <div
      className="bg-[#121214] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.22)] transition-colors group relative flex flex-col md:grid md:grid-cols-[170px_1fr_230px] lg:grid-cols-[190px_1fr_250px] items-stretch min-w-0"
      style={{ borderRadius: 0 }}
    >
      {/* Left Column: Time & Duration */}
      <div className="p-4 sm:p-5 md:p-6 border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.08)] flex flex-row items-center justify-between md:flex-col md:items-start md:justify-center bg-[#0E0E10] shrink-0 min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight group-hover:text-[#D4FF00] transition-colors leading-none">
            {session.time}
          </span>
          <span className="text-xs font-mono-tech font-bold text-[#8E8E93]">
            {session.period}
          </span>
        </div>
        <div className="text-[11px] font-mono-tech text-[#8E8E93] uppercase mt-0 md:mt-2 tracking-wider">
          DURATION: {session.duration}
        </div>
      </div>

      {/* Center Column: Class Title, Trainer Name, Zone Badge */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[rgba(255,255,255,0.08)] min-w-0 flex-1">
        {/* Badges line */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-[#1A1A1E] border border-[rgba(255,255,255,0.12)] text-[10px] font-mono-tech font-semibold text-[#D4FF00] uppercase shrink-0">
            {session.zone}
          </span>
          <div className="flex items-center gap-1 text-[10px] font-mono-tech text-[#8E8E93] shrink-0">
            <Flame className="w-3 h-3 text-[#D4FF00]" />
            <span>LVL {session.intensity}/5</span>
          </div>
        </div>

        {/* Workout Title - wraps cleanly without colliding with adjacent elements */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F5] uppercase tracking-wide mb-2 break-words leading-tight">
          {session.title}
        </h3>

        {/* Coach Info */}
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#8E8E93] flex-wrap">
          <UserCheck className="w-3.5 h-3.5 text-[#D4FF00] shrink-0" />
          <span>COACH: <strong className="text-[#c8c5cc] font-medium">{session.trainer}</strong></span>
        </div>
      </div>

      {/* Right Column: Spot Availability & Action Button */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end justify-between md:justify-center gap-3.5 bg-[#121214] shrink-0 min-w-0">
        {/* Spot Availability Indicator */}
        <div className="w-full sm:w-auto md:w-full flex md:justify-end">
          {isFull ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[rgba(255,70,70,0.1)] border border-[rgba(255,70,70,0.3)] text-[#ffb4ab] text-[10px] font-mono-tech uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#ffb4ab]"></span>
              SESSION FULL (0 / {session.totalSpots})
            </div>
          ) : isLow ? (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[rgba(212,255,0,0.12)] border border-[#D4FF00] text-[#D4FF00] text-[10px] font-mono-tech uppercase font-bold tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#D4FF00] animate-pulse"></span>
              {session.spotsLeft === 1 ? 'ONLY 1 SPOT REMAINING' : `ONLY ${session.spotsLeft} SPOTS REMAINING`}
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech text-[#8E8E93] uppercase">
              <span>{session.spotsLeft} / {session.totalSpots} AVAILABLE</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => onReserve(session)}
          className={`w-full sm:w-auto md:w-full px-5 py-2.5 text-xs font-bold font-mono-tech tracking-wider uppercase transition-all duration-150 flex items-center justify-center gap-2 active:translate-y-0.5 shrink-0 whitespace-nowrap ${
            hasJoined
              ? 'bg-[rgba(212,255,0,0.15)] border border-[#D4FF00] text-[#D4FF00]'
              : isFull
              ? 'bg-transparent border border-[rgba(255,255,255,0.2)] text-[#8E8E93] hover:text-white hover:border-white'
              : 'bg-transparent border border-[rgba(255,255,255,0.2)] text-[#F4F4F5] hover:border-[#D4FF00] hover:text-[#D4FF00] hover:bg-[rgba(212,255,0,0.05)]'
          }`}
          style={{ borderRadius: 0 }}
        >
          {hasJoined ? (
            <>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>WAITLIST JOINED</span>
            </>
          ) : (
            <>
              <span>{isFull ? 'JOIN WAITLIST' : 'RESERVE SPOT'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onReserveClass }) => {
  const [selectedDay, setSelectedDay] = useState<'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'>('MON');
  const [zoneFilter, setZoneFilter] = useState<string>('ALL');
  const [reservationNotice, setReservationNotice] = useState<string | null>(null);
  const [joinedWaitlists, setJoinedWaitlists] = useState<Record<string, boolean>>({});

  const days: Array<'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'> = [
    'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'
  ];

  const filteredSessions = CLASS_SCHEDULES.filter((s) => {
    const matchesDay = s.day === selectedDay;
    const matchesZone = zoneFilter === 'ALL' || s.zone === zoneFilter;
    return matchesDay && matchesZone;
  });

  const handleQuickReserve = (session: ClassSession) => {
    if (session.spotsLeft === 0) {
      setJoinedWaitlists((prev) => ({ ...prev, [session.id]: true }));
      setReservationNotice(
        `Added to priority waitlist for ${session.title} (${session.day} ${session.time} ${session.period}). Simulated spot notification active.`
      );
    } else {
      onReserveClass(session);
    }
  };

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-[#0E0E10] border-b border-[rgba(255,255,255,0.08)] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4FF00]"></span>
              <span className="text-[11px] font-mono-tech tracking-[0.1em] text-[#D4FF00] uppercase font-semibold">
                TIMETABLE TELEMETRY // 7 DAYS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F5] uppercase tracking-tight">
              LIVE <span className="text-[#D4FF00]">CLASS SCHEDULE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#8E8E93] max-w-xl mt-2 font-sans">
              Precision programmed time slots. Capacity is strictly capped per session to ensure uncompromised coach oversight and bar availability.
            </p>
          </div>

          {/* Quick Zone Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#8E8E93]" />
            <select
              value={zoneFilter}
              onChange={(e) => setZoneFilter(e.target.value)}
              className="bg-[#121214] border border-[rgba(255,255,255,0.12)] text-[#F4F4F5] text-xs font-mono-tech px-3 py-2 uppercase focus:border-[#D4FF00] focus:outline-none"
              style={{ borderRadius: 0 }}
            >
              <option value="ALL">ALL ZONES</option>
              <option value="ZONE 01">ZONE 01 // METCON</option>
              <option value="ZONE 02">ZONE 02 // ENGINE</option>
              <option value="ZONE 03">ZONE 03 // HYPERTROPHY</option>
              <option value="ZONE 04">ZONE 04 // RECOVERY</option>
            </select>
          </div>
        </div>

        {/* Day Selector Strip - Sharp brutalist tabs */}
        <div className="grid grid-cols-7 border border-[rgba(255,255,255,0.12)] bg-[#121214] mb-8 overflow-x-auto">
          {days.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => {
                  setSelectedDay(day);
                  setReservationNotice(null);
                }}
                className={`py-3.5 px-2 text-center transition-all duration-150 relative border-r last:border-r-0 border-[rgba(255,255,255,0.08)] ${
                  isSelected
                    ? 'bg-[#1A1A1E] text-[#D4FF00]'
                    : 'text-[#8E8E93] hover:text-[#F4F4F5] hover:bg-[#161619]'
                }`}
                style={{ borderRadius: 0 }}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4FF00]"></span>
                )}
                <span className="font-display font-bold text-lg sm:text-xl block tracking-wide">
                  {day}
                </span>
                <span className="text-[9px] font-mono-tech tracking-wider uppercase opacity-75">
                  {day === 'SAT' || day === 'SUN' ? 'WEEKEND' : 'WEEKDAY'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Feedback Alert if waitlist triggered */}
        {reservationNotice && (
          <div className="mb-6 p-4 bg-[#121214] border border-[#D4FF00] flex items-center justify-between text-xs font-mono-tech text-[#F4F4F5]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0" />
              <span>{reservationNotice}</span>
            </div>
            <button
              onClick={() => setReservationNotice(null)}
              className="text-[#8E8E93] hover:text-white underline uppercase text-[10px] ml-4 shrink-0"
            >
              DISMISS
            </button>
          </div>
        )}

        {/* Schedule List: Consistently rendered responsive session cards */}
        <div className="space-y-3">
          {filteredSessions.length === 0 ? (
            <div className="p-12 text-center bg-[#121214] border border-[rgba(255,255,255,0.08)]">
              <p className="text-[#8E8E93] font-mono-tech text-sm uppercase">
                NO SESSIONS SCHEDULED FOR THIS ZONE FILTER ON {selectedDay}.
              </p>
              <button
                onClick={() => setZoneFilter('ALL')}
                className="mt-4 px-4 py-2 bg-[rgba(212,255,0,0.1)] border border-[#D4FF00] text-[#D4FF00] text-xs font-mono-tech uppercase hover:bg-[#D4FF00] hover:text-black transition-colors"
                style={{ borderRadius: 0 }}
              >
                RESET FILTER TO ALL ZONES
              </button>
            </div>
          ) : (
            filteredSessions.map((session) => (
              <WorkoutSessionCard
                key={session.id}
                session={session}
                hasJoined={!!joinedWaitlists[session.id]}
                onReserve={handleQuickReserve}
              />
            ))
          )}
        </div>

        {/* Footnote note */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono-tech text-[#8E8E93] gap-2 pt-4 border-t border-[rgba(255,255,255,0.06)]">
          <span>* TIMETABLE SUBJECT TO ATHLETE SAFETY PROTOCOLS // DOORS LOCK AT 5M PAST THE HOUR</span>
          <span className="text-[#D4FF00] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            MEMBERS BOOK 14 DAYS IN ADVANCE
          </span>
        </div>
      </div>
    </section>
  );
};
