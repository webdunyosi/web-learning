import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// 1. Auth importlari
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// 2. Student importlari
import StudentLayout from './layouts/StudentLayout';
import StudentDashboard from './pages/student/Dashboard';
import StudentCourses from './pages/student/Courses';
import StudentLeaderboard from './pages/student/Leaderboard';
import StudentAttendance from './pages/student/Attendance';
import StudentPayments from './pages/student/Payments';
import StudentShop from './pages/student/Shop';
import StudentProfile from './pages/student/Profile';
import StudentNotifications from './pages/student/Notifications';

// 3. Teacher importlari
import TeacherLayout from './layouts/TeacherLayout';
import TeacherDashboard from './pages/teacher/Dashboard'; // Bu faylni yaratdik
import TeacherGroups from './pages/teacher/Groups';       // Keyingi bosqichda yaratasiz
import TeacherAttendance from './pages/teacher/Attendance'; 
import TeacherGrades from './pages/teacher/Grades';
import TeacherMessages from './pages/teacher/Messages';
import TeacherSettings from './pages/teacher/Settings';
import TeacherProfile from './pages/teacher/Profile';
import TeacherNotifications from './pages/teacher/Notifications';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Asosiy kirish */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* ==========================================
            AUTH YO'LLARI
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
          <Route path="attendance" element={<StudentAttendance />} /> 
          <Route path="payments" element={<StudentPayments />} />
          <Route path="shop" element={<StudentShop />} />
          <Route path="profile" element={<StudentProfile />} /> 
          <Route path="notifications" element={<StudentNotifications />} /> 
        </Route>

        {/* ==========================================
            TEACHER YO'LLARI
            ========================================== */}
        <Route path="/teacher" element={<TeacherLayout />}>
          {/* Default yo'naltirish */}
          <Route index element={<Navigate to="/teacher/dashboard" />} />
          
          {/* Sidebardagi barcha sahifalar ulandi */}
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="groups" element={<TeacherGroups />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="grades" element={<TeacherGrades />} />
          <Route path="messages" element={<TeacherMessages />} />
          <Route path="settings" element={<TeacherSettings />} />
          
          {/* Headerdagi profil va bildirishnomalar uchun */}
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="notifications" element={<TeacherNotifications />} />
        </Route>

        {/* 404 - Sahifa topilmadi */}
        <Route path="*" element={<div className="p-10 text-center text-red-500 font-bold text-2xl">404 - Sahifa topilmadi</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;