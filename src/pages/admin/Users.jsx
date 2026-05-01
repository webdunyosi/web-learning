import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  ShieldAlert, 
  GraduationCap, 
  User as UserIcon,
  CheckCircle2,
  XCircle,
  Mail,
  Phone
} from 'lucide-react';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Mock Foydalanuvchilar ro'yxati
  const [users, setUsers] = useState([
    { id: 1, name: 'Sardor Tursunov', email: 'sardor@weblearning.uz', phone: '+998 90 123 45 67', role: 'Teacher', status: 'Active', date: '2023-01-15' },
    { id: 2, name: 'Ali Valiyev', email: 'ali.v@gmail.com', phone: '+998 93 987 65 43', role: 'Student', status: 'Active', date: '2023-11-20' },
    { id: 3, name: 'Madina Ikromova', email: 'madina@mail.ru', phone: '+998 88 111 22 33', role: 'Student', status: 'Inactive', date: '2024-02-10' },
    { id: 4, name: 'Super Admin', email: 'admin@weblearning.uz', phone: '+998 99 000 00 00', role: 'Admin', status: 'Active', date: '2022-05-01' },
    { id: 5, name: 'Javohir Toshtemirov', email: 'javohir.dev@gmail.com', phone: '+998 97 555 44 33', role: 'Student', status: 'Banned', date: '2024-01-05' },
    { id: 6, name: 'Lobar Karimova', email: 'lobar.design@gmail.com', phone: '+998 94 777 88 99', role: 'Teacher', status: 'Active', date: '2023-08-12' },
  ]);

  // Rol va Status uchun ranglar va ikonkalarni belgilovchi yordamchi funksiyalar
  const getRoleStyle = (role) => {
    switch(role) {
      case 'Admin': return { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20', icon: ShieldAlert };
      case 'Teacher': return { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20', icon: GraduationCap };
      case 'Student': return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', icon: UserIcon };
      default: return { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/20', icon: UserIcon };
    }
  };

  const getStatusStyle = (status) => {
    switch(status) {
      case 'Active': return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', icon: CheckCircle2 };
      case 'Inactive': return { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20', icon: Filter }; // Filter islatildi faqat misol uchun
      case 'Banned': return { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20', icon: XCircle };
      default: return { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/20', icon: CheckCircle2 };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. HEADER: Sarlavha va Qo'shish tugmasi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Foydalanuvchilar</h1>
          <p className="text-gray-500 text-sm mt-1">Barcha o'quvchi, o'qituvchi va adminlarni boshqarish</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-bold shadow-[0_10px_30px_rgba(225,29,72,0.3)] transition-all active:scale-95 group">
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          Yangi qo'shish
        </button>
      </div>

      {/* 2. FILTERLAR VA QIDIRUV */}
      <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 flex flex-col md:flex-row gap-4 shadow-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input 
            type="text" 
            placeholder="Ism, email yoki telefon orqali qidirish..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-rose-500/50 outline-none transition-all"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <select 
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="appearance-none bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-10 text-white font-medium focus:border-rose-500/50 outline-none cursor-pointer transition-all"
            >
              <option value="All" className="bg-[#1a1d24]">Barcha rollar</option>
              <option value="Admin" className="bg-[#1a1d24]">Admin</option>
              <option value="Teacher" className="bg-[#1a1d24]">O'qituvchi</option>
              <option value="Student" className="bg-[#1a1d24]">O'quvchi</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. FOYDALANUVCHILAR JADVALI */}
      <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-gray-400 text-[11px] font-bold uppercase tracking-widest border-b border-white/5">
                <th className="px-8 py-5">Foydalanuvchi</th>
                <th className="px-8 py-5">Aloqa</th>
                <th className="px-8 py-5">Rol</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user) => {
                const RoleStyle = getRoleStyle(user.role);
                const StatusStyle = getStatusStyle(user.status);

                return (
                  <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors">
                    
                    {/* Foydalanuvchi info */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 border ${RoleStyle.bg} ${RoleStyle.text} ${RoleStyle.border}`}>
                          {user.name[0]}
                        </div>
                        <div>
                          <h4 className="text-gray-200 font-bold group-hover:text-rose-300 transition-colors">{user.name}</h4>
                          <p className="text-[11px] text-gray-500 mt-0.5">Qo'shildi: {user.date}</p>
                        </div>
                      </div>
                    </td>

                    {/* Aloqa */}
                    <td className="px-8 py-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          <Mail className="w-3.5 h-3.5 opacity-70" /> {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          <Phone className="w-3.5 h-3.5 opacity-70" /> {user.phone}
                        </div>
                      </div>
                    </td>

                    {/* Rol */}
                    <td className="px-8 py-5">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider border ${RoleStyle.bg} ${RoleStyle.text} ${RoleStyle.border}`}>
                        <RoleStyle.icon className="w-3.5 h-3.5" />
                        {user.role}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-8 py-5 text-center">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${StatusStyle.bg} ${StatusStyle.text} ${StatusStyle.border}`}>
                        <StatusStyle.icon className="w-3 h-3" />
                        {user.status}
                      </div>
                    </td>

                    {/* Amallar */}
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl transition-all">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-xl transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl transition-all">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 4. PAGINATSIYA (Yordamchi pastki qism) */}
        <div className="p-6 border-t border-white/5 flex items-center justify-between bg-white/[0.01]">
          <p className="text-sm text-gray-500 font-medium">Jami 3,240 ta dan 1-6 ko'rsatilmoqda</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm font-bold hover:bg-white/10 transition-all disabled:opacity-50">Oldingi</button>
            <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm font-bold hover:bg-white/10 transition-all">Keyingi</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminUsers;