import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Snackbar as BaseSnackbar} from "@material-ui/core";
import {Alert as MuiAlert} from "@material-ui/lab";
import {hideErrorMessage, getError, getErrorMessage} from "../../redux/reducers/info";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />

const Snackbar = () => {
    const dispatch = useDispatch();
    const open = useSelector(getError);
    const errorMessage = useSelector(getErrorMessage);

    const handleClose = (event, reason) => {
        if (reason !== 'clickaway') {
            dispatch(hideErrorMessage())
        }
    };

    return (
        <BaseSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {errorMessage}
            </Alert>
        </BaseSnackbar>
    )
}

export default Snackbar;