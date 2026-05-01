import React, { useState } from 'react';
import { 
  CalendarCheck, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Save,
  ChevronRight,
  UserCheck
} from 'lucide-react';

const TeacherAttendance = () => {
  // Tanlangan guruh va sana holati
  const [selectedGroup, setSelectedGroup] = useState('Frontend B-24');
  
  // Mock o'quvchilar ro'yxati
  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Valiyev', status: 'present' },
    { id: 2, name: 'Sardor Azimov', status: 'absent' },
    { id: 3, name: 'Madina Ikromova', status: 'present' },
    { id: 4, name: 'Javohir Toshtemirov', status: 'late' },
    { id: 5, name: 'Laylo Karimova', status: 'present' },
    { id: 6, name: 'Botir Zokirov', status: 'present' },
  ]);

  // Statusni o'zgartirish funksiyasi
  const toggleStatus = (id, newStatus) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. HEADER: Guruh tanlash va Sana */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
            <CalendarCheck className="w-7 h-7 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Davomat</h1>
            <p className="text-gray-500 text-sm">Guruh: <span className="text-indigo-400 font-bold">{selectedGroup}</span></p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <input 
            type="date" 
            defaultValue={new Date().toISOString().split('T')[0]}
            className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-200 outline-none focus:border-indigo-500/50 transition-all"
          />
          <select 
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-200 outline-none focus:border-indigo-500/50 transition-all"
          >
            <option value="Frontend B-24">Frontend B-24</option>
            <option value="Backend Node-12">Backend Node-12</option>
            <option value="Fullstack JS-05">Fullstack JS-05</option>
          </select>
        </div>
      </div>

      {/* 2. DAVOMAT JADVALI */}
      <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="O'quvchini qidirish..." 
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-gray-200 outline-none focus:border-indigo-500/50"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2">Tezkor:</span>
            <button className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all">Hammasi keldi</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                <th className="px-8 py-4">O'quvchi</th>
                <th className="px-8 py-4 text-center">Holat</th>
                <th className="px-8 py-4 text-right">Amal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {students.map((student) => (
                <tr key={student.id} className="group hover:bg-white/[0.02] transition-all">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 text-indigo-300 font-bold text-xs">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-gray-200 font-semibold group-hover:text-indigo-300 transition-colors">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex justify-center">
                      {student.status === 'present' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" /> Keldi
                        </span>
                      )}
                      {student.status === 'absent' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] font-black uppercase border border-red-500/20">
                          <XCircle className="w-3 h-3" /> Kelmadi
                        </span>
                      )}
                      {student.status === 'late' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-[10px] font-black uppercase border border-yellow-500/20">
                          <Clock className="w-3 h-3" /> Kechikdi
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => toggleStatus(student.id, 'present')}
                        className={`p-2 rounded-lg transition-all ${student.status === 'present' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'bg-white/5 text-gray-500 hover:text-emerald-400'}`}
                      >
                        <UserCheck className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => toggleStatus(student.id, 'absent')}
                        className={`p-2 rounded-lg transition-all ${student.status === 'absent' ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' : 'bg-white/5 text-gray-500 hover:text-red-400'}`}
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => toggleStatus(student.id, 'late')}
                        className={`p-2 rounded-lg transition-all ${student.status === 'late' ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/30' : 'bg-white/5 text-gray-500 hover:text-yellow-400'}`}
                      >
                        <Clock className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 3. SAQLASH TUGMASI */}
        <div className="p-8 bg-white/[0.01] border-t border-white/5 flex justify-end">
          <button className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all active:scale-95 group">
            <Save className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Davomatni saqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherAttendance;