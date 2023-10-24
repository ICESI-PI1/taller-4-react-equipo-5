import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LibroPage from './pages/libroPage';
import AuthorPage from './pages/authorPage';
import LibroForm from './components/LibroForm';
import AuthorForm from './components/AuthorForm';
import LoginPage from "./pages/LoginPage.jsx";


function App() {
    return (

        <BrowserRouter>
            <div>
                <h1>Bienvenido a Mi Aplicación</h1>
                <p>Esta es una aplicación de ejemplo construida con React y Spring.</p>
                <p>Aquí puedes encontrar información sobre autores y libros.</p>
                <p>Utiliza los enlaces de navegación para explorar la aplicación.</p>

            </div>
            <Routes>
                <Route path='/libro' element={<LibroPage/>}/>
                <Route path='/author' element={<AuthorPage/>}/>
                <Route path='/libro/form' element={<LibroForm/>}/>
                <Route path='/author/form' element={<AuthorForm/>}/>
                <Route path='/authenticate' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
