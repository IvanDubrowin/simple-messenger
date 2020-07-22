import React, { useState } from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { loginEndpoint } from "../../constants/api";
import { login } from "../../utils/auth";

const useStyles = makeStyles(theme => ({
    loginForm: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& > div': {
            margin: '10px'
        },
        '& > button': {
            margin: '10px'
        }
    }
}));

const Login = () => {
    const classes = useStyles();

    const [credentials, setCredentials] = useState({email: '', password: ''});

    const handleChange = event => {
        setCredentials({...credentials, [event.target.name]:  event.target.value})
    };

    const handleSubmit = event => {
        if (event) {
            event.preventDefault()
        }

        const formData = new FormData();
        formData.set("username", credentials.email);
        formData.set("password", credentials.password);

        axios
            .post(
                loginEndpoint,
                formData,
                {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => login(response.data))
            .catch(error => console.log(error.response.data))
    }
    return (
            <form className={classes.loginForm}>
                <TextField name="email"
                           value={credentials.email}
                           onChange={handleChange}
                />
                <TextField name="password"
                           value={credentials.password}
                           onChange={handleChange}
                />
                <Button onClick={handleSubmit}
                        variant="outlined"
                        size="medium"
                        color="primary">
                            Login
                </Button>
            </form>
        )
}

export default Login;