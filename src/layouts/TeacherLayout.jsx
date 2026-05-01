import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, ClipboardCheck, Award } from 'lucide-react';

// Shared komponentlarni chaqiramiz
import Sidebar from '../components/shared/Sidebar';
import Header from '../components/shared/Header';

const TeacherLayout = () => {
  // Mobile versiyada sidebarni boshqarish uchun state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // O'qituvchi uchun menyular ro'yxati
  const teacherNavItems = [
    { name: 'Asosiy panel', path: '/teacher/dashboard', icon: LayoutDashboard },
    { name: 'Guruhlarim', path: '/teacher/groups', icon: Users },
    { name: "Davomat (Yo'qlama)", path: '/teacher/attendance', icon: ClipboardCheck },
    { name: 'Baholash', path: '/teacher/grades', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      
      {/* 1. YON MENYU (SIDEBAR) */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
        navItems={teacherNavItems} 
      />

      {/* 2. ASOSIY QISM (HEADER VA KONTENT) */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 bg-slate-50">
          {/* O'qituvchining sahifalari shu yerga tushadi */}
          <Outlet />
        </div>
        
      </main>

    </div>
  );
};

export default TeacherLayout;