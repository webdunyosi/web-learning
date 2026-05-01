import React, { useState } from 'react';
import { Trophy, Medal, Award, Coins, ChevronUp, ChevronDown, Minus, Sparkles, Crown } from 'lucide-react';

const Leaderboard = () => {
  const [filter, setFilter] = useState('umumiy');

  // Test uchun o'quvchilar reytingi (Mock Data)
  const leaderboardData = [
    { id: 1, rank: 1, name: "Madina Abdullayeva", coins: 2450, trend: "up", isMe: false, avatar: "MA" },
    { id: 2, rank: 2, name: "Azizbek Rahimov", coins: 2120, trend: "up", isMe: false, avatar: "AR" },
    { id: 3, rank: 3, name: "Sardor Tursunov", coins: 1980, trend: "down", isMe: false, avatar: "ST" },
    { id: 4, rank: 4, name: "Nigina Valiyeva", coins: 1850, trend: "same", isMe: false, avatar: "NV" },
    { id: 5, rank: 5, name: "Ali Valiyev", coins: 1720, trend: "up", isMe: true, avatar: "AV" }, // Hozirgi o'quvchi
    { id: 6, rank: 6, name: "Doston Ergashev", coins: 1600, trend: "down", isMe: false, avatar: "DE" },
    { id: 7, rank: 7, name: "Malika Karimova", coins: 1450, trend: "same", isMe: false, avatar: "MK" },
    { id: 8, rank: 8, name: "Jasur Oripov", coins: 1200, trend: "up", isMe: false, avatar: "JO" },
  ];

  // O'rinlarga qarab shishasimon dizayn beruvchi funksiya
  const getRankStyle = (rank) => {
    switch (rank) {
      case 1: 
        return { 
          icon: Crown, 
          color: "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]", 
          bg: "bg-gradient-to-br from-yellow-400/20 to-yellow-600/5 border border-yellow-400/30", 
          glow: "shadow-[inset_0_0_20px_rgba(250,204,21,0.2)]"
        };
      case 2: 
        return { 
          icon: Medal, 
          color: "text-slate-300 drop-shadow-[0_0_8px_rgba(203,213,225,0.8)]", 
          bg: "bg-gradient-to-br from-slate-300/20 to-slate-500/5 border border-slate-300/30", 
          glow: "shadow-[inset_0_0_15px_rgba(203,213,225,0.1)]"
        };
      case 3: 
        return { 
          icon: Award, 
          color: "text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]", 
          bg: "bg-gradient-to-br from-orange-400/20 to-orange-600/5 border border-orange-400/30", 
          glow: "shadow-[inset_0_0_15px_rgba(251,146,60,0.15)]"
        };
      default: 
        return { 
          icon: null, 
          color: "text-gray-400", 
          bg: "bg-white/[0.03] border border-white/5", 
          glow: ""
        };
    }
  };

  // Trend (o'sish/pasayish) ikonkalari (Neon)
  const getTrendIcon = (trend) => {
    if (trend === 'up') return <ChevronUp className="w-4 h-4 text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]" />;
    if (trend === 'down') return <ChevronDown className="w-4 h-4 text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.8)]" />;
    return <Minus className="w-4 h-4 text-gray-500" />;
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* 1. SARLAVHA VA FILTR QISMI (Liquid Glass Panel) */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        
        {/* Orqa fondagi shaffof yorug'lik */}
        <div className="absolute top-[-50%] right-[-10%] w-[250px] h-[250px] bg-yellow-500/10 rounded-full blur-[70px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
            <Trophy className="w-7 h-7 text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]" />
            Liderlar Taxtasi
          </h1>
          <p className="text-gray-400 mt-2 font-medium">Markaz bo'yicha eng faol o'quvchilar ro'yxati</p>
        </div>

        {/* Shishasimon Filtrlash tugmalari */}
        <div className="relative z-10 flex bg-black/40 p-1.5 rounded-2xl border border-white/10 shadow-inner w-fit">
          <button 
            onClick={() => setFilter('umumiy')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              filter === 'umumiy' 
                ? 'bg-white/[0.1] text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
            }`}
          >
            Umumiy
          </button>
          <button 
            onClick={() => setFilter('guruh')}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              filter === 'guruh' 
                ? 'bg-white/[0.1] text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/20' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
            }`}
          >
            Guruhimda
          </button>
        </div>
      </div>

      {/* 2. REYTING RO'YXATI */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Jadval sarlavhasi */}
        <div className="grid grid-cols-12 gap-4 p-5 border-b border-white/10 bg-white/[0.01] text-xs font-bold text-gray-400 uppercase tracking-wider relative z-10">
          <div className="col-span-2 sm:col-span-1 text-center">O'rin</div>
          <div className="col-span-6 sm:col-span-7 pl-4">O'quvchi</div>
          <div className="col-span-4 sm:col-span-4 text-right pr-4">Coinlar</div>
        </div>

        {/* O'quvchilar ro'yxati */}
        <div className="divide-y divide-white/5 relative z-10">
          {leaderboardData.map((student) => {
            const style = getRankStyle(student.rank);
            const RankIcon = style.icon;

            return (
              <div 
                key={student.id} 
                className={`grid grid-cols-12 gap-4 p-4 items-center transition-all duration-300 hover:bg-white/[0.04] group relative ${
                  student.isMe ? 'bg-green-500/5' : ''
                }`}
              >
                {/* Agar o'quvchining o'zi bo'lsa, yonib turgan yashil chiziq va fon nuri */}
                {student.isMe && (
                  <>
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)] z-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-50 pointer-events-none"></div>
                  </>
                )}

                {/* 1. O'rin (Rank) */}
                <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center relative z-10">
                  {RankIcon ? (
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.bg} ${style.glow}`}>
                      <RankIcon className={`w-5 h-5 ${style.color}`} />
                    </div>
                  ) : (
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${style.bg} group-hover:border-white/10 transition-colors`}>
                      <span className="text-lg font-bold text-gray-300">{student.rank}</span>
                    </div>
                  )}
                  {/* O'sish/pasayish trendi */}
                  <div className="mt-1.5">{getTrendIcon(student.trend)}</div>
                </div>

                {/* 2. O'quvchi ma'lumotlari */}
                <div className="col-span-6 sm:col-span-7 flex items-center gap-4 pl-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border transition-all ${
                    student.isMe 
                      ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-green-500/50 text-green-300 shadow-[0_0_15px_rgba(74,222,128,0.2)]' 
                      : 'bg-white/[0.05] border-white/10 text-gray-300 group-hover:border-white/20'
                  }`}>
                    {student.avatar}
                  </div>
                  <div>
                    <p className={`font-bold text-base md:text-lg drop-shadow-sm flex items-center gap-2 ${student.isMe ? 'text-green-400' : 'text-gray-100 group-hover:text-white transition-colors'}`}>
                      {student.name} 
                      {student.isMe && <span className="text-[10px] bg-green-500/20 border border-green-500/30 px-2 py-0.5 rounded-full text-green-300">Siz</span>}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 font-medium">Web dasturlash guruhi</p>
                  </div>
                </div>

                {/* 3. Coin miqdori */}
                <div className="col-span-4 sm:col-span-4 flex items-center justify-end gap-2 pr-4 relative z-10">
                  <span className={`font-bold text-lg md:text-xl drop-shadow-md ${student.isMe ? 'text-green-400' : 'text-gray-200'}`}>
                    {student.coins.toLocaleString()}
                  </span>
                  <div className="w-7 h-7 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/20">
                    <Coins className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;