import React from 'react';
import { Member } from '../types';

interface MemberAvatarProps {
  member: Member;
  lang: 'en' | 'ko';
}

const MemberAvatar: React.FC<MemberAvatarProps> = ({ member, lang }) => {
  const roleText = lang === 'en' ? member.role : (member.roleKo || member.role);
  
  return (
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full ${member.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-md mb-1`}>
        {member.name.charAt(0)}
      </div>
      <span className="text-xs font-medium text-slate-700">{member.name}</span>
      {roleText && (
        <span className="text-[10px] text-slate-500 text-center leading-tight mt-0.5 px-1 bg-slate-100 rounded-full max-w-[80px] truncate">
          {roleText}
        </span>
      )}
    </div>
  );
};

export default MemberAvatar;