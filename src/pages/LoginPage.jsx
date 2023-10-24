import React, {useState} from "react";

import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input, VStack,
    WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import instance from "../axios.js";
// import {useFormik} from "formik";
// import * as Yup from 'yup';
// import axios from "../axios.js";
// import instance from "../axios.js";

function LoginPage() {
    /* const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: async () => {
            await axios.get(instance+"/authenticate")
                .then()
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required")
        }),
    });*/

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        console.log(instance.getUri()+"/authenticate")
        try {
            axios.post( instance.getUri() + "/authenticate", {
                "username":username,
                "password":password
            }).then(res => {
                    localStorage.setItem('token', res.data.token)
                }
            )
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <VStack>
            <FormControl isRequired>
                <FormLabel>
                    Username
                </FormLabel>
                <Input onChange={handleUsernameChange} placeholder='username'/>
                <FormLabel>
                    Password
                </FormLabel>
                <Input onChange={handlePasswordChange} placeholder='password'/>
                <WrapItem>
                    <Button colorScheme='blue' onClick={handleSubmit}>
                        Submit
                    </Button>
                </WrapItem>
            </FormControl>
        </VStack>
    )
}

export default LoginPage