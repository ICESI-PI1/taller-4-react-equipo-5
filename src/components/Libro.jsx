import React from "react";
import {Link} from "react-router-dom"
import LibroForm from "./LibroForm";

function Libro({ libro }) {
    const handleClick = (libro) => {
        return (
            console.log(libro.titulo),
            <LibroForm bookToEdit={libro} />
        );
    };

    return (
        <div>
            <h3>Libro: {libro.titulo}</h3>
            <p>FechaPublicacion: {libro.fechaPublicacion}</p>
            <p>Author: {libro.autorId}</p>
            <Link to="/libro/form">
                <button onClick={() => handleClick(libro)}>Editar</button>
            </Link>
           
        </div>
    );
}

export default Libro;