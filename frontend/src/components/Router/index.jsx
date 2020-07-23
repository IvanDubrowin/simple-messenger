import React from "react";
import {Switch, Route, Redirect, useLocation, useHistory} from "react-router-dom";
import {useAuth} from "../../utils/auth";
import App from "../App";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

const AuthRouter = () => {

    const loginPath = "/login";

    const allowedPaths = ["/register"];

    const location = useLocation();

    const history = useHistory();

    const [isLogged] = useAuth();

    if (
        !(isLogged) &&
        !(allowedPaths.includes(location.pathname)) &&
        !(location.pathname === loginPath)
    ) {
        history.push("login");
    }

    return (
        <Switch>
            {!isLogged && <>
                <Route path="/register" component={RegisterForm}/>
                <Route path="/login" component={LoginForm}/>
            </>}
            {isLogged && <>
                <Route path="/" component={App} exact/>
                <Redirect to="/"/>
            </>}
        </Switch>
    )
};

export default AuthRouter;