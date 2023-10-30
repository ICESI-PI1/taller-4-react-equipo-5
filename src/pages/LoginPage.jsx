import React from "react";

import {
    AbsoluteCenter,
    Button, Center,
    FormControl,
    FormErrorMessage,
    FormLabel, Heading,
    Input, VStack,
} from "@chakra-ui/react";
import axios from "axios";
import instance from "../axios.js";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useAuthContext} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const {authData, login, logout} = useAuthContext()
    const navigate = useNavigate(); // Para redireccionar al usuario

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async (values) => {

            try {
                await axios.post(instance.getUri() + "/authenticate", {
                    "username": values.username,
                    "password": values.password
                }).then(res => {
                        localStorage.setItem('token', res.data.token)
                        login()
                        navigate("/home"); // Navegar a home luego de loguearse
                    }
                )
            } catch (e) {
                console.log(e)
            }
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required")
        }),
    });

    return (
        <AbsoluteCenter>
            <Center>
                <Heading as="h1">
                    Log-In
                </Heading>
            </Center>
            <form onSubmit={formik.handleSubmit}>
                <VStack spacing={30}>
                    <FormControl isInvalid={formik.touched.username && formik.errors.username}>
                        <FormLabel htmlFor={"username"} fontSize={'25px'} mb={'5px'}>
                            Username
                        </FormLabel>
                        <Input id="username" name="username" {...formik.getFieldProps("username")}
                               fontSize={'20px'}
                               placeholder='username'/>
                        <FormErrorMessage>
                            {formik.errors.username}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={formik.touched.username && formik.errors.username}>
                        <FormLabel htmlFor={"password"} fontSize={'25px'} mb={'5px'}>
                            Password
                        </FormLabel>
                        <Input type={"password"} id="password" name="password" {...formik.getFieldProps("password")}
                               fontSize={'20px'}
                               placeholder='password'/>
                        <FormErrorMessage>
                            {formik.errors.password}
                        </FormErrorMessage>
                    </FormControl>

                    <Center>
                        <Button fontSize={'15px'} variant='solid' colorScheme='blue' type={"submit"}
                                onClick={formik.handleSubmit}>
                            Submit
                        </Button>
                    </Center>
                </VStack>
            </form>
        </AbsoluteCenter>
    )
}

export default LoginPage