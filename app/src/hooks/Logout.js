import { useNavigate } from 'react-router-dom';
import { URL_LOGOUT } from '../config/routes';

const useLogout = () => {
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await fetch(URL_LOGOUT, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userData');
            console.log('Redirecting to login...');
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return logout;
};

export default useLogout;
