import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};

const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');

    return (
        <UserContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, useUserContext };
