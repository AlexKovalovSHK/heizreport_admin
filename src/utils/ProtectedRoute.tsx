import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectAdmin, selectAdminStatus } from '../features/user_admin/adminSlice';
import Login from '../components/auth/Login';

/*interface ProtectedRouteProps {
  child: JSX.Element // Замените `any` на тип вашего `admin`
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ child }) => {
    const admin = useAppSelector(selectAdmin)
  return (
    <>
     {admin ? (child) : <Login/>}
    </>
  )
};

export default ProtectedRoute;*/


export const ProtectedRoute = () => {
    const admin = useAppSelector(selectAdmin);
  
    // Если admin нет, перенаправляем на страницу логина
    if (!admin) {
      return <Navigate to="/" replace />;
    }
  
    // Если admin есть, отображаем контент защищенного маршрута
    return <Outlet />;
  };