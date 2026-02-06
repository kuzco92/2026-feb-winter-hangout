import React from 'react';
import { ScheduleItem } from '../types';
import { Car, Mountain, Utensils, Coffee, Bed, ShoppingBag, Home, MapPin, ExternalLink } from 'lucide-react';

interface TimelineProps {
  items: ScheduleItem[];
  day: string;
  date: string;
}

const getIcon = (iconType?: string) => {
  switch (iconType) {
    case 'car': return <Car size={18} />;
    case 'mountain': return <Mountain size={18} />;
    case 'food': return <Utensils size={18} />;
    case 'coffee': return <Coffee size={18} />;
    case 'bed': return <Bed size={18} />;
    case 'shopping': return <ShoppingBag size={18} />;
    case 'home': return <Home size={18} />;
    default: return <MapPin size={18} />;
  }
};

const Timeline: React.FC<TimelineProps> = ({ items, day, date }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4 sticky top-16 bg-slate-50/95 backdrop-blur py-2 z-10 border-b border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mr-2">{day}</h3>
        <span className="text-sm text-slate-500 font-medium">{date}</span>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-3 space-y-6 pb-2">
        {items.map((item, index) => (
          <div key={index} className="mb-8 ml-6 relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] flex h-8 w-8 items-center justify-center rounded-full bg-white ring-2 ring-slate-200 text-slate-500 group-hover:ring-blue-500 group-hover:text-blue-500 transition-colors">
              {getIcon(item.icon)}
            </span>

            {/* Content Card */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <span className="text-sm font-bold text-blue-600 mb-1 sm:mb-0">{item.time}</span>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-xs text-slate-400 hover:text-blue-500 transition-colors w-fit"
                  >
                    View Map/Link <ExternalLink size={12} className="ml-1" />
                  </a>
                )}
              </div>
              <h4 className="text-lg font-semibold text-slate-800">{item.activity}</h4>
              
              {item.location && (
                <div className="flex items-center text-slate-600 text-sm mt-1">
                  <MapPin size={14} className="mr-1 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>
              )}
              
              {item.note && (
                <div className="mt-2 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg italic">
                  "{item.note}"
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;