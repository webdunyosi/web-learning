import React from 'react';
import { CalendarDays, CheckCircle, XCircle, Clock, CalendarCheck, ShieldAlert } from 'lucide-react';

const Attendance = () => {
  // Test uchun statistika
  const stats = [
    { 
      title: "Umumiy davomat", 
      value: "95%", 
      icon: CalendarCheck, 
      color: "text-blue-400", 
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]",
      shadow: "shadow-[inset_0_0_20px_rgba(59,130,246,0.15)]"
    },
    { 
      title: "Kelgan darslar", 
      value: "24", 
      icon: CheckCircle, 
      color: "text-green-400", 
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      glow: "drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]",
      shadow: "shadow-[inset_0_0_20px_rgba(74,222,128,0.15)]"
    },
    { 
      title: "Qoldirilgan", 
      value: "1", 
      icon: XCircle, 
      color: "text-red-400", 
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      glow: "drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]",
      shadow: "shadow-[inset_0_0_20px_rgba(248,113,113,0.15)]"
    }
  ];

  // Test uchun davomat tarixi
  const attendanceHistory = [
    { id: 1, date: "12-May, 2026", time: "14:00", subject: "Frontend Dasturlash", teacher: "Sardor Tursunov", status: "Keldi" },
    { id: 2, date: "10-May, 2026", time: "14:00", subject: "Frontend Dasturlash", teacher: "Sardor Tursunov", status: "Keldi" },
    { id: 3, date: "08-May, 2026", time: "14:00", subject: "Frontend Dasturlash", teacher: "Sardor Tursunov", status: "Sababli" },
    { id: 4, date: "05-May, 2026", time: "14:00", subject: "Frontend Dasturlash", teacher: "Sardor Tursunov", status: "Kelmadi" },
    { id: 5, date: "03-May, 2026", time: "14:00", subject: "Frontend Dasturlash", teacher: "Sardor Tursunov", status: "Keldi" },
  ];

  // Statusga qarab neon ranglar beruvchi funksiya
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Keldi':
        return {
          icon: CheckCircle,
          color: "text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]",
          bg: "bg-green-500/10 border-green-500/30",
          glow: "shadow-[0_0_10px_rgba(74,222,128,0.2)]"
        };
      case 'Kelmadi':
        return {
          icon: XCircle,
          color: "text-red-400 drop-shadow-[0_0_5px_rgba(248,113,113,0.8)]",
          bg: "bg-red-500/10 border-red-500/30",
          glow: "shadow-[0_0_10px_rgba(248,113,113,0.2)]"
        };
      case 'Sababli':
        return {
          icon: Clock,
          color: "text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]",
          bg: "bg-yellow-500/10 border-yellow-500/30",
          glow: "shadow-[0_0_10px_rgba(250,204,21,0.2)]"
        };
      default:
        return { icon: ShieldAlert, color: "text-gray-400", bg: "bg-gray-500/10 border-gray-500/30", glow: "" };
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* 1. SARLAVHA PANELI */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Shisha aks etishi */}
        <div className="absolute top-[-50%] right-[-10%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[70px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
              <CalendarDays className="w-7 h-7 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
              Davomat (Yo'qlama)
            </h1>
            <p className="text-gray-400 mt-2 font-medium">Sizning darslarga qatnashish ko'rsatkichingiz</p>
          </div>
        </div>
      </div>

      {/* 2. STATISTIKA KARTOCHKALARI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`relative bg-white/[0.02] backdrop-blur-2xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-2xl p-6 flex items-center gap-5 transition-all duration-500 hover:bg-white/[0.04] overflow-hidden ${stat.shadow} group`}>
            
            <div className={`absolute -right-6 -top-6 w-24 h-24 ${stat.bg} opacity-50 blur-[30px] rounded-full transition-opacity duration-500 pointer-events-none group-hover:opacity-100`}></div>
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${stat.bg} border ${stat.border} relative z-10`}>
              <stat.icon className={`w-7 h-7 ${stat.color} ${stat.glow}`} />
            </div>
            
            <div className="relative z-10">
              <p className="text-sm text-gray-400 font-medium mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-white tracking-wide drop-shadow-sm">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. DAVOMAT TARIXI (Ro'yxat) */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Sarlavha qismi */}
        <div className="p-6 border-b border-white/10 relative z-10 bg-white/[0.01]">
           <h2 className="text-lg font-bold text-white drop-shadow-sm">Oxirgi darslar</h2>
        </div>

        {/* Ro'yxat */}
        <div className="divide-y divide-white/5 relative z-10">
          {attendanceHistory.map((record) => {
            const statusStyle = getStatusStyle(record.status);
            const StatusIcon = statusStyle.icon;

            return (
              <div 
                key={record.id} 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 hover:bg-white/[0.03] transition-colors duration-300 group"
              >
                {/* Dars vaqti va nomi */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex flex-col items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                    <span className="text-xs text-gray-400 font-medium">{record.date.split('-')[0]}</span>
                    <span className="text-sm font-bold text-white">{record.date.split('-')[1].split(',')[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white drop-shadow-sm group-hover:text-blue-300 transition-colors">{record.subject}</h3>
                    <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" /> {record.time} 
                      <span className="w-1 h-1 rounded-full bg-gray-600 mx-1"></span> 
                      {record.teacher}
                    </p>
                  </div>
                </div>

                {/* Status (Neon Badge) */}
                <div className="flex items-center sm:justify-end">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border backdrop-blur-md ${statusStyle.bg} ${statusStyle.glow}`}>
                    <StatusIcon className={`w-4 h-4 ${statusStyle.color}`} />
                    <span className={`text-sm font-bold tracking-wide ${statusStyle.color}`}>
                      {record.status}
                    </span>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Attendance;