import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    search: {
        padding : '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    searchInput: {
        background: '#f4f4f8',
        padding: '8px 10px',
        borderRadius: '10px',
        border: 'none',
        fontSize: '14px',
        '&::placeholder': {
            textAlign: 'center'
        },
        '&:focus::placeholder': {
            textAlign: 'left'
        }
    }
}));

const DialogsSearch = () => {

    const classes = useStyles();

    return (
        <div className={classes.search}>
            <input
                type="search"
                className={classes.searchInput}
                placeholder="Поиск сообщений"
            />
        </div>
    )
}

export default DialogsSearch;