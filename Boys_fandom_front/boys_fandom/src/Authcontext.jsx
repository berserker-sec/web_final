import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    const adminLogin = async (email, password) => {
        try {
            console.log('Login attempt with:', { email, password }); // Debug için

            const response = await fetch('http://localhost:5454/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log('Server response:', data); // Debug için

            if (!response.ok) {
                throw new Error(data.message || 'Giriş başarısız');
            }

            setUser(data);
            setToken(data.token);
            localStorage.setItem('token', data.token);
            localStorage.setItem('isAdmin', 'true');
            
            return { success: true };
        } catch (error) {
            console.error('Login error:', error); // Debug için
            return { 
                success: false, 
                error: error.message || 'Giriş işlemi başarısız oldu'
            };
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin');
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            token, 
            adminLogin, 
            logout,
            isAdmin: user?.isAdmin || false 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);