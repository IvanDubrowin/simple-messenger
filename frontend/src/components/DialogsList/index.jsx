import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogsSearch from "./DialogsSearch";

const useStyles = makeStyles(theme => ({}));

const DialogsList = () => {

    const classes = useStyles();

    return (
        <div><DialogsSearch/></div>
    )
}

export default DialogsList;