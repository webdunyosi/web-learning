import React from 'react';
import { 
  Users, 
  Wallet, 
  BookOpen, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldCheck,
  MoreVertical,
  GraduationCap
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock Statistika
  const stats = [
    { id: 1, name: 'Jami foydalanuvchilar', value: '3,240', change: '+12%', isUp: true, icon: Users, color: 'text-rose-400', bg: 'bg-rose-500/10' },
    { id: 2, name: 'Umumiy tushum', value: '142M UZS', change: '+8.4%', isUp: true, icon: Wallet, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { id: 3, name: 'Faol kurslar', value: '45', change: '-2%', isUp: false, icon: BookOpen, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { id: 4, name: 'Bugungi faollik', value: '840', change: '+24%', isUp: true, icon: Activity, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  ];

  // Mock So'nggi foydalanuvchilar
  const recentUsers = [
    { id: 1, name: 'Aziz Rahimov', role: 'Student', course: 'Frontend B-24', time: '10 daqiqa avval' },
    { id: 2, name: 'Malika Toirova', role: 'Teacher', course: 'UX/UI Design', time: '1 soat avval' },
    { id: 3, name: 'Dilshodbek', role: 'Student', course: 'Python Backend', time: '2 soat avval' },
    { id: 4, name: 'Kamola Aliyeva', role: 'Student', course: 'Foundation', time: '3 soat avval' },
  ];

  // Mock So'nggi tranzaksiyalar
  const transactions = [
    { id: 1, user: 'Aziz Rahimov', amount: '450,000 UZS', status: 'Completed', type: 'Click' },
    { id: 2, user: 'Sardor Azimov', amount: '450,000 UZS', status: 'Pending', type: 'Payme' },
    { id: 3, user: 'Laylo Karimova', amount: '600,000 UZS', status: 'Completed', type: 'Uzum' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 pb-10">
      
      {/* 1. HEADER QISMI */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Asosiy panel</h1>
          <p className="text-gray-500 text-sm mt-1">Platformaning bugungi holati va umumiy statistikasi</p>
        </div>
        <div className="flex items-center gap-3 bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-xl text-sm font-bold text-rose-400">
          <Activity className="w-4 h-4 animate-pulse" />
          Tizim barqaror ishlamoqda
        </div>
      </div>

      {/* 2. STATISTIKA KARTALARI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="relative group bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 shadow-2xl overflow-hidden"
          >
            <div className={`absolute -right-6 -top-6 w-24 h-24 ${stat.bg} blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center border border-white/5`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg ${stat.isUp ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'}`}>
                  {stat.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-400 text-sm font-semibold">{stat.name}</p>
              <h3 className="text-3xl font-black text-white mt-1 tracking-tight">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 3. SO'NGGI RO'YXATDAN O'TGANLAR */}
        <div className="lg:col-span-2 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Users className="w-6 h-6 text-rose-400" />
              So'nggi foydalanuvchilar
            </h2>
            <button className="text-sm text-rose-400 hover:text-rose-300 font-bold transition-colors">
              Barchasi
            </button>
          </div>

          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-[11px] font-bold uppercase tracking-widest border-b border-white/5">
                  <th className="pb-4 pr-4">Foydalanuvchi</th>
                  <th className="pb-4 px-4">Rol</th>
                  <th className="pb-4 px-4">Guruh/Kurs</th>
                  <th className="pb-4 pl-4 text-right">Vaqt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentUsers.map((user) => (
                  <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center border border-white/10 text-rose-300 font-bold text-xs shrink-0">
                          {user.name[0]}
                        </div>
                        <span className="text-gray-200 font-bold group-hover:text-rose-300 transition-colors whitespace-nowrap">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${user.role === 'Teacher' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-400">{user.course}</td>
                    <td className="py-4 pl-4 text-right text-xs text-gray-500 whitespace-nowrap">{user.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. SO'NGGI TO'LOVLAR (MOLIYA) */}
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <Wallet className="w-6 h-6 text-emerald-400" />
              To'lovlar
            </h2>
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-colors group">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    tx.status === 'Completed' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                  }`}>
                    {tx.status === 'Completed' ? <ShieldCheck className="w-5 h-5" /> : <Activity className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{tx.user}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{tx.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-white">{tx.amount}</p>
                  <p className={`text-[10px] font-bold uppercase mt-0.5 ${tx.status === 'Completed' ? 'text-emerald-400' : 'text-yellow-400'}`}>
                    {tx.status}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 bg-rose-600/10 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-500/20 rounded-xl text-sm font-bold transition-all">
            Moliya bo'limiga o'tish
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;