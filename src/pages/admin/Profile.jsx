import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  CheckCircle2,
  Clock,
  Key,
  Database,
  Globe
} from 'lucide-react';

const AdminProfile = () => {
  // Mock Admin Ma'lumotlari
  const adminInfo = {
    name: 'Super Admin',
    role: 'Tizim Boshqaruvchisi',
    email: 'admin@weblearning.uz',
    phone: '+998 99 000 00 00',
    location: 'Toshkent, O\'zbekiston',
    joined: 'May, 2022',
    securityLevel: 'Maksimal (2FA Yoqilgan)',
    stats: [
      { label: 'Tizim barqarorligi', value: '99.9%', icon: Activity, color: 'text-emerald-400' },
      { label: 'Hal qilingan muammolar', value: '1,240', icon: CheckCircle2, color: 'text-rose-400' },
      { label: 'Ma\'lumotlar bazasi', value: 'Uzluksiz', icon: Database, color: 'text-indigo-400' },
      { label: 'Xavfsizlik', value: 'Faol', icon: ShieldCheck, color: 'text-orange-400' },
    ]
  };

  // Mock Admin faoliyati (Activity Log)
  const activityLog = [
    { id: 1, action: 'Yangi o\'qituvchi qo\'shildi', target: 'Lobar Karimova', time: '10 daqiqa avval', type: 'create' },
    { id: 2, action: 'To\'lov tasdiqlandi', target: 'Ali Valiyev (450,000 UZS)', time: '1 soat avval', type: 'approve' },
    { id: 3, action: 'Kurs qoralamasi o\'chirildi', target: 'Eski Python kursi', time: 'Kecha, 15:30', type: 'delete' },
    { id: 4, action: 'Tizim sozlamalari yangilandi', target: 'Xavfsizlik protokoli', time: '2 kun avval', type: 'system' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. PROFILE HEADER CARD */}
      <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-orange-600 p-[3px] shadow-[0_20px_50px_rgba(244,63,94,0.3)]">
              <div className="w-full h-full bg-[#0d0f14] rounded-[2.3rem] flex items-center justify-center text-5xl font-black text-rose-400">
                AD
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg border-2 border-[#0d0f14] flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Super Admin
            </div>
          </div>

          {/* Asosiy ma'lumotlar */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
              {adminInfo.name}
            </h1>
            <p className="text-xl text-rose-400 font-bold italic mb-6">{adminInfo.role}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-rose-500/70" /> {adminInfo.email}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-rose-500/70" /> {adminInfo.phone}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-rose-500/70" /> {adminInfo.location}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Calendar className="w-4 h-4 text-rose-500/70" /> {adminInfo.joined} dan buyon
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {adminInfo.stats.map((stat, idx) => (
          <div key={idx} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] hover:bg-white/[0.05] transition-all group">
            <stat.icon className={`w-6 h-6 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
            <h3 className="text-2xl font-black text-white">{stat.value}</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 3. XAVFSIZLIK VA RUXSATLAR */}
        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Key className="w-6 h-6 text-rose-400" />
            Ruxsatlar
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-sm font-semibold text-gray-300">Foydalanuvchilarni boshqarish</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-sm font-semibold text-gray-300">Moliyaviy amallar</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-sm font-semibold text-gray-300">Tizim sozlamalari</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
          </div>

          <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex flex-col items-center text-center">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-2" />
            <span className="text-emerald-300 font-bold text-sm">Xavfsizlik darajasi: {adminInfo.securityLevel}</span>
          </div>
        </div>

        {/* 4. SO'NGGI FAOLIYAT (ACTIVITY LOG) */}
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="w-6 h-6 text-rose-400" />
            So'nggi harakatlar tarixi
          </h3>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {activityLog.map((log) => (
              <div key={log.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1a1d24] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(244,63,94,0.2)] z-10">
                  {log.type === 'create' && <User className="w-4 h-4 text-emerald-400" />}
                  {log.type === 'approve' && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                  {log.type === 'delete' && <ShieldCheck className="w-4 h-4 text-red-400" />}
                  {log.type === 'system' && <Settings className="w-4 h-4 text-orange-400" />}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.05] transition-all">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-bold text-sm">{log.action}</span>
                    <span className="text-[10px] font-bold text-rose-400">{log.time}</span>
                  </div>
                  <p className="text-xs text-gray-500">{log.target}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 text-sm font-bold hover:bg-white/10 hover:text-white transition-all">
            Barcha tarixni ko'rish
          </button>
        </div>
      </div>

    </div>
  );
};

export default AdminProfile;