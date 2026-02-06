import { Member, TranslationData } from './types';

export const COMMON_LINKS = {
  meeting: "https://naver.me/xk18ecpQ",
  accommodation: "https://naver.me/GbDRQpcz",
  balwangsan: "https://blog.naver.com/east_west_sea/224153829514",
  odaesan: "https://blog.naver.com/gustjsdl8/223334297773",
  gamjane: "https://naver.me/FIYss2jJ",
  soljae: "https://naver.me/xb7Mic7g",
  memil: "https://naver.me/5ZvxCKDx"
};

export const MEMBERS: Member[] = [
  // Brothers
  { name: "Euijin", role: "Organizer", roleKo: "주최자", avatarColor: "bg-blue-500", relation: "Brothers" },
  { name: "Euichan", role: "Chef (Maeuntang)", roleKo: "매운탕 셰프", avatarColor: "bg-orange-500", relation: "Brothers" },
  
  // Couple 1
  { name: "Franklin", role: "", roleKo: "", avatarColor: "bg-green-500", relation: "Couple" },
  { name: "Heesu", role: "", roleKo: "", avatarColor: "bg-yellow-500", relation: "Couple" },
  
  // Couple 2
  { name: "Kangjun", role: "", roleKo: "", avatarColor: "bg-indigo-500", relation: "Couple" },
  { name: "Onyu", role: "", roleKo: "", avatarColor: "bg-red-500", relation: "Couple" },
  
  // Shopping Pair
  { name: "Marco", role: "Shopping Team", roleKo: "장보기 팀", avatarColor: "bg-purple-500", relation: "Shopping Team" },
  { name: "Medrein", role: "Shopping Team", roleKo: "장보기 팀", avatarColor: "bg-pink-500", relation: "Shopping Team" },
  
  // Individual
  { name: "Sungjun", role: "", roleKo: "", avatarColor: "bg-teal-500" },
];

export const ACCOMMODATION_DETAILS = {
  // Changed to match the "English (Korean)" style of the meeting point
  nameEn: "Forest Garden (숲정원)", 
  nameKo: "숲정원 펜션",
  address: "Gangwon-do Pyeongchang"
};

export const LOGISTICS_COMMON = {
  meetingTime: "08:40 AM",
};

const DATA_EN: TranslationData = {
  tripTitle: "Gangwon-do Winter Getaway ❄️",
  tripDates: "Feb 7 - Feb 8, 2026",
  meetingPointLabel: "Meeting Point",
  meetingPointName: "Hoeseong Rest Area (횡성휴게소)",
  meetingTimeNote: "*Don't be late! Cable car opens early.",
  accommodationLabel: "Accommodation",
  accommodationNote: "Confirmed Option 2",
  participantsLabel: "Participants",
  planALabel: "Plan A: Balwangsan",
  planBLabel: "Plan B: Odaesan",
  planADesc: "Primary plan. Depends on cable car operation (wind check required).",
  planBDesc: "Alternative plan in case of strong wind or heavy snow.",
  tripEssentialsLabel: "Trip Essentials",
  foodLabel: "Dinner & BBQ Plan",
  logisticsLabel: "Logistics & Notes",
  logisticsNotes: [
    "Cable car opens at 8 AM.",
    "Shopping team (Marco, Medrein, Euichan, Euijin) buys groceries on Friday.",
    "Franklin & Wife (Heesu) driving separately.",
    "Euijin picking up Marco & Medrein."
  ],
  shoppingTeamLabel: "Shopping Team",
  shoppingTeamMembers: "Marco, Medrein, Euichan, Euijin (Friday)",
  footer: "Created with Love for the Gangwon Trip Team ❤️",
  foodPlans: [
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
    }
  ],
  lunchPlacesLabel: "Lunch Recommendations",
  lunchPlaces: [
    {
      name: "Memilkkot Pil Muryeop",
      category: "Buckwheat Noodles (Memil-guksu)",
      description: "Famous buckwheat restaurant near the literature forest.",
      address: "33-13 Leehyoseok-gil, Bongpyeong-myeon, Pyeongchang-gun",
      link: COMMON_LINKS.memil
    },
    {
      name: "Soljae Ongsimi Makguksu",
      category: "Ongsimi, Makguksu",
      description: "Traditional potato dough soup and buckwheat noodles.",
      address: "162 Jingogae-ro, Jinbu-myeon, Pyeongchang-gun",
      link: COMMON_LINKS.soljae
    },
    {
      name: "Gamjane",
      category: "Potato Pancake, Braised Chicken",
      description: "Local favorite for potato dishes.",
      address: "360 Bangadari-ro, Jinbu-myeon, Pyeongchang-gun",
      link: COMMON_LINKS.gamjane
    }
  ],
  tripSchedule: {
    planA: [
      {
        date: "2026-02-07",
        dayOfWeek: "Saturday",
        items: [
          { time: "08:40", activity: "Meet & Coffee", location: "Hoeseong Rest Area", icon: "car", link: COMMON_LINKS.meeting },
          { time: "10:00", activity: "Arrive at Balwangsan", location: "Balwangsan Cable Car", icon: "mountain", link: COMMON_LINKS.balwangsan },
          { time: "10:00 - 12:00", activity: "Cable Car & Skywalk", note: "Depends on wind conditions", icon: "mountain" },
          { time: "12:00 - 13:00", activity: "Move to Lunch", icon: "car" },
          { time: "13:00 - 14:00", activity: "Lunch", location: "See recommendations below", icon: "food" },
          { time: "14:00 - 17:30", activity: "Seaside / Free Time", location: "Gangneung Area", icon: "shopping" },
          { time: "17:30 - 18:00", activity: "Move to Accommodation", icon: "car" },
          { time: "18:00 - 19:00", activity: "Check-in & Rest", location: "Soop Jeongwon Pension", icon: "bed", link: COMMON_LINKS.accommodation },
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
          { time: "08:40", activity: "Meet & Coffee", location: "Hoeseong Rest Area", icon: "car", link: COMMON_LINKS.meeting },
          { time: "10:00", activity: "Arrive at Odaesan", location: "Odaesan Fir Forest", icon: "mountain", link: COMMON_LINKS.odaesan },
          { time: "10:00 - 11:00", activity: "Forest Walk (Goblin Filming Site)", note: "Alternative if windy/snowy", icon: "mountain" },
          { time: "11:00 - 12:00", activity: "Move to Lunch", icon: "car" },
          { time: "12:00 - 13:00", activity: "Lunch", location: "See recommendations below", icon: "food" },
          { time: "13:00 - 17:00", activity: "Seaside / Café Tour", location: "Gangneung / Anmok Beach", icon: "coffee" },
          { time: "17:00 - 18:00", activity: "Move to Accommodation", icon: "car" },
          { time: "18:00 - 19:00", activity: "Check-in & Rest", location: "Soop Jeongwon Pension", icon: "bed", link: COMMON_LINKS.accommodation },
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
  }
};

const DATA_KO: TranslationData = {
  tripTitle: "강원도 겨울 여행 ❄️",
  tripDates: "2026년 2월 7일 - 2월 8일",
  meetingPointLabel: "집결지 (Meeting Point)",
  meetingPointName: "횡성휴게소 (강릉방향)",
  meetingTimeNote: "*늦지 마세요! 케이블카 오픈런 예정.",
  accommodationLabel: "숙소 (Accommodation)",
  accommodationNote: "예약 완료 (독채 2)",
  participantsLabel: "참가자",
  planALabel: "Plan A: 발왕산",
  planBLabel: "Plan B: 오대산",
  planADesc: "메인 계획. 케이블카 운영 여부에 따름 (바람 체크 필수).",
  planBDesc: "대안 계획. 강풍이나 폭설 시 진행.",
  tripEssentialsLabel: "여행 준비물 & 정보",
  foodLabel: "저녁 & 바베큐 계획",
  logisticsLabel: "공지사항 & 이동",
  logisticsNotes: [
    "케이블카는 오전 8시에 오픈합니다.",
    "장보기 팀 (Marco, Medrein, Euichan, Euijin)은 금요일에 미리 장을 봅니다.",
    "Franklin 부부는 따로 이동합니다.",
    "Euijin이 Marco & Medrein 픽업 예정."
  ],
  shoppingTeamLabel: "장보기 팀",
  shoppingTeamMembers: "Marco, Medrein, Euichan, Euijin (금요일)",
  footer: "즐거운 강원도 여행을 위하여 ❤️",
  foodPlans: [
    {
      category: "저녁 바베큐",
      items: [
        "삼겹살: 인당 약 200g",
        "소고기 (한우 등심/채끝): 인당 약 100g",
        "소시지 & 구이용 야채",
        "숯불 & 그릴 (펜션 제공)"
      ]
    },
    {
      category: "해산물 & 야식",
      items: [
        "회 (현지 구매)",
        "매운탕 (의찬 셰프 담당)",
        "소주 & 맥주"
      ]
    }
  ],
  lunchPlacesLabel: "점심 후보 식당",
  lunchPlaces: [
    {
      name: "메밀꽃필무렵",
      category: "메밀국수",
      description: "이효석 문학관 근처 유명 맛집.",
      address: "강원 평창군 봉평면 이효석길 33-13",
      link: COMMON_LINKS.memil
    },
    {
      name: "솔재옹심이막국수",
      category: "옹심이, 막국수",
      description: "전통 옹심이와 메밀 요리 전문.",
      address: "강원 평창군 진부면 진고개로 162",
      link: COMMON_LINKS.soljae
    },
    {
      name: "감자네",
      category: "감자전, 닭볶음탕",
      description: "감자 요리가 맛있는 지역 맛집.",
      address: "강원 평창군 진부면 방아다리로 360",
      link: COMMON_LINKS.gamjane
    }
  ],
  tripSchedule: {
    planA: [
      {
        date: "2026-02-07",
        dayOfWeek: "토요일",
        items: [
          { time: "08:40", activity: "집결 및 커피", location: "횡성휴게소", icon: "car", link: COMMON_LINKS.meeting },
          { time: "10:00", activity: "발왕산 도착", location: "발왕산 케이블카", icon: "mountain", link: COMMON_LINKS.balwangsan },
          { time: "10:00 - 12:00", activity: "케이블카 & 스카이워크", note: "바람세기에 따라 변경 가능", icon: "mountain" },
          { time: "12:00 - 13:00", activity: "점심 식당 이동", icon: "car" },
          { time: "13:00 - 14:00", activity: "점심 식사", location: "아래 추천 식당 참고", icon: "food" },
          { time: "14:00 - 17:30", activity: "강릉 바다 / 자유시간", location: "강릉 지역", icon: "shopping" },
          { time: "17:30 - 18:00", activity: "숙소로 이동", icon: "car" },
          { time: "18:00 - 19:00", activity: "체크인 & 휴식", location: "평창 숲정원 펜션", icon: "bed", link: COMMON_LINKS.accommodation },
          { time: "19:00 - Late", activity: "바베큐 파티 & 불멍", note: "의찬 셰프 매운탕 + 고기 파티", icon: "food" },
        ]
      },
      {
        date: "2026-02-08",
        dayOfWeek: "일요일",
        items: [
          { time: "09:00 - 10:30", activity: "기상 및 준비", icon: "bed" },
          { time: "10:30 - 11:00", activity: "체크아웃 & 이동", icon: "car" },
          { time: "11:00 - 12:00", activity: "점심 식사", location: "현지 식당", icon: "food" },
          { time: "12:00 - 12:30", activity: "마무리 커피", icon: "coffee" },
          { time: "12:30", activity: "집으로 출발", icon: "home" },
        ]
      }
    ],
    planB: [
      {
        date: "2026-02-07",
        dayOfWeek: "토요일",
        items: [
          { time: "08:40", activity: "집결 및 커피", location: "횡성휴게소", icon: "car", link: COMMON_LINKS.meeting },
          { time: "10:00", activity: "오대산 도착", location: "오대산 전나무숲", icon: "mountain", link: COMMON_LINKS.odaesan },
          { time: "10:00 - 11:00", activity: "전나무숲길 산책", note: "도깨비 촬영지 (강풍 시 대안)", icon: "mountain" },
          { time: "11:00 - 12:00", activity: "점심 식당 이동", icon: "car" },
          { time: "12:00 - 13:00", activity: "점심 식사", location: "아래 추천 식당 참고", icon: "food" },
          { time: "13:00 - 17:00", activity: "강릉 바다 / 카페 투어", location: "강릉 / 안목해변", icon: "coffee" },
          { time: "17:00 - 18:00", activity: "숙소로 이동", icon: "car" },
          { time: "18:00 - 19:00", activity: "체크인 & 휴식", location: "평창 숲정원 펜션", icon: "bed", link: COMMON_LINKS.accommodation },
          { time: "19:00 - Late", activity: "바베큐 파티 & 불멍", note: "의찬 셰프 매운탕 + 고기 파티", icon: "food" },
        ]
      },
      {
        date: "2026-02-08",
        dayOfWeek: "일요일",
        items: [
          { time: "09:00 - 10:30", activity: "기상 및 준비", icon: "bed" },
          { time: "10:30 - 11:00", activity: "체크아웃 & 이동", icon: "car" },
          { time: "11:00 - 12:00", activity: "점심 식사", location: "현지 식당", icon: "food" },
          { time: "12:00 - 12:30", activity: "마무리 커피", icon: "coffee" },
          { time: "12:30", activity: "집으로 출발", icon: "home" },
        ]
      }
    ]
  }
};

export const getTranslation = (lang: 'en' | 'ko') => lang === 'en' ? DATA_EN : DATA_KO;