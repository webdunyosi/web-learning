import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  CalendarCheck, 
  GraduationCap, 
  MessageSquare, 
  Settings,
  Bell
} from 'lucide-react';

import Sidebar from '../components/teacher/Sidebar';
import Header from '../components/teacher/Header';

const TeacherLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // O'qituvchi uchun menyu elementlari
  const teacherNavItems = [
    { name: 'Asosiy panel', path: '/teacher/dashboard', icon: LayoutDashboard },
    { name: 'Guruhlarim', path: '/teacher/groups', icon: Users },
    { name: 'Davomat', path: '/teacher/attendance', icon: CalendarCheck },
    { name: 'Baholash', path: '/teacher/grades', icon: GraduationCap },
    { name: 'Xabarlar', path: '/teacher/messages', icon: MessageSquare },
    { name: 'Sozlamalar', path: '/teacher/settings', icon: Settings },
  ];

  return (
    <div className="h-screen w-full bg-[#0a0c12] flex font-sans text-gray-300 relative overflow-hidden">
      
      {/* --- O'QITUVCHI UCHUN MAXSUS ANIMATSIYALI FON --- */}
      <style>
        {`
          @keyframes liquid-indigo {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20vw, 10vh) scale(1.2); }
            100% { transform: translate(0, 0) scale(1); }
          }
          .anim-indigo { animation: liquid-indigo 15s infinite alternate ease-in-out; }
        `}
      </style>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Setka */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
        
        {/* Suyuq nurlar (O'qituvchi uchun Indigo/Violet tusda) */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-indigo-600/20 rounded-full blur-[100px] anim-indigo mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-purple-600/15 rounded-full blur-[110px] anim-indigo mix-blend-screen" style={{ animationDelay: '-7s' }}></div>
      </div>

      {/* --- ASOSIY STRUKTURA --- */}
      <div className="relative z-10 flex w-full h-full">
        {/* Sidebar (O'quvchi bilan bir xil komponent, faqat navItems boshqa) */}
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
          navItems={teacherNavItems} 
        />

        <main className="flex-1 flex flex-col min-w-0 h-full">
          {/* Header */}
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          
          {/* Scroll bo'ladigan asosiy kontent */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar">
            {/* O'qituvchi roli uchun kichik belgi (Badge) */}
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]"></div>
              <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">O'qituvchi Nazorati</span>
            </div>

            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;