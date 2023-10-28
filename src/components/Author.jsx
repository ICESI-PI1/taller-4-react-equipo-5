import React from 'react'
import AuthorForm from './AuthorForm'
import {Link} from 'react-router-dom'

function Author({author}) {
    const handleClick = () => {
        <AuthorForm author={author} />
    }
    return (
        <div>
            <h3>Author: {author.nombre}</h3>
            <p>Nacionalidad: {author.nacionalidad}</p>
            <Link to="/author/form">
                <button onClick={handleClick}>Editar</button>
            </Link>
        </div>
    )
}

export default Author
