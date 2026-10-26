import { TrainingProgram, ClassSession, Trainer, PricingPlan } from '../types';

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'prog-strength-metcon',
    zone: 'ZONE 01',
    title: 'HYBRID STRENGTH & METCON',
    tagline: 'High-voltage metabolic conditioning paired with Olympic barbell mechanics.',
    description: 'A relentless synthesis of structural barbell loading and high-threshold energy system development. Engineered to expand work capacity, force velocity, and mental endurance under heavy physical fatigue.',
    intensityLevel: 5,
    targetHR: '85% - 94% MAX HR',
    duration: '50 MIN',
    capacity: '14 ATHLETES',
    coach: 'Marcus Vance',
    equipment: ['Eleiko Competition Barbells', 'Bumper Plates', 'Air Bikes', 'Dumbbells up to 100LB'],
    focusAreas: ['Compound Cleans & Jerks', 'Lactate Threshold Tolerance', 'Rotational Power', 'Grip Tenacity'],
    scheduleOverview: [
      '00-10m: Biomechanical dynamic prep & barbell primer',
      '10-25m: Heavy complex wave loading (A-Block)',
      '25-45m: High-density anaerobic MetCon circuit (B-Block)',
      '45-50m: Heart rate recalibration & parasympathetic reset'
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prog-endurance-engine',
    zone: 'ZONE 02',
    title: 'ENDURANCE ENGINE LAB',
    tagline: 'Calibrated ergo intervals, VO2 max thresholds, and systemic stamina.',
    description: 'Build an unbreakable aerobic base. Utilizing synchronized Concept2 Rowers, SkiErgs, and Assault Bikes to stress mitochondrial density, respiratory discipline, and pacing accuracy.',
    intensityLevel: 4,
    targetHR: '75% - 88% MAX HR',
    duration: '55 MIN',
    capacity: '16 ATHLETES',
    coach: 'Kaelen Cross',
    equipment: ['Concept2 RowErg & SkiErg', 'Assault AirBike Pro', 'Plyo Boxes', 'Weighted Vests'],
    focusAreas: ['VO2 Max Development', 'Lactate Clearance Intervals', 'Breath Synchronization', 'Cadence Economy'],
    scheduleOverview: [
      '00-08m: Aerobic baseline elevation & thoracic mobilization',
      '08-28m: Negative split ergometer repeats',
      '28-48m: 3-station continuous engine matrix',
      '48-55m: Flush spin & active heart rate decay'
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prog-hypertrophy',
    zone: 'ZONE 03',
    title: 'BIOMECHANICAL HYPERTROPHY',
    tagline: 'Precision mechanical tension, isolated vector loading, and muscle density.',
    description: 'Designed for targeted hypertrophy and structural joint integrity. Focuses on full muscle fiber recruitment, eccentric tempo control, and progressive mechanical overload without unnecessary joint degradation.',
    intensityLevel: 4,
    targetHR: '70% - 82% MAX HR',
    duration: '60 MIN',
    capacity: '12 ATHLETES',
    coach: 'Elena Rostova',
    equipment: ['Hammer Strength Plate-Loaded', 'Dual Adjustable Pulleys', 'Incline Dumbbell Benches', 'Banded Anchors'],
    focusAreas: ['Time-Under-Tension Protocols', 'Full Rom Vector Alignment', 'Posterior Chain Hypertrophy', 'Shoulder Girdle Fortification'],
    scheduleOverview: [
      '00-10m: Joint traction & neuromuscular activation',
      '10-35m: Primary compound hypertrophic focus with 4-sec eccentrics',
      '35-52m: Antagonistic super-sets & metabolic burnouts',
      '52-60m: Loaded stretching & fascial unwinding'
    ],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prog-recovery-lab',
    zone: 'ZONE 04',
    title: 'CONTRAST RECOVERY & MOBILITY',
    tagline: 'Thermal contrast therapy, autonomic nervous system down-regulation, and joint decompression.',
    description: 'Maximize athletic adaptation between heavy stimulus sessions. Combines 3°C cold water immersion, 85°C dry Finnish sauna protocols, guided diaphragmatic breathwork, and targeted mobility routines.',
    intensityLevel: 2,
    targetHR: '50% - 65% MAX HR',
    duration: '45 MIN',
    capacity: '10 ATHLETES',
    coach: 'Maya Sterling',
    equipment: ['Filtered 3°C Plunge Tubs', 'Infrared & Cedar Dry Saunas', 'Hyperice Percussion Tools', 'Therapeutic Bands'],
    focusAreas: ['Autonomic Downregulation', 'Systemic Inflammation Reduction', 'Thoracolumbar Decompression', 'Myofascial Shearing'],
    scheduleOverview: [
      '00-15m: Guided mobility flows & hip capsule openers',
      '15-35m: 3-round contrast cycle (Cold Plunge + Dry Sauna)',
      '35-45m: Diaphragmatic box-breathing & acoustic recovery'
    ],
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80'
  }
];

export const CLASS_SCHEDULES: ClassSession[] = [
  // Monday
  { id: 'cs-m1', time: '06:00', period: 'AM', title: 'HYBRID STRENGTH // OLYMPIC WAVE', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '50m', spotsLeft: 3, totalSpots: 14, day: 'MON' },
  { id: 'cs-m2', time: '07:15', period: 'AM', title: 'ENDURANCE ENGINE // VO2 REPEATS', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 4, duration: '55m', spotsLeft: 5, totalSpots: 16, day: 'MON' },
  { id: 'cs-m3', time: '12:00', period: 'PM', title: 'MIDDAY METCON CONDENSED', trainer: 'Elena Rostova', zone: 'ZONE 01', intensity: 5, duration: '45m', spotsLeft: 1, totalSpots: 14, day: 'MON' },
  { id: 'cs-m4', time: '17:30', period: 'PM', title: 'HYPERTROPHY // POSTERIOR CHAIN', trainer: 'Elena Rostova', zone: 'ZONE 03', intensity: 4, duration: '60m', spotsLeft: 4, totalSpots: 12, day: 'MON' },
  { id: 'cs-m5', time: '18:45', period: 'PM', title: 'HYBRID STRENGTH // METCON MAX', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '50m', spotsLeft: 0, totalSpots: 14, day: 'MON' },
  { id: 'cs-m6', time: '20:00', period: 'PM', title: 'CONTRAST RECOVERY & BREATH', trainer: 'Maya Sterling', zone: 'ZONE 04', intensity: 2, duration: '45m', spotsLeft: 6, totalSpots: 10, day: 'MON' },

  // Tuesday
  { id: 'cs-t1', time: '06:00', period: 'AM', title: 'ENDURANCE ENGINE // CADENCE FLUSH', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 4, duration: '55m', spotsLeft: 6, totalSpots: 16, day: 'TUE' },
  { id: 'cs-t2', time: '07:30', period: 'AM', title: 'BIOMECHANICAL CHEST & DELTS', trainer: 'Elena Rostova', zone: 'ZONE 03', intensity: 4, duration: '60m', spotsLeft: 2, totalSpots: 12, day: 'TUE' },
  { id: 'cs-t3', time: '12:30', period: 'PM', title: 'ENGINE LAB // AEROBIC FOUNDATION', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 3, duration: '50m', spotsLeft: 8, totalSpots: 16, day: 'TUE' },
  { id: 'cs-t4', time: '18:00', period: 'PM', title: 'HYBRID STRENGTH // POWER CLEAN & JERK', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '50m', spotsLeft: 2, totalSpots: 14, day: 'TUE' },
  { id: 'cs-t5', time: '19:15', period: 'PM', title: 'CONTRAST IMMERSION PROTOCOL', trainer: 'Maya Sterling', zone: 'ZONE 04', intensity: 2, duration: '45m', spotsLeft: 4, totalSpots: 10, day: 'TUE' },

  // Wednesday
  { id: 'cs-w1', time: '06:00', period: 'AM', title: 'HYBRID METCON // LACTATE MATRIX', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '50m', spotsLeft: 4, totalSpots: 14, day: 'WED' },
  { id: 'cs-w2', time: '07:15', period: 'AM', title: 'ENDURANCE ENGINE // SKIERG & ROW', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 4, duration: '55m', spotsLeft: 7, totalSpots: 16, day: 'WED' },
  { id: 'cs-w3', time: '17:30', period: 'PM', title: 'BIOMECHANICAL QUADS & HAMS', trainer: 'Elena Rostova', zone: 'ZONE 03', intensity: 4, duration: '60m', spotsLeft: 3, totalSpots: 12, day: 'WED' },
  { id: 'cs-w4', time: '18:45', period: 'PM', title: 'HYBRID STRENGTH // DUMBBELL METCON', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '50m', spotsLeft: 1, totalSpots: 14, day: 'WED' },
  { id: 'cs-w5', time: '20:00', period: 'PM', title: 'MOBILITY LAB & FASCIAL UNWIND', trainer: 'Maya Sterling', zone: 'ZONE 04', intensity: 2, duration: '45m', spotsLeft: 5, totalSpots: 10, day: 'WED' },

  // Thursday
  { id: 'cs-th1', time: '06:30', period: 'AM', title: 'ENGINE LAB // PYRAMID ACCELERATION', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 4, duration: '55m', spotsLeft: 5, totalSpots: 16, day: 'THU' },
  { id: 'cs-th2', time: '08:00', period: 'AM', title: 'HYPERTROPHY // BACK & BICEPS', trainer: 'Elena Rostova', zone: 'ZONE 03', intensity: 4, duration: '60m', spotsLeft: 4, totalSpots: 12, day: 'THU' },
  { id: 'cs-th3', time: '17:30', period: 'PM', title: 'HYBRID METCON // DUAL COMBAT', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '50m', spotsLeft: 2, totalSpots: 14, day: 'THU' },
  { id: 'cs-th4', time: '19:00', period: 'PM', title: 'RECOVERY // INFRARED & DEEP TISSUE', trainer: 'Maya Sterling', zone: 'ZONE 04', intensity: 2, duration: '45m', spotsLeft: 6, totalSpots: 10, day: 'THU' },

  // Friday
  { id: 'cs-f1', time: '06:00', period: 'AM', title: 'FRIDAY BLACKOUT // TOTAL BODY METCON', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '55m', spotsLeft: 1, totalSpots: 14, day: 'FRI' },
  { id: 'cs-f2', time: '07:15', period: 'AM', title: 'ENDURANCE ENGINE // LONG INTERVALS', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 4, duration: '50m', spotsLeft: 4, totalSpots: 16, day: 'FRI' },
  { id: 'cs-f3', time: '16:30', period: 'PM', title: 'HYPERTROPHY // ARMS & SHOULDERS', trainer: 'Elena Rostova', zone: 'ZONE 03', intensity: 4, duration: '50m', spotsLeft: 3, totalSpots: 12, day: 'FRI' },
  { id: 'cs-f4', time: '18:00', period: 'PM', title: 'WEEKEND WARRIOR PREP METCON', trainer: 'Marcus Vance', zone: 'ZONE 01', intensity: 5, duration: '50m', spotsLeft: 2, totalSpots: 14, day: 'FRI' },

  // Saturday
  { id: 'cs-s1', time: '08:00', period: 'AM', title: 'PULSE COMBINE // TEAM METCON', trainer: 'Marcus & Elena', zone: 'ZONE 01', intensity: 5, duration: '60m', spotsLeft: 2, totalSpots: 20, day: 'SAT' },
  { id: 'cs-s2', time: '09:30', period: 'AM', title: 'ENDURANCE ENGINE // MARATHON SIM', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 4, duration: '60m', spotsLeft: 5, totalSpots: 16, day: 'SAT' },
  { id: 'cs-s3', time: '11:00', period: 'AM', title: 'CONTRAST BATHS & BREATH SANCTUARY', trainer: 'Maya Sterling', zone: 'ZONE 04', intensity: 2, duration: '50m', spotsLeft: 4, totalSpots: 12, day: 'SAT' },

  // Sunday
  { id: 'cs-su1', time: '09:00', period: 'AM', title: 'SUNDAY AEROBIC RECHARGER', trainer: 'Kaelen Cross', zone: 'ZONE 02', intensity: 3, duration: '50m', spotsLeft: 8, totalSpots: 16, day: 'SUN' },
  { id: 'cs-su2', time: '10:30', period: 'AM', title: 'FULL SPECTRUM RECOVERY LAB', trainer: 'Maya Sterling', zone: 'ZONE 04', intensity: 1, duration: '60m', spotsLeft: 5, totalSpots: 12, day: 'SUN' },
  { id: 'cs-su3', time: '16:00', period: 'PM', title: 'WEEK AHEAD PRIMER & MOBILITY', trainer: 'Elena Rostova', zone: 'ZONE 03', intensity: 3, duration: '45m', spotsLeft: 6, totalSpots: 12, day: 'SUN' }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'tr-marcus',
    name: 'MARCUS VANCE',
    role: 'HEAD OF STRENGTH & METCON',
    specialty: 'Olympic Barbell Kinematics & High-Threshold Conditioning',
    certifications: ['CSCS Certified', 'USAW Level 2 Senior Coach', 'EXOS Performance Specialist'],
    experience: '12 YEARS ELITE COACHING',
    quote: '"Form isn\'t an opinion; it\'s structural leverage. When the load gets violent, mechanical precision keeps you invincible."',
    bio: 'Former collegiate decathlete and national weightlifting coach. Marcus directs the Zone 01 curriculum, enforcing barbell mechanics, rapid nervous system recruitment, and raw power endurance.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tr-elena',
    name: 'ELENA ROSTOVA',
    role: 'BIOMECHANICS & HYPERTROPHY LEAD',
    specialty: 'Eccentric Hypertrophy, Joint Torque & Vector Overload',
    certifications: ['M.S. Exercise Physiology', 'PRI Integration Specialist', 'NCS-CPT'],
    experience: '9 YEARS CLINICAL & ATHLETIC',
    quote: '"Muscle tissue responds to mechanical tension, not reckless velocity. Master the negative, own the position."',
    bio: 'Elena bridges academic biomechanics and brutal late-night hypertrophy training. She specializes in bulletproofing athletes against shoulder/hip impingements while sculpting dense, resilient muscle.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tr-kaelen',
    name: 'KAELEN CROSS',
    role: 'AEROBIC ENGINE & VO2 SPECIALIST',
    specialty: 'Ergometer Pacing, Lactate Clearance & Breathing Economy',
    certifications: ['Ironman Finisher', 'Concept2 Master Trainer', 'Oxygen Advantage Coach'],
    experience: '10 YEARS ENDURANCE LAB',
    quote: '"Your lungs will beg you to quit long before your heart gives out. The secret is pacing the fire."',
    bio: 'Ultra-endurance competitor and ergo researcher. Kaelen orchestrates Zone 02 sessions, turning chaotic high-effort output into disciplined, repeatable aerobic horsepower.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tr-maya',
    name: 'MAYA STERLING',
    role: 'RECOVERY & MOBILITY DIRECTOR',
    specialty: 'Autonomic Downregulation, Contrast Therapy & Fascial Release',
    certifications: ['Doctorate of Physical Therapy (DPT)', 'FRC Mobility Specialist', 'Wim Hof Method Instructor'],
    experience: '8 YEARS REHABILITATION',
    quote: '"You do not grow inside the workout; you grow in how deeply you can surrender to recovery afterward."',
    bio: 'Maya oversees the Pulse Recovery Lab. Her targeted thermal contrast cycles, neuro-fascial decompression, and respiratory protocols slash systemic fatigue and supercharge muscle remodeling.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-flex',
    name: 'SESSION PASS',
    tierTag: 'ESSENTIALS',
    monthlyPrice: 89,
    annualPrice: 72, // $72/mo if paid annually
    description: 'Ideal for athletes blending Pulse studio sessions with outside sport training or home programming.',
    isPopular: false,
    ctaLabel: 'CLAIM FLEX PASS',
    features: [
      '8 Studio Sessions per calendar month',
      'Access to Zone 01 & Zone 02 programming',
      'Open Gym access during non-peak windows',
      'Digital locker room & towel service',
      'Pulse Companion telemetry tracking app'
    ]
  },
  {
    id: 'plan-unlimited',
    name: 'ALL-ACCESS UNLIMITED',
    tierTag: 'MOST POPULAR',
    monthlyPrice: 169,
    annualPrice: 135, // $135/mo if paid annually
    description: 'Our flagship membership for dedicated urban athletes pursuing peak physical transformation.',
    isPopular: true,
    ctaLabel: 'START UNLIMITED TRIAL',
    features: [
      'Unlimited Studio Sessions across all 4 Zones',
      '24/7 Keycard biometric security access',
      'Full Recovery Lab access (Cold Plunges & Finnish Saunas)',
      '1x Monthly InBody 570 biometric body composition scan',
      '1x Complimentary guest training pass per month',
      'Complimentary cold brew & electrolyte replenishment bar'
    ]
  },
  {
    id: 'plan-elite',
    name: 'ELITE ATHLETE',
    tierTag: 'RESTRICTED TIER',
    monthlyPrice: 249,
    annualPrice: 199, // $199/mo if paid annually
    description: 'The pinnacle high-performance tier with dedicated monthly coaching and concierge facility perks.',
    isPopular: false,
    ctaLabel: 'APPLY FOR ELITE',
    features: [
      'Everything in All-Access Unlimited',
      'Monthly 1-on-1 Biomechanics & Programming Strategy Review',
      'Priority 14-day advance class reservation window',
      'Dedicated personal kit locker with daily wash service',
      'Heart Rate Telemetry live HUD display integration',
      'Direct WhatsApp channel to Head Coach Marcus Vance'
    ]
  }
];

export const FACILITY_SPECS = [
  {
    title: 'BARBELL ARSENAL',
    zone: 'ZONE 01',
    metric: '18 ELEIKO BARS',
    description: 'Competition calibrated Olympic barbells, calibrated steel discs, urethane bumpers, and monolithic power racks.',
  },
  {
    title: 'ERGOMETER MATRIX',
    zone: 'ZONE 02',
    metric: '24 CONCEPT2 UNITS',
    description: 'RowErgs, SkiErgs, and BikeErgs linked to central digital telemetry monitors for split-second power readouts.',
  },
  {
    title: 'CONTRAST SPA LAB',
    zone: 'ZONE 04',
    metric: '3°C / 85°C DELTA',
    description: 'Medical-grade titanium chilled plunges paired with cedarwood dry saunas to stimulate cold shock proteins and lymph drainage.',
  },
  {
    title: 'AIR & ACOUSTIC ENGINEERING',
    zone: 'STUDIO-WIDE',
    metric: '12X AIR TURNOVER',
    description: 'Hospital-grade HEPA filtration system replacing indoor atmosphere 12 times per hour, calibrated to 140 BPM acoustic acoustics.',
  }
];
