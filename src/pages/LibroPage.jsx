import React, { useState, useEffect } from "react";
import Libro from "../components/Libro";
import instance from "../axios.js";
import axios from "axios";

/*const exampleBooks = [
    { id: 1, titulo: 'Mein Kampf', fechaPublicacion: '2022-01-01', autorId: 1 },
    { id: 2, titulo: 'El queso y los gusanos', fechaPublicacion: '2022-02-01', autorId: 2 }
  ];*/

function LibroPage() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        axios.get(instance.getUri()+"/libros").then((res) =>
        {
            /* console.log(res.data)
            const librosUpdated = [...libros]
            librosUpdated.push(res.data)
            setLibros(librosUpdated)*/
        })
    }, []);

    return (
        <div>
            <h1>Libro Page</h1>
            {libros.map((libro) => (
                <Libro key={libro.id} libro={libro} />
            ))}
        </div>
    );
}

export default LibroPage;