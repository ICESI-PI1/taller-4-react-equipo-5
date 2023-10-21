import React, { useState, useEffect } from 'react';
import Author from '../components/Author';

function AuthorPage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar una solicitud HTTP al servidor Spring para obtener la lista de autores y actualizar el estado "authors".
  }, []);

  return (
    <div>
      <h1>Authors</h1>
      {authors.map(author => (
        <Author key={author.id} author={author} />
      ))}
    </div>
  );
}

export default AuthorPage;