import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    // To'q fon va e'tiborni tortuvchi gradientlar (Liquid Glass effekti asosi)
    <div className="min-h-screen bg-[#0f1115] relative overflow-hidden flex items-center justify-center p-4">
      
      {/* Orqa fondagi harakatlanuvchi neon doiralar */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Sahifa kontenti (Login yoki Register formasi) Outlet o'rniga tushadi */}
      <div className="w-full max-w-md relative z-10">
        <Outlet />
      </div>

    </div>
  );
};

export default AuthLayout;