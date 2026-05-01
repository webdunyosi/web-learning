import React from 'react';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

const TeacherDashboard = () => {
  // Mock ma'lumotlar
  const stats = [
    { id: 1, name: 'Jami o\'quvchilar', value: '124', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { id: 2, name: 'Guruhlarim', value: '8', icon: BookOpen, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { id: 3, name: 'Bugungi darslar', value: '4', icon: Calendar, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { id: 4, name: 'O\'rtacha davomat', value: '92%', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const upcomingClasses = [
    { id: 1, group: 'Frontend B-24', topic: 'React Context API', time: '14:00', room: '3-xona' },
    { id: 2, group: 'Backend Node-12', topic: 'MongoDB Aggregation', time: '16:00', room: 'Virtual' },
    { id: 3, group: 'Fullstack JS-05', topic: 'Deploy to Vercel', time: '18:30', room: '1-xona' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* 1. XUSHAMED VA STATISTIKA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="relative group bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 shadow-2xl"
          >
            <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-4 border border-white/5`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <p className="text-gray-400 text-sm font-medium">{stat.name}</p>
            <h3 className="text-2xl font-black text-white mt-1">{stat.value}</h3>
            
            {/* O'sish ko'rsatkichi (dekorativ) */}
            <div className="absolute top-6 right-6 text-emerald-400 flex items-center gap-1 text-xs font-bold">
              <ArrowUpRight className="w-3 h-3" />
              +12%
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. BUGUNGI DARS JADVALI */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Clock className="w-6 h-6 text-indigo-400" />
              Bugungi dars jadvali
            </h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
              Barchasini ko'rish
            </button>
          </div>

          <div className="space-y-4">
            {upcomingClasses.map((cls) => (
              <div 
                key={cls.id} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    {cls.time}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{cls.group}</h4>
                    <p className="text-gray-500 text-sm">{cls.topic}</p>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 flex items-center gap-4">
                  <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-400 border border-white/10">
                    {cls.room}
                  </span>
                  <button className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. TEZKOR MA'LUMOTLAR VA FAOLIYAT */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            So'nggi faollik
          </h2>

          <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-1 h-10 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                <div>
                  <p className="text-sm text-gray-300 font-medium">Yangi vazifa yuklandi</p>
                  <p className="text-xs text-gray-500 mt-1">Frontend B-24 guruhi uchun</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 h-10 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <div>
                  <p className="text-sm text-gray-300 font-medium">Davomat yakunlandi</p>
                  <p className="text-xs text-gray-500 mt-1">JS-05 guruhi, 22 o'quvchi</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1 h-10 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                <div>
                  <p className="text-sm text-gray-300 font-medium">Yangi xabar</p>
                  <p className="text-xs text-gray-500 mt-1">Ali Valiyev savol yo'lladi</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-bold hover:bg-white/10 transition-all">
              Barcha hisobotlar
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default TeacherDashboard;