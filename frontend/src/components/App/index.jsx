import React from "react";
import clsx from  "clsx";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import DialogsList from "../DialogsList";

const theme = createMuiTheme({});

const useStyles = makeStyles(theme => ({
    messenger: {
        display: 'grid',
        width: '100%',
        height: '100vh',
        background: '#eeeef1',
        gridTemplateColumns: '350px auto',
        gridTemplateRows: '60px auto 60px',
        gridRowGap: '1px'
    },
    container: {
        padding: '10px'
    },
    scrollable: {
        position: 'relative',
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch'
    },
    sidebar: {
        background: 'white',
        gridRowStart: 1,
        gridRowEnd: 'span 3'
    },
    content: {
        background: 'white',
        gridRowStart: 1,
        gridRowEnd: 'span 3'
    },
    footer: {
        gridColumnStart: 2,
        background: 'white'
    }
}));

const App = () => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.messenger}>
                <div className={clsx(classes.scrollable, classes.sidebar)}>
                    <DialogsList/>
                </div>
                <div className={clsx(classes.scrollable, classes.content)}></div>
            </div>
        </ThemeProvider>
    )
};

export default App;