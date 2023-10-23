import React, { useState, useEffect } from 'react';


const authorToEdit={id: 1, nombre: 'Vegeta777', nacionalidad: 'Venus'} 

function AuthorForm({ authorToEdit2, onAddOrEditAuthor }) {
  const [authorData, setAuthorData] = useState({ nombre: '', nacionalidad: '' });

  useEffect(() => {
    if (authorToEdit) {
      // Si se proporciona un autor para editar, inicializa el estado del formulario con los datos del autor
      setAuthorData({
        nombre: authorToEdit.nombre || '',
        nacionalidad: authorToEdit.nacionalidad || '',
      });
    }
  }, [authorToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData({ ...authorData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud HTTP al servidor Spring para agregar o editar el autor
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={authorData.nombre}
        onChange={handleChange}
      />
      <label>Nacionalidad:</label>
      <input
        type="text"
        name="nacionalidad"
        value={authorData.nacionalidad}
        onChange={handleChange}
      />
      <button type="submit">
        {authorToEdit ? 'Editar Autor' : 'Agregar Autor'}
      </button>
    </form>
  );
}

export default AuthorForm;
