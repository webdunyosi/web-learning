import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, BookOpen } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Ro'yxatdan o'tgandan so'ng Loginga qaytarish
    navigate('/login');
  };

  return (
    <div className="bg-[#1a1d24]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden transform transition-all hover:border-white/20">
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/20 to-transparent blur-2xl"></div>

      <div className="flex flex-col items-center mb-8 relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Ro'yxatdan o'tish</h1>
        <p className="text-gray-400 mt-2 text-sm">Yangi hisob yarating va bilim olishni boshlang</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4 relative z-10">
        
        {/* Ism Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">To'liq ism</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Ali Valiyev" 
              className="w-full pl-11 pr-4 py-3 bg-[#0f1115]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Elektron pochta</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input 
              type="email" 
              placeholder="ism@mail.com" 
              className="w-full pl-11 pr-4 py-3 bg-[#0f1115]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
              required
            />
          </div>
        </div>

        {/* Parol Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Parol</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full pl-11 pr-4 py-3 bg-[#0f1115]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
              required
            />
          </div>
        </div>

        {/* Ro'yxatdan o'tish Tugmasi */}
        <button 
          type="submit" 
          className="w-full mt-4 py-3.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <UserPlus className="w-5 h-5" />
          Ro'yxatdan o'tish
        </button>

      </form>

      {/* Loginga qaytish */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-gray-400 text-sm">
          Akkountingiz bormi?{' '}
          <Link to="/login" className="text-indigo-400 font-semibold hover:text-indigo-300 hover:underline transition-colors">
            Kirish
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Register;