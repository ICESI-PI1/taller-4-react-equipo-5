import React, {useEffect, useState} from 'react';
import {Navigate, Outlet} from 'react-router-dom';

// Importa tu contexto de autenticación
import {useAuthContext} from "../context/AuthContext.jsx";

// Componente de ruta protegida
const ProtectedRoute = ({children}) => {
    const {authData} = useAuthContext()
    const [localAuthData, setLocalAuthData] = useState(authData)

    useEffect(() => {
        console.log("authData cambio !!! ")
        setLocalAuthData(authData)
    }, [authData])

    console.log(localAuthData === 'out' ? "igual a out" : "no out")
    return localAuthData !== 'out' ? children : <Navigate to={"/authenticate"}/>

};

export default ProtectedRoute;
