import React, { useState, useEffect } from "react";
import { Center, Table, Tbody, Td, Th, Thead, Tr, Text, VStack } from "@chakra-ui/react";
import axios from "../axios.js";
import NavBar from "../components/NavBar.jsx";
import { Button } from "reactstrap";

function LibrosFromAuthorPage() {
    const [authorId, setAuthorId] = useState("");
    const [books, setBooks] = useState([]);

    const fetchBooksByAuthorId = () => {
        try {
            axios.get(`/autores/${authorId}/libros`)
                .then((res) => {
                    setBooks(res.data);
                });
        } catch (e) {
            console.error("Can't connect with backend", e);
        }
    };

    return (
        <NavBar>
            <Center>
                <VStack spacing={4} align="center">
                    <h1>Libros de un Autor</h1>
                    <Text fontSize="lg">Ingrese el ID del autor para ver sus libros:</Text>
                    <input
                        className={"input"}
                        type="number"
                        value={authorId}
                        onChange={(e) => setAuthorId(e.target.value)}
                        placeholder="ID del autor"
                    />
                    <br></br>
                    <Button color="success" onClick={fetchBooksByAuthorId}>
                        Buscar
                    </Button>
                    <br></br>
                    <Table size="md">
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Título</Th>
                                <Th>Fecha de Publicación</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {books.map((book) => (
                                <Tr key={book.id}>
                                    <Td>{book.id}</Td>
                                    <Td>{book.titulo}</Td>
                                    <Td>{book.fechaPublicacion}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </VStack>
            </Center>
        </NavBar>
    );
}

export default LibrosFromAuthorPage;
