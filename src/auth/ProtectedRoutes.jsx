import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoutes = ({ children }) => {
  
    //const { isAuthenticated, role } = useContext(AuthContext)
    
    const roleRoute = children.props.roleRoute;
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const role = localStorage.getItem('role')
    
    if (!isAuthenticated || role !== roleRoute) {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userName')
        localStorage.removeItem('role')
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoutes