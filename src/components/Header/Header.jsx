import './Header.css';
import { useUserContext } from '../../context/UserContext';
import React from 'react';

const Header = () => {
    const { userName } = useUserContext();

    return (
        <section className="header">
            <div className='container'>
                <p className='header__text'>pizza day</p>
                <input type='text' placeholder='search for the order #'/>
                {userName ? <p className='header__text'>{userName}</p> : ''}
            </div>
        </section>
    );
};

export default Header;