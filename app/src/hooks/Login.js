import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_LOGIN } from '../config/routes';

const useLoginForm = () => {
    const [workerNumber, setWorkerNumber] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(URL_LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ worker_number: workerNumber, password: password }),
                credentials: 'include',
            });

            if (response.ok) {
                navigate('/dashboard');
            } else {
                const data = await response.json();
                setError(data.body || 'Ocurrió un error');
            }
        } catch (err) {
            setError('Ocurrió un error');
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return {
        workerNumber,
        setWorkerNumber,
        password,
        setPassword,
        error,
        handleSubmit,
        isPasswordVisible,
        togglePasswordVisibility
    };
};

export default useLoginForm;
