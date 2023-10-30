import React from 'react';
import {Navigate} from 'react-router-dom';

// Importa tu contexto de autenticación
import {useAuthContext} from "../context/AuthContext.jsx";

// Componente de ruta protegida
const ProtectedRoute = ({children}) => {
    const {authData} = useAuthContext()
    // const [isLogged, setLogged] = useState(authData)

    // useEffect(() => {
    //    console.log("authData cambio !!!")
    //    setLocalAuthData(authData)
    // }, [authData])

    return authData ? children : <Navigate to={"/"}/>
};

export default ProtectedRoute;
