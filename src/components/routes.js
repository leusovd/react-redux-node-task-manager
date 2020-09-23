import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from './private-route';
import { TodoPage, LoginPage, SignupPage } from "./@pages";

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={TodoPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
        </Switch>
    );
};

export default Routes;
