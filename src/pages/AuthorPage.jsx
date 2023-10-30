import React, { useState, useEffect } from 'react';
import Author from '../components/Author';
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


const exampleAuthors = [
  { id: 1, nombre: 'Luka Vicenzo Qochiolla', nacionalidad: 'Marte' },
  { id: 2, nombre: 'Ibrahimovi©', nacionalidad: 'Sol' },]

function AuthorPage() {
  const [authors, setAuthors] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  useEffect(() => {
    // Aqui se debería conectar con Spring
  }, []);

  const handleChange = (e) => {
    // Actualiza el estado del formulario
    setAuthors({ ...authors, [e.target.name]: e.target.value });
  }

  const handleModalInsertShow = () => {
    // Actualiza el estado del formulario
    setModalInsertar(true);
  }
  const handleModalInsertHide = () => {
    // Actualiza el estado del formulario
    setModalInsertar(false);
  }

  const handleModalEditShow = (author) => {
    // Actualiza el estado del formulario
    setModalEdit(true);
    setAuthors(author);
  }
  const handleModalEditHide = () => {
    // Actualiza el estado del formulario
    setModalEdit(false);
  }

  const insert = () => {
    // Aqui deberia llamar a Spring para insertar un nuevo autor
    //Esto es de prueba
    let newVal = {id: exampleAuthors.length+1, nombre: authors.nombre, nacionalidad: authors.nacionalidad}
    let list = exampleAuthors
    list.push(newVal)
    setAuthors(list)
    handleModalInsertHide()

  
  }

  const edit = (author) => {
    // Aqui deberia llamar a Spring para editar un autor
    //Esto es de prueba
    let list = exampleAuthors
    exampleAuthors.map((author) => {
      if (author.id == authors.id){
        author.nombre = authors.nombre
        author.nacionalidad = authors.nacionalidad
      }
    })
  
    setAuthors(list)
    handleModalEditHide()
  }

  const deleteAuthor = (id) => {
    // Aqui deberia llamar a Spring para eliminar un autor
    //Esto es de prueba
    let opt = window.confirm("¿Está seguro que desea eliminar el autor?")
    if (opt){
        let list = exampleAuthors
        list.map((author) => {
        if(author.id == id){
          list.splice(list.indexOf(author), 1)
        }
      })
      setAuthors(list)
    }
    
  }

  return (
    <>
    
      <Container>
        <br/>
        <Button color="success" onClick={handleModalInsertShow}>Agregar Autor</Button>
        <br/><br/>
        <Table>
            <thead><tr><th>Id</th>
            <th>Nombre</th>
            <th>Nacionalidad</th>
            <th>Acciones</th>
            </tr></thead>
            <tbody>
              {exampleAuthors.map((author) => (
                <tr>
                  <td>{author.id}</td>
                  <td>{author.nombre}</td>
                  <td>{author.nacionalidad}</td>
                  <td>
                    <Button color="primary" onClick={()=>handleModalEditShow(author)}>Editar</Button>{" "}
                    <Button color="danger" onClick={()=>deleteAuthor(author.id)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
        </Table>
      </Container>
      
      <Modal isOpen={modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Autor</h3></div>
          </ModalHeader>

          <ModalBody>
            
            <FormGroup>
              <label>
                 Nombre:
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChange}
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
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={insert}
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
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChange}
                value={authors.nombre}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nacionalida: 
              </label>
              <input
                className="form-control"
                name="nacionalidad"
                type="text"
                onChange={handleChange}
                value={authors.nacionalidad}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => edit(authors)}
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
   
    </>
  );
}

export default AuthorPage;