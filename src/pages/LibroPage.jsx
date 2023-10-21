import React, { useState, useEffect } from "react";
import Libro from "../components/Libro";
function LibroPage() {
    const [libro, setLibro] = useState([]);

    useEffect(() => {
        //Aqui se deberia conectar con Spring para traer los libros
    }, []);

    return (
        <div>
            <h1>Libro Page</h1>
            {libro.map((libro) => (
                <Libro key={libro.id} libro={libro} />
            ))}
        </div>
    );
}

export default LibroPage;