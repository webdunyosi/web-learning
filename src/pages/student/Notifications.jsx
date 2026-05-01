import React, { useState } from 'react';
import { Bell, CheckCircle2, AlertCircle, Info, CreditCard, Trophy, CheckCheck } from 'lucide-react';

const Notifications = () => {
  const [filter, setFilter] = useState('barchasi');

  // Test uchun bildirishnomalar ro'yxati (Mock Data)
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      type: 'payment', 
      title: "To'lov muvaffaqiyatli", 
      message: "Sizning 1,000,000 so'm to'lovingiz qabul qilindi. Profilingiz faollashdi.", 
      time: "10 daqiqa oldin", 
      unread: true 
    },
    { 
      id: 2, 
      type: 'system', 
      title: "Yangi dars qo'shildi", 
      message: "ReactJS Noldan kursiga '13-dars. Context API' videodarsi yuklandi.", 
      time: "2 soat oldin", 
      unread: true 
    },
    { 
      id: 3, 
      type: 'warning', 
      title: "Davomat past", 
      message: "Siz oxirgi darsda qatnashmadingiz. Iltimos, sababini ustozingizga ma'lum qiling.", 
      time: "Kecha, 14:30", 
      unread: false 
    },
    { 
      id: 4, 
      type: 'achievement', 
      title: "Yangi yutuq!", 
      message: "Tabriklaymiz! Siz 'Top O'quvchi' nishonini qo'lga kiritdingiz.", 
      time: "2 kun oldin", 
      unread: false 
    },
    { 
      id: 5, 
      type: 'info', 
      title: "Texnik ishlar", 
      message: "Yakshanba kuni soat 02:00 dan 04:00 gacha tizimda profilaktika ishlari olib boriladi.", 
      time: "1 hafta oldin", 
      unread: false 
    },
  ]);

  // Barchasini o'qilgan deb belgilash
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  // Turni aniqlab, dizayn beruvchi funksiya
  const getTypeStyle = (type) => {
    switch (type) {
      case 'payment':
        return { icon: CreditCard, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20", glow: "shadow-[0_0_15px_rgba(74,222,128,0.2)]" };
      case 'warning':
        return { icon: AlertCircle, color: "text-red-400", bg: "bg-red-500/10 border-red-500/20", glow: "shadow-[0_0_15px_rgba(239,68,68,0.2)]" };
      case 'achievement':
        return { icon: Trophy, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20", glow: "shadow-[0_0_15px_rgba(250,204,21,0.2)]" };
      case 'system':
        return { icon: Info, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20", glow: "shadow-[0_0_15px_rgba(59,130,246,0.2)]" };
      default:
        return { icon: Bell, color: "text-gray-400", bg: "bg-gray-500/10 border-gray-500/20", glow: "" };
    }
  };

  // Filtrlash
  const filteredNotifications = notifications.filter(n => {
    if (filter === 'unread') return n.unread;
    return true; // 'barchasi'
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* 1. SARLAVHA */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Shisha aks etishi */}
        <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] bg-red-500/10 rounded-full blur-[70px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white flex items-center gap-3 drop-shadow-md">
            <Bell className="w-6 h-6 text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]" />
            Bildirishnomalar
          </h1>
          <p className="text-gray-400 mt-1 font-medium text-sm">Tizimdan kelgan barcha xabarlar</p>
        </div>

        {/* Barchasini o'qish tugmasi (CheckCheck ulandi) */}
        <button 
          onClick={markAllAsRead}
          className="relative z-10 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm text-gray-300 font-medium transition-all flex items-center gap-2 hover:text-white"
        >
          <CheckCheck className="w-4 h-4 text-green-400" /> Barchasini o'qildi deb belgilash
        </button>
      </div>

      {/* 2. FILTRLAR */}
      <div className="flex items-center gap-3 relative z-10">
        <button 
          onClick={() => setFilter('barchasi')}
          className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
            filter === 'barchasi' 
              ? 'bg-white/10 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] border border-white/20' 
              : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
          }`}
        >
          Barchasi
        </button>
        <button 
          onClick={() => setFilter('unread')}
          className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
            filter === 'unread' 
              ? 'bg-white/10 text-white shadow-[inset_0_0_15px_rgba(255,255,255,0.1)] border border-white/20' 
              : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]'
          }`}
        >
          O'qilmagan
          {/* O'qilmaganlar soni indicator */}
          {notifications.filter(n => n.unread).length > 0 && (
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>
          )}
        </button>
      </div>

      {/* 3. XABARLAR RO'YXATI */}
      <div className="space-y-4 relative z-10">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-10 bg-white/[0.02] border border-white/5 rounded-3xl">
            <Bell className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400 font-medium">Hech qanday xabar topilmadi</p>
          </div>
        ) : (
          filteredNotifications.map((notif) => {
            const style = getTypeStyle(notif.type);
            const Icon = style.icon;

            return (
              <div 
                key={notif.id} 
                className={`relative bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-2xl p-5 flex gap-4 transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-0.5 group overflow-hidden ${
                  notif.unread ? 'shadow-[0_0_20px_rgba(255,255,255,0.03)] border-white/10' : ''
                }`}
              >
                {/* Agar o'qilmagan bo'lsa chapda yengil gradient nur */}
                {notif.unread && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] rounded-r-md z-10"></div>
                )}
                {notif.unread && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-transparent pointer-events-none"></div>
                )}

                {/* Ikonka */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${style.bg} ${style.glow} relative z-10`}>
                  <Icon className={`w-6 h-6 ${style.color}`} />
                </div>

                {/* Kontent */}
                <div className="flex-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className={`text-base font-bold drop-shadow-sm ${notif.unread ? 'text-white' : 'text-gray-300'}`}>
                      {notif.title}
                    </h3>
                    <span className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                      {notif.time}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${notif.unread ? 'text-gray-300' : 'text-gray-500'}`}>
                    {notif.message}
                  </p>
                </div>
                
                {/* O'qilgan belgisi (faqat o'qilmaganlarda ko'rinadi) */}
                {notif.unread && (
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button 
                        onClick={() => {
                          setNotifications(notifications.map(n => n.id === notif.id ? { ...n, unread: false } : n));
                        }}
                        className="p-2 bg-white/10 rounded-full hover:bg-green-500/20 text-gray-400 hover:text-green-400 transition-colors"
                        title="O'qildi deb belgilash"
                     >
                        <CheckCircle2 className="w-5 h-5" />
                     </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};

export default Notifications;