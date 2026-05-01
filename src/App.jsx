import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 1. Auth importlari (Yangi)
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// 2. Student importlari
import StudentLayout from './layouts/StudentLayout';
import StudentDashboard from './pages/student/Dashboard';
import StudentCourses from './pages/student/Courses';
import StudentLeaderboard from './pages/student/Leaderboard';
import StudentShop from './pages/student/Shop';

// 3. Teacher importlari (Vaqtinchalik)
import TeacherLayout from './layouts/TeacherLayout';
const TeacherDashboard = () => <div className="text-2xl font-bold">O'qituvchi - Asosiy panel</div>;
const TeacherGroups = () => <div className="text-2xl font-bold">O'qituvchi - Guruhlarim</div>;
const TeacherAttendance = () => <div className="text-2xl font-bold">O'qituvchi - Davomat (Yo'qlama)</div>;
const TeacherGrades = () => <div className="text-2xl font-bold">O'qituvchi - Baholash</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Endi birinchi kirganda Login sahifasiga yo'naltiramiz */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* ==========================================
            AUTH YO'LLARI (Login / Register)
            ========================================== */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ==========================================
            STUDENT YO'LLARI
            ========================================== */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="/student/dashboard" />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="leaderboard" element={<StudentLeaderboard />} />
          <Route path="shop" element={<StudentShop />} />
        </Route>

        {/* ==========================================
            TEACHER YO'LLARI
            ========================================== */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Navigate to="/teacher/dashboard" />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="groups" element={<TeacherGroups />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="grades" element={<TeacherGrades />} />
        </Route>

        {/* Agar topilmagan manzilga kirsa */}
        <Route path="*" element={<div className="p-10 text-center text-red-500 font-bold text-2xl">404 - Sahifa topilmadi</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;