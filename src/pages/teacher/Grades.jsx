import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  Plus, 
  Trophy, 
  AlertCircle, 
  Edit3, 
  Download,
  Filter,
  CheckCircle2
} from 'lucide-react';

const TeacherGrades = () => {
  // Tanlangan kurs/topshiriq filtri
  const [activeTab, setActiveTab] = useState('Homework 1');

  // Mock o'quvchilar va ularning ballari
  const [gradeData, setGradeData] = useState([
    { id: 1, name: 'Ali Valiyev', score: 95, maxScore: 100, date: '2024-03-25', status: 'Graded' },
    { id: 2, name: 'Sardor Azimov', score: 45, maxScore: 100, date: '2024-03-25', status: 'Graded' },
    { id: 3, name: 'Madina Ikromova', score: 100, maxScore: 100, date: '2024-03-24', status: 'Graded' },
    { id: 4, name: 'Javohir Toshtemirov', score: null, maxScore: 100, date: '-', status: 'Pending' },
    { id: 5, name: 'Laylo Karimova', score: 88, maxScore: 100, date: '2024-03-24', status: 'Graded' },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER & SUMMARY CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex items-center gap-6 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
          <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20 shrink-0">
            <Trophy className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-white tracking-tight">Baholash tizimi</h1>
            <p className="text-gray-500 mt-1 italic">Guruh: <span className="text-indigo-400 font-bold">Frontend B-24</span> • O'rtacha natija: <span className="text-emerald-400 font-bold">82.4%</span></p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4 bg-white/[0.02] border border-white/10 p-4 rounded-[2.5rem]">
            <button className="flex-1 flex flex-col items-center gap-1 p-3 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl hover:bg-indigo-600 transition-all group">
                <Plus className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-white uppercase">Yangi Ustun</span>
            </button>
            <button className="flex-1 flex flex-col items-center gap-1 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                <Download className="w-5 h-5 text-gray-400 group-hover:text-white" />
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-white uppercase">Export Excel</span>
            </button>
        </div>
      </div>

      {/* 2. TOP SHIQIRIQLAR TABLARI */}
      <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
        {['Homework 1', 'Homework 2', 'Mid-term Exam', 'Final Project', 'Quiz 1'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all border ${
              activeTab === tab 
                ? 'bg-indigo-600 text-white border-indigo-500 shadow-[0_10px_20px_rgba(79,70,229,0.3)]' 
                : 'bg-white/5 text-gray-500 border-white/5 hover:bg-white/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. BAHOLAR JADVALI */}
      <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Ism bo'yicha qidirish..." 
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-gray-200 focus:border-indigo-500/50 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold text-gray-500 uppercase">Saralash:</span>
             <select className="bg-transparent text-sm text-gray-300 font-semibold outline-none cursor-pointer">
                <option value="name">Ism (A-Z)</option>
                <option value="score">Ball (O'sish)</option>
             </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-gray-400 text-[11px] font-bold uppercase tracking-widest">
                <th className="px-8 py-5">O'quvchi</th>
                <th className="px-8 py-5">Sana</th>
                <th className="px-8 py-5">Ball / {activeTab}</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Amal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {gradeData.map((item) => (
                <tr key={item.id} className="group hover:bg-white/[0.02] transition-all">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-white/10 flex items-center justify-center font-bold text-xs text-indigo-300">
                        {item.name[0]}
                      </div>
                      <span className="text-gray-200 font-bold group-hover:text-indigo-300 transition-colors">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-gray-500 text-sm">{item.date}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                       <input 
                        type="number" 
                        defaultValue={item.score}
                        placeholder="-"
                        className={`w-16 bg-white/5 border border-white/10 rounded-lg py-1 px-2 text-center font-black outline-none focus:border-indigo-500/50 ${
                            item.score >= 80 ? 'text-emerald-400' : item.score <= 50 && item.score !== null ? 'text-red-400' : 'text-indigo-300'
                        }`}
                       />
                       <span className="text-gray-600 text-xs font-bold">/ {item.maxScore}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    {item.status === 'Graded' ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-lg border border-emerald-400/20 w-fit">
                        <CheckCircle2 className="w-3 h-3" /> Baholandi
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-[10px] font-black uppercase text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-lg border border-yellow-400/20 w-fit">
                        <AlertCircle className="w-3 h-3" /> Kutilmoqda
                      </span>
                    )}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 bg-white/5 hover:bg-indigo-600 text-gray-400 hover:text-white rounded-xl transition-all shadow-lg">
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 bg-white/[0.01] flex justify-between items-center">
            <p className="text-xs text-gray-500 font-medium italic">* Ballarni to'g'ridan-to'g'ri jadvalning o'zida tahrirlashingiz mumkin.</p>
            <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all active:scale-95">
                Saqlash
            </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherGrades;