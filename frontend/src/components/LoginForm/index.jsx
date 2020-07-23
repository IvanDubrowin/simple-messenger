import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import { loginEndpoint } from "../../constants/api";
import { login } from "../../utils/auth";
import {showErrorMessage} from "../../redux/reducers/info";

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        minHeight: 'calc(100vh - 245px)',
        justifyContent: 'center',
        marginTop: '80px',
    },
    loginForm: {
        backgroundColor: theme.palette.background.paper,
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

const LoginForm = () => {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
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
                {headers: {"Content-Type": "multipart/form-data"}})
            .then(response => {
                login(response.data);
                history.push("/");
            })
            .catch(() => dispatch(showErrorMessage("Неверные учетные данные")))
    }
    return (
        <div className={classes.formContainer}>
            <form className={classes.loginForm}>
                <Typography variant="h5">
                    Вход
                </Typography>
                <TextField name="email"
                           value={credentials.email}
                           onChange={handleChange}
                           label="Email"
                           variant="outlined"
                />
                <TextField name="password"
                           type="password"
                           value={credentials.password}
                           onChange={handleChange}
                           label="Password"
                           variant="outlined"
                />
                <Button onClick={handleSubmit}
                        variant="outlined"
                        size="medium"
                        color="primary">
                            Login
                </Button>
            </form>
         </div>
        )
}

export default LoginForm;