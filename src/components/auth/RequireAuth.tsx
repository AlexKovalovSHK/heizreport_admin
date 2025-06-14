import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectAdmin, selectAdminId, selectAdminStatus } from '../../features/user_admin/adminSlice';

const RequireAuth = React.memo(({ children }: any) => {
    const location = useLocation();
    const admin = useAppSelector(selectAdmin);
    const adminId = useAppSelector(selectAdminId);
    const status = useAppSelector(selectAdminStatus);

    console.log("Rendering RequireAuth");
    console.log("Admin:", admin);
    console.log("Admin ID:", adminId);
    console.log("Status:", status);

    useEffect(() => {
        console.log("Admin updated:", admin);
    }, [admin]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!admin || Object.keys(admin).length === 0) {
        console.log("Admin is empty, redirecting to /");
        return <Navigate to='/' state={{ from: location }} replace />;
    } else {
        return <Navigate to='/dashboard' state={{ from: location }} replace />;
    }

    
});

export default RequireAuth;