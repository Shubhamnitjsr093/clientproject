import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultContextValue = {
    user: null,
    login: () => {},
    logout: () => {},
    loading: true,
    isAuthenticated: () => false,
    hasRole: () => false
};

const AuthContext = createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (storedUser && token) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                
                // Redirect based on role if not already on a dashboard
                const currentPath = window.location.pathname;
                if (!currentPath.includes('/dashboard/')) {
                    switch (parsedUser.user.role) {
                        case 'client':
                            navigate('/dashboard/client');
                            break;
                        case 'contractor':
                            navigate('/dashboard/contractor');
                            break;
                        case 'admin':
                            navigate('/dashboard/admin');
                            break;
                        default:
                            navigate('/dashboard/client');
                    }
                }
            } catch (error) {
                console.error('Error parsing stored user:', error);
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, [navigate]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', userData.token);
        
        // Redirect based on role
        switch (userData.user.role) {
            case 'client':
                navigate('/dashboard/client');
                break;
            case 'contractor':
                navigate('/dashboard/contractor');
                break;
            case 'admin':
                navigate('/dashboard/admin');
                break;
            default:
                navigate('/dashboard/client');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    };

    const isAuthenticated = () => {
        return !!user;
    };

    const hasRole = (role) => {
        return user?.user?.role === role;
    };

    const value = {
        user,
        login,
        logout,
        loading,
        isAuthenticated,
        hasRole
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};