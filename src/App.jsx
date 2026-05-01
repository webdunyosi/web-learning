import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ==========================================
// 1. AUTH IMPORTLARI
// ==========================================
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// ==========================================
// 2. STUDENT IMPORTLARI
// ==========================================
import StudentLayout from './layouts/StudentLayout';
import StudentDashboard from './pages/student/Dashboard';
import StudentCourses from './pages/student/Courses';
import StudentLeaderboard from './pages/student/Leaderboard';
import StudentAttendance from './pages/student/Attendance';
import StudentPayments from './pages/student/Payments';
import StudentShop from './pages/student/Shop';
import StudentProfile from './pages/student/Profile';
import StudentNotifications from './pages/student/Notifications';

// ==========================================
// 3. TEACHER IMPORTLARI
// ==========================================
import TeacherLayout from './layouts/TeacherLayout';
import TeacherDashboard from './pages/teacher/Dashboard';
import TeacherGroups from './pages/teacher/Groups';
import TeacherAttendance from './pages/teacher/Attendance';
import TeacherGrades from './pages/teacher/Grades';
import TeacherMessages from './pages/teacher/Messages';
import TeacherSettings from './pages/teacher/Settings';
import TeacherProfile from './pages/teacher/Profile';
import TeacherNotifications from './pages/teacher/Notifications';

// ==========================================
// 4. ADMIN IMPORTLARI
// ==========================================
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminCourses from './pages/admin/Courses';
import AdminFinance from './pages/admin/Finance';
import AdminSettings from './pages/admin/Settings';
import AdminProfile from './pages/admin/Profile';
import AdminNotifications from './pages/admin/Notifications';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Asosiy kirish (Default redirect) */}
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
          <Route index element={<Navigate to="/teacher/dashboard" />} />
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="groups" element={<TeacherGroups />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="grades" element={<TeacherGrades />} />
          <Route path="messages" element={<TeacherMessages />} />
          <Route path="settings" element={<TeacherSettings />} />
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="notifications" element={<TeacherNotifications />} />
        </Route>

        {/* ==========================================
            ADMIN YO'LLARI
            ========================================== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route path="finance" element={<AdminFinance />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="notifications" element={<AdminNotifications />} />
        </Route>

        {/* Agar topilmagan manzilga kirsa */}
        <Route path="*" element={
          <div className="flex h-screen items-center justify-center bg-[#0d0f14] text-white">
            <div className="text-center">
              <h1 className="text-6xl font-black text-rose-500 mb-4">404</h1>
              <p className="text-xl text-gray-400">Sahifa topilmadi</p>
            </div>
          </div>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;