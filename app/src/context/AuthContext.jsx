import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PROTECTED_ROUTE, GET_USER_API } from '../config/routes';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    return savedAuth ? JSON.parse(savedAuth) : false;
  });
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(PROTECTED_ROUTE, {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          setIsAuthenticated(false);
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('userData');
          navigate('/login');
          return;
        }

        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');

        const data = await response.json();
        if (data.message.id_auth) {
          const queryResponse = await fetch(`${GET_USER_API}${data.message.id_auth}`, {
            method: 'GET',
            credentials: 'include',
          });

          if (!queryResponse.ok) throw new Error('Failed to fetch user data');

          const queryData = await queryResponse.json();
          const user = queryData.body[0];

          setUserData(user);
          localStorage.setItem('userData', JSON.stringify(user));
        }

      } catch (error) {
        setIsAuthenticated(false);
        setError(error.message);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userData');
        navigate('/login');
      }
    };

    if (!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/') {
      checkAuth();
    }

  }, [isAuthenticated, location.pathname, navigate]);

  useEffect(() => {
    if (isAuthenticated && (location.pathname === '/login' || location.pathname === '/')) {
      navigate('/inicio');
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);