import React, { useState, useEffect } from 'react';

const bookToEdit2={id: 1, titulo: 'Mein Kampf', fechaPublicacion: '2022-01-01', autorId: 1} 

function BookForm( {bookToEdit} ) {

  console.log(bookToEdit)
  const [bookData, setBookData] = useState({
    titulo: '',
    fechaPublicacion: '',
    autorId: '',
  });

  useEffect(() => {
    if (bookToEdit) {
      // Si se proporciona un libro para editar, inicializa el estado del formulario con los datos del libro
      setBookData({
        titulo: bookToEdit.titulo || '',
        fechaPublicacion: bookToEdit.fechaPublicacion || '',
        autorId: bookToEdit.autorId || '',
      });
    }
  }, [bookToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud HTTP al servidor Spring para agregar o editar el libro
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Título:</label>
      <input
        type="text"
        name="titulo"
        value={bookData.titulo}
        onChange={handleChange}
      />
      <label>Fecha de Publicación:</label>
      <input
        type="date"
        name="fechaPublicacion"
        value={bookData.fechaPublicacion}
        onChange={handleChange}
      />
      <label>ID del Autor:</label>
      <input
        type="number"
        name="autorId"
        value={bookData.autorId}
        onChange={handleChange}
      />
      <button type="submit">
        {bookToEdit ? 'Editar Libro' : 'Agregar Libro'}
      </button>
    </form>
  );
}

export default BookForm;
