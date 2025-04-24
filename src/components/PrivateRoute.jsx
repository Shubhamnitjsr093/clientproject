// frontend/src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles && !allowedRoles.includes(user.user.role)) {
        // Redirect to appropriate dashboard if user role doesn't match
        switch (user.user.role) {
            case 'client':
                return <Navigate to="/dashboard/client" />;
            case 'contractor':
                return <Navigate to="/dashboard/contractor" />;
            case 'admin':
                return <Navigate to="/dashboard/admin" />;
            default:
                return <Navigate to="/login" />;
        }
    }

    return children;
};

export default PrivateRoute;