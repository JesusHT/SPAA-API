import { useState, useEffect } from 'react';
import { PROTECTED_ROUTE, GET_USER_API } from '../config/routes';

const useUser = () => {
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(PROTECTED_ROUTE, {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        if (data.message.id_auth) {
          const queryResponse = await fetch(`${GET_USER_API}${data.message.id_auth}`, {
            method: 'GET',
            credentials: 'include',
          });

          if (!queryResponse.ok) throw new Error('Failed to fetch additional data');

          const queryData = await queryResponse.json();
          const user = queryData.body[0];

          setUserData(user);
          localStorage.setItem('userData', JSON.stringify(user)); 
        }
      } catch (error) {
        setError(error.message);
        localStorage.removeItem('userData');
      }
    };

    if (!userData) {
      fetchUserData(); 
    }
  }, [userData]);

  return {
    userData,
    error,
  };
};

export default useUser;
