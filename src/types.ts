export interface TrainingProgram {
  id: string;
  zone: string;
  title: string;
  tagline: string;
  description: string;
  intensityLevel: number; // 1-5 effort meter segments
  targetHR: string;
  duration: string;
  capacity: string;
  coach: string;
  equipment: string[];
  focusAreas: string[];
  scheduleOverview: string[];
  image: string;
}

export interface ClassSession {
  id: string;
  time: string;
  period: 'AM' | 'PM';
  title: string;
  trainer: string;
  zone: string;
  intensity: number; // 1-5
  duration: string;
  spotsLeft: number;
  totalSpots: number;
  day: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  certifications: string[];
  experience: string;
  quote: string;
  bio: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tierTag?: string;
  monthlyPrice: number;
  annualPrice: number; // monthly equivalent when paid annually
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface TrialEnquiryData {
  fullName: string;
  email: string;
  phone: string;
  programId: string;
  preferredTime: string;
  fitnessLevel: string;
  goals: string;
  agreeTerms: boolean;
}

export interface GeneratedPass {
  passId: string;
  fullName: string;
  email: string;
  phone: string;
  programTitle: string;
  preferredTime: string;
  fitnessLevel: string;
  issuedAt: string;
  expiresInDays: number;
}
