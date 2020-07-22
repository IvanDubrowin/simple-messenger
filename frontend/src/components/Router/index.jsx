import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import App from "../App";
import Login from "../LoginForm";

const Router = () => {
    const [logged] = useAuth();

    return (
        <BrowserRouter>
            <Switch>
                {!logged && <>
                    <Route path="/login" component={Login}/>
                    <Redirect to="/login"/>
                </>}
                {logged && <>
                    <Route path="/" component={App} exact/>
                    <Redirect to="/"/>
                </>}
            </Switch>
        </BrowserRouter>
    )
};

export default Router;