import './App.css';
import { UserProvider } from '../src/context/UserContext';
import { Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Home from './pages/Home/Home';
import React from 'react';

const App = () => {
    return (
        <div className="App">
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/menu" element={<Menu/>}/>
                </Routes>
            </UserProvider>
        </div>
    );
};

export default App;
