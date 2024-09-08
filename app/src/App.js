import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './hooks/ProtectedRoute';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));
const Statistics = lazy(() => import('./pages/Statistics'));
const History = lazy(() => import('./pages/History'));
const NotFound = lazy(() => import('./pages/404'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<ProtectedRoute element={<Login />} />} />
            <Route path="/inicio" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/usuarios" element={<ProtectedRoute element={<Users />} />} />
            <Route path="/estadisticas" element={<ProtectedRoute element={<Statistics />} />} />
            <Route path="/historial" element={<ProtectedRoute element={<History />} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;
