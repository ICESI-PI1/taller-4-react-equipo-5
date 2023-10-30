import React from "react";
import {AbsoluteCenter, Button, Center, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {useAuthContext} from "../context/AuthContext.jsx";


function HomePage() {
    const {authData, login, logout} = useAuthContext()
    const handleLogOut = () => {
        logout()
    }

    return (
        <AbsoluteCenter>
            <Center>
                <VStack>
                    <Heading as={"h2"}>
                        Bienvenido a Mi Aplicación
                    </Heading>
                    <Text>Esta es una aplicación de ejemplo construida con React y Spring.
                        Utiliza los enlaces de navegación para explorar la aplicación.
                        Aquí puedes encontrar información sobre autores y libros.</Text>
                    <Link to={"/libro"}>
                        <Button>
                            Libros
                        </Button>
                    </Link>
                    <Link to={"/author"}>
                        <Button>
                            Autores
                        </Button>
                    </Link>
                    <Link to={"/"}>
                        <Button onClick={handleLogOut}>
                            Salir
                        </Button>
                    </Link>
                </VStack>
            </Center>
        </AbsoluteCenter>
    )
}

export default HomePage