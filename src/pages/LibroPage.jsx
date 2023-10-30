import React, { useState, useEffect } from "react";
import Libro from "../components/Libro";
import instance from "../axios.js";
import axios from "axios";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const exampleBooks = [
  { id: 1, titulo: 'Mein Kampf', fechaPublicacion: '2022-01-01', autorId: 1 },
  { id: 2, titulo: 'El queso y los gusanos', fechaPublicacion: '2022-02-01', autorId: 2 }
];

function LibroPage() {
  const [libros, setLibros] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  useEffect(() => {
        axios.get(instance.getUri()+"/libros").then((res) =>
        {
            /* console.log(res.data)
            const librosUpdated = [...libros]
            librosUpdated.push(res.data)
            setLibros(librosUpdated)*/
        })
    }, []);
  
  const handleChange = (e) => {
    // Actualiza el estado del formulario
    setLibros({ ...libros, [e.target.name]: e.target.value });
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
    let list = exampleBooks
    list.push(newVal)
    setLibros(list)
    handleModalInsertHide();
  }

  const editLibro = (libro) => {
    // Aquí deberías llamar a Spring para editar un libro
    // Esto es de prueba
    let list = exampleBooks
    exampleBooks.map((libro) => {
        if(libro.id === libros.id){
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
            if (opt){
                let list = exampleBooks
                list.map((libro) => {
                if(libro.id == id){
                list.splice(list.indexOf(libro), 1)
                }
            })
            setLibros(updatedLibros);
            }
   }

  return (
    <div>
      <h1>Libro Page</h1>
      <Button color="success" onClick={handleModalInsertShow}>Agregar Libro</Button>
      <br /><br />
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
          {exampleBooks.map((libro) => (
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
