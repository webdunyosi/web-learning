import React, { useState } from 'react';
import { Gift, Coins, ShoppingBag, Shirt, Headphones, Ticket, CheckCircle } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('barchasi');

  // Foydalanuvchining joriy balansi
  const userBalance = 1500; 

  // Kategoriyalar
  const categories = [
    { id: 'barchasi', name: 'Barchasi' },
    { id: 'merch', name: 'Merch (Kiyimlar)' },
    { id: 'texnika', name: 'Texnika' },
    { id: 'vocher', name: 'Vocherlar' },
  ];

  // Tovarlar ro'yxati (Mock Data)
  const products = [
    { id: 1, name: "Web Learning Futbolkasi", price: 500, category: "merch", icon: Shirt, color: "from-blue-500 to-cyan-500", shadow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
    { id: 2, name: "Simsiz Sishqoncha", price: 1200, category: "texnika", icon: Headphones, color: "from-purple-500 to-fuchsia-500", shadow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]" },
    { id: 3, name: "1 Oylik Bepul Dars", price: 2000, category: "vocher", icon: Ticket, color: "from-yellow-400 to-orange-500", shadow: "shadow-[0_0_20px_rgba(250,204,21,0.3)]" },
    { id: 4, name: "O'quv Markaz Xudisi", price: 800, category: "merch", icon: Shirt, color: "from-green-400 to-emerald-600", shadow: "shadow-[0_0_20px_rgba(74,222,128,0.3)]" },
    { id: 5, name: "Airpods Pro", price: 3500, category: "texnika", icon: Headphones, color: "from-indigo-500 to-blue-600", shadow: "shadow-[0_0_20px_rgba(99,102,241,0.3)]" },
    { id: 6, name: "Kino uchun chipta", price: 300, category: "vocher", icon: Ticket, color: "from-red-400 to-rose-600", shadow: "shadow-[0_0_20px_rgba(248,113,113,0.3)]" },
  ];

  // Tanlangan kategoriyaga qarab tovarlarni filtrlash
  const filteredProducts = activeCategory === 'barchasi' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* 1. SARLAVHA VA BALANS PANELI */}
      <div className="relative bg-white/[0.02] backdrop-blur-3xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        
        {/* Shisha aks etishi */}
        <div className="absolute top-[-50%] right-[-10%] w-[250px] h-[250px] bg-pink-500/10 rounded-full blur-[70px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
            <Gift className="w-7 h-7 text-pink-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]" />
            Sovg'alar Do'koni
          </h1>
          <p className="text-gray-400 mt-2 font-medium">Yig'gan Coinlaringizga ajoyib sovg'alar xarid qiling</p>
        </div>

        {/* Joriy Balans (Neon Glass) */}
        <div className="relative z-10 flex items-center gap-3 bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-inner px-5 py-3 rounded-2xl">
          <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(250,204,21,0.5)] border border-yellow-300/50">
            <Coins className="w-5 h-5 text-yellow-900 drop-shadow-sm" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] text-gray-400 font-bold tracking-wider mb-0.5 uppercase">Joriy Balans</span>
            <span className="text-xl font-bold text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
              {userBalance.toLocaleString()} Coin
            </span>
          </div>
        </div>
      </div>

      {/* 2. KATEGORIYALAR (Filtr) */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar relative z-10">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 backdrop-blur-md ${
              activeCategory === category.id
                ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30 shadow-[0_0_15px_rgba(244,114,182,0.2)]'
                : 'bg-white/[0.02] text-gray-400 border border-white/10 hover:bg-white/[0.05] hover:text-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 3. TOVARLAR RO'YXATI (Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredProducts.map(product => {
          const ProductIcon = product.icon;
          const isAffordable = userBalance >= product.price;

          return (
            <div key={product.id} className="group relative bg-white/[0.02] backdrop-blur-2xl border-t border-l border-white/10 border-b border-r border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:shadow-[0_15px_35px_0_rgba(0,0,0,0.4)] flex flex-col">
              
              {/* Oyna aks etishi */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none z-10"></div>

              {/* Rasm qismi (Bizda rasm yo'qligi uchun Ikonka va Neon Gradient ishlatamiz) */}
              <div className="h-48 relative overflow-hidden flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                {/* Orqa fondagi chaqnash */}
                <div className={`absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${product.color}`}></div>
                <div className={`w-32 h-32 rounded-full absolute blur-[40px] opacity-40 bg-gradient-to-br ${product.color} ${product.shadow} group-hover:scale-110 transition-transform duration-500`}></div>
                
                {/* Mahsulot Ikonkasi */}
                <ProductIcon className="w-20 h-20 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Ma'lumot qismi */}
              <div className="p-6 flex flex-col flex-1 relative z-20">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white drop-shadow-sm group-hover:text-pink-300 transition-colors">
                    {product.name}
                  </h3>
                  {/* Kategoriya Badgesi */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/[0.05] border border-white/10 px-2 py-1 rounded-lg">
                    {product.category}
                  </span>
                </div>
                
                <div className="mt-auto pt-6 flex items-center justify-between">
                  {/* Narxi */}
                  <div className="flex items-center gap-1.5">
                    <Coins className="w-5 h-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                    <span className="text-xl font-bold text-yellow-400 drop-shadow-md">{product.price}</span>
                  </div>

                  {/* Sotib olish tugmasi */}
                  <button 
                    disabled={!isAffordable}
                    className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                      isAffordable 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_0_15px_rgba(74,222,128,0.4)] hover:shadow-[0_0_20px_rgba(74,222,128,0.6)] hover:-translate-y-0.5' 
                        : 'bg-gray-500/20 text-gray-500 cursor-not-allowed border border-gray-500/30'
                    }`}
                  >
                    {isAffordable ? <ShoppingBag className="w-4 h-4" /> : 'Mablag\' yetarli emas'}
                    {isAffordable ? 'Olish' : ''}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Shop;