import React from 'react';
import { Gift, Coins, Lock, ShoppingBag, Laptop, Headphones, Mouse, BookOpen, Coffee } from 'lucide-react';

const Shop = () => {
  // O'quvchining hozirgi balansi (Boshqa sahifalardagi kabi 150)
  const myCoins = 150;

  // Do'kondagi sovg'alar ro'yxati (Mock Data)
  const shopItems = [
    { id: 1, name: "Firma ruchkasi va bloknot", price: 50, icon: BookOpen, color: "text-blue-500", bg: "bg-blue-100" },
    { id: 2, name: "Kofe yoki Choy uchun krujka", price: 120, icon: Coffee, color: "text-orange-500", bg: "bg-orange-100" },
    { id: 3, name: "Simsiz sichqoncha (Mouse)", price: 300, icon: Mouse, color: "text-emerald-500", bg: "bg-emerald-100" },
    { id: 4, name: "Zamonaviy quloqchin (Airpods)", price: 1500, icon: Headphones, color: "text-purple-500", bg: "bg-purple-100" },
    { id: 5, name: "Noutbuk (Core i5)", price: 5000, icon: Laptop, color: "text-slate-700", bg: "bg-slate-200" },
    { id: 6, name: "Maxsus sovg'a qutisi", price: 500, icon: Gift, color: "text-pink-500", bg: "bg-pink-100" },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      
      {/* 1. Sarlavha va Balans qismi */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
        {/* Orqa fondagi bezak */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

        <div className="relative z-10 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center justify-center sm:justify-start gap-2">
            <ShoppingBag className="w-6 h-6 text-indigo-600" />
            Sovg'alar Do'koni
          </h1>
          <p className="text-gray-500 mt-2 max-w-lg">
            Bilim oling, vazifalarni bajaring va yig'ilgan Coinlarni ajoyib sovg'alarga almashtiring!
          </p>
        </div>

        {/* Coin Balansi */}
        <div className="relative z-10 bg-amber-100/50 border border-amber-200 px-6 py-4 rounded-2xl flex flex-col items-center min-w-[150px]">
          <span className="text-sm font-semibold text-amber-700 mb-1">Balansingiz</span>
          <div className="flex items-center gap-2">
            <Coins className="w-8 h-8 fill-amber-500 text-amber-500" />
            <span className="text-3xl font-bold text-gray-900">{myCoins}</span>
          </div>
        </div>
      </div>

      {/* 2. Sovg'alar ro'yxati (Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shopItems.map((item) => {
          // Sotib olishga qurbi yetadimi?
          const canAfford = myCoins >= item.price;
          // Qancha foiz puli yig'ilgan? (100% dan oshib ketmasligi uchun Math.min ishlatamiz)
          const progressPercent = Math.min((myCoins / item.price) * 100, 100);

          return (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all flex flex-col group">
              
              {/* Ikonka/Rasm qismi */}
              <div className={`h-40 ${item.bg} flex items-center justify-center relative overflow-hidden`}>
                <item.icon className={`w-20 h-20 ${item.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-sm`} />
                
                {/* Narxi tepada burchakda */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur border border-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Coins className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-bold text-gray-900">{item.price}</span>
                </div>
              </div>

              {/* Ma'lumot qismi */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.name}</h3>
                
                <div className="mt-auto space-y-4">
                  {/* Progress (Coin yetarli bo'lmasa) */}
                  {!canAfford && (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Yetishmayapti: <span className="font-bold text-red-500">{item.price - myCoins} coin</span></span>
                        <span className="font-bold text-gray-700">{Math.floor(progressPercent)}%</span>
                      </div>
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-amber-400 h-full rounded-full" 
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Tugma */}
                  <button 
                    disabled={!canAfford}
                    className={`w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                      canAfford 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {canAfford ? (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        Olish (Buyurtma)
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Coin yetarli emas
                      </>
                    )}
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