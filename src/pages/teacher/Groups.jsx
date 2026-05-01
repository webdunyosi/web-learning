import React from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Search, 
  Plus, 
  MoreVertical,
  GraduationCap
} from 'lucide-react';

const TeacherGroups = () => {
  // Mock ma'lumotlar - guruhlar ro'yxati
  const groups = [
    {
      id: 1,
      name: 'Frontend B-24',
      direction: 'Web Dasturlash',
      studentsCount: 18,
      days: 'Dush/Sesh/Chor',
      time: '14:00 - 16:00',
      progress: 65,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Backend Node-12',
      direction: 'Node.js & Express',
      studentsCount: 12,
      days: 'Sesh/Pay/Shan',
      time: '10:00 - 12:00',
      progress: 30,
      status: 'Active'
    },
    {
      id: 3,
      name: 'Fullstack JS-05',
      direction: 'MERN Stack',
      studentsCount: 22,
      days: 'Har kuni',
      time: '18:30 - 20:30',
      progress: 85,
      status: 'Finishing'
    },
    {
      id: 4,
      name: 'Foundation G-10',
      direction: 'IT asoslari',
      studentsCount: 15,
      days: 'Dush/Chor/Jum',
      time: '09:00 - 11:00',
      progress: 10,
      status: 'New'
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER QISMI: Qidiruv va Yangi guruh */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">Guruhlarim</h1>
          <p className="text-gray-500 text-sm mt-1">Siz biriktirilgan barcha faol guruhlar ro'yxati</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Guruh qidirish..." 
              className="bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-200 outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all w-full md:w-64"
            />
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] active:scale-95">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. GURUHLAR SETKASI (GRID) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div 
            key={group.id} 
            className="group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all duration-500 shadow-2xl overflow-hidden"
          >
            {/* Dekorativ orqa fon nuri */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 blur-[50px] group-hover:bg-indigo-500/10 transition-all"></div>

            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
              </div>
              <button className="text-gray-600 hover:text-white transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">{group.name}</h3>
              <p className="text-gray-500 text-sm font-medium mt-1">{group.direction}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4 text-indigo-400/70" />
                <span className="text-xs font-semibold">{group.studentsCount} o'quvchi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-indigo-400/70" />
                <span className="text-xs font-semibold">{group.time}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 col-span-2">
                <Calendar className="w-4 h-4 text-indigo-400/70" />
                <span className="text-xs font-semibold">{group.days}</span>
              </div>
            </div>

            {/* Progress Bar (Kurs qancha qismi o'tilganligi) */}
            <div className="mt-8">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
                <span className="text-gray-500">O'zlashtirish</span>
                <span className="text-indigo-400">{group.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000"
                  style={{ width: `${group.progress}%` }}
                ></div>
              </div>
            </div>

            <button className="w-full mt-8 py-3 bg-white/[0.03] hover:bg-indigo-600 border border-white/5 hover:border-indigo-500 text-gray-300 hover:text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 group/btn">
              Guruhni boshqarish
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherGroups;