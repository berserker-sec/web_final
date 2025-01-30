import { Navigate } from 'react-router-dom';
import { useAuth } from './Authcontext';

const AdminRoute = ({ children }) => {
    const { user } = useAuth();
    const isAdmin = user?.isAdmin || localStorage.getItem('isAdmin') === 'true';

    return isAdmin ? children : <Navigate to="/admin-login" />;
};

export default AdminRoute;