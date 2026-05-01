import React, { useState } from 'react';
import { 
  Search, 
  Send, 
  MoreVertical, 
  Paperclip, 
  Smile, 
  CheckCheck,
  User,
  Circle
} from 'lucide-react';

const TeacherMessages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState('');

  // Mock Kontaktlar
  const contacts = [
    { id: 1, name: 'Ali Valiyev', lastMsg: 'Ustoz, vazifani yubordim.', time: '10:45', unread: 2, online: true },
    { id: 2, name: 'Madina Ikromova', lastMsg: 'Dars soat nechada boshlanadi?', time: '09:20', unread: 0, online: false },
    { id: 3, name: 'Frontend B-24 (Guruh)', lastMsg: 'Sardor: Yakshanba kuni dars bormi?', time: 'Kecha', unread: 15, online: true },
    { id: 4, name: 'Lobar Karimova', lastMsg: 'Rahmat!', time: 'Kecha', unread: 0, online: false },
  ];

  // Mock Xabarlar
  const messages = [
    { id: 1, sender: 'Ali Valiyev', text: 'Assalomu alaykum ustoz!', time: '10:40', isMe: false },
    { id: 2, sender: 'Me', text: 'Vaalaykum assalom, Ali. Yaxshimisan?', time: '10:42', isMe: true },
    { id: 3, sender: 'Ali Valiyev', text: 'Ustoz, bugungi vazifani tugatdim, tekshirib bera olasizmi?', time: '10:44', isMe: false },
    { id: 4, sender: 'Ali Valiyev', text: 'Faylni hozir chatga biriktirib yubordim.', time: '10:45', isMe: false },
  ];

  return (
    <div className="h-[calc(100vh-160px)] flex bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in duration-700">
      
      {/* 1. CHAP TOMON: KONTAKTLAR RO'YXATI */}
      <div className="w-full md:w-80 border-r border-white/5 flex flex-col bg-white/[0.01]">
        <div className="p-6">
          <h2 className="text-xl font-black text-white mb-4">Xabarlar</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Qidirish..." 
              className="w-full bg-white/[0.05] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-gray-200 outline-none focus:border-indigo-500/50"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => setSelectedChat(contact.id)}
              className={`flex items-center gap-4 p-4 cursor-pointer transition-all ${
                selectedChat === contact.id ? 'bg-indigo-500/10 border-l-4 border-indigo-500' : 'hover:bg-white/[0.03] border-l-4 border-transparent'
              }`}
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-indigo-300 font-bold">
                  {contact.name[0]}
                </div>
                {contact.online && (
                  <Circle className="absolute bottom-0 right-0 w-3 h-3 fill-emerald-500 text-emerald-500 border-2 border-[#0d0f14] rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="text-sm font-bold text-gray-200 truncate">{contact.name}</h4>
                  <span className="text-[10px] text-gray-500">{contact.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{contact.lastMsg}</p>
              </div>
              {contact.unread > 0 && (
                <div className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.4)]">
                  {contact.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. O'NG TOMON: CHAT OYNASI */}
      <div className="hidden md:flex flex-1 flex-col relative overflow-hidden">
        
        {/* Chat Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 font-bold">
              {contacts.find(c => c.id === selectedChat)?.name[0]}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{contacts.find(c => c.id === selectedChat)?.name}</h3>
              <p className="text-[10px] text-emerald-400 font-medium">Online</p>
            </div>
          </div>
          <button className="p-2 text-gray-500 hover:text-white transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Kontenti */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[70%] p-4 rounded-2xl text-sm shadow-xl ${
                msg.isMe 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white/[0.05] text-gray-200 border border-white/10 rounded-tl-none'
              }`}>
                {!msg.isMe && <p className="text-[10px] font-black text-indigo-400 mb-1 uppercase tracking-tighter">{msg.sender}</p>}
                <p className="leading-relaxed">{msg.text}</p>
                <div className={`flex items-center gap-1 mt-2 ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-[9px] opacity-50">{msg.time}</span>
                  {msg.isMe && <CheckCheck className="w-3 h-3 opacity-50" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Xabar yuborish qismi */}
        <div className="p-6 bg-white/[0.01] border-t border-white/5">
          <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-2 px-4 focus-within:border-indigo-500/50 transition-all">
            <button className="text-gray-500 hover:text-indigo-400 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <input 
              type="text" 
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Xabar yozing..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-white py-2"
            />
            <button className="text-gray-500 hover:text-yellow-400 transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <button 
              className={`p-2 rounded-xl transition-all ${
                messageText.trim() ? 'bg-indigo-600 text-white scale-110 shadow-lg' : 'bg-white/5 text-gray-600'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherMessages;