import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        fontWeight: 500,
        borderBottom: '1px solid #eeeef1',
        position: 'sticky',
        top: '0px',
    },
    toolbarTitle: {
        margin: 0,
        fontSize: '16px',
        fontWeight: 800
    },
    leftItems: {
        flex: 1,
        margin: 0,
        padding: '10px',
        display: 'flex',
        marginRight: '20px'
    },
    rightItems: {
        flex: 1,
        margin: 0,
        padding: '10px',
        display: 'flex',
        flexDirection: 'row-reverse',
        marginLeft: '20px'
    },
    toolbarButton: {
        margin: 0,
        marginRight: '20px',
        marginLeft: '20px'
    }
}));

const Toolbar = ({ title, leftItems, rightItems }) => {

    const classes = useStyles();

    return(
        <div className={classes.toolbar}>
            <div className={classes.leftItems}>{ leftItems }</div>
            <h1 className={classes.toolbarTitle}>{ title }</h1>
            <div className={classes.rightItems}>{ rightItems }</div>
        </div>
    )
}

export default Toolbar;