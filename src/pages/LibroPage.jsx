import React, { useState, useEffect } from "react";
import Libro from "../components/Libro";


const exampleBooks = [
    { id: 1, titulo: 'Mein Kampf', fechaPublicacion: '2022-01-01', autorId: 1 },
    { id: 2, titulo: 'El queso y los gusanos', fechaPublicacion: '2022-02-01', autorId: 2 },
    // ...
  ];

function LibroPage() {
    const [libro, setLibro] = useState([]);

    useEffect(() => {
        //Aqui se deberia conectar con Spring para traer los libros
    }, []);

    return (
        <div>
            <h1>Libro Page</h1>
            {exampleBooks.map((libro) => (
                <Libro key={libro.id} libro={libro} />
            ))}
        </div>
    );
}

export default LibroPage;