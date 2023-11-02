import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, ChakraProvider } from "@chakra-ui/react";
import {useAuthContext} from "../context/AuthContext.jsx";

function Navbar({ children }) {
    const {authData, login, logout} = useAuthContext()
    const handleLogOut = () => {
        logout()
    }

    return (
        <>
            <ChakraProvider>
                <Flex as="nav" p={4} bg="blue" color="white" position="fixed" top="0" left="0" right="0">
                    <Link to="/home">
                        <Box p={2}>Home</Box>
                    </Link>
                    <Link to="/libro">
                        <Box p={2}>Books</Box>
                    </Link>
                    <Link to="/author">
                        <Box p={2}>Authors</Box>
                    </Link>
                    <Link to="/logout" onClick={handleLogOut}>
                        <Box p={2}>Log Out</Box>
                    </Link>
                </Flex>
            </ChakraProvider>
            <div style={{ marginTop: '150px' }}>
                {children}
            </div>
        </>
    );
}

export default Navbar;
