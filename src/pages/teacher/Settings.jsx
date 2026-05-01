import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Globe, 
  ShieldCheck, 
  Camera, 
  Save, 
  Mail, 
  Phone,
  Eye,
  EyeOff
} from 'lucide-react';

const TeacherSettings = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. SAHIFA SARLAVHASI */}
      <div>
        <h1 className="text-3xl font-black text-white tracking-tight">Sozlamalar</h1>
        <p className="text-gray-500 mt-1">Shaxsiy ma'lumotlaringiz va hisobingizni boshqaring</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CHAP TOMON: NAVIGATSIYA (SHORTCUTS) */}
        <div className="space-y-4">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-4">
            <nav className="space-y-2">
              {[
                { id: 'profile', name: 'Profil ma\'lumotlari', icon: User, active: true },
                { id: 'security', name: 'Xavfsizlik', icon: Lock, active: false },
                { id: 'notifications', name: 'Bildirishnomalar', icon: Bell, active: false },
                { id: 'language', name: 'Til va Hudud', icon: Globe, active: false },
              ].map((item) => (
                <button 
                  key={item.id}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    item.active 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* STATUS CARD */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden">
             <ShieldCheck className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5" />
             <h4 className="text-white font-bold mb-2">Hisob holati</h4>
             <p className="text-xs text-indigo-300 leading-relaxed">Sizning hisobingiz verified (tasdiqlangan) holatda. Barcha imkoniyatlar ochiq.</p>
          </div>
        </div>

        {/* O'NG TOMON: ASOSIY SOZLAMALAR FORMALARI */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* PROFIL TAHRIRLASH */}
          <section className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative group">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-3xl font-black text-indigo-300">
                  ST
                </div>
                <button className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 text-white rounded-xl shadow-xl hover:scale-110 transition-transform">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Profil rasmi</h3>
                <p className="text-gray-500 text-sm">PNG yoki JPG, maksimal 5MB</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">To'liq ism</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input type="text" defaultValue="Sardor Tursunov" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-indigo-500/50 outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email manzili</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input type="email" defaultValue="mentor@weblearning.uz" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-indigo-500/50 outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Telefon raqam</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input type="text" defaultValue="+998 90 123 45 67" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-indigo-500/50 outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Mutaxassislik</label>
                <input type="text" defaultValue="Senior Frontend Developer" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-indigo-500/50 outline-none" />
              </div>
            </div>
          </section>

          {/* XAVFSIZLIK (PAROLNI O'ZGARTIRISH) */}
          <section className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-indigo-400" />
              Xavfsizlik
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Joriy parol</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-indigo-500/50 outline-none" 
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Yangi parol</label>
                  <input type="password" placeholder="Min. 8 belgi" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-indigo-500/50 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Parolni tasdiqlang</label>
                  <input type="password" placeholder="Min. 8 belgi" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-indigo-500/50 outline-none" />
                </div>
              </div>
            </div>
          </section>

          {/* SAQLASH TUGMASI */}
          <div className="flex justify-end pt-4">
            <button className="flex items-center gap-2 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all active:scale-95 group">
              <Save className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              O'zgarishlarni saqlash
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeacherSettings;