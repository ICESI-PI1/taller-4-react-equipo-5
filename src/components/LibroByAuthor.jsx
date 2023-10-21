import React from 'react';
import BookComponent from './Libro';

function LibroByAuthor({ books }) {
  return (
    <div>
      <h2>Libros del Autor</h2>
      {books.map((book) => (
        <BookComponent key={book.id} book={book} />
      ))}
    </div>
  );
}

export default LibroByAuthor;
