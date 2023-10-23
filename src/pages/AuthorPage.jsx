import React, { useState, useEffect } from 'react';
import Author from '../components/Author';


const exampleAuthors = [
  { id: 1, nombre: 'Luka Vicenzo Qochiolla', nacionalidad: 'Marte' },
  { id: 2, nombre: 'Ibrahimovi©', nacionalidad: 'Sol' },]

function AuthorPage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Aqui se debería conectar con SPring
  }, []);

  return (
    <div>
      <h1>Authors</h1>
      {exampleAuthors.map(author => (
        <Author key={author.id} author={author} />
      ))}
    </div>
  );
}

export default AuthorPage;