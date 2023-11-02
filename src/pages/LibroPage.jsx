import React, {useEffect, useState} from "react";
import {
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";
import axios from "../axios.js";
import instance from "../axios.js";

function LibroPage() {
    const [libros, setLibros] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);


    useEffect(() => {
        console.log(instance.getUri())
        console.log(instance.defaults.headers.common.Authorization)
        setLibros(
            async () => {
                await axios.get(instance.getUri() + "/libros"
                    , {
                        headers:
                            {"Authorization": `Bearer ${localStorage.getItem('token')}`}
                    }).then(res => {
                        (res.data)
                        console.log(res.data)
                    }
                )
            }
        )
    }, []);

    const handleChange = (e) => {
        // Actualiza el estado del formulario
        setLibros({...libros, [e.target.name]: e.target.value});
    }
    const handleModalInsertShow = () => {
        setModalInsertar(true);
    }

    const handleModalInsertHide = () => {
        setModalInsertar(false);
    }

    const handleModalEditShow = (libro) => {
        setLibros(libro);
        setModalEdit(true);
    }

    const handleModalEditHide = () => {
        setModalEdit(false);
    }

    const insertLibro = (libro) => {
        // Aquí deberías llamar a Spring para insertar un nuevo libro
        // Esto es de prueba
        // Simplemente agregamos el nuevo libro a la lista de libros
        let newVal = {id: 3, titulo: libros.titulo, fechaPublicacion: libros.fechaPublicacion, autorId: libros.autorId}
        let list = libros
        list.push(newVal)
        setLibros(list)
        handleModalInsertHide();
    }

    const editLibro = (libro) => {
        // Aquí deberías llamar a Spring para editar un libro
        // Esto es de prueba
        let list = libros
        libros.map((libro) => {
            if (libro.id === libros.id) {
                libro.titulo = libros.titulo
                libro.fechaPublicacion = libros.fechaPublicacion
                libro.autorId = libros.autorId
            }
        })
        setLibros(list);
        handleModalEditHide();
    }

    const deleteLibro = (id) => {
        // Aquí deberías llamar a Spring para eliminar un libro
        // Esto es de prueba
        let opt = window.confirm("¿Está seguro que desea eliminar el libro?")
        if (opt) {
            let list = libros
            list.map((libro) => {
                if (libro.id == id) {
                    list.splice(list.indexOf(libro), 1)
                }
            })
            setLibros(libros);
        }
    }

    return (
        <div>
            <h1>Libro Page</h1>
            <Button color="success" onClick={handleModalInsertShow}>Agregar Libro</Button>
            <br/><br/>
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Fecha de Publicación</th>
                    <th>Autor ID</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {libros.map((libro) => (
                    <tr>
                        <td>{libro.id}</td>
                        <td>{libro.titulo}</td>
                        <td>{libro.fechaPublicacion}</td>
                        <td>{libro.autorId}</td>
                        <td>
                            <Button color="primary" onClick={() => handleModalEditShow(libro)}>Editar</Button>{" "}
                            <Button color="danger" onClick={() => deleteLibro(libro.id)}>Eliminar</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            <Modal isOpen={modalInsertar}>
                <ModalHeader>
                    <div><h3>Insertar Libro</h3></div>
                </ModalHeader>

                <ModalBody>

                    <FormGroup>
                        <label>Título:</label>
                        <input
                            type="text"
                            name="titulo"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Fecha de Publicación:</label>
                        <input
                            type="date"
                            name="fechaPublicacion"
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>ID del Autor:</label>
                        <input
                            type="number"
                            name="autorId"
                            onChange={handleChange}
                        />
                    </FormGroup>

                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={insertLibro}>Insertar</Button>
                    <Button color="danger" onClick={handleModalInsertHide}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={modalEdit}>
                <ModalHeader>
                    <div><h3>Editar Libro</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Título:</label>
                        <input
                            type="text"
                            name="titulo"
                            onChange={handleChange}
                            value={libros.titulo}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Fecha de Publicación:</label>
                        <input
                            type="date"
                            name="fechaPublicacion"
                            onChange={handleChange}
                            value={libros.fechaPublicacion}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>ID del Autor:</label>
                        <input
                            type="number"
                            name="autorId"
                            onChange={handleChange}
                            value={libros.autorId}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => editLibro(libros)}>Editar</Button>
                    <Button color="danger" onClick={handleModalEditHide}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default LibroPage;