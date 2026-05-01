import React from 'react';
import { Menu, Search, Coins, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ setIsSidebarOpen }) => {
  return (
    // LIQUID GLASS HEADER
    <header className="h-20 bg-white/[0.02] backdrop-blur-3xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 sticky top-0 z-20 relative overflow-hidden">
      
      {/* Shisha aks etishi */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>

      <div className="flex items-center gap-4 w-full max-w-md relative z-10">
        {/* Mobile menu tugmasi */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Qidiruv qismi (Glass Input) */}
        <div className="hidden md:flex items-center bg-white/[0.03] backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 focus-within:border-green-500/40 focus-within:bg-white/[0.06] focus-within:shadow-[0_0_15px_rgba(74,222,128,0.15)] transition-all w-full shadow-inner group">
          <Search className="w-4 h-4 text-gray-500 group-focus-within:text-green-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Qidirish..." 
            className="bg-transparent border-none outline-none ml-3 text-sm w-full text-gray-200 placeholder-gray-500"
          />
        </div>
      </div>

      {/* O'ng tarafdagi elementlar */}
      <div className="flex items-center gap-4 sm:gap-6 relative z-10">
        
        {/* Coin balansi (Neon Glass) */}
        <div className="flex items-center gap-2 bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-inner px-4 py-2 rounded-xl hover:bg-white/[0.06] transition-colors cursor-default">
          <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)] border border-yellow-300/50">
            <Coins className="w-3.5 h-3.5 text-yellow-900 drop-shadow-sm" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] text-gray-400 font-bold tracking-wider mb-0.5">BALANS</span>
            <span className="text-sm font-bold text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">15 Coin</span>
          </div>
        </div>

        {/* Bildirishnomalar */}
        <Link 
          to="/student/notifications"
          className="relative p-2.5 text-gray-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all rounded-xl shadow-inner"
        >
          <Bell className="w-5 h-5 drop-shadow-sm" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></span>
        </Link>

        {/* Profil qismi */}
        <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l border-white/10 cursor-pointer group">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors drop-shadow-sm">Ali Valiyev</p>
            <p className="text-[11px] text-green-400 mt-0.5 drop-shadow-[0_0_5px_rgba(74,222,128,0.4)] font-medium">Faol o'quvchi</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/20 p-[2px] shadow-[0_0_15px_rgba(74,222,128,0.2)] group-hover:border-green-400/50 transition-colors">
             <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-[8px] flex items-center justify-center font-bold text-sm text-green-300 backdrop-blur-sm">
               AV
             </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;