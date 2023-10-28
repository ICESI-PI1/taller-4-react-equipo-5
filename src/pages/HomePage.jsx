import React from "react";
import {AbsoluteCenter, Button, Center, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';


function HomePage() {
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
                    <Link to={"/authenticate"}>
                        <Button>
                            Log-In
                        </Button>
                    </Link>
                </VStack>
            </Center>
        </AbsoluteCenter>
    )
}

export default HomePage