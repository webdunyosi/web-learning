import React, { useState } from 'react';
import { User, Mail, Phone, Shield, Edit2, Camera, Trophy, Medal, Star, Save, MapPin } from 'lucide-react';

const Profile = () => {
  // Formalar uchun state (Haqiqiy loyihada bular bazadan keladi)
  const [formData, setFormData] = useState({
    firstName: 'Ali',
    lastName: 'Valiyev',
    email: 'student@mail.com',
    phone: '+998 90 123 45 67',
    address: 'Toshkent shahar, Yunusobod tumani'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* 1. ASOSIY PROFIL KARTASI (Header) */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Shisha aks etishi va Neon nurlar */}
        <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[250px] h-[250px] bg-emerald-500/10 rounded-full blur-[70px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
          
          {/* Avatar qismi */}
          <div className="relative group cursor-pointer">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/[0.05] p-1 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-indigo-400/50 transition-all duration-300 relative overflow-hidden">
               {/* Avatardagi rasm o'rniga Gradient yozuv (Haqiqiy rasm bo'lsa img tag qo'yiladi) */}
               <div className="w-full h-full rounded-[20px] bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center border border-white/5">
                 <span className="text-4xl sm:text-5xl font-bold text-indigo-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">AV</span>
               </div>
               
               {/* Hover bo'lganda Kamera ikonkasi chiqadi */}
               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]">
                 <Camera className="w-8 h-8 text-white drop-shadow-md" />
               </div>
            </div>
            {/* Onlayn statusi */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-[4px] border-[#0a0c10] shadow-[0_0_15px_rgba(74,222,128,0.8)] z-20"></div>
          </div>

          {/* Profil ma'lumotlari */}
          <div className="flex-1 mt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-sm flex items-center justify-center sm:justify-start gap-3">
                  {formData.firstName} {formData.lastName}
                  <Shield className="w-6 h-6 text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                </h1>
                <p className="text-gray-400 mt-2 font-medium text-lg">Web dasturlash o'quvchisi</p>
              </div>
              <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 shadow-inner hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Edit2 className="w-4 h-4" /> Profilni tahrirlash
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 mt-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">{formData.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">{formData.phone}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. KONTENT QISMI (2 Ustunli) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* CHAP USTUN (Sozlamalar va Formalar) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative bg-white/[0.02] backdrop-blur-2xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] overflow-hidden">
            
            <h2 className="text-xl font-bold text-white drop-shadow-sm mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-400" /> Shaxsiy ma'lumotlar
            </h2>

            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Ism */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Ism</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all shadow-inner"
                  />
                </div>

                {/* Familiya */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Familiya</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all shadow-inner"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Elektron pochta</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all shadow-inner"
                  />
                </div>

                {/* Telefon */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Telefon raqam</label>
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Manzil */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Manzil</label>
                <div className="relative flex items-center">
                  <MapPin className="w-5 h-5 text-gray-500 absolute left-4" />
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* Saqlash tugmasi */}
              <div className="pt-4 flex justify-end">
                <button 
                  type="button" 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Save className="w-5 h-5" />
                  O'zgarishlarni saqlash
                </button>
              </div>
            </form>

          </div>
        </div>

        {/* O'NG USTUN (Yutuqlar va Statistika) */}
        <div className="space-y-6">
          <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] overflow-hidden">
            
            <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-yellow-500/10 rounded-full blur-[50px] mix-blend-screen pointer-events-none"></div>

            <h2 className="text-lg font-bold text-white drop-shadow-sm mb-6 flex items-center gap-2 relative z-10">
              <Star className="w-5 h-5 text-yellow-400" /> Mening Yutuqlarim
            </h2>

            <div className="space-y-4 relative z-10">
              
              {/* Yutuq 1 */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.05] hover:border-yellow-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all">
                  <Trophy className="w-6 h-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white drop-shadow-sm group-hover:text-yellow-300 transition-colors">Top O'quvchi</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Oyning eng yaxshi natijasi</p>
                </div>
              </div>

              {/* Yutuq 2 */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                  <Medal className="w-6 h-6 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white drop-shadow-sm group-hover:text-blue-300 transition-colors">100% Davomat</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Dars qoldirmaganlik uchun</p>
                </div>
              </div>

              {/* Yutuq 3 */}
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all group opacity-50 grayscale hover:grayscale-0 hover:opacity-100 cursor-not-allowed">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Kurs bitiruvchisi</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Hali olinmagan yutuq</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;