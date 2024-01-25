import React, { useCallback } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const LoginForm = () => {
    const { userName, setUserName } = useUserContext();
    const navigate = useNavigate();

    const saveName = useCallback((e) => {
        e.preventDefault();
        console.log(`Имя пользователя: ${userName}`);
        setUserName(userName);
        navigate('/menu');
    }, [userName, setUserName, navigate]);

    return (
        <form className='form' onSubmit={saveName}>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Ваше полное имя'
            />
            <button type='submit'>Отправить</button>
        </form>
    );
};

export default LoginForm;
