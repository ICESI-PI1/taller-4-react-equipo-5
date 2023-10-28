import React from "react";

function Libro({ libro }) {
    return (
        <div>
        <h3>Libro: {libro.titulo}</h3>
        <p>FechaPublicacion: {libro.fechaPublicacion}</p>
        <p>Author: {libro.autorId}</p>
        </div>
    );
    }

export default Libro;