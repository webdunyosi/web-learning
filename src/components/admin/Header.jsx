import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Bell, User, LogOut, ChevronDown, ShieldCheck } from 'lucide-react';

const AdminHeader = ({ setIsSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsProfileOpen(false);
    navigate('/login');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-white/[0.02] backdrop-blur-3xl border-b border-white/10 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      
      <div className="flex items-center gap-4 w-full max-w-md relative z-10">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="hidden md:flex items-center bg-white/[0.03] backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 focus-within:border-rose-500/40 transition-all w-full">
          <Search className="w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Tizim bo'ylab qidirish..." 
            className="bg-transparent border-none outline-none ml-3 text-sm w-full text-gray-200 placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        
        <div className="hidden xs:flex items-center gap-2.5 bg-rose-500/5 border border-rose-500/20 px-4 py-2 rounded-2xl">
          <ShieldCheck className="w-5 h-5 text-rose-400" />
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Kirish</span>
            <span className="text-sm font-bold text-rose-300">Super Admin</span>
          </div>
        </div>

        <button className="relative p-2.5 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse"></span>
        </button>

        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-2xl hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all group"
          >
            <div className="hidden lg:block text-right">
              <p className="text-sm font-bold text-gray-200 group-hover:text-white">Admin Panel</p>
              <p className="text-[11px] text-rose-400 font-medium">Boshqaruvchi</p>
            </div>
            
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/20 p-[2px] shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-rose-400/50 transition-all">
                <div className="w-full h-full bg-gradient-to-br from-rose-500/20 to-orange-500/10 rounded-[8px] flex items-center justify-center font-bold text-sm text-rose-300 uppercase">
                  AD
                </div>
              </div>
              <ChevronDown className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 text-gray-400 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-72 bg-[#1a1d24]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] py-3 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right z-[100]">
              
              <Link 
                to="/admin/settings" 
                onClick={() => setIsProfileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all mx-2 rounded-xl group"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors border border-rose-500/10">
                  <User className="w-5 h-5 text-rose-400" />
                </div>
                <span className="text-base font-semibold tracking-wide">Profil sozlamalari</span>
              </Link>

              <div className="h-px bg-white/5 my-2 mx-4"></div>

              <button 
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all mx-2 rounded-xl group w-[calc(100%-16px)] text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors border border-red-500/10">
                  <LogOut className="w-5 h-5" />
                </div>
                <span className="text-base font-semibold tracking-wide whitespace-nowrap">Tizimdan chiqish</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;