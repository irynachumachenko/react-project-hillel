import React from 'react';
import './Form.css';
import { useUserContext } from '../../context/UserContext';

const Form = () => {
    const { userName, setUserName } = useUserContext();

    const saveName = (e) => {
        e.preventDefault();

        console.log(`Имя пользователя: ${userName}`);

        setUserName(userName);
    };

    return (
        <form className='form' onSubmit={saveName}>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='Your full name'
            />
            <button type='submit'>click</button>
        </form>
    );
};

export default Form;