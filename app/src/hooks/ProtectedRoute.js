import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const publicRoutes = ['/login', '/'];

  if (publicRoutes.includes(location.pathname)) {
    return element;
  }
  
  return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
