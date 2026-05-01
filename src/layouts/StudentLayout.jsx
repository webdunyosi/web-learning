import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Trophy, Gift, CreditCard, Wallet } from 'lucide-react';

import Sidebar from '../components/shared/Sidebar';
import Header from '../components/shared/Header';

const StudentLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentNavItems = [
    { name: 'Asosiy panel', path: '/student/dashboard', icon: LayoutDashboard },
    { name: 'Reyting', path: '/student/leaderboard', icon: Trophy },
    { name: 'Davomat', path: '/student/attendance', icon: BookOpen },
    { name: "To'lovlar", path: '/student/payments', icon: CreditCard },
    { name: "Sovg'alar", path: '/student/shop', icon: Gift },
    { name: 'Hisobim', path: '/student/profile', icon: Wallet },
  ];

  return (
    <div className="h-screen w-full bg-[#07090d] flex font-sans text-gray-300 selection:bg-green-500/30 relative overflow-hidden">

      {/* --- MOSLASHUVCHAN ANIMATSIYA STILLARI --- */}
      <style>
        {`
          @keyframes liquid-1 {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            33% { transform: translate(15vw, 10vh) scale(1.1) rotate(90deg); }
            66% { transform: translate(-10vw, 15vh) scale(0.9) rotate(180deg); }
            100% { transform: translate(0, 0) scale(1) rotate(360deg); }
          }
          @keyframes liquid-2 {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            50% { transform: translate(-15vw, -10vh) scale(1.2) rotate(-180deg); }
            100% { transform: translate(0, 0) scale(1) rotate(-360deg); }
          }
          
          .anim-liquid-fast { animation: liquid-1 12s infinite alternate ease-in-out; }
          .anim-liquid-slow { animation: liquid-2 16s infinite alternate ease-in-out; }
        `}
      </style>

      {/* --- ORQA FON: SETKA VA ANIQLASHTIRILGAN NURLAR --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* Kiber-setka (Grid) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_30%,transparent_100%)] opacity-40"></div>

        {/* 1. Katta Yashil Suyuqlik (Telefonda w-[100vw], Kompyuterda md:w-[45vw]) */}
        <div className="absolute top-[-5%] left-[-20%] w-[100vw] h-[100vw] md:w-[45vw] md:h-[45vw] bg-green-500/30 rounded-[40%_60%_70%_30%] blur-[70px] md:blur-[90px] anim-liquid-fast mix-blend-screen"></div>
        
        {/* 2. Katta Ko'kish-Binafsha Suyuqlik */}
        <div className="absolute bottom-[-5%] right-[-20%] w-[110vw] h-[110vw] md:w-[50vw] md:h-[50vw] bg-indigo-500/30 rounded-[60%_40%_30%_70%] blur-[80px] md:blur-[100px] anim-liquid-slow mix-blend-screen"></div>
        
        {/* 3. Markazdagi Zumrad (Emerald) yorug'lik */}
        <div className="absolute top-[20%] left-[10%] w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] bg-emerald-400/25 rounded-full blur-[60px] md:blur-[80px] anim-liquid-fast mix-blend-screen" style={{ animationDelay: '-5s' }}></div>
        
      </div>

      {/* --- ASOSIY KONTENT --- */}
      <div className="relative z-10 flex w-full h-full">
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
          navItems={studentNavItems} 
        />

        <main className="flex-1 flex flex-col min-w-0 h-full">
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 relative custom-scrollbar">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default StudentLayout;