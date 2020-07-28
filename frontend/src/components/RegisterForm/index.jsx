import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import { registerEndpoint } from "../../constants/api";
import { showErrorMessage } from "../../redux/reducers/info";

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        minHeight: 'calc(100vh - 245px)',
        justifyContent: 'center',
        marginTop: '80px',
    },
    registerForm: {
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

const RegisterForm = () => {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    });

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const validatePassword = () => {
        return formData.password === formData.confirm
    }

    const getErrorMessage = error => {
        switch (error.response.status) {
            case 400:
                return "Электронная почта уже используется"
            case 422:
                return "Некорректные данные"
            default:
                return "Сервер не отвечает"
        }
    }

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
        }

        if (!(validatePassword())) {
            dispatch(showErrorMessage("Пароли не совпадают"));
            return
        }

        axios
            .post(
                registerEndpoint,
                formData
            )
            .then(
                () => history.push('/login')
            )
            .catch(
                error => dispatch(showErrorMessage(getErrorMessage(error)))
            )
    }


    return (
        <div className={classes.formContainer}>
            <form className={classes.registerForm}>
                <Typography variant="h5">
                    Register
                </Typography>
                <TextField
                    name="username"
                    label="Username"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={handleChange}
                />
                <TextField
                    name="confirm"
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    onChange={handleChange}
                />
                <Button
                    variant="outlined"
                    size="medium"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Register
                </Button>
            </form>
        </div>
    )
}

export default RegisterForm;