import './Home.css';
import React from 'react';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginForm/LoginForm';

const Home = () => {
    return (
        <div className="wrapper">
            <Header/>
            <h2>The best pizza</h2>
            <h3>Straight out of the oven, straight for you</h3>
            <p className='form__text'>Welcome! Please start by telling us your name</p>
            <LoginForm/>
        </div>
    );
};

export default Home;
