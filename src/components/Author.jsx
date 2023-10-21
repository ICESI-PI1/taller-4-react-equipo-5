import React from 'react'

function Author({author}) {
    return (
        <div>
            <h3>Author: {author.name}</h3>
            <p>Nacionalidad: {author.nacionalidad}</p>
        </div>
    )
}

export default Author
