export enum PlanType {
  A = 'Plan A',
  B = 'Plan B',
}

export type Language = 'en' | 'ko';

export interface ScheduleItem {
  time: string;
  activity: string;
  location?: string;
  link?: string;
  note?: string;
  icon?: 'car' | 'mountain' | 'food' | 'coffee' | 'bed' | 'shopping' | 'home';
}

export interface DailySchedule {
  date: string;
  dayOfWeek: string;
  items: ScheduleItem[];
}

export interface TripData {
  planA: DailySchedule[];
  planB: DailySchedule[];
}

export interface Member {
  name: string;
  role?: string;
  roleKo?: string; // Added for Korean role support
  avatarColor: string;
  relation?: string;
}

export interface FoodPlan {
  category: string;
  items: string[];
  note?: string;
}

export interface LunchPlace {
  name: string;
  category: string; // Used for "Main Menu"
  description?: string;
  link: string;
  address?: string; // Added address
}

export interface TranslationData {
  tripTitle: string;
  tripDates: string;
  meetingPointLabel: string;
  meetingPointName: string;
  meetingTimeNote: string;
  accommodationLabel: string;
  accommodationNote: string;
  participantsLabel: string;
  planALabel: string;
  planBLabel: string;
  planADesc: string;
  planBDesc: string;
  tripEssentialsLabel: string;
  foodLabel: string;
  logisticsLabel: string;
  logisticsNotes: string[];
  shoppingTeamLabel: string;
  shoppingTeamMembers: string;
  footer: string;
  tripSchedule: TripData;
  foodPlans: FoodPlan[];
  lunchPlacesLabel: string;
  lunchPlaces: LunchPlace[];
}