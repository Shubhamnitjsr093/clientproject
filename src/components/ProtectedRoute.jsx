import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const location = useLocation();
    
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    // If no user or token, redirect to login
    if (!userData || !token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Check if user's role is allowed
    if (!allowedRoles.includes(userData.role)) {
        // If not allowed, redirect to appropriate dashboard or home
        switch (userData.role) {
            case 'admin':
                return <Navigate to="/admin/dashboard" replace />;
            case 'client':
                return <Navigate to="/client/dashboard" replace />;
            case 'contractor':
                return <Navigate to="/contractor/dashboard" replace />;
            default:
                return <Navigate to="/" replace />;
        }
    }

    // If user is authenticated and has correct role, render children
    return children;
};

export default ProtectedRoute; 