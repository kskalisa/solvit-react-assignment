import React, {createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []); 

    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const foundUser = users.find(u => u.email === email && u.password === password);

        // if (foundUser){
        //     const userData = {...foundUser, password: undefined };
        //     setUser(userData);
        //     localStorage.setItem('user', JSON.stringify(userData));
        //     return { success: true, user: userData};
        // }
        // return {success: false, message: 'Invalid email or password'};

        if (!foundUser){
            return {success: false, message: 'Invalid email or password'};
        }
        const now = new Date().toISOString();

        const updatedUser = users.map(u => 
            u.id === foundUser.id ? {...u, lastLogin: now, status: 'active'} : u
        );

        localStorage.setItem('users', JSON.stringify(updatedUser));

        const userWithoutPassword ={
            ...foundUser,
            lastLogin: now,
            status: 'active',
            password: undefined 
        }
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));

        return { success: true, user: userWithoutPassword };
    };

    const register = (userData) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        if (users.find(u => u.email === userData.email)){
            return { success: false, message: 'User already exists'};
        }

        const newUser = {
            id: Date.now(),
            ...userData,
            role: users.length === 0 ? 'admin' : 'user',
            createdAt: new Date().toISOString(),
            lastLogin: null,
            status: 'active'
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        const userWithoutPassword = {...newUser, password: undefined };
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));

        return {success: true, user: userWithoutPassword };
    
    };

    const logout = () => {
        
        if (!user) {
           return;
        }
         const users = JSON.parse(localStorage.getItem('users') || '[]');
            const updatedUsers = users.map(u => 
                u.id === user.id ? {...u, status: 'inactive' } : u
            
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            setUser(null);
            localStorage.removeItem('user');
    }

    const updateProfile = (updatedData) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const updatedUsers = users.map(u => 
            u.id === user.id ? {...u, ...updatedData} : u
        );

        localStorage.setItem('users', JSON.stringify(updatedUsers));

        const updatedUser = {...user, ...updatedData };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            register,
            logout,
            updateProfile,
            isAuthenticated: !!user,
            isAdmin: user?.role === 'admin'
        }
        }
        >
            {children}
        </AuthContext.Provider>
    );

};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context;
};


