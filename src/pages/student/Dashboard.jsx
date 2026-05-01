import React from 'react';
import { BookOpen, Trophy, Clock, PlayCircle, Calendar, Coins, Sparkles, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  // Test uchun ma'lumotlar
  const stats = [
    { 
      title: "To'plangan Coin", 
      value: "15", 
      icon: Coins, 
      color: "text-yellow-400", 
      bgIcon: "bg-yellow-500/10",
      glowColor: "bg-yellow-500",
      hoverBorder: "group-hover:border-yellow-500/30"
    },
    { 
      title: "Faol kurslar", 
      value: "4", 
      icon: BookOpen, 
      color: "text-green-400", 
      bgIcon: "bg-green-500/10",
      glowColor: "bg-green-500",
      hoverBorder: "group-hover:border-green-500/30"
    },
    { 
      title: "Reytingdagi o'rin", 
      value: "2", 
      icon: Trophy, 
      color: "text-indigo-400", 
      bgIcon: "bg-indigo-500/10",
      glowColor: "bg-indigo-500",
      hoverBorder: "group-hover:border-indigo-500/30"
    },
    { 
      title: "O'tilgan darslar", 
      value: "32", 
      icon: Clock, 
      color: "text-purple-400", 
      bgIcon: "bg-purple-500/10",
      glowColor: "bg-purple-500",
      hoverBorder: "group-hover:border-purple-500/30"
    },
  ];

  const todayClasses = [
    { time: "14:00", subject: "Frontend Dasturlash", teacher: "Sardor aka", status: "Boshlanmagan" },
    { time: "16:30", subject: "Ingliz tili (IELTS)", teacher: "Malika opa", status: "Boshlanmagan" },
  ];

  return (
    <div className="space-y-6">
      
      {/* 1. XUSH KELIBSIZ (Asosiy Liquid Glass panel) */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-8 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        
        {/* Ichki suyuq nurlar (Inner Liquid Blobs) */}
        <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-green-500/20 rounded-full blur-[80px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-50%] left-[10%] w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[60px] mix-blend-screen pointer-events-none"></div>
        
        {/* Shishasimon yaltirash (Glass Reflection) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
              Xush kelibsiz, Ali! <Sparkles className="w-6 h-6 text-green-400 animate-pulse drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
            </h1>
            <p className="text-gray-300 mt-2 font-medium">Bugun o'qishni davom ettirish va yangi Coinlar yig'ish uchun ajoyib kun.</p>
          </div>
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-white font-semibold transition-all flex items-center gap-2 w-fit shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-0.5">
            Reytingni ko'rish <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. STATISTIKA KARTOCHKALARI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`group relative bg-white/[0.02] backdrop-blur-2xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-2xl p-6 flex items-center gap-4 transition-all duration-500 hover:bg-white/[0.04] ${stat.hoverBorder} hover:-translate-y-1 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]`}>
            
            {/* Hover bo'lganda orqa fonda paydo bo'ladigan nur */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 ${stat.glowColor} opacity-0 group-hover:opacity-20 blur-[40px] rounded-full transition-opacity duration-500 pointer-events-none`}></div>
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.bgIcon} relative z-10 transition-transform duration-500 group-hover:scale-110 border border-white/5 shadow-inner`}>
              <stat.icon className={`w-7 h-7 ${stat.color} drop-shadow-md`} />
            </div>
            
            <div className="relative z-10">
              <p className="text-sm text-gray-400 font-medium mb-1 group-hover:text-gray-300 transition-colors">{stat.title}</p>
              <p className="text-2xl font-bold text-white tracking-wide drop-shadow-sm">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. ASOSIY KONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* CHAP USTUN */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative bg-white/[0.02] backdrop-blur-2xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] overflow-hidden group/panel">
            
            {/* Oyna aks etishi */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none"></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <h2 className="text-lg font-bold text-white drop-shadow-sm">O'qishni davom ettirish</h2>
              <button className="text-sm text-green-400 font-medium hover:text-green-300 hover:underline transition-all drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">Barchasi</button>
            </div>
            
            {/* Dars bloki */}
            <div className="relative flex flex-col sm:flex-row gap-5 items-center bg-white/[0.03] backdrop-blur-md p-4 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-500 cursor-pointer group/card shadow-inner">
              
              {/* Rasm/Video qismi */}
              <div className="w-full sm:w-48 h-32 bg-black/40 rounded-xl flex items-center justify-center shrink-0 relative overflow-hidden border border-white/10 group-hover/card:border-green-500/40 transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <PlayCircle className="w-14 h-14 text-green-400/80 group-hover/card:text-green-400 group-hover/card:scale-110 transition-all duration-500 drop-shadow-[0_0_15px_rgba(74,222,128,0.6)] relative z-10" />
              </div>
              
              {/* Ma'lumot qismi */}
              <div className="flex-1 w-full relative z-10">
                <span className="text-[10px] font-bold text-green-300 uppercase tracking-wider bg-green-500/20 px-2.5 py-1 rounded-md border border-green-500/20 backdrop-blur-sm">ReactJS Noldan</span>
                <h3 className="text-lg font-bold text-white mt-3 mb-4 group-hover/card:text-green-300 transition-colors drop-shadow-sm">12-dars. React Router Dom va Layoutlar</h3>
                
                {/* Neon Progress Bar */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex-1 bg-black/50 h-3 rounded-full overflow-hidden border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] p-[1.5px]">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-400 h-full w-[65%] rounded-full shadow-[0_0_12px_rgba(74,222,128,0.8)] relative">
                       <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/50 rounded-full blur-[2px]"></div>
                    </div>
                  </div>
                  <span className="font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">65%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* O'NG USTUN */}
        <div className="space-y-6">
          <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] overflow-hidden">
            
            <div className="absolute bottom-[-20%] right-[-20%] w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-[50px] mix-blend-screen pointer-events-none"></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shadow-[inset_0_0_10px_rgba(59,130,246,0.2)]">
                <Calendar className="w-5 h-5 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              </div>
              <h2 className="text-lg font-bold text-white drop-shadow-sm">Bugungi darslar</h2>
            </div>
            
            <div className="space-y-0 relative z-10">
              {/* Shishasimon Timeline chizig'i */}
              <div className="absolute left-[39px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>

              {todayClasses.map((cls, idx) => (
                <div key={idx} className="flex gap-4 items-start relative z-10 group cursor-pointer">
                   
                   {/* Vaqt */}
                   <div className="flex flex-col items-center w-20 pt-3">
                      <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors drop-shadow-sm">{cls.time}</span>
                   </div>
                   
                   {/* Kartochka */}
                   <div className="bg-white/[0.03] backdrop-blur-md p-4 rounded-2xl border border-white/5 flex-1 mb-4 group-hover:border-white/20 group-hover:bg-white/[0.05] transition-all duration-300 shadow-sm relative overflow-hidden">
                      
                      {/* Timeline tugunchasi */}
                      <div className="w-3.5 h-3.5 rounded-full bg-gray-800 border-2 border-gray-500 absolute left-[-30px] top-4 group-hover:border-blue-400 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:bg-blue-500 transition-all duration-300 z-20"></div>
                      
                      {/* Ichki hover nuri */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                      <p className="font-bold text-gray-100 text-sm mb-1.5 drop-shadow-sm">{cls.subject}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-2">
                        {cls.teacher} 
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span> 
                        <span className="text-yellow-400/90 font-medium">{cls.status}</span>
                      </p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;