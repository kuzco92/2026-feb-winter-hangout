export enum PlanType {
  A = 'Plan A',
  B = 'Plan B',
}

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
  avatarColor: string;
  relation?: string;
}

export interface FoodPlan {
  category: string;
  items: string[];
  note?: string;
}