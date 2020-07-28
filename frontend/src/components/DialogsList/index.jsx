import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DialogsSearch from "../DialogsSearch";
import DialogsItem from "../DialogsItem";

const useStyles = makeStyles(theme => ({
    dialogs: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        display: 'inline-block'
    },
    search: {
        display: 'inline-block',
        width: '85%'
    }
}));

const DialogsList = () => {

    const classes = useStyles();

    const [dialogs, setDialogs] = useState([]);

    const [initialized, setInitialized] = useState(false);

    const getDialogs = () => {
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            let newDialogs = response.data.results.map(result => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    text: 'Hello world! This is a long message that needs to be truncated.'
                };
            });
            setDialogs([...dialogs, ...newDialogs]);
        });
    }

    if (!initialized) {
        getDialogs();
        setInitialized(true);
    }

    return (
        <div className={classes.dialogs}>
            <div>
                <div className={classes.button}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className={classes.search}>
                    <DialogsSearch />
                </div>
            </div>
            {
                dialogs.map(
                    dialog => <DialogsItem key={dialog.name} data={dialog} />
                )
            }
        </div>
    )
}

export default DialogsList;