import React, {useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import DialogsSearch from "../DialogsSearch";
import DialogsItem from "../DialogsItem";
import Toolbar from "../Toolbar";

const useStyles = makeStyles(theme => ({
    dialogs: {
        display: 'flex',
        flexDirection: 'column'
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
            <Toolbar title='Messenger' leftItems={[]} rightItems={[]}/>
            <DialogsSearch/>
            {
                dialogs.map(
                    dialog => <DialogsItem key={dialog.name} data={dialog}/>
                )
            }
        </div>
    )
}

export default DialogsList;