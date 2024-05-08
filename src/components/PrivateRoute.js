import { Navigate, useLocation } from 'react-router-dom';
import useAuthCheck from './hooks/useAuthCheck';

export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuthCheck();
    const location = useLocation();
    console.log(isLoggedIn);
    return !isLoggedIn ? (
        <Navigate to="/register" state={{ from: location }} replace />
    ) : (
        children
    );
}


