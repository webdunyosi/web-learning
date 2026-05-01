import React, { useState } from 'react';
import { 
  Wallet, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Search, 
  Filter, 
  Download, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  XCircle,
  MoreVertical,
  CreditCard
} from 'lucide-react';

const AdminFinance = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Moliya statistikasi
  const stats = [
    { id: 1, name: 'Umumiy tushum', value: '248,500,000', change: '+15.2%', isUp: true, icon: Wallet, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { id: 2, name: 'Oylik sof foyda', value: '182,000,000', change: '+10.4%', isUp: true, icon: TrendingUp, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { id: 3, name: 'Kutilayotgan to\'lovlar', value: '12,400,000', change: '-5.1%', isUp: false, icon: Clock, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { id: 4, name: 'Xarajatlar', value: '54,100,000', change: '+2.4%', isUp: false, icon: TrendingDown, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  // Mock Tranzaksiyalar
  const transactions = [
    { id: 1, user: 'Ali Valiyev', course: 'Frontend B-24', amount: '450,000 UZS', method: 'Click', date: '2024-03-28 14:20', status: 'Success' },
    { id: 2, user: 'Sardor Azimov', course: 'Backend Node-12', amount: '500,000 UZS', method: 'Payme', date: '2024-03-28 12:05', status: 'Pending' },
    { id: 3, user: 'Madina Ikromova', course: 'UX/UI Design', amount: '400,000 UZS', method: 'Uzum', date: '2024-03-27 18:30', status: 'Success' },
    { id: 4, user: 'Javohir Toshtemirov', course: 'Foundation', amount: '300,000 UZS', method: 'Naqd', date: '2024-03-27 11:15', status: 'Cancelled' },
    { id: 5, user: 'Laylo Karimova', course: 'MERN Stack', amount: '800,000 UZS', method: 'Click', date: '2024-03-26 10:45', status: 'Success' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. HEADER: Sarlavha va Eksport */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Moliya va To'lovlar</h1>
          <p className="text-gray-500 text-sm mt-1">Platformadagi barcha pul aylanmalari va tranzaksiyalar nazorati</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-gray-300 transition-all active:scale-95 group">
          <Download className="w-5 h-5 text-rose-400" />
          Hisobotni yuklash (Excel)
        </button>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:bg-white/[0.04] transition-all">
            <div className={`absolute -right-4 -top-4 w-20 h-20 ${stat.bg} blur-2xl rounded-full`}></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center border border-white/5`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg ${stat.isUp ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
                  {stat.change}
                  <ArrowUpRight className={`w-3 h-3 ${!stat.isUp ? 'rotate-90' : ''}`} />
                </div>
              </div>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.name}</p>
              <h3 className="text-2xl font-black text-white mt-1">{stat.value} <span className="text-xs font-normal text-gray-500">UZS</span></h3>
            </div>
          </div>
        ))}
      </div>

      {/* 3. VIZUAL GRAFIK PLACEHOLDER (SVG asosida) */}
      <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-white">Tushumlar grafigi (Oxirgi 7 kun)</h2>
          <div className="flex gap-2">
             <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-[10px] font-bold text-emerald-400">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Tushum
             </div>
             <div className="flex items-center gap-2 px-3 py-1 bg-rose-500/10 rounded-lg border border-rose-500/20 text-[10px] font-bold text-rose-400">
                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div> Xarajat
             </div>
          </div>
        </div>
        
        {/* Visual Graph Mockup */}
        <div className="h-48 w-full flex items-end gap-2 px-4">
          {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-full bg-white/5 rounded-t-xl relative overflow-hidden h-full flex items-end">
                <div 
                  className="w-full bg-gradient-to-t from-rose-600 to-rose-400 rounded-t-xl transition-all duration-1000 group-hover:from-rose-500" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
              <span className="text-[10px] text-gray-500 font-bold uppercase">Kun {i+1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. TRANZAKSIYALAR JADVALI */}
      <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Foydalanuvchi yoki kurs bo'yicha qidirish..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-sm text-white focus:border-rose-500/50 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all">
              <Filter className="w-4 h-4" />
            </button>
            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-gray-300 outline-none focus:border-rose-500/50">
              <option value="All">Barcha to'lovlar</option>
              <option value="Success">Muvaffaqiyatli</option>
              <option value="Pending">Kutilmoqda</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/[0.02] text-gray-400 text-[11px] font-bold uppercase tracking-widest border-b border-white/5">
                <th className="px-8 py-5">Foydalanuvchi / Kurs</th>
                <th className="px-8 py-5">Miqdor</th>
                <th className="px-8 py-5">To'lov turi</th>
                <th className="px-8 py-5">Sana</th>
                <th className="px-8 py-5 text-center">Status</th>
                <th className="px-8 py-5 text-right">Amal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((tx) => (
                <tr key={tx.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="px-8 py-5">
                    <div>
                      <h4 className="text-gray-200 font-bold group-hover:text-rose-300 transition-colors">{tx.user}</h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">{tx.course}</p>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-white font-black">{tx.amount}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <CreditCard className="w-4 h-4 text-indigo-400" />
                      {tx.method}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-xs text-gray-500">
                    {tx.date}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex justify-center">
                      {tx.status === 'Success' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/20">
                          <CheckCircle2 className="w-3 h-3" /> To'landi
                        </span>
                      )}
                      {tx.status === 'Pending' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-yellow-500/10 text-yellow-400 text-[10px] font-black uppercase border border-yellow-500/20">
                          <Clock className="w-3 h-3" /> Kutilmoqda
                        </span>
                      )}
                      {tx.status === 'Cancelled' && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 text-red-400 text-[10px] font-black uppercase border border-red-500/20">
                          <XCircle className="w-3 h-3" /> Bekor qilindi
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white rounded-xl transition-all">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminFinance;