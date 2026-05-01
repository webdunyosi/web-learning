import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/Sidebar';
import AdminHeader from '../components/admin/Header';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0b0d12] text-white overflow-hidden font-sans relative">
      
      {/* 1. TO'R (GRID) NAQSHI - Student panelidagi kabi */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* 2. MAXSUS ANIMATSIYA CSS (Nafas oluvchi nurlar) */}
      <style>
        {`
          @keyframes glow-1 {
            0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            50% { transform: translate(2%, 5%) scale(1.2); opacity: 0.8; }
            100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          }
          @keyframes glow-2 {
            0% { transform: translate(0, 0) scale(1.2); opacity: 0.6; }
            50% { transform: translate(-3%, -5%) scale(0.9); opacity: 0.3; }
            100% { transform: translate(0, 0) scale(1.2); opacity: 0.6; }
          }
          .animate-glow-1 { animation: glow-1 8s infinite ease-in-out alternate; }
          .animate-glow-2 { animation: glow-2 10s infinite ease-in-out alternate; }
        `}
      </style>

      {/* 3. SUZUVCHI VA YORITUVCHI NURLAR (Liquid Glow) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
        {/* Chap tomon yuqori qizil/pushti nur */}
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-rose-600/20 blur-[130px] rounded-full animate-glow-1"></div>
        
        {/* O'ng tomon pastki to'q sariq nur */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-orange-600/15 blur-[140px] rounded-full animate-glow-2" style={{ animationDelay: '1s' }}></div>
        
        {/* Markaziy yumshoq pushti nur */}
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-pink-600/10 blur-[150px] rounded-full animate-glow-1" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* SIDEBAR */}
      <AdminSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* ASOSIY QISM */}
      <div className="flex-1 flex flex-col relative z-10 w-full overflow-hidden">
        <AdminHeader setIsSidebarOpen={setIsSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar relative z-10">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;