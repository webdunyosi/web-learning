import React, { useState } from 'react';
import { 
  Bell, 
  CheckCheck, 
  MessageSquare, 
  UserPlus, 
  AlertCircle, 
  FileText, 
  Trash2,
  MoreVertical,
  Clock
} from 'lucide-react';

const TeacherNotifications = () => {
  // Mock bildirishnomalar ro'yxati
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'assignment', 
      title: 'Yangi vazifa topshirildi', 
      desc: 'Ali Valiyev "React Context API" mavzusidagi uy vazifasini yubordi.', 
      time: '5 daqiqa avval', 
      isRead: false,
      icon: FileText,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    { 
      id: 2, 
      type: 'message', 
      title: 'Yangi xabar', 
      desc: 'Madina Ikromovadan yangi xabar keldi: "Ustoz, dars soati o\'zgardimi?"', 
      time: '1 soat avval', 
      isRead: false,
      icon: MessageSquare,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10'
    },
    { 
      id: 3, 
      type: 'system', 
      title: 'Tizim yangilanishi', 
      desc: 'Platformada yangi "Baholash" funksiyasi ishga tushirildi. Tekshirib ko\'ring!', 
      time: '3 soat avval', 
      isRead: true,
      icon: AlertCircle,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    },
    { 
      id: 4, 
      type: 'student', 
      title: 'Yangi o\'quvchi', 
      desc: 'Sardor Azimov "Frontend B-24" guruhiga qo\'shildi.', 
      time: 'Kecha', 
      isRead: true,
      icon: UserPlus,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. HEADER QISMI */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
            <Bell className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Bildirishnomalar</h1>
            <p className="text-gray-500 text-sm">Sizda {notifications.filter(n => !n.isRead).length} ta yangi xabar bor</p>
          </div>
        </div>

        <button 
          onClick={markAllAsRead}
          className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-gray-300 transition-all active:scale-95"
        >
          <CheckCheck className="w-4 h-4 text-indigo-400" />
          Hammasini o'qilgan deb belgilash
        </button>
      </div>

      {/* 2. BILDIRISHNOMALAR RO'YXATI */}
      <div className="space-y-3">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div 
              key={notif.id}
              className={`group relative flex items-start gap-4 p-5 rounded-[1.8rem] border transition-all duration-300 ${
                notif.isRead 
                ? 'bg-white/[0.01] border-white/5 opacity-70' 
                : 'bg-white/[0.04] border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.05)]'
              } hover:bg-white/[0.06] hover:border-white/20`}
            >
              {/* Turiga qarab ikonka */}
              <div className={`w-12 h-12 ${notif.bg} rounded-2xl flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform`}>
                <notif.icon className={`w-5 h-5 ${notif.color}`} />
              </div>

              {/* Matn qismi */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className={`text-sm font-bold truncate ${notif.isRead ? 'text-gray-400' : 'text-white'}`}>
                    {notif.title}
                  </h4>
                  <span className="text-[10px] text-gray-500 flex items-center gap-1 whitespace-nowrap">
                    <Clock className="w-3 h-3" /> {notif.time}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {notif.desc}
                </p>
              </div>

              {/* O'chirish va boshqa amallar */}
              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => deleteNotification(notif.id)}
                  className="p-2 hover:bg-red-500/10 text-gray-500 hover:text-red-400 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/10 text-gray-500 hover:text-white rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              {/* O'qilmaganlik belgisi (nuqta) */}
              {!notif.isRead && (
                <div className="absolute top-5 right-2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white/[0.02] rounded-[3rem] border border-white/5">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-white font-bold text-lg">Hozircha xabarlar yo'q</h3>
            <p className="text-gray-500 text-sm mt-1">Barcha bildirishnomalar shu yerda ko'rinadi</p>
          </div>
        )}
      </div>

      {/* 3. FILTER TUGMALARI (Pastki qismda qulaylik uchun) */}
      <div className="flex justify-center gap-3 pt-4">
        {['Barchasi', 'O\'quvchilar', 'Tizim'].map((f) => (
          <button 
            key={f}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeacherNotifications;