import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import history from "../utils/history";
import { routes } from "../constants/config";
import App from "../components/AppContainer";
import Redirect from "../components/Redirect";

import Home from "../components/Home";
import Service from "../components/Service";


export default () => (<ConnectedRouter history={history}>
  <Switch>
    <Route path="/" exact render={() =>
      <App>
        <Home />
      </App>} />
    <Route path="/redirect" render={() =>
      <App>
        <Redirect />
      </App>}  />
    {routes.map(route => <Route path={route.path} key={route.serviceId} render={() =>
      <App serviceId={route.serviceId}>
        <Service serviceId={route.serviceId} basePath={route.path} />
      </App>} />)}
  </Switch>
</ConnectedRouter>);
