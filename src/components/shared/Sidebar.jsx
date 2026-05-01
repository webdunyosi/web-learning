import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, X, LogOut } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, navItems }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile fondagi qoraytirilgan oyna */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* LIQUID GLASS SIDEBAR */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white/[0.02] backdrop-blur-3xl border-r border-white/10 shadow-[8px_0_32px_0_rgba(0,0,0,0.3)] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen flex flex-col overflow-hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Shisha aks etishi (Glass Reflection) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent pointer-events-none"></div>

        {/* Logo qismi */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10 shrink-0 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.4)] border border-white/20">
              <BookOpen className="w-6 h-6 text-white drop-shadow-md" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight drop-shadow-sm">Web Learning</span>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menyu havolalari */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto relative z-10">
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
                    ? 'text-green-300 bg-white/[0.06] border border-white/10 shadow-[inset_0_0_20px_rgba(74,222,128,0.15)] backdrop-blur-md' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                {/* Faol menyu chap tomonidagi neon chiziq */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,1)] rounded-r-md"></div>
                )}
                
                {/* Hover bo'lganda ichki yorug'lik */}
                <div className={`absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/5 opacity-0 ${!isActive && 'group-hover:opacity-100'} transition-opacity duration-300 pointer-events-none`}></div>

                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]' : 'group-hover:scale-110'}`} />
                <span className="font-medium text-sm drop-shadow-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar pastki qismi - Chiqish tugmasi */}
        <div className="p-4 border-t border-white/10 shrink-0 relative z-10">
          <button className="flex items-center gap-3 px-4 py-3.5 w-full rounded-xl text-red-400 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-300 border border-transparent shadow-[inset_0_0_0_rgba(239,68,68,0)] hover:shadow-[inset_0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300 font-medium text-sm">
            <LogOut className="w-5 h-5 drop-shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
            Tizimdan chiqish
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;