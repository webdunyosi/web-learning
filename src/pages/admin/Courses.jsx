import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  Edit3, 
  Trash2, 
  BookOpen, 
  Users, 
  Clock, 
  DollarSign, 
  Star,
  PlayCircle,
  MoreVertical
} from 'lucide-react';

const AdminCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Mock Kurslar ro'yxati
  const [courses, setCourses] = useState([
    { 
      id: 1, 
      title: 'Frontend Dasturlash (React.js)', 
      category: 'Web Dasturlash', 
      instructor: 'Sardor Tursunov', 
      price: '450,000 UZS', 
      students: 124, 
      duration: '6 oy', 
      rating: 4.9, 
      status: 'Active',
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      id: 2, 
      title: 'Backend Node.js & Express', 
      category: 'Web Dasturlash', 
      instructor: 'Lobar Karimova', 
      price: '500,000 UZS', 
      students: 86, 
      duration: '5 oy', 
      rating: 4.8, 
      status: 'Active',
      color: 'from-emerald-500 to-green-600' 
    },
    { 
      id: 3, 
      title: 'UX/UI Dizayn Asoslari', 
      category: 'Dizayn', 
      instructor: 'Aziz Rahimov', 
      price: '400,000 UZS', 
      students: 210, 
      duration: '3 oy', 
      rating: 4.9, 
      status: 'Active',
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      id: 4, 
      title: 'Python Foundation', 
      category: 'Dasturlash Asoslari', 
      instructor: 'Dilshodbek', 
      price: '300,000 UZS', 
      students: 0, 
      duration: '2 oy', 
      rating: 0, 
      status: 'Draft', // Qoralama
      color: 'from-yellow-400 to-orange-500' 
    },
    { 
      id: 5, 
      title: 'Fullstack MERN Bootcamp', 
      category: 'Web Dasturlash', 
      instructor: 'Sardor Tursunov', 
      price: '800,000 UZS', 
      students: 45, 
      duration: '8 oy', 
      rating: 4.7, 
      status: 'Active',
      color: 'from-rose-500 to-red-600' 
    },
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. HEADER: Sarlavha va Yangi kurs qo'shish */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Kurslar</h1>
          <p className="text-gray-500 text-sm mt-1">Platformadagi barcha kurslarni boshqarish va tahrirlash</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-bold shadow-[0_10px_30px_rgba(225,29,72,0.3)] transition-all active:scale-95 group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          Yangi kurs
        </button>
      </div>

      {/* 2. FILTERLAR VA QIDIRUV */}
      <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 flex flex-col md:flex-row gap-4 shadow-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input 
            type="text" 
            placeholder="Kurs nomini qidirish..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-rose-500/50 outline-none transition-all"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="appearance-none bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-10 text-white font-medium focus:border-rose-500/50 outline-none cursor-pointer transition-all"
            >
              <option value="All" className="bg-[#1a1d24]">Barcha yo'nalishlar</option>
              <option value="Web" className="bg-[#1a1d24]">Web Dasturlash</option>
              <option value="Design" className="bg-[#1a1d24]">Dizayn</option>
              <option value="Foundation" className="bg-[#1a1d24]">Asoslar</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. KURSLAR GRID (KARTALAR) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="group flex flex-col bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:bg-white/[0.04] hover:border-rose-500/30 transition-all duration-300 shadow-2xl"
          >
            {/* Karta rasmi/Foni o'rniga Gradient Placeholder */}
            <div className={`h-40 w-full relative bg-gradient-to-br ${course.color} p-5 flex flex-col justify-between overflow-hidden`}>
              {/* Abstract naqsh (shunchaki CSS bilan) */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-lg text-[10px] font-black text-white uppercase tracking-wider border border-white/10">
                  {course.category}
                </span>
                
                {/* Status Badge */}
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border backdrop-blur-md shadow-lg ${
                  course.status === 'Active' ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/30' : 'bg-yellow-500/20 text-yellow-100 border-yellow-500/30'
                }`}>
                  {course.status}
                </span>
              </div>
              
              <div className="relative z-10">
                <PlayCircle className="w-10 h-10 text-white/80 drop-shadow-lg group-hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* Karta Kontenti */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors line-clamp-2">
                {course.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-6 text-sm">
                <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold text-gray-300">
                  {course.instructor[0]}
                </div>
                <span className="text-gray-400">{course.instructor}</span>
              </div>

              {/* Statistika qatori */}
              <div className="grid grid-cols-3 gap-2 mb-6 pt-4 border-t border-white/5">
                <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl py-2 gap-1">
                  <Users className="w-4 h-4 text-rose-400" />
                  <span className="text-xs font-bold text-white">{course.students}</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl py-2 gap-1">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-bold text-white">{course.duration}</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl py-2 gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold text-white">{course.rating || 'N/A'}</span>
                </div>
              </div>

              {/* Pastki qism: Narx va Amallar */}
              <div className="mt-auto flex items-center justify-between pt-4">
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Kurs narxi</p>
                  <p className="text-lg font-black text-white flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                    {course.price}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-2.5 bg-white/5 hover:bg-rose-500/20 text-gray-400 hover:text-rose-400 rounded-xl transition-all border border-transparent hover:border-rose-500/30">
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-xl transition-all border border-transparent hover:border-red-500/30">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminCourses;