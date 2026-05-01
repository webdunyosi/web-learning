import React from 'react';
import { BookOpen, User, Clock, CalendarDays, ChevronRight, PlayCircle } from 'lucide-react';

const Courses = () => {
  // Test uchun vaqtinchalik guruhlar ma'lumotlari (Mock Data)
  const myCourses = [
    {
      id: 1,
      title: "Frontend Dasturlash (ReactJS)",
      teacher: "Sardor aka",
      schedule: "Du, Chor, Juma",
      time: "14:00 - 16:00",
      progress: 65,
      totalLessons: 24,
      completedLessons: 15,
      color: "indigo",
      bgLight: "bg-indigo-50",
      textMain: "text-indigo-600",
      bgMain: "bg-indigo-600"
    },
    {
      id: 2,
      title: "Ingliz tili (IELTS Foundation)",
      teacher: "Malika opa",
      schedule: "Se, Pay, Shan",
      time: "16:30 - 18:00",
      progress: 40,
      totalLessons: 36,
      completedLessons: 14,
      color: "emerald",
      bgLight: "bg-emerald-50",
      textMain: "text-emerald-600",
      bgMain: "bg-emerald-600"
    },
    {
      id: 3,
      title: "Python Backend Dasturlash",
      teacher: "Alisher aka",
      schedule: "Du, Chor, Juma",
      time: "18:00 - 20:00",
      progress: 10,
      totalLessons: 48,
      completedLessons: 5,
      color: "blue",
      bgLight: "bg-blue-50",
      textMain: "text-blue-600",
      bgMain: "bg-blue-600"
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Sarlavha qismi */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mening guruhlarim</h1>
          <p className="text-gray-500 mt-1">Siz jami {myCourses.length} ta guruhda ta'lim olyapsiz</p>
        </div>
      </div>

      {/* Guruhlar ro'yxati (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCourses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
          >
            {/* Kartochka tepa qismi (Rangli fon va ikonka) */}
            <div className={`${course.bgLight} p-6 flex justify-center items-center relative`}>
              <div className={`absolute top-4 right-4 ${course.bgMain} text-white text-xs font-bold px-2 py-1 rounded-md`}>
                Faol
              </div>
              <BookOpen className={`w-16 h-16 ${course.textMain} opacity-80 group-hover:scale-110 transition-transform duration-300`} />
            </div>

            {/* Asosiy ma'lumotlar */}
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-gray-900 line-clamp-1" title={course.title}>
                {course.title}
              </h2>
              
              <div className="mt-4 space-y-2 flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <User className="w-4 h-4 text-gray-400" />
                  <span>{course.teacher}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CalendarDays className="w-4 h-4 text-gray-400" />
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{course.time}</span>
                </div>
              </div>

              {/* Progress qismi */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="font-medium text-gray-700">O'zlashtirish</span>
                  <span className={`font-bold ${course.textMain}`}>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`${course.bgMain} h-2 rounded-full transition-all duration-500`} 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {course.totalLessons} ta darsdan {course.completedLessons} tasi o'tildi
                </p>
              </div>

              {/* Tugma */}
              <button className={`mt-5 w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold border ${course.textMain} border-${course.color}-200 hover:${course.bgLight} transition-colors`}>
                <PlayCircle className="w-5 h-5" />
                Darsga kirish
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Courses;