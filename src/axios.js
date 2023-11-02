import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080"
});

// Verificar si hay un token JWT en el almacenamiento local
//const token = localStorage.getItem('token');

// Si hay un token, añadirlo a las cabeceras de todas las solicitudes
// if (token) {
//    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//}

export default instance;
