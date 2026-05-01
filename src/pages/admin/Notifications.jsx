import React, { useState } from 'react';
import { 
  Bell, 
  CheckCheck, 
  CreditCard, 
  UserPlus, 
  AlertTriangle, 
  Server, 
  Trash2,
  MoreVertical,
  Clock,
  ShieldAlert
} from 'lucide-react';

const AdminNotifications = () => {
  const [filter, setFilter] = useState('all');

  // Mock Bildirishnomalar
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'payment', 
      title: 'Yangi to\'lov qabul qilindi', 
      desc: 'Ali Valiyev "Frontend B-24" kursi uchun 450,000 UZS to\'lov qildi (Click orqali).', 
      time: '2 daqiqa avval', 
      isRead: false,
      icon: CreditCard,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    },
    { 
      id: 2, 
      type: 'user', 
      title: 'Yangi foydalanuvchi', 
      desc: 'Sardor Azimov (sardor@mail.ru) platformadan ro\'yxatdan o\'tdi.', 
      time: '15 daqiqa avval', 
      isRead: false,
      icon: UserPlus,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    { 
      id: 3, 
      type: 'security', 
      title: 'Xavfsizlik ogohlantirishi', 
      desc: 'Tizimga ketma-ket 5 marta noto\'g\'ri parol bilan kirishga urinish kuzatildi (IP: 192.168.1.1).', 
      time: '1 soat avval', 
      isRead: false,
      icon: AlertTriangle,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10'
    },
    { 
      id: 4, 
      type: 'system', 
      title: 'Ma\'lumotlar bazasi zaxiralandi', 
      desc: 'Tizim ma\'lumotlari muvaffaqiyatli bulutli serverga (Cloud) saqlandi.', 
      time: 'Kecha, 23:00', 
      isRead: true,
      icon: Server,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10'
    },
    { 
      id: 5, 
      type: 'security', 
      title: 'Yangi admin huquqi', 
      desc: 'Lobar Karimova profilingiz orqali Teacher rolidan Admin roliga o\'zgartirildi.', 
      time: '2 kun avval', 
      isRead: true,
      icon: ShieldAlert,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10'
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  // Filtrlash mantiqi
  const filteredNotifications = notifications.filter(n => {
    if (filter === 'all') return true;
    return n.type === filter;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. HEADER QISMI */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-rose-500/10 rounded-2xl flex items-center justify-center border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <Bell className="w-6 h-6 text-rose-400" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">Bildirishnomalar</h1>
            <p className="text-gray-500 text-sm">Sizda <span className="text-rose-400 font-bold">{notifications.filter(n => !n.isRead).length} ta</span> o'qilmagan xabar bor</p>
          </div>
        </div>

        <button 
          onClick={markAllAsRead}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-gray-300 transition-all active:scale-95 group"
        >
          <CheckCheck className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
          Hammasini o'qilgan qilish
        </button>
      </div>

      {/* 2. FILTER TUGMALARI */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'all', label: 'Barchasi' },
          { id: 'payment', label: 'To\'lovlar' },
          { id: 'user', label: 'Foydalanuvchilar' },
          { id: 'security', label: 'Xavfsizlik' },
          { id: 'system', label: 'Tizim' },
        ].map((f) => (
          <button 
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
              filter === f.id 
              ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.1)]' 
              : 'bg-white/5 border-white/5 text-gray-500 hover:text-gray-300 hover:bg-white/10'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 3. BILDIRISHNOMALAR RO'YXATI */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => (
            <div 
              key={notif.id}
              className={`group relative flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-[1.8rem] border transition-all duration-300 ${
                notif.isRead 
                ? 'bg-white/[0.01] border-white/5 opacity-75 hover:opacity-100' 
                : 'bg-white/[0.04] border-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.05)]'
              } hover:bg-white/[0.06] hover:border-white/20`}
            >
              {/* O'qilmaganlik belgisi (nuqta) */}
              {!notif.isRead && (
                <div className="absolute top-5 right-5 sm:right-auto sm:-left-1.5 w-3 h-3 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,1)] animate-pulse"></div>
              )}

              {/* Turiga qarab ikonka */}
              <div className={`w-12 h-12 ${notif.bg} rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform`}>
                <notif.icon className={`w-5 h-5 ${notif.color}`} />
              </div>

              {/* Matn qismi */}
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className={`text-sm font-bold truncate ${notif.isRead ? 'text-gray-400' : 'text-white'}`}>
                    {notif.title}
                  </h4>
                  <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1.5 whitespace-nowrap bg-white/5 px-2 py-1 rounded-md">
                    <Clock className="w-3 h-3" /> {notif.time}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {notif.desc}
                </p>
              </div>

              {/* O'chirish va boshqa amallar */}
              <div className="flex sm:flex-col gap-2 mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                <button 
                  onClick={() => deleteNotification(notif.id)}
                  className="p-2.5 hover:bg-red-500/10 text-gray-500 hover:text-red-400 rounded-xl transition-colors border border-transparent hover:border-red-500/20"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-2.5 hover:bg-white/10 text-gray-500 hover:text-white rounded-xl transition-colors border border-transparent hover:border-white/10">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-24 bg-white/[0.02] rounded-[3rem] border border-white/5 shadow-inner">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-10 h-10 text-gray-600 opacity-50" />
            </div>
            <h3 className="text-white font-bold text-xl">Xabarlar topilmadi</h3>
            <p className="text-gray-500 text-sm mt-2">Bu bo'limda hozircha hech qanday bildirishnoma yo'q</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default AdminNotifications;