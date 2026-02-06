import React, { useState } from 'react';
import { Calendar, Users, Map, Utensils, Info, CheckCircle2, Wind } from 'lucide-react';
import { TRIP_TITLE, TRIP_DATES, MEMBERS, LOGISTICS, FOOD_PLANS, TRIP_SCHEDULE, ACCOMMODATION } from './constants';
import { PlanType } from './types';
import Timeline from './components/Timeline';
import InfoCard from './components/InfoCard';
import MemberAvatar from './components/MemberAvatar';

const App: React.FC = () => {
  const [activePlan, setActivePlan] = useState<PlanType>(PlanType.A);

  const activeSchedule = activePlan === PlanType.A ? TRIP_SCHEDULE.planA : TRIP_SCHEDULE.planB;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Image & Title */}
      <div className="relative h-64 bg-slate-900 overflow-hidden">
        <img 
          src="https://picsum.photos/800/600?grayscale" 
          alt="Winter Mountain" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent flex flex-col justify-end p-6">
          <div className="max-w-3xl mx-auto w-full">
            <span className="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-bold rounded-full mb-2">
              Confirmed Trip
            </span>
            <h1 className="text-3xl font-bold text-white mb-1">{TRIP_TITLE}</h1>
            <div className="flex items-center text-slate-300 text-sm">
              <Calendar size={14} className="mr-1" />
              {TRIP_DATES}
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
                <Map size={14} className="mr-1" /> Meeting Point
              </h2>
              <div className="flex flex-col">
                <a 
                  href={LOGISTICS.meetingLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-blue-600 hover:underline flex items-center"
                >
                  {LOGISTICS.meetingPoint}
                </a>
                <span className="text-2xl font-bold text-slate-800 mt-1">{LOGISTICS.meetingTime}</span>
                <span className="text-xs text-red-500 font-medium mt-1">*Don't be late! Cable car opens early.</span>
              </div>
            </div>

            {/* Accommodation */}
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
                <CheckCircle2 size={14} className="mr-1" /> Accommodation
              </h2>
               <div className="flex flex-col">
                <a 
                  href={ACCOMMODATION.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-green-600 hover:underline flex items-center"
                >
                  {ACCOMMODATION.name}
                </a>
                <span className="text-sm text-slate-600 mt-1">{ACCOMMODATION.address}</span>
                <span className="text-xs text-slate-400 mt-1">Confirmed Option 2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100">
          <h2 className="text-sm font-bold text-slate-800 mb-4 flex items-center">
            <Users size={16} className="mr-2 text-blue-500" /> 
            Participants ({MEMBERS.length})
          </h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {MEMBERS.map((member, idx) => (
              <MemberAvatar key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Plan Toggle */}
        <div className="sticky top-0 z-20 py-2 bg-slate-50/95 backdrop-blur">
          <div className="bg-slate-200 p-1 rounded-xl flex shadow-inner">
            <button
              onClick={() => setActivePlan(PlanType.A)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${
                activePlan === PlanType.A 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Plan A: Balwangsan
            </button>
            <button
              onClick={() => setActivePlan(PlanType.B)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all flex items-center justify-center ${
                activePlan === PlanType.B 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Wind size={14} className="mr-1" /> Plan B: Odaesan
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-xs text-slate-500">
              {activePlan === PlanType.A 
                ? "Primary plan. Depends on cable car operation (wind check required)." 
                : "Alternative plan in case of strong wind or heavy snow."}
            </p>
          </div>
        </div>

        {/* Itinerary */}
        <div>
          {activeSchedule.map((dayData, index) => (
            <Timeline 
              key={index} 
              items={dayData.items} 
              day={dayData.dayOfWeek} 
              date={dayData.date} 
            />
          ))}
        </div>

        {/* Food & Essentials Section */}
        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4 px-2">Trip Essentials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard title="Food & BBQ" icon={Utensils} colorClass="bg-orange-50 border-orange-100">
            <ul className="list-disc list-inside space-y-1 mt-2 marker:text-orange-400">
              {FOOD_PLANS.map((plan, idx) => (
                <li key={idx} className="mb-2">
                  <span className="font-semibold text-slate-800">{plan.category}</span>
                  <ul className="list-none pl-4 text-xs text-slate-600 mt-1 space-y-0.5 border-l-2 border-orange-200 ml-1">
                    {plan.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </InfoCard>

          <InfoCard title="Logistics & Notes" icon={Info} colorClass="bg-blue-50 border-blue-100">
             <ul className="list-disc list-inside space-y-2 mt-2 marker:text-blue-400">
              {LOGISTICS.notes.map((note, idx) => (
                <li key={idx} className="leading-relaxed">{note}</li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-xs font-semibold text-blue-800">Shopping Team</p>
              <p className="text-xs text-blue-600">Marco, Medrein, Euichan, Euijin (Friday)</p>
            </div>
          </InfoCard>
        </div>

        <div className="h-10"></div>
        
        <footer className="text-center text-slate-400 text-xs pb-6">
          <p>Created with Love for the Gangwon Trip Team ❤️</p>
          <p className="mt-1">February 2026</p>
        </footer>
      </div>
    </div>
  );
};

export default App;