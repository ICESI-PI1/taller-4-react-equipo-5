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
import NavBar from "../components/NavBar.jsx";
import {AbsoluteCenter, Center, VStack} from "@chakra-ui/react";

function LibroPage() {
    const [libros, setLibros] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    useEffect(() => {
        queryLibros()
    }, []);

    const queryLibros = () => {
        setLibros(
            async () => {
                await axios.get(instance.getUri() + "/libros")
                    .then(res => {
                            (res.data)
                        }
                    )
            }
        )
    }

    const onCreateSubmit = (e) => {
        e.preventDefault()

        try {
            console.log(e.target.titulo.value)
         axios.post(instance.getUri() + "/libros", {
             'titulo': e.target.titulo.value,
             'fechaPublicacion': e.target.date.value,
             'autorId': e.target.autorId.value
         }).then(res => {
             if (res.status === 200) {
                 alert("'Libro' created")
                 queryLibros()
             } else {
                 alert("'Libro' couldn't be created")
             }
          })
        } catch (e) {
            alert("Can't connect with backend")
        }
    }

    const onCreateButton = (e) => {
        document.getElementById("createSubmitBtn").click()
    }

    const handleChange = (e) => {
        // Actualiza el estado del formulario
        setLibros({
            ...libros,
            [e.target.name]: e.target.value
        });
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
        /*
        libros.map((libro) => {
            if (libro.id === libros.id) {
                libro.titulo = libros.titulo
                libro.fechaPublicacion = libros.fechaPublicacion
                libro.autorId = libros.autorId
            }
        })*/
        setLibros(list);
        handleModalEditHide();
    }

    const deleteLibro = (id) => {
        // Aquí deberías llamar a Spring para eliminar un libro
        // Esto es de prueba
        let opt = window.confirm("¿Está seguro que desea eliminar el libro?")
        if (opt) {
            let list = libros
            /*
            list.map((libro) => {
                if (libro.id == id) {
                    list.splice(list.indexOf(libro), 1)
                }
            })*/
            setLibros(libros);
        }
    }

    return (
        <NavBar>
            <Center>
                <VStack width={"80%"} alignContent={"center"} alignItems="center">
                    <h1>Libros</h1>
                    <Button color="success" onClick={handleModalInsertShow} style={{alignSelf: "flex-end"}}>
                        Agregar Libro
                    </Button>
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

                        </tbody>
                    </Table>
                    <Modal isOpen={modalInsertar}>
                        <ModalHeader>
                            <div><h3>Agregar Libro</h3></div>
                        </ModalHeader>

                        <ModalBody>
                        <form onSubmit={onCreateSubmit}>
                            <FormGroup>
                                <label>Título:</label>
                                <input
                                    style = {{marginLeft: '10px'}}
                                    className={"input"}
                                    type="text"
                                    name="titulo"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Fecha de Publicación:</label>
                                <input
                                    style = {{marginLeft: '10px'}}
                                    className={"input"}
                                    type="date"
                                    name="fechaPublicacion"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>ID del Autor:</label>
                                <input
                                    style = {{marginLeft: '10px'}}
                                    className={"input"}
                                    type="number"
                                    name="autorId"
                                    onChange={handleChange}
                                />
                            </FormGroup>
                            <button id={"createSubmitBtn"} type={"submit"} style={{display: 'none'}}>
                                Submit
                            </button>
                        </form>

                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={onCreateButton}>Insertar</Button>
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
                                    className={"input"}
                                    type="text"
                                    name="titulo"
                                    onChange={handleChange}
                                    value={libros.titulo}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>Fecha de Publicación:</label>
                                <input
                                    className={"input"}
                                    type="date"
                                    name="fechaPublicacion"
                                    onChange={handleChange}
                                    value={libros.fechaPublicacion}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label>ID del Autor:</label>
                                <input
                                    className={"input"}
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
                </VStack>
            </Center>
        </NavBar>
    )
        ;
}

export default LibroPage;