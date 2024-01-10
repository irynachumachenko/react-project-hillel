import './App.css';
import { UserProvider } from '../src/context/UserContext';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';

const App = () => {
    return (
        <div className="App">
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </UserProvider>
        </div>
    );
};

export default App;
