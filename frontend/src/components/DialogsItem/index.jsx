import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    dialogsItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        '&:hover': {
            background: '#eeeef1',
            cursor: 'pointer'
        }
    },
    dialogsPhoto: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px'
    },
    dialogsTitle: {
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        margin: 0
    },
    dialogsSnippet: {
        fontSize: '14px',
        color: '#888',
        margin: 0
    }
}));

const DialogsItem = (props) => {

    const classes = useStyles();

    const { photo, name, text } = props.data;

    return (
        <div className={classes.dialogsItem}>
            <img className={classes.dialogsPhoto} src={photo} alt='dialog'/>
            <div>
                <h1 className={classes.dialogsTitle}>{name}</h1>
                <p className={classes.dialogsSnippet}>{text}</p>
            </div>
        </div>
    )
}

export default DialogsItem;

