import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Login from "./components/auth/Login"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { useEffect } from "react"
import {
  authAdmin,
  selectAdmin,
  selectAdminStatus,
} from "./features/user_admin/adminSlice"
import DashboardSHK from "./dashboard/DashboardSHK"

//export const apiUrl = "http://localhost:5001"
//export const apiUrlFoo = 'http://217.154.5.134:5001';
export const apiUrl = "https://hr.shk.solutions";
//export const apiUrl = import.meta.env.VITE_API_URL
//export const apiUrl = 'https://api.heizreport.dev'

const App = () => {
  const dispatch = useAppDispatch();
  const admin = useAppSelector(selectAdmin);
  const status = useAppSelector(selectAdminStatus);
  const navigate = useNavigate();

  // При старте загружаем данные
  useEffect(() => {
    dispatch(authAdmin());
  }, [dispatch]);

  // Перенаправляем на /dashboard после успешной загрузки
  useEffect(() => {
    if (status === 'success' && admin) {
      navigate('/dashboard');
    }
  }, [status, admin, navigate]);

  // Показываем лоадер во время загрузки
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardSHK />} />
      <Route path="/dashboard" element={admin ? <DashboardSHK /> : <Login />} />
    </Routes>
  );
};

export default App;
