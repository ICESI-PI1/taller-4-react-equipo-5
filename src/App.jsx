import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LibroPage from './pages/libroPage';
import AuthorPage from './pages/authorPage';
import LibroForm from './components/LibroForm';
import AuthorForm from './components/AuthorForm';
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProtectedRoute from "./protectedRoute/ProtectedRoute.jsx";
import {AuthProvider} from "./context/AuthContext";


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/libro' element={<LibroPage/>}/>
                    <Route path='/author' element={<AuthorPage/>}/>
                    <Route path='/libro/form' element={<LibroForm/>}/>
                    <Route path='/author/form' element={<AuthorForm/>}/>
                    <Route path='/authenticate' element={<LoginPage/>}/>
                    <Route path='/libros' element={
                        <ProtectedRoute>
                            <LibroPage/>
                        </ProtectedRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
