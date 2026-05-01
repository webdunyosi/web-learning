import React, { useState } from 'react';
import { CreditCard, AlertCircle, Copy, CheckCircle, Wallet, ReceiptText, ArrowDownToLine } from 'lucide-react';

const Payments = () => {
  const [copied, setCopied] = useState(false);

  // Karta raqamini nusxalash funksiyasi
  const handleCopy = () => {
    navigator.clipboard.writeText('4073 4200 6820 8093');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* 1. SARLAVHA PANELI */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Shisha aks etishi */}
        <div className="absolute top-[-50%] right-[-10%] w-[250px] h-[250px] bg-purple-500/10 rounded-full blur-[70px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
              <CreditCard className="w-7 h-7 text-purple-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
              To'lovlar
            </h1>
            <p className="text-gray-400 mt-2 font-medium">Sizning to'lovlar va qarzdorlik holatingiz</p>
          </div>
        </div>
      </div>

      {/* 2. STATISTIKA KARTOCHKALARI (3 ta blok) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Kurs to'lovi */}
        <div className="relative bg-white/[0.02] backdrop-blur-2xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-2xl p-6 overflow-hidden group shadow-lg">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/20 blur-[30px] rounded-full group-hover:bg-blue-500/30 transition-colors pointer-events-none"></div>
          <div className="relative z-10">
            <p className="text-sm text-gray-400 font-medium mb-2 flex items-center gap-2">
              <ReceiptText className="w-4 h-4 text-blue-400" /> Kurs to'lovi
            </p>
            <p className="text-3xl font-bold text-white drop-shadow-sm">1,000,000 <span className="text-lg text-gray-500 font-normal">so'm</span></p>
          </div>
        </div>

        {/* To'langan */}
        <div className="relative bg-white/[0.02] backdrop-blur-2xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-2xl p-6 overflow-hidden group shadow-lg">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-500/20 blur-[30px] rounded-full group-hover:bg-green-500/30 transition-colors pointer-events-none"></div>
          <div className="relative z-10">
            <p className="text-sm text-gray-400 font-medium mb-2 flex items-center gap-2">
              <Wallet className="w-4 h-4 text-green-400" /> To'langan
            </p>
            <p className="text-3xl font-bold text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">0 <span className="text-lg text-green-500/50 font-normal">so'm</span></p>
          </div>
        </div>

        {/* Qarzdorlik */}
        <div className="relative bg-red-500/5 backdrop-blur-2xl border-t border-l border-red-500/20 border-b border-r border-red-500/10 rounded-2xl p-6 overflow-hidden group shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-red-500/20 blur-[30px] rounded-full group-hover:bg-red-500/30 transition-colors pointer-events-none"></div>
          <div className="relative z-10">
            <p className="text-sm text-red-400/80 font-medium mb-2 flex items-center gap-2">
              <ArrowDownToLine className="w-4 h-4 text-red-400" /> Qarzdorlik
            </p>
            <p className="text-3xl font-bold text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">1,000,000 <span className="text-lg text-red-500/50 font-normal">so'm</span></p>
          </div>
        </div>

      </div>

      {/* 3. OGOHLANTIRISH BLOKI (To'lov holati) */}
      <div className="relative bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-2xl p-5 flex items-center gap-4 shadow-[0_0_15px_rgba(239,68,68,0.1)] overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent pointer-events-none"></div>
         <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30 relative z-10">
           <AlertCircle className="w-6 h-6 text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
         </div>
         <div className="relative z-10">
           <p className="text-sm text-red-300/80 font-medium">To'lov holati</p>
           <p className="text-lg font-bold text-red-400 drop-shadow-sm">To'lanmagan</p>
         </div>
      </div>

      {/* 4. KARTA MA'LUMOTLARI (To'lov qilish uchun) */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Sarlavha */}
        <div className="flex items-center gap-3 mb-8 relative z-10">
          <CreditCard className="w-5 h-5 text-gray-400" />
          <h2 className="text-lg font-bold text-white drop-shadow-sm">To'lov uchun karta ma'lumotlari</h2>
        </div>

        {/* Karta dizayni */}
        <div className="space-y-4 relative z-10 max-w-2xl">
          
          {/* Karta raqami */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 group hover:border-purple-500/30 transition-colors">
            <p className="text-xs text-gray-500 mb-2 font-medium">Karta raqami</p>
            <div className="flex items-center justify-between gap-4">
              <p className="text-2xl sm:text-3xl font-bold text-purple-300 tracking-widest drop-shadow-[0_0_8px_rgba(216,180,254,0.4)]">
                4073 4200 6820 8093
              </p>
              <button 
                onClick={handleCopy}
                className="p-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/30 rounded-xl transition-all text-gray-400 hover:text-purple-300 flex-shrink-0"
                title="Nusxalash"
              >
                {copied ? <CheckCircle className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Karta egasi */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
            <p className="text-xs text-gray-500 mb-1 font-medium">Karta egasi</p>
            <p className="text-lg sm:text-xl font-bold text-gray-200 tracking-wide">
              Alimardon Toshpulatov
            </p>
          </div>

          {/* Eslatma */}
          <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse"></div>
            <p className="text-sm text-gray-400 leading-relaxed">
              To'lovni amalga oshirgandan so'ng, to'lov chekini administratorga Telegram orqali yuborishni unutmang. To'lov tasdiqlangach, profilingiz faollashadi.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Payments;