import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Star, 
  CheckCircle2,
  Share2, // Github o'rniga
  Link as LinkIcon, // Linkedin o'rniga
  Globe
} from 'lucide-react';

const TeacherProfile = () => {
  const teacherInfo = {
    name: 'Sardor Tursunov',
    role: 'Senior Frontend Mentor',
    email: 'mentor@weblearning.uz',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston',
    joined: 'Yanvar, 2023',
    bio: '7 yillik tajribaga ega Senior Frontend dasturchi. React, Next.js va TypeScript bo\'yicha mutaxassis. Oxirgi 3 yil davomida 500 dan ortiq muvaffaqiyatli bitiruvchilarni tayyorlagan.',
    stats: [
      { label: 'O\'quvchilar', value: '1,200+', icon: User, color: 'text-blue-400' },
      { label: 'Kurslar', value: '12', icon: BookOpen, color: 'text-indigo-400' },
      { label: 'Reyting', value: '4.9', icon: Star, color: 'text-yellow-400' },
      { label: 'Tajriba', value: '7 yil', icon: Award, color: 'text-emerald-400' },
    ]
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* 1. PROFILE HEADER CARD */}
      <div className="relative overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 p-[3px] shadow-[0_20px_50px_rgba(79,70,229,0.3)]">
              <div className="w-full h-full bg-[#0d0f14] rounded-[2.3rem] flex items-center justify-center text-5xl font-black text-white">
                ST
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg border-2 border-[#0d0f14] flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Tasdiqlangan
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
              {teacherInfo.name}
            </h1>
            <p className="text-xl text-indigo-400 font-bold italic mb-6">{teacherInfo.role}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-indigo-500" /> {teacherInfo.email}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-indigo-500" /> {teacherInfo.phone}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-500" /> {teacherInfo.location}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Calendar className="w-4 h-4 text-indigo-500" /> {teacherInfo.joined} dan buyon mentor
              </div>
            </div>

            {/* XATONI TO'G'RILAGAN QISM */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-8">
              {[LinkIcon, Share2, Globe].map((Icon, idx) => (
                <button key={idx} className="p-3 bg-white/5 border border-white/10 rounded-2xl text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {teacherInfo.stats.map((stat, idx) => (
          <div key={idx} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] hover:bg-white/[0.05] transition-all group">
            <stat.icon className={`w-6 h-6 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
            <h3 className="text-2xl font-black text-white">{stat.value}</h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 3. BIO SECTION */}
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-indigo-400" />
            Men haqimda
          </h3>
          <p className="text-gray-400 leading-relaxed text-lg italic">
            "{teacherInfo.bio}"
          </p>
          
          <div className="mt-10 space-y-6">
            <h4 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">Asosiy texnologiyalar</h4>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Redux Toolkit'].map((tech) => (
                <span key={tech} className="px-5 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-300 text-xs font-bold shadow-inner">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. YUTUQLAR */}
        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8">
          <h3 className="text-xl font-bold text-white mb-6">Yutuqlar</h3>
          <div className="space-y-6">
            {[
              { title: 'Yil mentori 2024', issuer: 'Web Learning Hub' },
              { title: 'Google Certified Developer', issuer: 'Google IT' },
              { title: 'Senior Software Engineer', issuer: 'EPAM Systems' },
            ].map((ach, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-all">
                  <Star className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{ach.title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{ach.issuer}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-gray-400 text-sm font-bold hover:bg-white/10 hover:text-white transition-all">
            Barcha sertifikatlar
          </button>
        </div>
      </div>

    </div>
  );
};

export default TeacherProfile;