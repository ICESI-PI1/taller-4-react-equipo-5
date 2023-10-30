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
                    <Route path='/home' element={
                        <ProtectedRoute>
                            <HomePage/>
                        </ProtectedRoute>
                    }/>
                    <Route path='/libro' element={
                        <ProtectedRoute>
                            <LibroPage/>
                        </ProtectedRoute>
                    }/>
                    <Route path='/author' element={
                        <ProtectedRoute>
                            <AuthorPage/>
                        </ProtectedRoute>
                    }/>
                    <Route path='/libro/form' element={
                        <ProtectedRoute>
                            <LibroForm/>
                        </ProtectedRoute>
                    }/>
                    <Route path='/author/form' element={
                        <ProtectedRoute>
                            <AuthorForm/>
                        </ProtectedRoute>
                    }/>
                    <Route path='/' element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
