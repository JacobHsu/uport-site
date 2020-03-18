import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import history from "../utils/history";

import Home from "../components/Home";

export default () => (<ConnectedRouter history={history}>
    <Switch>
        <Route path="/" exact render={() =>
            <Home />
        } />
    </Switch>
</ConnectedRouter>);