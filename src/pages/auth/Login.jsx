import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, BookOpen } from 'lucide-react';

// Boshida yaratgan JSON faylimizni chaqirib olamiz
import usersData from '../../data/users.json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Xatolik xabarini saqlash uchun
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Har safar tugma bosilganda eski xatoni tozalaymiz

    // 1. JSON fayldan shu email va parolga mos odamni qidiramiz
    const user = usersData.find(
      (u) => u.email === email && u.password === password
    );

    // 2. Agar foydalanuvchi topilsa
    if (user) {
      // Kelajakda ishlashimiz uchun uni Brauzer xotirasiga (LocalStorage) saqlab qo'yamiz
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Foydalanuvchining roliga qarab tegishli panelga yo'naltiramiz
      navigate(`/${user.role}/dashboard`);
    } else {
      // 3. Agar topilmasa, xatolik chiqaramiz
      setError('Elektron pochta yoki parol xato!');
    }
  };

  return (
    <div className="bg-[#1a1d24]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden transform transition-all hover:border-white/20">
      
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent blur-2xl"></div>

      <div className="flex flex-col items-center mb-8 relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(74,222,128,0.3)]">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Tizimga kirish</h1>
        <p className="text-gray-400 mt-2 text-sm">O'z hisobingizga kiring va o'qishni davom ettiring</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5 relative z-10">
        
        {/* Xatolik xabari chiqadigan joy */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-medium p-3 rounded-xl text-center">
            {error}
          </div>
        )}

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Elektron pochta</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-500 group-focus-within:text-green-400 transition-colors" />
            </div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ism@mail.com" 
              className="w-full pl-11 pr-4 py-3 bg-[#0f1115]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
              required
            />
          </div>
        </div>

        {/* Parol Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Parol</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-gray-500 group-focus-within:text-green-400 transition-colors" />
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full pl-11 pr-4 py-3 bg-[#0f1115]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
              required
            />
          </div>
        </div>

        {/* Kirish Tugmasi */}
        <button 
          type="submit" 
          className="w-full mt-2 py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(74,222,128,0.4)] hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <LogIn className="w-5 h-5" />
          Tizimga kirish
        </button>

      </form>

      {/* Registerga o'tish */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-gray-400 text-sm">
          Hisobingiz yo'qmi?{' '}
          <Link to="/register" className="text-green-400 font-semibold hover:text-green-300 hover:underline transition-colors">
            Ro'yxatdan o'tish
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Login;