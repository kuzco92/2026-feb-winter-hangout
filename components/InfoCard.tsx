import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  colorClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, icon: Icon, children, colorClass = "bg-white" }) => {
  return (
    <div className={`p-5 rounded-2xl shadow-sm border border-slate-100 ${colorClass}`}>
      <div className="flex items-center mb-3">
        <Icon className="text-slate-700 mr-2" size={20} />
        <h3 className="font-bold text-slate-800">{title}</h3>
      </div>
      <div className="text-sm text-slate-600">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;