import React, { memo, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import useLogout from '../hooks/Logout';

const Menu = () => {
  const { userData, isAuthenticated } = useAuth();
  const logout = useLogout();

  // Mueve la lógica condicional fuera de la llamada de useCallback
  const handleLogout = useCallback(() => {
    if (isAuthenticated) {
      logout();
    }
  }, [isAuthenticated, logout]);

  // No renderizar nada si no está autenticado
  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="flex flex-col w-64 h-screen bg-gray-800 text-white" id="menu">
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900">
        <h1 className="text-xl font-semibold">{userData?.name || 'Usuario'}</h1>
        <button className="text-xl">
          <i className="fa fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="flex-grow overflow-y-auto">
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <a href="/inicio" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
              <i className="fa fa-home fa-2x mr-3"></i>
              <span>Inicio</span>
            </a>
          </li>
          {(userData?.id_role === 2 || userData?.id_role === 1) && (
            <>
              <li>
                <a href="/estadisticas" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
                  <i className="fa-solid fa-chart-simple fa-2x mr-3"></i>
                  <span>Estadísticas</span>
                </a>
              </li>
              <li>
                <a href="/historial" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
                  <i className="fa-solid fa-clock-rotate-left fa-2x mr-3"></i>
                  <span>Historial</span>
                </a>
              </li>
              <li>
                <a href="/usuarios" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
                  <i className="fa fa-user-plus fa-2x mr-3"></i>
                  <span>Crear usuario</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="p-4">
        <ul className="flex flex-col p-4 space-y-2 border-t border-gray-700">
          <li>
            <button onClick={handleLogout} className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
              <i className="fa fa-power-off fa-2x mr-3"></i>
              <span>Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(Menu);
