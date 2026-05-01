import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  ShieldCheck, 
  Globe, 
  Bell, 
  Save, 
  Monitor, 
  Lock,
  Mail,
  Smartphone,
  Eye,
  EyeOff,
  Server
} from 'lucide-react';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('system');
  const [showPassword, setShowPassword] = useState(false);

  // Tablar ro'yxati
  const tabs = [
    { id: 'system', name: 'Tizim sozlamalari', icon: Server },
    { id: 'profile', name: 'Profil', icon: User },
    { id: 'security', name: 'Xavfsizlik', icon: ShieldCheck },
    { id: 'notifications', name: 'Bildirishnomalar', icon: Bell },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. SAHIFA SARLAVHASI */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center border border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
          <Settings className="w-7 h-7 text-rose-400" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Sozlamalar</h1>
          <p className="text-gray-500 mt-1">Platforma va shaxsiy hisobingizni boshqaring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 2. CHAP TOMON: NAVIGATSIYA (TABS) */}
        <div className="space-y-4">
          <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 shadow-2xl">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                    activeTab === tab.id 
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/20 border border-rose-500' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-gray-500'}`} />
                  <span className="text-sm font-bold">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tizim versiyasi */}
          <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 text-center">
             <Monitor className="w-8 h-8 text-gray-600 mx-auto mb-3" />
             <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Web Learning OS</p>
             <p className="text-white font-black text-lg mt-1">v2.4.0-beta</p>
             <p className="text-rose-400 text-[10px] mt-2">So'nggi yangilanish: Bugun</p>
          </div>
        </div>

        {/* 3. O'NG TOMON: ASOSIY SOZLAMALAR KONTENTI */}
        <div className="lg:col-span-3">
          
          {/* A) TIZIM SOZLAMALARI TABI */}
          {activeTab === 'system' && (
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-rose-400" />
                Asosiy platforma sozlamalari
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Platforma nomi</label>
                    <input type="text" defaultValue="Web Learning Hub" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-rose-500/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Qo'llab-quvvatlash emaili</label>
                    <input type="email" defaultValue="support@weblearning.uz" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-rose-500/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Asosiy valyuta</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-rose-500/50 outline-none transition-all appearance-none cursor-pointer">
                      <option value="UZS" className="bg-[#1a1d24]">UZS - O'zbek so'mi</option>
                      <option value="USD" className="bg-[#1a1d24]">USD - AQSh dollari</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Vaqt mintaqasi</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-rose-500/50 outline-none transition-all appearance-none cursor-pointer">
                      <option value="Asia/Tashkent" className="bg-[#1a1d24]">Asia/Tashkent (GMT+5)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                    <div>
                      <h4 className="text-white font-bold">Texnik xizmat ko'rsatish rejimi</h4>
                      <p className="text-xs text-gray-500 mt-1">Tizimni vaqtincha faqat adminlar uchun ochiq qilish</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* B) PROFIL TABI */}
          {activeTab === 'profile' && (
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
               <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <User className="w-5 h-5 text-rose-400" />
                Shaxsiy ma'lumotlar
              </h3>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-rose-500 to-orange-500 p-[2px] shadow-[0_10px_30px_rgba(244,63,94,0.3)]">
                  <div className="w-full h-full bg-[#0d0f14] rounded-[22px] flex items-center justify-center text-2xl font-black text-rose-400">
                    AD
                  </div>
                </div>
                <div>
                  <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold rounded-xl transition-all">
                    Rasmni o'zgartirish
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Max: 2MB, faqat PNG yoki JPG</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Ism familiya</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" defaultValue="Super Admin" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-rose-500/50 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email manzili</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="email" defaultValue="admin@weblearning.uz" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-rose-500/50 outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Telefon raqam</label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input type="text" defaultValue="+998 99 000 00 00" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white focus:border-rose-500/50 outline-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* C) XAVFSIZLIK TABI */}
          {activeTab === 'security' && (
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-rose-400" />
                Xavfsizlik va Parol
              </h3>
              
              <div className="space-y-6 max-w-xl">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Joriy parol</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-rose-500/50 outline-none" 
                    />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Yangi parol</label>
                    <input type="password" placeholder="Min. 8 ta belgi" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-rose-500/50 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Parolni takrorlang</label>
                    <input type="password" placeholder="Min. 8 ta belgi" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white focus:border-rose-500/50 outline-none" />
                  </div>
                </div>

                <div className="p-4 mt-6 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-start gap-3">
                   <ShieldCheck className="w-6 h-6 text-rose-400 shrink-0" />
                   <div>
                      <h4 className="text-rose-300 font-bold text-sm">Ikki bosqichli tasdiqlash (2FA)</h4>
                      <p className="text-rose-400/70 text-xs mt-1">Hisobingiz xavfsizligini oshirish uchun SMS yoki Authenticator ilovasi orqali tasdiqlashni yoqing.</p>
                      <button className="mt-3 px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition-colors">
                        2FA ni yoqish
                      </button>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* D) BILDIRISHNOMALAR TABI */}
          {activeTab === 'notifications' && (
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300 text-center py-20">
               <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4 opacity-50" />
               <h3 className="text-xl font-bold text-white mb-2">Bildirishnomalar sozlamasi</h3>
               <p className="text-gray-500">Bu bo'lim tez orada ishga tushadi.</p>
            </div>
          )}

          {/* SAQLASH TUGMASI (Faqat Bildirishnomalar tabidan tashqari) */}
          {activeTab !== 'notifications' && (
            <div className="flex justify-end pt-6">
              <button className="flex items-center gap-2 px-10 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-black shadow-[0_10px_30px_rgba(225,29,72,0.3)] transition-all active:scale-95 group">
                <Save className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                O'zgarishlarni saqlash
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminSettings;