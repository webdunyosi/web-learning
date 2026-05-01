import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, X } from 'lucide-react';

const TeacherSidebar = ({ isSidebarOpen, setIsSidebarOpen, navItems }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobil versiyada orqa fonni qoraytirish */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR ASOSI */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white/[0.02] backdrop-blur-3xl border-r border-white/10 shadow-[8px_0_32px_0_rgba(0,0,0,0.3)] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-full flex flex-col overflow-hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Shisha aks etishi effekti */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent pointer-events-none"></div>

        {/* Logo qismi */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 shrink-0 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-white/20">
              <BookOpen className="w-6 h-6 text-white drop-shadow-md" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight drop-shadow-sm italic">Web Learning</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)} 
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigatsiya menyusi */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto relative z-10 custom-scrollbar">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  isActive 
                    ? 'text-indigo-300 bg-white/[0.06] border border-white/10 shadow-[inset_0_0_20px_rgba(99,102,241,0.15)] backdrop-blur-md' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                {/* AKTIV MENYU UCHUN YON NEON CHIZIQ (Studentniki bilan bir xil animatsiya) */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400 shadow-[0_0_15px_rgba(99,102,241,1)] rounded-r-md"></div>
                )}
                
                {/* HOVER EFFEKTI UCHUN GRADIENT NUR */}
                <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/5 opacity-0 ${!isActive && 'group-hover:opacity-100'} transition-opacity duration-300 pointer-events-none`}></div>

                {/* IKONKA ANIMATSIYASI */}
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(129,140,248,0.6)]' : 'group-hover:scale-110'}`} />
                
                {/* MATN */}
                <span className="font-medium text-sm drop-shadow-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default TeacherSidebar;