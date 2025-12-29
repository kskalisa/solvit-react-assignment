import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';

const ProtectedRoute = ({children, adminOnly = false}) => {
    const { isAuthenticated, isAdmin, loading } = useAuth();
    const { showToast } = useToast();


    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center dark:bg-gray-900'>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>

            </div>
        );
    }

    if (!isAuthenticated){
        // showToast('Please login to access this page', 'warning');
        return <Navigate to="/login" replace/>;
    }
    

    if (adminOnly && !isAdmin){
        // showToast('You do not have permission to access this page', 'error');
        return <Navigate to="/dashboard" replace/>;
    }

    return children;
};

export default ProtectedRoute;