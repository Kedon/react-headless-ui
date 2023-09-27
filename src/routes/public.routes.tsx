import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import Login from '../pages/login/Login';

const PublicRoutes: React.FC = () => {
    const { logged } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(logged && location.pathname === "/"){
            navigate("/products")
        } 

        if(!logged && location.pathname !== "/"){
            navigate("/")
        }
    }, [logged, location]);
    
    return <Routes>
        <Route path="/" element={<Login />} />
    </Routes>
};

export default PublicRoutes;