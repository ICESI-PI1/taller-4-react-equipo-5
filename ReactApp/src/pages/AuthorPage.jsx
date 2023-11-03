import React, {useState, useEffect} from 'react';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter, Nav,
} from "reactstrap";
import NavBar from "../components/NavBar.jsx";
import {Center, VStack} from "@chakra-ui/react";
import axios from "../axios.js";
import instance from "../axios.js";

function AuthorPage() {
    const [authors, setAuthors] = useState([]);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    // Nuevo estado para el autor que se está editando
    const [editingAuthor, setEditingAuthor] = useState();

    useEffect(() => {
        queryAutores()
    }, []);

    const handleModalInsertShow = (author) => {
        // Actualiza el estado del formulario
        setModalInsertar(true);
    }
    const handleModalInsertHide = () => {
        // Actualiza el estado del formulario
        setModalInsertar(false);
    }

    const handleModalEditShow = (author) => {
        // Actualiza el estado del formulario
        setEditingAuthor(author);
        setModalEdit(true);
    }
    const handleModalEditHide = () => {
        // Actualiza el estado del formulario
        setModalEdit(false);
    }

    const onEditSubmit = (e) => {
        e.preventDefault()

        try {
            axios.put(instance.getUri() + "/autores" + "/" + editingAuthor.id, {
                'id': editingAuthor.id,
                'nombre': e.target.nombreEdit.value,
                'nacionalidad': e.target.nacionalidadEdit.value
            })
                .then(res => {
                        if (res.status === 200) {
                            queryAutores()
                            handleModalEditHide()
                        } else {
                            alert("'Autor' couldn't be edited")
                        }
                    }
                )
        } catch (e) {
            alert("Can't connect with backend")
            console.log(e)
        }
    }

    const onEditButton = () => {
        document.getElementById("editSubmitBtn").click()
    }

    const deleteAuthor = (id) => {
        let opt = window.confirm("¿Está seguro que desea eliminar el autor?")

        console.log(id)
        if (opt) {
            try {
                axios.delete(instance.getUri() + "/autores" + "/" + id)
                    .then(res => {
                            if (res.status === 204) {
                                queryAutores()
                            } else {
                                alert("'Autor' couldn't be deleted")
                            }
                        }
                    )
            } catch (e) {
                alert("Can't connect with backend")
                console.log(e)
            }
        }

    }

    // listo
    const queryAutores = () => {
        try {
            axios.get(instance.getUri() + "/autores")
                .then(res => {
                        setAuthors(res.data)
                    }
                )
        } catch (e) {
            alert("Can't connect with backend")
            console.log(e)
        }
    }

    const onCreateSubmit = (e) => {
        e.preventDefault()

        try {
            axios.post(instance.getUri() + "/autores", {
                'nombre': e.target.nombre.value,
                'nacionalidad': e.target.nacionalidad.value
            }).then(res => {
                if (res.status === 200) {
                    queryAutores()
                    handleModalInsertHide()
                } else {
                    alert("'Autor' couldn't be created")
                }
            })
        } catch (e) {
            alert("Can't connect with backend")
            console.log(e)
        }
    }

    const onCreateButton = (e) => {
        document.getElementById("createSubmitBtn").click()
    }

    const handleNacionalidadChange = (e) => {
        setEditingAuthor({...editingAuthor, nacionalidad: e.target.value})
    }

    const handleNameChange = (e) => {
        setEditingAuthor({...editingAuthor, nombre: e.target.value})
    }

    return (
        <NavBar>
            <Center>
                <VStack width={"80%"} alignContent={"center"} alignItems="center">
                    <h1>Autores</h1>
                    <Button color="success" onClick={handleModalInsertShow} style={{alignSelf: "flex-end"}}>
                        Agregar Autor
                    </Button>
                    <br/><br/>
                    <Table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Nacionalidad</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {authors.length > 0 ? authors.map((author) => (
                                <tr key={author.id}>
                                    <td>{author.id}</td>
                                    <td>{author.nombre}</td>
                                    <td>{author.nacionalidad}</td>
                                    <td>
                                        <Button color="primary"
                                                onClick={() => handleModalEditShow(author)}>Editar</Button>{" "}
                                        <Button color="danger" onClick={() => deleteAuthor(author.id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            )) :
                            <tr>
                            </tr>
                        }
                        </tbody>
                    </Table>

                    <Modal isOpen={modalInsertar}>
                        <ModalHeader>
                            <div><h3>Insertar Autor</h3></div>
                        </ModalHeader>

                        <ModalBody>
                            <form onSubmit={onCreateSubmit}>
                                <FormGroup>
                                    <label>
                                        Nombre:
                                    </label>
                                    <input
                                        className="form-control"
                                        name="nombre"
                                        type="text"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <label>
                                        Nacionalidad:
                                    </label>
                                    <input
                                        className="form-control"
                                        name="nacionalidad"
                                        type="text"
                                    />
                                </FormGroup>
                                <button id={"createSubmitBtn"} type={"submit"} style={{display: 'none'}}>
                                    Submit
                                </button>
                            </form>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={onCreateButton}
                            >
                                Insertar
                            </Button>
                            <Button
                                className="btn btn-danger"
                                onClick={handleModalInsertHide}
                            >
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>


                    <Modal isOpen={modalEdit}>
                        <ModalHeader>
                            <div><h3>Editar Autor</h3></div>
                        </ModalHeader>

                        <ModalBody>
                            { editingAuthor !== undefined ?
                                <>
                                    <form onSubmit={onEditSubmit}>
                                        <FormGroup>
                                            <label>
                                                Nombre:
                                            </label>
                                            <input
                                                className="form-control"
                                                name="nombreEdit"
                                                type="text"
                                                value={editingAuthor.nombre}
                                                onChange={handleNameChange}
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <label>
                                                Nacionalidad:
                                            </label>
                                            <input
                                                className="form-control"
                                                name="nacionalidadEdit"
                                                type="text"
                                                value={editingAuthor.nacionalidad}
                                                onChange={handleNacionalidadChange}
                                            />
                                        </FormGroup>
                                        <button id={"editSubmitBtn"} type={"submit"} style={{display: 'none'}}>
                                            Submit
                                        </button>
                                    </form>
                                </>
                                : <></>
                            }

                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={onEditButton}
                            >
                                Editar
                            </Button>
                            <Button
                                color="danger"
                                onClick={handleModalEditHide}
                            >
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>
                </VStack>
            </Center>
        </NavBar>
    );
}

export default AuthorPage;