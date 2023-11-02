import React from "react";
import {AbsoluteCenter, Button, Center, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {useAuthContext} from "../context/AuthContext.jsx";
import NavBar from "../components/NavBar.jsx";


function HomePage() {
    return (
        <NavBar>
            <AbsoluteCenter>
                <Center>
                    <VStack>
                        <Heading as={"h2"}>
                            Bienvenido a Mi Aplicación
                        </Heading>
                        <Text>Esta es una aplicación de ejemplo construida con React y Spring.
                            Utiliza los enlaces de navegación para explorar la aplicación.
                            Aquí puedes encontrar información sobre autores y libros.</Text>
                    </VStack>
                </Center>
            </AbsoluteCenter>
        </NavBar>
    )
}

export default HomePage