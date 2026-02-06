import { Member, TripData, FoodPlan, PlanType } from './types';

export const TRIP_TITLE = "Gangwon-do Winter Getaway ❄️";
export const TRIP_DATES = "Feb 7 - Feb 8, 2026";
export const ACCOMMODATION = {
  name: "숲정원 (Forest Garden)",
  link: "https://naver.me/GbDRQpcz",
  address: "Gangwon-do Pyeongchang"
};

export const MEMBERS: Member[] = [
  // Brothers
  { name: "Euijin", role: "Organizer", avatarColor: "bg-blue-500", relation: "Brothers" },
  { name: "Euichan", role: "Chef (Maeuntang)", avatarColor: "bg-orange-500", relation: "Brothers" },
  
  // Couple 1
  { name: "Franklin", role: "", avatarColor: "bg-green-500", relation: "Couple" },
  { name: "Heesu", role: "", avatarColor: "bg-yellow-500", relation: "Couple" },
  
  // Couple 2
  { name: "Kangjun", role: "", avatarColor: "bg-indigo-500", relation: "Couple" },
  { name: "Onyu", role: "", avatarColor: "bg-red-500", relation: "Couple" },
  
  // Shopping Pair
  { name: "Marco", role: "Shopping Team", avatarColor: "bg-purple-500", relation: "Shopping Team" },
  { name: "Medrein", role: "Shopping Team", avatarColor: "bg-pink-500", relation: "Shopping Team" },
  
  // Individual
  { name: "Sungjun", role: "", avatarColor: "bg-teal-500" },
];

export const FOOD_PLANS: FoodPlan[] = [
  {
    category: "BBQ Dinner",
    items: [
      "Pork Belly (Samgyeopsal): ~200g/person",
      "Beef (Hanwoo Sirloin/Striploin): ~100g/person",
      "Sausages",
      "Grilled Veggies",
      "Charcoal & Grill provided by Pension"
    ]
  },
  {
    category: "Seafood Special",
    items: [
      "Raw Fish (Sashimi) - bought locally",
      "Spicy Fish Soup (Maeuntang) - Chef Euichan",
      "Soju & Beer"
    ]
  },
  {
    category: "Lunch Options",
    items: [
      "Gamjane (Potato dish)",
      "Soljae Ongsimi (Buckwheat noodles)",
      "Buckwheat Flower Place"
    ],
    note: "Decide based on location"
  }
];

export const LOGISTICS = {
  meetingPoint: "Hoeseong Rest Area (횡성휴게소)",
  meetingTime: "08:40 AM",
  meetingLink: "https://naver.me/xk18ecpQ",
  notes: [
    "Cable car opens at 8 AM.",
    "Shopping team (Marco, Medrein, Euichan, Euijin) buys groceries on Friday.",
    "Franklin & Wife (Heesu) driving separately.",
    "Euijin picking up Marco & Medrein."
  ]
};

// Extracted from CSV and Chat
export const TRIP_SCHEDULE: TripData = {
  planA: [
    {
      date: "2026-02-07",
      dayOfWeek: "Saturday",
      items: [
        { time: "08:40", activity: "Meet & Coffee", location: "Hoeseong Rest Area", icon: "car", link: "https://naver.me/xk18ecpQ" },
        { time: "10:00", activity: "Arrive at Balwangsan", location: "Balwangsan Cable Car", icon: "mountain", link: "https://blog.naver.com/east_west_sea/224153829514" },
        { time: "10:00 - 12:00", activity: "Cable Car & Skywalk", note: "Depends on wind conditions", icon: "mountain" },
        { time: "12:00 - 13:00", activity: "Move to Lunch", icon: "car" },
        { time: "13:00 - 14:00", activity: "Lunch", location: "Local Restaurant (TBD)", icon: "food" },
        { time: "14:00 - 17:30", activity: "Seaside / Free Time", location: "Gangneung Area", icon: "shopping" },
        { time: "17:30 - 18:00", activity: "Move to Accommodation", icon: "car" },
        { time: "18:00 - 19:00", activity: "Check-in & Rest", location: "Soop Jeongwon Pension", icon: "bed", link: "https://naver.me/GbDRQpcz" },
        { time: "19:00 - Late", activity: "BBQ Party & Bonfire", note: "Chef Euichan's Maeuntang + Beef/Pork", icon: "food" },
      ]
    },
    {
      date: "2026-02-08",
      dayOfWeek: "Sunday",
      items: [
        { time: "09:00 - 10:30", activity: "Wake up & Prepare", icon: "bed" },
        { time: "10:30 - 11:00", activity: "Check out & Move", icon: "car" },
        { time: "11:00 - 12:00", activity: "Lunch", location: "Local Restaurant", icon: "food" },
        { time: "12:00 - 12:30", activity: "Final Coffee", icon: "coffee" },
        { time: "12:30", activity: "Departure Home", icon: "home" },
      ]
    }
  ],
  planB: [
    {
      date: "2026-02-07",
      dayOfWeek: "Saturday",
      items: [
        { time: "08:40", activity: "Meet & Coffee", location: "Hoeseong Rest Area", icon: "car", link: "https://naver.me/xk18ecpQ" },
        { time: "10:00", activity: "Arrive at Odaesan", location: "Odaesan Fir Forest", icon: "mountain", link: "https://blog.naver.com/gustjsdl8/223334297773" },
        { time: "10:00 - 11:00", activity: "Forest Walk (Goblin Filming Site)", note: "Alternative if windy/snowy", icon: "mountain" },
        { time: "11:00 - 12:00", activity: "Move to Lunch", icon: "car" },
        { time: "12:00 - 13:00", activity: "Lunch", location: "Local Restaurant (TBD)", icon: "food" },
        { time: "13:00 - 17:00", activity: "Seaside / Café Tour", location: "Gangneung / Anmok Beach", icon: "coffee" },
        { time: "17:00 - 18:00", activity: "Move to Accommodation", icon: "car" },
        { time: "18:00 - 19:00", activity: "Check-in & Rest", location: "Soop Jeongwon Pension", icon: "bed", link: "https://naver.me/GbDRQpcz" },
        { time: "19:00 - Late", activity: "BBQ Party & Bonfire", note: "Chef Euichan's Maeuntang + Beef/Pork", icon: "food" },
      ]
    },
    {
      date: "2026-02-08",
      dayOfWeek: "Sunday",
      items: [
        { time: "09:00 - 10:30", activity: "Wake up & Prepare", icon: "bed" },
        { time: "10:30 - 11:00", activity: "Check out & Move", icon: "car" },
        { time: "11:00 - 12:00", activity: "Lunch", location: "Local Restaurant", icon: "food" },
        { time: "12:00 - 12:30", activity: "Final Coffee", icon: "coffee" },
        { time: "12:30", activity: "Departure Home", icon: "home" },
      ]
    }
  ]
};