import React, { useState, useEffect } from 'react';
import Author from '../components/Author';

function AuthorPage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Aqui se debería conectar con SPring
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