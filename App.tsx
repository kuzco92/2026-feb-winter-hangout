import React, { useState } from 'react';
import { Calendar, Users, Map, Utensils, Info, CheckCircle2, Wind, Globe, ExternalLink, ChevronRight, MapPin } from 'lucide-react';
import { MEMBERS, getTranslation, ACCOMMODATION_DETAILS, LOGISTICS_COMMON, COMMON_LINKS } from './constants';
import { PlanType, Language } from './types';
import Timeline from './components/Timeline';
import InfoCard from './components/InfoCard';
import MemberAvatar from './components/MemberAvatar';

const App: React.FC = () => {
  const [activePlan, setActivePlan] = useState<PlanType>(PlanType.A);
  const [lang, setLang] = useState<Language>('en'); // Default to English

  const t = getTranslation(lang);
  const activeSchedule = activePlan === PlanType.A ? t.tripSchedule.planA : t.tripSchedule.planB;
  const accomName = lang === 'en' ? ACCOMMODATION_DETAILS.nameEn : ACCOMMODATION_DETAILS.nameKo;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Image & Title */}
      <div className="relative h-80 bg-slate-900 overflow-hidden group">
        <img 
          src="https://picsum.photos/800/600?grayscale" 
          alt="Winter Mountain" 
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Language Toggle - Absolute Top Right */}
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
            className="flex items-center space-x-2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/20 transition-all text-sm font-medium"
          >
            <Globe size={14} />
            <span>{lang === 'en' ? 'KOR' : 'ENG'}</span>
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6 pb-12">
          <div className="max-w-3xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-2">
              Confirmed Trip
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">{t.tripTitle}</h1>
            <div className="flex items-center text-slate-300 text-sm font-medium">
              <Calendar size={16} className="mr-1.5" />
              {t.tripDates}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-6 relative z-10 space-y-6">
        
        {/* Logistics Summary Card */}
        <div className="bg-white rounded-2xl shadow-lg p-5 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Meeting Info */}
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                <Map size={14} className="mr-1" /> {t.meetingPointLabel}
              </h2>
              <div className="flex flex-col">
                <a 
                  href={COMMON_LINKS.meeting} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-600 hover:underline flex items-center"
                >
                  {t.meetingPointName}
                </a>
                <span className="text-2xl font-bold text-slate-800 mt-1">{LOGISTICS_COMMON.meetingTime}</span>
                <span className="text-xs text-red-500 font-medium mt-1">{t.meetingTimeNote}</span>
              </div>
            </div>

            {/* Accommodation */}
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                <CheckCircle2 size={14} className="mr-1" /> {t.accommodationLabel}
              </h2>
               <div className="flex flex-col">
                <a 
                  href={COMMON_LINKS.accommodation} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-green-600 hover:underline flex items-center"
                >
                  {accomName}
                </a>
                <span className="text-sm text-slate-600 mt-1">{ACCOMMODATION_DETAILS.address}</span>
                <span className="text-xs text-slate-400 mt-1">{t.accommodationNote}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100">
          <h2 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
            <Users size={16} className="mr-2 text-blue-500" /> 
            {t.participantsLabel} ({MEMBERS.length})
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {MEMBERS.map((member, idx) => (
              <MemberAvatar key={idx} member={member} lang={lang} />
            ))}
          </div>
        </div>

        {/* Plan Toggle */}
        <div className="sticky top-0 z-20 py-2 bg-slate-50/95 backdrop-blur">
          <div className="bg-slate-200 p-1 rounded-xl flex shadow-inner">
            <button
              onClick={() => setActivePlan(PlanType.A)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${
                activePlan === PlanType.A 
                  ? 'bg-white text-blue-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.planALabel}
            </button>
            <button
              onClick={() => setActivePlan(PlanType.B)}
              className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${
                activePlan === PlanType.B 
                  ? 'bg-white text-green-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Wind size={14} className="mr-1" /> {t.planBLabel}
            </button>
          </div>
          <div className="text-center mt-2 px-2">
            <p className="text-xs text-slate-500">
              {activePlan === PlanType.A ? t.planADesc : t.planBDesc}
            </p>
          </div>
        </div>

        {/* Itinerary */}
        <div className="animate-fade-in">
          {activeSchedule.map((dayData, index) => (
            <Timeline 
              key={index} 
              items={dayData.items} 
              day={dayData.dayOfWeek} 
              date={dayData.date} 
            />
          ))}
        </div>

        {/* Trip Essentials Header */}
        <div className="flex items-center justify-between px-2 mt-8 mb-4">
           <h2 className="text-xl font-bold text-slate-800">{t.tripEssentialsLabel}</h2>
        </div>

        {/* Lunch Recommendations - NEW SECTION Grid */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 px-2 flex items-center">
            <Utensils size={14} className="mr-2" /> {t.lunchPlacesLabel}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.lunchPlaces.map((place, idx) => (
              <a 
                key={idx}
                href={place.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-2 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-bold rounded-full truncate max-w-[180px]">
                      Main Menu: {place.category}
                    </span>
                    <ExternalLink size={14} className="text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{place.name}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-2">{place.description}</p>
                  
                  {place.address && (
                    <div className="flex items-start text-slate-400 text-[10px] mt-1">
                      <MapPin size={10} className="mr-1 mt-0.5 flex-shrink-0" />
                      <span className="leading-tight">{place.address}</span>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-xs font-semibold text-blue-500 flex items-center justify-end">
                  Open Map <ChevronRight size={12} className="ml-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard title={t.foodLabel} icon={Utensils} colorClass="bg-orange-50 border-orange-100">
            <ul className="list-disc list-inside space-y-1 mt-2 marker:text-orange-400">
              {t.foodPlans.map((plan, idx) => (
                <li key={idx} className="mb-3 last:mb-0">
                  <span className="font-semibold text-slate-800 block mb-1">{plan.category}</span>
                  <ul className="list-none pl-2 text-xs text-slate-600 space-y-1 border-l-2 border-orange-200 ml-1">
                    {plan.items.map((item, i) => (
                      <li key={i} className="pl-2">{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard title={t.logisticsLabel} icon={Info} colorClass="bg-blue-50 border-blue-100">
             <ul className="list-disc list-inside space-y-2 mt-2 marker:text-blue-400 text-sm">
              {t.logisticsNotes.map((note, idx) => (
                <li key={idx} className="leading-relaxed pl-1 -indent-1 ml-1">{note}</li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-xs font-semibold text-blue-800 uppercase tracking-wide mb-1">{t.shoppingTeamLabel}</p>
              <p className="text-xs text-blue-600 bg-blue-100/50 p-2 rounded-lg">{t.shoppingTeamMembers}</p>
            </div>
          </InfoCard>
        </div>

        <div className="h-10"></div>
        
        <footer className="text-center text-slate-400 text-xs pb-6">
          <p>{t.footer}</p>
          <p className="mt-1">February 2026</p>
        </footer>
      </div>
    </div>
  );
};

export default App;